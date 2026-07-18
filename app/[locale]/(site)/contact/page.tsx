import { ContactPageContent } from "@/components/contact/contact-page";
import { getContactContent } from "@/lib/content/get-dictionary";
import { createBrandingMetadata } from "@/lib/seo";
import type { Locale } from "@/types";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const content = getContactContent(loc);
  return createBrandingMetadata({
    title: content.hero.eyebrow,
    description: content.hero.description,
    path: "/contact",
    locale: loc,
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const content = getContactContent(locale as Locale);
  return <ContactPageContent content={content} locale={locale as Locale} />;
}
