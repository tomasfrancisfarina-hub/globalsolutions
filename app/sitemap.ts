import type { MetadataRoute } from "next";
import { generateSitemapEntries } from "@/lib/seo/sitemap";
import { locales, type Locale } from "@/types/locale";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    entries.push(...generateSitemapEntries(locale as Locale));
  }
  return entries;
}
