/**
 * Case Studies Registry — locale-aware
 */

import type { CaseStudy, CaseStudySummary, Locale } from "@/types";
import { locales } from "@/types/locale";

import {
  edgarL as edgarLEs,
  dominicM as dominicMEs,
  moralesEstates as moralesEstatesEs,
  mTwoClubMallorca as mTwoClubMallorcaEs,
} from "@/content/locales/es/case-studies/index";

import {
  edgarL as edgarLEn,
  dominicM as dominicMEn,
  moralesEstates as moralesEstatesEn,
  mTwoClubMallorca as mTwoClubMallorcaEn,
} from "@/content/locales/en/case-studies/index";

import {
  edgarL as edgarLDe,
  dominicM as dominicMDe,
  moralesEstates as moralesEstatesDe,
  mTwoClubMallorca as mTwoClubMallorcaDe,
} from "@/content/locales/de/case-studies/index";

const byLocale: Record<Locale, CaseStudy[]> = {
  es: [edgarLEs, dominicMEs, moralesEstatesEs, mTwoClubMallorcaEs],
  en: [edgarLEn, dominicMEn, moralesEstatesEn, mTwoClubMallorcaEn],
  de: [edgarLDe, dominicMDe, moralesEstatesDe, mTwoClubMallorcaDe],
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
    ({ id, slug, client, industry, divisionId, featured, results, teaser, status }) => ({
      id,
      slug,
      client,
      industry,
      divisionId,
      featured,
      results,
      teaser,
      status,
    }),
  );
}

export function getAllCaseStudySlugs(): string[] {
  return byLocale.en.map((c) => c.slug);
}

export function getAllCaseStudyParams(): { locale: Locale; slug: string }[] {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of getAllCaseStudySlugs()) {
      params.push({ locale, slug });
    }
  }
  return params;
}
