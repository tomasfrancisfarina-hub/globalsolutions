import { CaseStudiesIndex } from "@/components/case-studies";
import { getAllCaseStudySectors } from "@/content/registry/case-study-sectors.registry";
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
  const title =
    loc === "es"
      ? "Casos de Éxito — Por sector"
      : loc === "de"
        ? "Fallstudien — Nach Sektor"
        : "Case Studies — By sector";
  const description =
    loc === "es"
      ? "Casos de éxito de Global Solutions organizados por sector: gastronomía, nightlife, cultura, belleza, turismo, inmobiliario, drones y música."
      : loc === "de"
        ? "Fallstudien von Global Solutions nach Sektor: Gastronomie, Nachtleben, Kultur, Beauty, Tourismus, Immobilien, Drohnen und Musik."
        : "Global Solutions case studies by sector: food & beverage, nightlife, culture, beauty, travel, real estate, drones, and music.";
  const keywords =
    loc === "es"
      ? ["casos de éxito consultoría", "gastronomía", "inmobiliario", "turismo"]
      : loc === "de"
        ? ["fallstudien consulting", "gastronomie", "immobilien", "tourismus"]
        : ["consulting case studies", "food and beverage", "real estate", "travel"];

  return createSeoMetadata({
    seo: {
      title,
      description,
      keywords,
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
      sectors={getAllCaseStudySectors(loc)}
      sectorEyebrow={labels.caseStudies.sectorEyebrow}
      viewLabel={labels.caseStudies.viewSector}
    />
  );
}
