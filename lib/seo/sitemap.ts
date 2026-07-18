import { siteConfig } from "@/config/site";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/content/registry/case-studies.registry";
import { isIndexableContent } from "@/lib/seo/robots";
import { getAllDivisionSlugs } from "@/content/registry/divisions.registry";
import { getAllServiceSlugs } from "@/content/registry/services.registry";
import { localizedPath } from "@/lib/i18n/config";
import type { Locale } from "@/types/locale";

interface SitemapEntry {
  url: string;
  lastModified?: Date;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

/**
 * Generate sitemap entries for all indexable pages.
 * Home: lower priority (branding page).
 * Divisions & services: high priority (SEO/SEM targets).
 */
export function generateSitemapEntries(locale: Locale): SitemapEntry[] {
  const base = siteConfig.url;
  const entries: SitemapEntry[] = [];

  // Home — branding, not SEO primary
  entries.push({
    url: `${base}${localizedPath("/", locale)}`,
    changeFrequency: "monthly",
    priority: 0.8,
  });

  // Static pages
  const staticPages = [
    { path: "/divisions", priority: 0.9 },
    { path: "/methodology", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/case-studies", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
  ];

  for (const page of staticPages) {
    entries.push({
      url: `${base}${localizedPath(page.path, locale)}`,
      changeFrequency: "monthly",
      priority: page.priority,
    });
  }

  // Division pages — primary SEO targets
  for (const slug of getAllDivisionSlugs()) {
    entries.push({
      url: `${base}${localizedPath(`/divisions/${slug}`, locale)}`,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // Service pages — SEO/SEM landing targets
  for (const slug of getAllServiceSlugs()) {
    entries.push({
      url: `${base}${localizedPath(`/services/${slug}`, locale)}`,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  }

  // Case study pages — exclude placeholders until published
  for (const slug of getAllCaseStudySlugs()) {
    const cs = getCaseStudyBySlug(slug, locale);
    if (!cs || !isIndexableContent(cs.status)) continue;
    entries.push({
      url: `${base}${localizedPath(`/case-studies/${slug}`, locale)}`,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  return entries;
}
