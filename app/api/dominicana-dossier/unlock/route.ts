import { NextResponse } from "next/server";
import { getDossierGateCopy } from "@/dominicana-dossier/copy";
import { consumeUnlockAttempt, getClientIp } from "@/dominicana-dossier/rate-limit";
import {
  createSessionToken,
  getDossierPassword,
  passwordsMatch,
  sessionCookieOptions,
} from "@/dominicana-dossier/session";
import { DOMINICANA_COOKIE_NAME } from "@/dominicana-dossier/config";
import { PRIVATE_NO_STORE_HEADERS } from "@/dominicana-dossier/private-files";

export const runtime = "nodejs";

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  const host = request.headers.get("host");
  if (!host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const headers = { ...PRIVATE_NO_STORE_HEADERS };
  const limitedCopy = getDossierGateCopy("en").limited;

  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ ok: false }, { status: 403, headers });
  }

  const ip = getClientIp(request);
  const attempt = consumeUnlockAttempt(ip);
  if (!attempt.ok) {
    return NextResponse.json(
      { ok: false, error: limitedCopy },
      {
        status: 429,
        headers: { ...headers, "Retry-After": String(attempt.retryAfterSec) },
      },
    );
  }

  const password = getDossierPassword();
  if (!password) {
    return NextResponse.json({ ok: false }, { status: 503, headers });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400, headers });
  }

  const input =
    body && typeof body === "object" && "password" in body
      ? String((body as { password?: unknown }).password ?? "").trim()
      : "";

  if (!passwordsMatch(input, password)) {
    return NextResponse.json({ ok: false }, { status: 401, headers });
  }

  const response = NextResponse.json({ ok: true }, { status: 200, headers });
  response.cookies.set(
    DOMINICANA_COOKIE_NAME,
    createSessionToken(password),
    sessionCookieOptions(),
  );
  return response;
}
