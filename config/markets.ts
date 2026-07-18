/**
 * Global Solutions — International Markets Configuration
 *
 * SEO/SEM targeting for US, Europe, and UAE.
 * Used for keyword strategy, hreflang, and campaign geo-targeting.
 */

export type Market = "us" | "eu" | "ae";

export interface MarketConfig {
  id: Market;
  name: string;
  /** Primary locale for this market */
  primaryLocale: "en" | "es";
  /** Google Ads geo target ID */
  googleAdsGeoId?: string;
  /** hreflang value */
  hreflang: string;
  /** Currency for display */
  currency: "USD" | "EUR" | "AED";
}

export const markets: Record<Market, MarketConfig> = {
  us: {
    id: "us",
    name: "United States",
    primaryLocale: "en",
    googleAdsGeoId: "2840",
    hreflang: "en-US",
    currency: "USD",
  },
  eu: {
    id: "eu",
    name: "Europe",
    primaryLocale: "en",
    googleAdsGeoId: "2036", // Representative — adjust per campaign
    hreflang: "en-GB",
    currency: "EUR",
  },
  ae: {
    id: "ae",
    name: "United Arab Emirates",
    primaryLocale: "en",
    googleAdsGeoId: "2784",
    hreflang: "en-AE",
    currency: "AED",
  },
} as const;

/** All target markets */
export const targetMarkets: Market[] = ["us", "eu", "ae"];

/** Get markets where a locale is primary */
export function getMarketsForLocale(locale: "en" | "es"): Market[] {
  return targetMarkets.filter((m) => markets[m].primaryLocale === locale);
}

/** x-default locale for hreflang — English for international reach */
export const hreflangDefault: "en" | "es" = "en";
