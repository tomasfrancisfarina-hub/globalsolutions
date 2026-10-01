import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const revalidate = 300;

const HEADERS = {
  "Content-Type": "text/html; charset=utf-8",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
  "Cache-Control": "public, max-age=300, stale-while-revalidate=86400",
  "Referrer-Policy": "no-referrer",
};

export async function GET(
  _request: Request,
  context: { params: Promise<{ locale: string }> },
) {
  const { locale } = await context.params;
  if (locale !== "en") {
    return new NextResponse("Not found", { status: 404, headers: HEADERS });
  }

  const file = path.join(process.cwd(), "dominicana-share", "content", "en.html");
  const html = await readFile(file, "utf8");
  return new NextResponse(html, { status: 200, headers: HEADERS });
}
