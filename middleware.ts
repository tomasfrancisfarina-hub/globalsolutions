import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, type Locale } from "@/types/locale";
import { isValidLocale } from "@/lib/i18n/config";

import { LOCALE_HEADER } from "@/lib/i18n/constants";

/** Negotiate locale from cookie, Accept-Language, or default */
function negotiateLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && isValidLocale(cookie)) return cookie;

  const accept = request.headers.get("accept-language") ?? "";
  if (accept.toLowerCase().includes("es")) return "es";

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets and API
  if (pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // Redirect root and non-localized paths to locale-prefixed URL
  if (!pathnameHasLocale) {
    const locale = negotiateLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  // Pass locale to root layout via header
  const locale = pathname.split("/")[1] as Locale;
  const response = NextResponse.next();
  response.headers.set(LOCALE_HEADER, locale);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
