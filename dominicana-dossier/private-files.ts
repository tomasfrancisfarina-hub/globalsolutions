import fs from "node:fs/promises";
import path from "node:path";
import type { Locale } from "@/types/locale";

const ROOT = path.join(process.cwd(), "dominicana-dossier");
const ASSETS_ROOT = path.join(ROOT, "private-assets");
const CONTENT_ROOT = path.join(ROOT, "content");

const MIME: Record<string, string> = {
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

function isInside(root: string, target: string): boolean {
  const relative = path.relative(root, target);
  return relative !== "" && !relative.startsWith("..") && !path.isAbsolute(relative);
}

export function resolvePrivateAsset(segments: string[]): string | null {
  if (segments.length === 0 || segments.some((part) => part === ".." || part.includes("\0"))) {
    return null;
  }
  const target = path.resolve(ASSETS_ROOT, ...segments);
  if (!isInside(ASSETS_ROOT, target)) return null;
  return target;
}

export function assetContentType(filePath: string): string {
  return MIME[path.extname(filePath).toLowerCase()] ?? "application/octet-stream";
}

export async function readPrivateAsset(filePath: string) {
  const stat = await fs.stat(filePath);
  if (!stat.isFile()) return null;
  return stat;
}

export async function readDossierHtml(locale: Locale): Promise<string | null> {
  if (locale !== "es" && locale !== "en") return null;
  const filePath = path.join(CONTENT_ROOT, `${locale}.html`);
  try {
    return await fs.readFile(filePath, "utf8");
  } catch {
    return null;
  }
}

export const PRIVATE_NO_STORE_HEADERS = {
  "Cache-Control": "private, no-store, no-cache, must-revalidate",
  Pragma: "no-cache",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
} as const;
