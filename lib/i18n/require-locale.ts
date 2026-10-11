import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n/config";
import type { Locale } from "@/types/locale";

/** Accept only ES, EN and DE. Invalid segments must 404, not hit dictionaries. */
export function requireLocale(locale: string): Locale {
  if (!isValidLocale(locale)) notFound();
  return locale;
}
