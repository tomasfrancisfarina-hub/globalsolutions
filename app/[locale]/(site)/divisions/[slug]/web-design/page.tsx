import { notFound } from "next/navigation";
import { WebPortfolio, getWebPortfolioSeo } from "@/components/divisions";
import { createSeoMetadata } from "@/lib/seo";
import { locales } from "@/types/locale";
import type { Locale } from "@/types";
import type { Metadata } from "next";

const DIVISION_SLUG = "artificial-intelligence";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale, slug: DIVISION_SLUG }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (slug !== DIVISION_SLUG) return {};
  return createSeoMetadata({
    seo: getWebPortfolioSeo(locale as Locale),
    path: `/divisions/${DIVISION_SLUG}/web-design`,
    locale: locale as Locale,
  });
}

export default async function WebDesignPortfolioPage({ params }: Props) {
  const { locale, slug } = await params;
  if (slug !== DIVISION_SLUG) notFound();
  return <WebPortfolio locale={locale as Locale} />;
}
