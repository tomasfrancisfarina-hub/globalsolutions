/**
 * Case Studies Registry — locale-aware
 * Replace content files when real cases are available.
 */

import type { CaseStudy, CaseStudySummary, Locale } from "@/types";

import {
  techscaleGrowth as techscaleEs,
  meridianExpansion as meridianEs,
  novaAi as novaEs,
} from "@/content/locales/es/case-studies/index";

import {
  techscaleGrowth as techscaleEn,
  meridianExpansion as meridianEn,
  novaAi as novaEn,
} from "@/content/locales/en/case-studies/index";

const byLocale: Record<Locale, CaseStudy[]> = {
  es: [techscaleEs, meridianEs, novaEs],
  en: [techscaleEn, meridianEn, novaEn],
};

export function getAllCaseStudies(locale: Locale): CaseStudy[] {
  return byLocale[locale] ?? byLocale.en;
}

export function getFeaturedCaseStudies(locale: Locale): CaseStudy[] {
  return getAllCaseStudies(locale).filter((c) => c.featured);
}

export function getCaseStudyBySlug(slug: string, locale: Locale): CaseStudy | undefined {
  return getAllCaseStudies(locale).find((c) => c.slug === slug);
}

export function getCaseStudySummaries(locale: Locale): CaseStudySummary[] {
  return getAllCaseStudies(locale).map(
    ({ id, slug, client, industry, divisionId, featured, results, status }) => ({
      id,
      slug,
      client,
      industry,
      divisionId,
      featured,
      results,
      status,
    }),
  );
}

export function getAllCaseStudySlugs(): string[] {
  return byLocale.en.map((c) => c.slug);
}

export function getAllCaseStudyParams(): { locale: Locale; slug: string }[] {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of ["es", "en"] as Locale[]) {
    for (const slug of getAllCaseStudySlugs()) {
      params.push({ locale, slug });
    }
  }
  return params;
}
