import { notFound } from "next/navigation";
import {
  DivisionHero,
  DivisionVision,
  DivisionCapabilities,
  DivisionRelatedServices,
  DivisionCta,
} from "@/components/divisions";
import { getAllDivisionParams, getDivisionBySlug } from "@/content/registry/divisions.registry";
import { getServicesByDivision } from "@/content/registry/services.registry";
import { getDivisionLabels } from "@/lib/content/division-labels";
import { createSeoMetadata, createDivisionServiceSchema, createBreadcrumbSchema } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n/config";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/types";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllDivisionParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const division = getDivisionBySlug(slug, locale as Locale);
  if (!division) return {};
  return createSeoMetadata({
    seo: division.seo,
    path: `/divisions/${slug}`,
    locale: locale as Locale,
  });
}

export default async function DivisionPage({ params }: Props) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const division = getDivisionBySlug(slug, loc);
  if (!division) notFound();

  const labels = getDivisionLabels(loc);
  const relatedServices = getServicesByDivision(division.id, loc);

  const base = siteConfig.url;
  const serviceSchema = createDivisionServiceSchema(division);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: loc === "es" ? "Inicio" : "Home", url: `${base}${localizedPath("/", loc)}` },
    { name: labels.eyebrowIndex, url: `${base}${localizedPath("/divisions", loc)}` },
    { name: division.name, url: `${base}${localizedPath(`/divisions/${slug}`, loc)}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <DivisionHero division={division} eyebrow={labels.eyebrow} />
      <DivisionVision eyebrow={labels.approachEyebrow} vision={division.vision} />
      <DivisionCapabilities
        title={labels.capabilitiesTitle}
        capabilities={division.capabilities}
        locale={loc}
        learnMoreLabel={labels.learnMore}
      />
      <DivisionRelatedServices
        title={labels.relatedServicesTitle}
        services={relatedServices}
        locale={loc}
        learnMoreLabel={labels.learnMore}
      />
      <DivisionCta block={division.conversion} locale={loc} />
    </>
  );
}
