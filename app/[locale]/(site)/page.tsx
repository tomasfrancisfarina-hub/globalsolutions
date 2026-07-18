import {
  HeroSection,
  VisionSection,
  DivisionsSection,
  GrowthSection,
  ProofSection,
  MethodologySection,
  CtaSection,
} from "@/components/sections";
import { createBrandingMetadata, createOrganizationSchema, createWebSiteSchema } from "@/lib/seo";
import { getDictionary } from "@/lib/content/get-dictionary";
import { locales, type Locale } from "@/types/locale";
import type { Metadata } from "next";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const { home } = getDictionary(locale as Locale);
  return createBrandingMetadata({
    description: home.hero.subheadline,
    path: "/",
    locale: locale as Locale,
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const loc = locale as Locale;
  const { home } = getDictionary(loc);

  const organizationSchema = createOrganizationSchema();
  const websiteSchema = createWebSiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <HeroSection content={home.hero} locale={loc} />
      <VisionSection content={home.vision} locale={loc} />
      <DivisionsSection content={home.divisions} locale={loc} />
      <GrowthSection content={home.growth} locale={loc} />
      <ProofSection content={home.proof} locale={loc} />
      <MethodologySection content={home.methodology} locale={loc} />
      <CtaSection content={home.cta} locale={loc} />
    </>
  );
}
