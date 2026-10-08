/**
 * Case Study Sectors Registry — locale-aware
 */

import type { CaseStudySector, Locale } from "@/types";
import { locales } from "@/types/locale";
import { caseStudySectorsEs } from "@/content/locales/es/case-studies/sectors";
import { caseStudySectorsEn } from "@/content/locales/en/case-studies/sectors";
import { caseStudySectorsDe } from "@/content/locales/de/case-studies/sectors";

const byLocale: Record<Locale, CaseStudySector[]> = {
  es: caseStudySectorsEs,
  en: caseStudySectorsEn,
  de: caseStudySectorsDe,
};

export function getAllCaseStudySectors(locale: Locale): CaseStudySector[] {
  return [...(byLocale[locale] ?? byLocale.en)].sort((a, b) => a.order - b.order);
}

export function getCaseStudySectorBySlug(
  slug: string,
  locale: Locale,
): CaseStudySector | undefined {
  return getAllCaseStudySectors(locale).find((sector) => sector.slug === slug);
}

export function getAllCaseStudySectorSlugs(): string[] {
  return byLocale.en.map((sector) => sector.slug);
}

export function getAllCaseStudySectorParams(): { locale: Locale; slug: string }[] {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of getAllCaseStudySectorSlugs()) {
      params.push({ locale, slug });
    }
  }
  return params;
}
