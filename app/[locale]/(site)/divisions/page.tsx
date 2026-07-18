import { DivisionsIndex } from "@/components/divisions";
import { getDivisionLabels } from "@/lib/content/division-labels";
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
      title: loc === "es"
        ? "Divisiones — Áreas de Expertise en Crecimiento Empresarial"
        : "Divisions — Business Growth Expertise",
      description: loc === "es"
        ? "Seis divisiones especializadas en crecimiento empresarial. Growth, IA, consultoría, expansión internacional, inversión e inmobiliario."
        : "Six specialized divisions in business growth consulting. Growth, AI, consulting, international expansion, investment, and real estate.",
      keywords: loc === "es"
        ? ["divisiones consultoría", "consultoría crecimiento empresarial"]
        : ["consulting divisions", "business growth consulting"],
      markets: ["us", "eu", "ae"],
    },
    path: "/divisions",
    locale: loc,
  });
}

export default async function DivisionsPage({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const labels = getDivisionLabels(loc);

  return (
    <DivisionsIndex
      locale={loc}
      eyebrow={labels.eyebrowIndex}
      title={labels.indexTitle}
      description={labels.indexDescription}
      ctaHeadline={labels.indexCtaHeadline}
      ctaDescription={labels.indexCtaDescription}
      ctaButton={labels.indexCtaButton}
    />
  );
}
