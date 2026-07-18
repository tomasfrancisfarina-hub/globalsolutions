import { features } from "@/config/features";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/types/locale";
import { defaultLocale, locales } from "@/types/locale";

/** Build localized path — prepends locale only when i18n is enabled */
export function localizedPath(path: string, locale: Locale = defaultLocale): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (!features.i18n) return cleanPath;
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}

/** Strip locale prefix from pathname */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(locale.length + 1);
    }
    if (pathname === `/${locale}`) {
      return "/";
    }
  }
  return pathname;
}

/** Extract locale from pathname or return default */
export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  if (locales.includes(segment as Locale)) {
    return segment as Locale;
  }
  return defaultLocale;
}

/** i18n configuration */
export const i18nConfig = {
  defaultLocale: siteConfig.defaultLocale,
  locales: siteConfig.locales,
} as const;

/** Check if a locale is supported */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

