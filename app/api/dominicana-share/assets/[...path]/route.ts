import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  assetContentType,
  PRIVATE_NO_STORE_HEADERS,
  readPrivateAsset,
  resolvePrivateAsset,
} from "@/dominicana-dossier/private-files";
import {
  hasValidSamanaSessionFromCookie,
  SAMANA_COOKIE_NAME,
} from "@/dominicana-share/session";
import { createReadStream } from "node:fs";
import { Readable } from "node:stream";

export const runtime = "nodejs";

const ALLOWED = new Set([
  "images/gallery-1.webp",
  "images/gallery-1-w800.webp",
  "images/gallery-1-w1400.webp",
  "images/gallery-2.webp",
  "images/gallery-2-w800.webp",
  "images/gallery-2-w1400.webp",
  "images/gallery-3.webp",
  "images/gallery-3-w800.webp",
  "images/gallery-3-w1400.webp",
  "images/asset-1.webp",
  "images/asset-1-w800.webp",
  "images/asset-1-w1400.webp",
  "images/hero-poster.webp",
  "images/hero-poster-w800.webp",
  "images/hero-poster-w1400.webp",
  "images/brand.webp",
  "images/brand-w800.webp",
  "video/hero.mp4",
]);

const HEADERS = {
  ...PRIVATE_NO_STORE_HEADERS,
  "X-Content-Type-Options": "nosniff",
};

interface RouteContext {
  params: Promise<{ path: string[] }>;
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
  if (!hasValidSamanaSessionFromCookie(store.get(SAMANA_COOKIE_NAME)?.value)) {
    return new NextResponse("Unauthorized", { status: 401, headers: HEADERS });
  }

  const { path: segments } = await context.params;
  const key = (segments ?? []).join("/");
  if (!ALLOWED.has(key)) {
    return new NextResponse("Not found", { status: 404, headers: HEADERS });
  }

  const filePath = resolvePrivateAsset(segments ?? []);
  if (!filePath) {
    return new NextResponse("Not found", { status: 404, headers: HEADERS });
  }

  const stat = await readPrivateAsset(filePath);
  if (!stat) {
    return new NextResponse("Not found", { status: 404, headers: HEADERS });
  }

  const contentType = assetContentType(filePath);
  const range = parseRange(request.headers.get("range"), stat.size);
  const common = {
    ...HEADERS,
    "Content-Type": contentType,
    "Accept-Ranges": "bytes",
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
