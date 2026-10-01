import type { Locale } from "@/types/locale";

const STATIC_PATHS = new Set([
  "/",
  "/about",
  "/contact",
  "/methodology",
  "/divisions",
  "/case-studies",
  "/impressum",
  "/datenschutz",
  "/privacy",
  "/terms",
]);

/**
 * Whether a path (without locale prefix) has an equivalent page for the target locale.
 * Kept free of content-registry imports so it can run in the client language switcher.
 */
export function hasLocaleEquivalent(path: string, locale: Locale): boolean {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (STATIC_PATHS.has(clean)) return true;

  if (
    /^\/divisions\/[^/]+$/.test(clean) ||
    /^\/case-studies\/[^/]+$/.test(clean) ||
    /^\/services\/[^/]+$/.test(clean)
  ) {
    return true;
  }

  // Landing pages are English-oriented for now.
  if (/^\/lp\/[^/]+$/.test(clean)) {
    return locale === "en";
  }

  return false;
}

export function localeSwitchHref(pathWithoutLocale: string, targetLocale: Locale): string {
  const path = pathWithoutLocale === "/" ? "/" : pathWithoutLocale;
  if (hasLocaleEquivalent(path, targetLocale)) {
    return `/${targetLocale}${path === "/" ? "" : path}`;
  }
  return `/${targetLocale}`;
}
