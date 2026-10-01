/** Supported locales */
export type Locale = "es" | "en" | "de";

export const locales: Locale[] = ["es", "en", "de"];
export const defaultLocale: Locale = "en";

export interface LocaleConfig {
  locale: Locale;
  label: string;
  hreflang: string;
  /** Open Graph locale tag */
  ogLocale: string;
}

export const localeConfigs: Record<Locale, LocaleConfig> = {
  es: { locale: "es", label: "Español", hreflang: "es", ogLocale: "es_ES" },
  en: { locale: "en", label: "English", hreflang: "en", ogLocale: "en_US" },
  de: { locale: "de", label: "Deutsch", hreflang: "de", ogLocale: "de_DE" },
};
