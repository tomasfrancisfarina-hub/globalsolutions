/**
 * Divisions Registry — locale-aware
 *
 * To add a division: create ES + EN + DE content files, import in locale maps below.
 * @see docs/ADDING-A-DIVISION.md
 */

import type { Division, DivisionSummary, Locale } from "@/types";
import { locales } from "@/types/locale";

import { growthMarketing as growthMarketingEs } from "@/content/locales/es/divisions/growth-marketing";
import { artificialIntelligence as artificialIntelligenceEs } from "@/content/locales/es/divisions/artificial-intelligence";
import { businessConsulting as businessConsultingEs } from "@/content/locales/es/divisions/business-consulting";
import { internationalExpansion as internationalExpansionEs } from "@/content/locales/es/divisions/international-expansion";
import { investmentVentures as investmentVenturesEs } from "@/content/locales/es/divisions/investment-ventures";
import { realEstateHospitality as realEstateHospitalityEs } from "@/content/locales/es/divisions/real-estate-hospitality";

import { growthMarketing as growthMarketingEn } from "@/content/locales/en/divisions/growth-marketing";
import { artificialIntelligence as artificialIntelligenceEn } from "@/content/locales/en/divisions/artificial-intelligence";
import { businessConsulting as businessConsultingEn } from "@/content/locales/en/divisions/business-consulting";
import { internationalExpansion as internationalExpansionEn } from "@/content/locales/en/divisions/international-expansion";
import { investmentVentures as investmentVenturesEn } from "@/content/locales/en/divisions/investment-ventures";
import { realEstateHospitality as realEstateHospitalityEn } from "@/content/locales/en/divisions/real-estate-hospitality";

import { growthMarketing as growthMarketingDe } from "@/content/locales/de/divisions/growth-marketing";
import { artificialIntelligence as artificialIntelligenceDe } from "@/content/locales/de/divisions/artificial-intelligence";
import { businessConsulting as businessConsultingDe } from "@/content/locales/de/divisions/business-consulting";
import { internationalExpansion as internationalExpansionDe } from "@/content/locales/de/divisions/international-expansion";
import { investmentVentures as investmentVenturesDe } from "@/content/locales/de/divisions/investment-ventures";
import { realEstateHospitality as realEstateHospitalityDe } from "@/content/locales/de/divisions/real-estate-hospitality";

const divisionsByLocale: Record<Locale, Division[]> = {
  es: [
    growthMarketingEs,
    artificialIntelligenceEs,
    businessConsultingEs,
    internationalExpansionEs,
    investmentVenturesEs,
    realEstateHospitalityEs,
  ],
  en: [
    growthMarketingEn,
    artificialIntelligenceEn,
    businessConsultingEn,
    internationalExpansionEn,
    investmentVenturesEn,
    realEstateHospitalityEn,
  ],
  de: [
    growthMarketingDe,
    artificialIntelligenceDe,
    businessConsultingDe,
    internationalExpansionDe,
    investmentVenturesDe,
    realEstateHospitalityDe,
  ],
};

function sortDivisions(list: Division[]): Division[] {
  return [...list].sort((a, b) => a.order - b.order);
}

export function getAllDivisions(locale: Locale): Division[] {
  return sortDivisions(divisionsByLocale[locale] ?? divisionsByLocale.en);
}

export function getFeaturedDivisions(locale: Locale): Division[] {
  return getAllDivisions(locale).filter((d) => d.featured);
}

export function getDivisionBySlug(slug: string, locale: Locale): Division | undefined {
  return getAllDivisions(locale).find((d) => d.slug === slug);
}

export function getDivisionSummaries(locale: Locale): DivisionSummary[] {
  return getAllDivisions(locale).map(({ id, slug, name, tagline, order, featured }) => ({
    id,
    slug,
    name,
    tagline,
    order,
    featured,
  }));
}

export function getAllDivisionSlugs(): string[] {
  return getAllDivisions("en").map((d) => d.slug);
}

/** Generate static params for all locale + slug combinations */
export function getAllDivisionParams(): { locale: Locale; slug: string }[] {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of getAllDivisionSlugs()) {
      params.push({ locale, slug });
    }
  }
  return params;
}
