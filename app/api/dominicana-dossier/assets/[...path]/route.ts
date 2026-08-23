import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { DOMINICANA_COOKIE_NAME } from "@/dominicana-dossier/config";
import {
  assetContentType,
  PRIVATE_NO_STORE_HEADERS,
  readPrivateAsset,
  resolvePrivateAsset,
} from "@/dominicana-dossier/private-files";
import { hasValidDossierSessionFromCookie } from "@/dominicana-dossier/session";
import { createReadStream } from "node:fs";
import { Readable } from "node:stream";

export const runtime = "nodejs";

interface RouteContext {
  params: Promise<{ path: string[] }>;
}

function unauthorized() {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: PRIVATE_NO_STORE_HEADERS,
  });
}

function parseRange(header: string | null, size: number): { start: number; end: number } | null {
  if (!header) return null;
  const match = /^bytes=(\d*)-(\d*)$/.exec(header.trim());
  if (!match) return null;
  const start = match[1] ? Number(match[1]) : 0;
  const end = match[2] ? Number(match[2]) : size - 1;
  if (!Number.isInteger(start) || !Number.isInteger(end) || start > end || start >= size) {
    return null;
  }
  return { start, end: Math.min(end, size - 1) };
}

export async function GET(request: Request, context: RouteContext) {
  const store = await cookies();
  if (!hasValidDossierSessionFromCookie(store.get(DOMINICANA_COOKIE_NAME)?.value)) {
    return unauthorized();
  }

  const { path: segments } = await context.params;
  const filePath = resolvePrivateAsset(segments ?? []);
  if (!filePath) {
    return new NextResponse("Not found", { status: 404, headers: PRIVATE_NO_STORE_HEADERS });
  }

  const stat = await readPrivateAsset(filePath);
  if (!stat) {
    return new NextResponse("Not found", { status: 404, headers: PRIVATE_NO_STORE_HEADERS });
  }

  const contentType = assetContentType(filePath);
  const range = parseRange(request.headers.get("range"), stat.size);
  const common = {
    ...PRIVATE_NO_STORE_HEADERS,
    "Content-Type": contentType,
    "Accept-Ranges": "bytes",
    "X-Content-Type-Options": "nosniff",
  };

  if (range) {
    const stream = createReadStream(filePath, { start: range.start, end: range.end });
    return new NextResponse(Readable.toWeb(stream) as ReadableStream, {
      status: 206,
      headers: {
        ...common,
        "Content-Range": `bytes ${range.start}-${range.end}/${stat.size}`,
        "Content-Length": String(range.end - range.start + 1),
      },
    });
  }

  const stream = createReadStream(filePath);
  return new NextResponse(Readable.toWeb(stream) as ReadableStream, {
    status: 200,
    headers: {
      ...common,
      "Content-Length": String(stat.size),
    },
  });
}
