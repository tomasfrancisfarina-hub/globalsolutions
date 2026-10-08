/**
 * Portfolio projects — visual gallery entries per sector (Refokus-style)
 */

import type { Locale, PortfolioProject } from "@/types";
import { locales } from "@/types/locale";
import { portfolioProjectsEs } from "@/content/locales/es/case-studies/portfolio";
import { portfolioProjectsEn } from "@/content/locales/en/case-studies/portfolio";
import { portfolioProjectsDe } from "@/content/locales/de/case-studies/portfolio";

const byLocale: Record<Locale, PortfolioProject[]> = {
  es: portfolioProjectsEs,
  en: portfolioProjectsEn,
  de: portfolioProjectsDe,
};

export function getAllPortfolioProjects(locale: Locale): PortfolioProject[] {
  return byLocale[locale] ?? byLocale.en;
}

export function getPortfolioProjectBySlug(
  slug: string,
  locale: Locale,
): PortfolioProject | undefined {
  return getAllPortfolioProjects(locale).find((project) => project.slug === slug);
}

export function getListedPortfolioProjectsBySector(
  sectorId: string,
  locale: Locale,
): PortfolioProject[] {
  return getAllPortfolioProjects(locale).filter(
    (project) => project.sectorId === sectorId && project.listed,
  );
}

export function getAllPortfolioProjectSlugs(): string[] {
  return byLocale.en.map((project) => project.slug);
}

export function getAllPortfolioProjectParams(): { locale: Locale; slug: string }[] {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of getAllPortfolioProjectSlugs()) {
      params.push({ locale, slug });
    }
  }
  return params;
}
