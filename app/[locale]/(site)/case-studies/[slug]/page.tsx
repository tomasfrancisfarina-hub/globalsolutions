import { notFound } from "next/navigation";
import {
  CaseStudyDetail,
  CaseStudySectorDetail,
  PortfolioProjectCanvas,
  SectorPortfolio,
} from "@/components/case-studies";
import {
  getAllCaseStudyParams,
  getCaseStudiesBySector,
  getCaseStudyBySlug,
} from "@/content/registry/case-studies.registry";
import {
  getAllCaseStudySectorParams,
  getCaseStudySectorBySlug,
} from "@/content/registry/case-study-sectors.registry";
import {
  getAllPortfolioProjectParams,
  getListedPortfolioProjectsBySector,
  getPortfolioProjectBySlug,
} from "@/content/registry/portfolio-projects.registry";
import { portfolioPageEs } from "@/content/locales/es/case-studies/portfolio-page";
import { portfolioPageEn } from "@/content/locales/en/case-studies/portfolio-page";
import { portfolioPageDe } from "@/content/locales/de/case-studies/portfolio-page";
import { getPageLabels } from "@/lib/content/page-labels";
import { createSeoMetadata, createBreadcrumbSchema } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n/config";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/types";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

function getPortfolioPageCopy(locale: Locale) {
  if (locale === "es") return portfolioPageEs;
  if (locale === "de") return portfolioPageDe;
  return portfolioPageEn;
}

export async function generateStaticParams() {
  return [
    ...getAllCaseStudySectorParams(),
    ...getAllPortfolioProjectParams(),
    ...getAllCaseStudyParams(),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = locale as Locale;

  const sector = getCaseStudySectorBySlug(slug, loc);
  if (sector) {
    return createSeoMetadata({
      seo: sector.seo,
      path: `/case-studies/${slug}`,
      locale: loc,
    });
  }

  const portfolio = getPortfolioProjectBySlug(slug, loc);
  if (portfolio) {
    return createSeoMetadata({
      seo: portfolio.seo,
      path: `/case-studies/${slug}`,
      locale: loc,
    });
  }

  const cs = getCaseStudyBySlug(slug, loc);
  if (!cs) return {};
  return createSeoMetadata({
    seo: cs.seo,
    path: `/case-studies/${slug}`,
    locale: loc,
    contentStatus: cs.status,
  });
}

export default async function CaseStudyOrSectorPage({ params }: Props) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const labels = getPageLabels(loc);
  const portfolioCopy = getPortfolioPageCopy(loc);
  const base = siteConfig.url;
  const homeLabel = loc === "es" ? "Inicio" : loc === "de" ? "Startseite" : "Home";

  const sector = getCaseStudySectorBySlug(slug, loc);
  if (sector) {
    const portfolioProjects = getListedPortfolioProjectsBySector(sector.id, loc);
    const breadcrumbSchema = createBreadcrumbSchema([
      { name: homeLabel, url: `${base}${localizedPath("/", loc)}` },
      {
        name: labels.caseStudies.eyebrow,
        url: `${base}${localizedPath("/case-studies", loc)}`,
      },
      {
        name: sector.name,
        url: `${base}${localizedPath(`/case-studies/${slug}`, loc)}`,
      },
    ]);

    if (portfolioProjects.length > 0) {
      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
          <SectorPortfolio
            sector={sector}
            locale={loc}
            projects={portfolioProjects}
            labels={{
              eyebrow: portfolioCopy.eyebrow,
              title: portfolioCopy.title,
              viewCase: portfolioCopy.viewCase,
              back: labels.caseStudies.backToSectors,
              websiteLink: portfolioCopy.websiteLink,
              instagramLink: portfolioCopy.instagramLink,
              showFilters: portfolioCopy.filtersReady,
            }}
          />
        </>
      );
    }

    const listedCases = getCaseStudiesBySector(sector.id, loc, { listedOnly: true });

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <CaseStudySectorDetail
          sector={sector}
          locale={loc}
          listedCases={listedCases}
          labels={{
            eyebrow: labels.caseStudies.sectorEyebrow,
            empty: labels.caseStudies.sectorEmpty,
            back: labels.caseStudies.backToSectors,
            viewCase: labels.caseStudies.viewCase,
          }}
        />
      </>
    );
  }

  const portfolio = getPortfolioProjectBySlug(slug, loc);
  if (portfolio) {
    const parentSector = getCaseStudySectorBySlug(portfolio.sectorId, loc);
    const sectorSlug = parentSector?.slug ?? portfolio.sectorId;
    const breadcrumbSchema = createBreadcrumbSchema([
      { name: homeLabel, url: `${base}${localizedPath("/", loc)}` },
      {
        name: labels.caseStudies.eyebrow,
        url: `${base}${localizedPath("/case-studies", loc)}`,
      },
      {
        name: parentSector?.name ?? portfolio.sectorId,
        url: `${base}${localizedPath(`/case-studies/${sectorSlug}`, loc)}`,
      },
      {
        name: portfolio.name,
        url: `${base}${localizedPath(`/case-studies/${slug}`, loc)}`,
      },
    ]);

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <PortfolioProjectCanvas
          project={portfolio}
          locale={loc}
          sectorSlug={sectorSlug}
          labels={{
            back: portfolioCopy.backToSector,
            websiteLink: portfolioCopy.websiteLink,
            instagramLink: portfolioCopy.instagramLink,
          }}
        />
      </>
    );
  }

  const caseStudy = getCaseStudyBySlug(slug, loc);
  if (!caseStudy) notFound();

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: homeLabel, url: `${base}${localizedPath("/", loc)}` },
    { name: labels.caseStudies.eyebrow, url: `${base}${localizedPath("/case-studies", loc)}` },
    { name: caseStudy.client, url: `${base}${localizedPath(`/case-studies/${slug}`, loc)}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CaseStudyDetail
        caseStudy={caseStudy}
        locale={loc}
        labels={{
          eyebrow: labels.caseStudies.detailEyebrow,
          challenge: labels.caseStudies.challenge,
          approach: labels.caseStudies.approach,
          results: labels.caseStudies.results,
        }}
      />
    </>
  );
}
