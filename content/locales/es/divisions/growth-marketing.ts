import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const growthMarketing: Division = {
  id: "growth-marketing",
  slug: "growth-marketing",
  name: "Growth & Marketing",
  tagline: "Estrategias de crecimiento acelerado y presencia de mercado",
  description:
    "Diseñamos e implementamos estrategias de crecimiento que conectan la visión empresarial con resultados medibles. Desde la definición del posicionamiento hasta la ejecución multicanal, ayudamos a las empresas a expandir su presencia y captar nuevos mercados.",
  vision:
    "Creemos que el marketing no es un gasto, sino una inversión estratégica en el crecimiento. Nuestro enfoque combina análisis de mercado, creatividad y ejecución precisa para generar impacto real.",
  capabilities: [
    { id: "marketing-digital", name: "Marketing Digital", description: "Estrategias integrales de marketing online orientadas a crecimiento." },
    { id: "google-ads", name: "Google Ads", description: "Campañas de publicidad en Google optimizadas para conversión y ROI." },
    { id: "meta-ads", name: "Meta Ads", description: "Publicidad en Facebook e Instagram con segmentación avanzada." },
    { id: "seo", name: "SEO", description: "Posicionamiento orgánico sostenible en buscadores." },
    { id: "branding", name: "Branding", description: "Construcción y evolución de marcas con propósito." },
  ],
  order: 1,
  featured: true,
  seo: {
    title: "Growth & Marketing — Estrategias de Crecimiento Empresarial",
    description:
      "Consultoría de growth marketing para empresas que buscan acelerar su crecimiento. Google Ads, SEO, Meta Ads, branding y marketing digital estratégico.",
    keywords: ["growth marketing", "marketing digital", "google ads", "seo empresas", "estrategia de crecimiento"],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("es"),
  locale: "es",
};
