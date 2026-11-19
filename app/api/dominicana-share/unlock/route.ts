import { NextResponse } from "next/server";
import { consumeUnlockAttempt, getClientIp } from "@/dominicana-dossier/rate-limit";
import { PRIVATE_NO_STORE_HEADERS } from "@/dominicana-dossier/private-files";
import {
  createSamanaSessionToken,
  getSamanaPassword,
  passwordsMatch,
  samanaCookieOptions,
  SAMANA_COOKIE_NAME,
} from "@/dominicana-share/session";

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

  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ ok: false }, { status: 403, headers });
  }

  const ip = getClientIp(request);
  const attempt = consumeUnlockAttempt(`samana:${ip}`);
  if (!attempt.ok) {
    return NextResponse.json(
      { ok: false },
      {
        status: 429,
        headers: { ...headers, "Retry-After": String(attempt.retryAfterSec) },
      },
    );
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

  const password = getSamanaPassword();
  if (!passwordsMatch(input, password)) {
    return NextResponse.json({ ok: false }, { status: 401, headers });
  }

  const response = NextResponse.json({ ok: true }, { status: 200, headers });
  response.cookies.set(
    SAMANA_COOKIE_NAME,
    createSamanaSessionToken(password),
    samanaCookieOptions(),
  );
  return response;
}
