import { CaseStudiesIndex } from "@/components/case-studies";
import { getCaseStudySummaries } from "@/content/registry/case-studies.registry";
import { getPageLabels } from "@/lib/content/page-labels";
import { createSeoMetadata } from "@/lib/seo";
import { locales, type Locale } from "@/types/locale";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  return createSeoMetadata({
    seo: {
      title: loc === "es" ? "Casos de Éxito — Resultados de Crecimiento" : "Case Studies — Growth Results",
      description: loc === "es"
        ? "Casos de éxito en consultoría de crecimiento empresarial."
        : "Case studies in business growth consulting.",
      keywords: loc === "es" ? ["casos de éxito consultoría"] : ["consulting case studies"],
      markets: ["us", "eu", "ae"],
    },
    path: "/case-studies",
    locale: loc,
  });
}

export default async function CaseStudiesPage({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const labels = getPageLabels(loc);

  return (
    <CaseStudiesIndex
      locale={loc}
      eyebrow={labels.caseStudies.eyebrow}
      title={labels.caseStudies.title}
      description={labels.caseStudies.description}
      caseStudies={getCaseStudySummaries(loc)}
      viewLabel={labels.caseStudies.viewCase}
    />
  );
}
