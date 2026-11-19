import { createHmac, timingSafeEqual } from "node:crypto";
import { passwordsMatch } from "@/dominicana-dossier/session";
import {
  SAMANA_COOKIE_NAME,
  SAMANA_PASSWORD,
  SAMANA_PASSWORD_ENV,
  SAMANA_SESSION_TTL_MS,
} from "./config";

export { passwordsMatch };

export function getSamanaPassword(): string {
  return process.env[SAMANA_PASSWORD_ENV]?.trim() || SAMANA_PASSWORD;
}

function sign(expiry: number, secret: string): string {
  return createHmac("sha256", secret)
    .update(`samana-share:${expiry}`)
    .digest("base64url");
}

export function createSamanaSessionToken(secret: string): string {
  const expiry = Date.now() + SAMANA_SESSION_TTL_MS;
  return `${expiry}.${sign(expiry, secret)}`;
}

export function verifySamanaSessionToken(
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

export function samanaCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: Math.floor(SAMANA_SESSION_TTL_MS / 1000),
  };
}

export function hasValidSamanaSessionFromCookie(
  cookieValue: string | undefined,
): boolean {
  return verifySamanaSessionToken(cookieValue, getSamanaPassword());
}

export { SAMANA_COOKIE_NAME };
