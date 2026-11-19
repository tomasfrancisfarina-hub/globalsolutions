import { readFile } from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { PRIVATE_NO_STORE_HEADERS } from "@/dominicana-dossier/private-files";
import { samanaGateHtml } from "./gate-html";
import { hasValidSamanaSessionFromCookie, SAMANA_COOKIE_NAME } from "./session";

const HEADERS = {
  ...PRIVATE_NO_STORE_HEADERS,
  "Content-Type": "text/html; charset=utf-8",
  "Referrer-Policy": "no-referrer",
};

export async function serveSamanaPage(locale: "es" | "en") {
  const store = await cookies();
  if (!hasValidSamanaSessionFromCookie(store.get(SAMANA_COOKIE_NAME)?.value)) {
    return new NextResponse(samanaGateHtml(locale), { status: 200, headers: HEADERS });
  }

  const file = path.join(process.cwd(), "dominicana-share", "content", `${locale}.html`);
  const html = await readFile(file, "utf8");
  return new NextResponse(html, { status: 200, headers: HEADERS });
}
