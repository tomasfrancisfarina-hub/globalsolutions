import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/case-studies";
import { getAllCaseStudyParams, getCaseStudyBySlug } from "@/content/registry/case-studies.registry";
import { getPageLabels } from "@/lib/content/page-labels";
import { createSeoMetadata, createBreadcrumbSchema } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n/config";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/types";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudyParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const cs = getCaseStudyBySlug(slug, locale as Locale);
  if (!cs) return {};
  return createSeoMetadata({
    seo: cs.seo,
    path: `/case-studies/${slug}`,
    locale: locale as Locale,
    contentStatus: cs.status,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const caseStudy = getCaseStudyBySlug(slug, loc);
  if (!caseStudy) notFound();

  const labels = getPageLabels(loc);
  const base = siteConfig.url;
  const homeLabel = loc === "es" ? "Inicio" : loc === "de" ? "Startseite" : "Home";
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
