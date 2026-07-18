import { siteConfig } from "@/config/site";
import { generateOgImage } from "@/lib/seo/og-image";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function LocaleTwitterImage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  return generateOgImage(
    isEs ? "Consultoría de crecimiento empresarial" : "Business growth consulting",
    isEs
      ? "Estrategia, inteligencia, automatización y ejecución."
      : "Strategy, intelligence, automation, and execution.",
  );
}
