import { MethodologyPageContent } from "@/components/methodology/methodology-page";
import { getMethodologyContent } from "@/lib/content/get-dictionary";
import { getPageLabels } from "@/lib/content/page-labels";
import { createBrandingMetadata } from "@/lib/seo";
import { locales, type Locale } from "@/types/locale";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const content = getMethodologyContent(loc);
  return createBrandingMetadata({
    title: content.hero.eyebrow,
    description: content.hero.description,
    path: "/methodology",
    locale: loc,
  });
}

export default async function MethodologyPage({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const content = getMethodologyContent(loc);
  const labels = getPageLabels(loc);

  return (
    <MethodologyPageContent
      content={content}
      locale={loc}
      principlesTitle={labels.methodology.principlesTitle}
    />
  );
}
