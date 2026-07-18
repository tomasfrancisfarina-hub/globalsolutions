import { notFound } from "next/navigation";
import { ServicePageLayout } from "@/components/services/service-page";
import { getAllServiceParams, getServiceBySlug } from "@/content/registry/services.registry";
import { getPageLabels } from "@/lib/content/page-labels";
import { createSeoMetadata, createServiceSchema, createFaqSchema, createBreadcrumbSchema } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n/config";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/types";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug, locale as Locale);
  if (!service) return {};
  return createSeoMetadata({
    seo: service.seo,
    path: `/services/${slug}`,
    locale: locale as Locale,
  });
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const service = getServiceBySlug(slug, loc);
  if (!service) notFound();

  const labels = getPageLabels(loc);
  const base = siteConfig.url;
  const schemas: Record<string, unknown>[] = [
    createServiceSchema(service),
    createBreadcrumbSchema([
      { name: loc === "es" ? "Inicio" : "Home", url: `${base}${localizedPath("/", loc)}` },
      { name: service.name, url: `${base}${localizedPath(`/services/${slug}`, loc)}` },
    ]),
  ];
  if (service.faq?.length) schemas.push(createFaqSchema(service.faq));

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <ServicePageLayout
        service={service}
        locale={loc}
        eyebrow={labels.service.eyebrow}
        featuresTitle={labels.service.featuresTitle}
      />
    </>
  );
}
