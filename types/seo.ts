/**
 * SEO metadata types.
 *
 * Home uses brand-focused SEO (PageSEO).
 * Divisions, services, insights use keyword-rich SEO (ContentSEO).
 * @see docs/SEO.md
 */
export interface PageSEO {
  title: string;
  description: string;
  /** Canonical path without locale prefix, e.g. "/divisions/growth-marketing" */
  path: string;
  noIndex?: boolean;
  ogImage?: string;
}

export interface ContentSEO extends PageSEO {
  /** Target keywords for organic positioning */
  keywords: string[];
  /** H1 override — if different from content title */
  h1?: string;
  /** SEM campaign IDs this page supports */
  semCampaigns?: string[];
}

export interface ArticleSEO extends ContentSEO {
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  category?: string;
  tags?: string[];
}

export type SEOContent = PageSEO | ContentSEO | ArticleSEO;

export function isContentSEO(seo: SEOContent): seo is ContentSEO {
  return "keywords" in seo;
}

export function isArticleSEO(seo: SEOContent): seo is ArticleSEO {
  return "publishedAt" in seo;
}
