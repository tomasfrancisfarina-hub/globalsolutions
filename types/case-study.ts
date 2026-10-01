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

/** Case study — social proof for branding and SEO */
export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  divisionId: string;
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
