import type { Locale } from "./locale";
import type { Market } from "@/config/markets";

/** A capability within a division — not a standalone product */
export interface Capability {
  id: string;
  name: string;
  description: string;
}

/** Conversion-focused block — every SEO page must convert, not just rank */
export interface ConversionBlock {
  headline: string;
  description: string;
  cta: { label: string; href: string };
  /** Trust signals shown near CTA */
  proofPoints?: string[];
}

/** SEO metadata for content pages */
export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  /** Target international markets */
  markets?: Market[];
  /** Canonical path override */
  canonical?: string;
  /** Open Graph image path */
  ogImage?: string;
  /** Prevent indexing (for drafts or SEM test pages) */
  noIndex?: boolean;
}

/** SEM-specific landing page configuration */
export interface SemConfig {
  /** Google Ads campaign identifier */
  campaignId?: string;
  /** Primary conversion goal */
  conversionGoal: "contact" | "consultation" | "download";
  /** Custom CTA copy for this landing */
  ctaText?: string;
  /** UTM parameters to track */
  utmSource?: string;
  /** Target markets for this campaign */
  markets?: Market[];
}

/** Google Ads landing page — division, service, or industry */
export interface LandingPage {
  id: string;
  slug: string;
  type: "division" | "service" | "industry";
  /** Reference ID: divisionId, serviceId, or industryId */
  targetId: string;
  locale: Locale;
  headline: string;
  subheadline: string;
  benefits: string[];
  /** Trust / social proof line */
  socialProof?: string;
  conversion: ConversionBlock;
  seo: SeoMetadata;
  sem: SemConfig;
}

/** Industry vertical for SEM targeting */
export interface Industry {
  id: string;
  slug: string;
  name: string;
  description: string;
  locale: Locale;
  relatedDivisions: string[];
  seo: SeoMetadata;
  conversion: ConversionBlock;
}
