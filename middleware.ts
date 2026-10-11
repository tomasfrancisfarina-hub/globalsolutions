import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, type Locale } from "@/types/locale";
import { isValidLocale } from "@/lib/i18n/config";

import { LOCALE_HEADER } from "@/lib/i18n/constants";

/** Negotiate locale from cookie, Accept-Language, or default */
function negotiateLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && isValidLocale(cookie)) return cookie;

  const accept = request.headers.get("accept-language")?.toLowerCase() ?? "";
  if (accept.includes("de")) return "de";
  if (accept.includes("es")) return "es";

  return defaultLocale;
}

function shouldBypassLocale(pathname: string): boolean {
  return (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (shouldBypassLocale(pathname)) {
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
  matcher: [
    "/((?!api|_next(?:/|$)|favicon.ico|icon.png|apple-icon.png|apple-touch-icon.png|robots.txt|sitemap.xml|manifest.webmanifest|.*\\..*).*)",
  ],
};
