/** Supported locales — extend when i18n is enabled */
export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "en";

export interface LocaleConfig {
  locale: Locale;
  label: string;
  hreflang: string;
}

export const localeConfigs: Record<Locale, LocaleConfig> = {
  es: { locale: "es", label: "Español", hreflang: "es" },
  en: { locale: "en", label: "English", hreflang: "en" },
};
