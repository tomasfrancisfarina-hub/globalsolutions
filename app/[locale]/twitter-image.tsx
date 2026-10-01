import { siteConfig } from "@/config/site";
import { generateOgImage } from "@/lib/seo/og-image";
import { getUiCopy } from "@/lib/i18n/ui-copy";
import type { Locale } from "@/types";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ locale: string }>;
}

const ogSubtitles: Record<Locale, string> = {
  es: "Estrategia, inteligencia, automatización y ejecución.",
  en: "Strategy, intelligence, automation, and execution.",
  de: "Strategie, Intelligenz, Automatisierung und Umsetzung.",
};

export default async function LocaleTwitterImage({ params }: Props) {
  const { locale } = await params;
  const loc = (locale as Locale) in ogSubtitles ? (locale as Locale) : "en";
  const ui = getUiCopy(loc);

  return generateOgImage(ui.tagline, ogSubtitles[loc]);
}
