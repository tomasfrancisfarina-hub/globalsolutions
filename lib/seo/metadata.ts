import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";
import { hreflangDefault } from "@/config/markets";
import { isIndexingAllowed } from "@/config/indexing";
import { localizedPath } from "@/lib/i18n/config";
import { getContentRobots } from "@/lib/seo/robots";
import type { Locale, SeoMetadata, ContentStatus } from "@/types";
import { localeConfigs, locales } from "@/types/locale";

interface MetadataBaseOptions {
  /** Path without locale prefix, e.g. "/divisions/growth-marketing" */
  path: string;
  locale: Locale;
}

/** Build hreflang alternates for ES + EN + x-default */
function buildAlternates({ path, locale }: MetadataBaseOptions) {
  const base = siteConfig.url;
  const languages: Record<string, string> = {};

  for (const loc of locales) {
    languages[loc] = `${base}${localizedPath(path, loc)}`;
  }
  languages["x-default"] = `${base}${localizedPath(path, hreflangDefault)}`;

  return {
    canonical: `${base}${localizedPath(path, locale)}`,
    languages,
  };
}

function globalRobots(override?: { index?: boolean; follow?: boolean }) {
  if (!isIndexingAllowed()) {
    return { index: false, follow: false };
  }
  return override ?? { index: true, follow: true };
}

interface BrandingMetadataOptions extends MetadataBaseOptions {
  title?: string;
  description?: string;
}

/** Branding pages — trust + conversion, not keyword-heavy */
export function createBrandingMetadata({
  title,
  description,
  path,
  locale,
}: BrandingMetadataOptions): Metadata {
  const branding = seoConfig.defaultBranding[locale];
  const fullTitle = title
    ? branding.titleTemplate.replace("%s", title)
    : branding.defaultTitle;

  const desc = description ?? branding.defaultDescription;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(siteConfig.url),
    alternates: buildAlternates({ path, locale }),
    openGraph: {
      title: fullTitle,
      description: desc,
      url: `${siteConfig.url}${localizedPath(path, locale)}`,
      siteName: siteConfig.name,
      locale: localeConfigs[locale].ogLocale,
      type: "website",
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: desc },
    robots: globalRobots(),
  };
}

interface SeoPageMetadataOptions extends MetadataBaseOptions {
  seo: SeoMetadata;
  type?: "website" | "article";
  /** Block indexing for placeholder content */
  contentStatus?: ContentStatus;
}

/** SEO pages — keyword targeting + hreflang for international markets */
export function createSeoMetadata({
  seo,
  path,
  locale,
  type = "website",
  contentStatus,
}: SeoPageMetadataOptions): Metadata {
  const fullTitle = seoConfig.seoTitleTemplate.replace("%s", seo.title);
  const robots = globalRobots(getContentRobots(contentStatus, seo.noIndex));

  const ogTitle = seo.ogTitle ?? fullTitle;
  const ogDescription = seo.ogDescription ?? seo.description;

  return {
    title: fullTitle,
    description: seo.description,
    keywords: seo.keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: buildAlternates({ path, locale }),
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `${siteConfig.url}${localizedPath(path, locale)}`,
      siteName: siteConfig.name,
      locale: localeConfigs[locale].ogLocale,
      type,
      ...(seo.ogImage && { images: [{ url: seo.ogImage }] }),
    },
    twitter: { card: "summary_large_image", title: ogTitle, description: ogDescription },
    robots,
  };
}

interface SemPageMetadataOptions extends MetadataBaseOptions {
  seo: SeoMetadata;
}

/** SEM landing pages — Google Ads conversion focused */
export function createSemMetadata({ seo, path, locale }: SemPageMetadataOptions): Metadata {
  const fullTitle = seoConfig.semTitleTemplate.replace("%s", seo.title);
  return {
    ...createSeoMetadata({ seo, path, locale }),
    title: fullTitle,
  };
}
