/**
 * Case Studies Registry — locale-aware
 */

import type { CaseStudy, CaseStudySummary, Locale } from "@/types";
import { locales } from "@/types/locale";

import {
  moralesEstates as moralesEstatesEs,
  mTwoClubMallorca as mTwoClubMallorcaEs,
  tecnologiaDrones as tecnologiaDronesEs,
} from "@/content/locales/es/case-studies/index";

import {
  moralesEstates as moralesEstatesEn,
  mTwoClubMallorca as mTwoClubMallorcaEn,
  tecnologiaDrones as tecnologiaDronesEn,
} from "@/content/locales/en/case-studies/index";

import {
  moralesEstates as moralesEstatesDe,
  mTwoClubMallorca as mTwoClubMallorcaDe,
  tecnologiaDrones as tecnologiaDronesDe,
} from "@/content/locales/de/case-studies/index";

const byLocale: Record<Locale, CaseStudy[]> = {
  es: [moralesEstatesEs, mTwoClubMallorcaEs, tecnologiaDronesEs],
  en: [moralesEstatesEn, mTwoClubMallorcaEn, tecnologiaDronesEn],
  de: [moralesEstatesDe, mTwoClubMallorcaDe, tecnologiaDronesDe],
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

export function getCaseStudiesBySector(
  sectorId: string,
  locale: Locale,
  options?: { listedOnly?: boolean },
): CaseStudy[] {
  const listedOnly = options?.listedOnly ?? true;
  return getAllCaseStudies(locale).filter(
    (c) => c.sectorId === sectorId && (!listedOnly || c.listed === true),
  );
}

export function getCaseStudySummaries(locale: Locale): CaseStudySummary[] {
  return getAllCaseStudies(locale).map(
    ({
      id,
      slug,
      client,
      industry,
      divisionId,
      sectorId,
      listed,
      featured,
      results,
      teaser,
      status,
    }) => ({
      id,
      slug,
      client,
      industry,
      divisionId,
      sectorId,
      listed,
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
