import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const realEstateHospitality: Division = {
  id: "real-estate-hospitality",
  slug: "real-estate-hospitality",
  name: "Real Estate & Hospitality",
  tagline: "Desarrollo y gestión de activos inmobiliarios y hospitalidad",
  description:
    "Asesoramos en el desarrollo, adquisición y gestión de activos inmobiliarios y proyectos de hospitalidad. Combinamos análisis de mercado, viabilidad financiera y estrategia operativa para maximizar el valor de cada activo.",
  vision:
    "Los activos inmobiliarios y de hospitalidad requieren visión a largo plazo y ejecución precisa. Aportamos la estrategia y el acompañamiento necesarios para que cada proyecto alcance su máximo potencial.",
  capabilities: [
    { id: "real-estate", name: "Real Estate", description: "Consultoría inmobiliaria estratégica y desarrollo de activos." },
    { id: "hospitality", name: "Hospitality", description: "Estrategia y gestión de proyectos de hospitalidad." },
  ],
  order: 6,
  featured: true,
  seo: {
    title: "Real Estate & Hospitality — Consultoría Inmobiliaria",
    description:
      "Consultoría inmobiliaria y de hospitalidad. Desarrollo de activos, viabilidad financiera, estrategia operativa y gestión de proyectos inmobiliarios.",
    keywords: ["consultoría inmobiliaria", "real estate consulting", "hospitalidad consultoría", "desarrollo inmobiliario"],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("es"),
  locale: "es",
};
