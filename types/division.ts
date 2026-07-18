import type { Capability, SeoMetadata, SemConfig, ConversionBlock } from "./content";
import type { Locale } from "./locale";

/** A strategic business division — the core organizational unit */
export interface Division {
  id: string;
  slug: string;
  name: string;
  /** One-line aspirational statement */
  tagline: string;
  /** Full narrative — why this division exists */
  description: string;
  /** Vision statement for this division */
  vision: string;
  /** Capabilities offered within this division */
  capabilities: Capability[];
  /** Conversion block — trust + meeting booking */
  conversion: ConversionBlock;
  /** Display order on index pages */
  order: number;
  /** Show on homepage featured grid */
  featured: boolean;
  /** SEO metadata — primary SEO target */
  seo: SeoMetadata;
  /** Optional SEM landing configuration */
  sem?: SemConfig;
  locale: Locale;
}

/** Summary version for cards and listings */
export interface DivisionSummary {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  order: number;
  featured: boolean;
}
