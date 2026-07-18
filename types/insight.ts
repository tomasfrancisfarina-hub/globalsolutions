import type { Locale } from "./locale";

/** Insight / Blog article — SEO content marketing */
export interface Insight {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  /** Related division for internal linking */
  divisionId?: string;
  /** Related service for internal linking */
  serviceId?: string;
  tags: string[];
  featured: boolean;
  locale: Locale;
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
}

export interface InsightSummary {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  featured: boolean;
}
