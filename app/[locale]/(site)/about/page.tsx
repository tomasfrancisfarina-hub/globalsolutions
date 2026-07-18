import { AboutPageContent } from "@/components/about/about-page";
import { getAboutContent } from "@/lib/content/get-dictionary";
import { getPageLabels } from "@/lib/content/page-labels";
import { createBrandingMetadata } from "@/lib/seo";
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
  const content = getAboutContent(loc);
  return createBrandingMetadata({
    title: content.hero.eyebrow,
    description: content.hero.description,
    path: "/about",
    locale: loc,
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const content = getAboutContent(loc);
  const labels = getPageLabels(loc);

  return (
    <AboutPageContent
      content={content}
      locale={loc}
      valuesTitle={labels.about.valuesTitle}
      testimonialsTitle={labels.about.testimonialsTitle}
    />
  );
}
