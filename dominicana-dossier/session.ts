import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import {
  DOMINICANA_COOKIE_NAME,
  DOMINICANA_PASSWORD_ENV,
  DOMINICANA_SESSION_TTL_MS,
} from "./config";

export function getDossierPassword(): string | null {
  const value = process.env[DOMINICANA_PASSWORD_ENV]?.trim();
  if (!value) return null;
  return value;
}

function sign(expiry: number, secret: string): string {
  return createHmac("sha256", secret)
    .update(`dominicana-dossier:${expiry}`)
    .digest("base64url");
}

export function createSessionToken(secret: string): string {
  const expiry = Date.now() + DOMINICANA_SESSION_TTL_MS;
  return `${expiry}.${sign(expiry, secret)}`;
}

export function verifySessionToken(
  token: string | undefined,
  secret: string,
): boolean {
  if (!token) return false;
  const dot = token.indexOf(".");
  if (dot <= 0) return false;
  const expiry = Number(token.slice(0, dot));
  const signature = token.slice(dot + 1);
  if (!Number.isFinite(expiry) || !signature || Date.now() > expiry) {
    return false;
  }
  const expected = sign(expiry, secret);
  const left = Buffer.from(signature);
  const right = Buffer.from(expected);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export function passwordsMatch(input: string, expected: string): boolean {
  const left = Buffer.from(input);
  const right = Buffer.from(expected);
  if (left.length !== right.length) {
    timingSafeEqual(right, right);
    return false;
  }
  return timingSafeEqual(left, right);
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: Math.floor(DOMINICANA_SESSION_TTL_MS / 1000),
  };
}

export async function hasValidDossierSession(): Promise<boolean> {
  const password = getDossierPassword();
  if (!password) return false;
  const store = await cookies();
  return verifySessionToken(store.get(DOMINICANA_COOKIE_NAME)?.value, password);
}

export function hasValidDossierSessionFromCookie(
  cookieValue: string | undefined,
): boolean {
  const password = getDossierPassword();
  if (!password) return false;
  return verifySessionToken(cookieValue, password);
}
