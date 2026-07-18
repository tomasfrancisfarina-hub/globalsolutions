import type { SeoMetadata, SemConfig, ConversionBlock } from "./content";
import type { Locale } from "./locale";

/**
 * A service page — SEO/SEM optimized landing for specific keywords.
 * Services are linked to divisions but have their own URL for search positioning.
 */
export interface Service {
  id: string;
  slug: string;
  name: string;
  /** Short description for cards and meta */
  shortDescription: string;
  /** Full page content — supports rich SEO copy */
  fullDescription: string;
  /** Parent division ID */
  divisionId: string;
  /** Key benefits / features for the page */
  features: string[];
  /** FAQ items for structured data */
  faq?: { question: string; answer: string }[];
  /** Conversion block — trust + meeting booking */
  conversion: ConversionBlock;
  order: number;
  /** SEO metadata — primary keyword target */
  seo: SeoMetadata;
  /** SEM configuration for Google Ads campaigns */
  sem?: SemConfig;
  locale: Locale;
}

export interface ServiceSummary {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  divisionId: string;
  order: number;
}
