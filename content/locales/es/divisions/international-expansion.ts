import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const internationalExpansion: Division = {
  id: "international-expansion",
  slug: "international-expansion",
  name: "Expansión Internacional",
  tagline: "Entrada a mercados globales con metodología probada",
  description:
    "Guiamos a empresas en su expansión internacional, desde el análisis de mercados objetivo hasta la implementación operativa. Minimizamos riesgos y aceleramos la entrada en nuevos territorios.",
  vision:
    "La expansión internacional exitosa requiere más que ambición — requiere estrategia, conocimiento local y ejecución impecable. Aportamos los tres.",
  capabilities: [
    { id: "expansion-internacional", name: "Expansión Internacional", description: "Planificación y ejecución de entrada en mercados internacionales." },
  ],
  order: 4,
  featured: true,
  seo: {
    title: "Expansión Internacional — Consultoría para Mercados Globales",
    description:
      "Consultoría de expansión internacional para empresas. Análisis de mercados, estrategia de entrada, implementación operativa y crecimiento global.",
    keywords: ["expansión internacional", "internacionalización empresas", "mercados globales", "consultoría internacional"],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("es"),
  locale: "es",
};
