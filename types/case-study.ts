import type { ConversionBlock } from "./content";
import type { Locale } from "./locale";
import type { ContentStatus } from "./content-status";

export interface Metric {
  value: string;
  label: string;
  /** Mark temporary credibility data */
  status?: ContentStatus;
  /** Larger treatment in the results grid. Omitted metrics keep the standard size. */
  emphasis?: boolean;
}

/** Sector hub that groups case studies without exposing them until ready */
export interface CaseStudySector {
  id: string;
  slug: string;
  name: string;
  description: string;
  /** Short line for the sector card highlight */
  highlight: string;
  locale: Locale;
  order: number;
  seo: {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
  };
}

/**
 * Visual portfolio project for Refokus-style sector galleries.
 * Media paths are replaceable; omit src until the final asset is approved.
 */
export interface PortfolioSliderSlide {
  kind?: "image" | "collage" | "panel";
  src?: string;
  alt?: string;
  sources?: { src: string; alt: string }[];
  kicker?: string;
  title?: string;
  body?: string;
}

export interface PortfolioProjectMedia {
  type: "image" | "video" | "slider";
  /** Public path under /public — leave undefined until the final asset is ready */
  src?: string;
  /** Optional poster for video */
  poster?: string;
  alt: string;
  caption?: string;
  /** Dev-only placeholder label when src is missing */
  pendingLabel?: string;
  aspect?: "16/9" | "4/3" | "1/1" | "3/4" | "auto";
  fit?: "cover" | "contain";
  slides?: PortfolioSliderSlide[];
  sliderLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
}

export interface PortfolioProjectMetric {
  value: number;
  label: string;
  /** Exact display string if formatting differs from locale number */
  display?: string;
}

export interface PortfolioProjectMoment {
  id: string;
  title: string;
  body: string;
  pending?: boolean;
}

export interface PortfolioCaseImage {
  id: string;
  /** Suggested filename under public/case-studies/{slug}/ */
  filename: string;
  alt: string;
  src?: string;
  aspect?: "16/9" | "4/3" | "1/1" | "3/4" | "auto";
}

export interface PortfolioProject {
  id: string;
  slug: string;
  sectorId: string;
  name: string;
  location: string;
  locale: Locale;
  listed: boolean;
  /** Shown only in the sector list; no individual case URL. */
  listingOnly?: boolean;
  /** Short description for the work listing (1–2 lines) */
  summary?: string;
  summaryPending?: boolean;
  /** Service tags — omit or mark pending when not confirmed */
  services?: string[];
  servicesPending?: boolean;
  /** Primary 16:9 stage */
  primary: PortfolioProjectMedia;
  /** Supporting media shown beside the primary on unfold (1–2) */
  supports: PortfolioProjectMedia[];
  /** Unfold media grid: equal columns, or wider primary (Refokus Santa Ruta layout) */
  mediaLayout?: "equal" | "wide-primary";
  /** Public client links shown on listing + detail */
  links?: {
    website?: string;
    instagram?: string;
    websiteLabel?: string;
  };
  story?: {
    label: string;
    body: string;
  };
  /** Detail-page narrative moments */
  moments?: PortfolioProjectMoment[];
  /** Measured results shown only on the detail page */
  metrics?: PortfolioProjectMetric[];
  metricsPeriod?: string;
  metricsNote?: string;
  /** Named image slots for the detail narrative */
  caseImages?: PortfolioCaseImage[];
  seo: {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
  };
}

/** Case study — social proof for branding and SEO */
export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  divisionId: string;
  /** Sector hub this case belongs to (food-beverage, nightlife-clubs, …) */
  sectorId: string;
  /**
   * When false, the case stays in data/routes but is not listed inside its sector.
   * Defaults to false until each case is mounted individually.
   */
  listed?: boolean;
  challenge: string;
  approach: string;
  results: Metric[];
  /** Optional index-card highlight when different from results[0] */
  teaser?: Metric;
  /** Informational external reference. Not a client endorsement. */
  referenceLink?: {
    href: string;
    label: string;
  };
  /** Optional heading overrides. Absent values keep the shared case-study labels. */
  headings?: {
    challenge?: string;
    approach?: string;
  };
  reading?: {
    title: string;
    body: string;
  };
  nextStep?: {
    title: string;
    body: string;
  };
  /** Page-specific close. Absent values use the shared conversion block. */
  conversion?: ConversionBlock;
  featured: boolean;
  locale: Locale;
  status: ContentStatus;
  seo: {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
  };
}

export interface CaseStudySummary {
  id: string;
  slug: string;
  client: string;
  industry: string;
  divisionId: string;
  sectorId: string;
  listed?: boolean;
  featured: boolean;
  results: Metric[];
  teaser?: Metric;
  status: ContentStatus;
}

/** Client testimonial — replaceable credibility content */
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  status: ContentStatus;
}
