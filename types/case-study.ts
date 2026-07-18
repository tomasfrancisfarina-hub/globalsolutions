import type { Locale } from "./locale";
import type { ContentStatus } from "./content-status";

export interface Metric {
  value: string;
  label: string;
  /** Mark temporary credibility data */
  status?: ContentStatus;
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
  featured: boolean;
  locale: Locale;
  status: ContentStatus;
  seo: {
    title: string;
    description: string;
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
