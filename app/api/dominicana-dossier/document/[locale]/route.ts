import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { DOMINICANA_COOKIE_NAME } from "@/dominicana-dossier/config";
import { PRIVATE_NO_STORE_HEADERS, readDossierHtml } from "@/dominicana-dossier/private-files";
import { applyScreenshotGuard } from "@/dominicana-dossier/screenshot-guard";
import { hasValidDossierSessionFromCookie } from "@/dominicana-dossier/session";
import type { Locale } from "@/types/locale";

export const runtime = "nodejs";

interface RouteContext {
  params: Promise<{ locale: string }>;
}

export async function GET(_request: Request, context: RouteContext) {
  const store = await cookies();
  if (!hasValidDossierSessionFromCookie(store.get(DOMINICANA_COOKIE_NAME)?.value)) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: PRIVATE_NO_STORE_HEADERS,
    });
  }

  const { locale } = await context.params;
  if (locale !== "es" && locale !== "en") {
    return new NextResponse("Not found", { status: 404, headers: PRIVATE_NO_STORE_HEADERS });
  }

  const html = await readDossierHtml(locale as Locale);
  if (!html) {
    return new NextResponse("Not found", { status: 404, headers: PRIVATE_NO_STORE_HEADERS });
  }

  return new NextResponse(applyScreenshotGuard(html, locale), {
    status: 200,
    headers: {
      ...PRIVATE_NO_STORE_HEADERS,
      "Content-Type": "text/html; charset=utf-8",
      "Content-Security-Policy": "frame-ancestors 'self'",
      "X-Frame-Options": "SAMEORIGIN",
      "Referrer-Policy": "no-referrer",
    },
  });
}
