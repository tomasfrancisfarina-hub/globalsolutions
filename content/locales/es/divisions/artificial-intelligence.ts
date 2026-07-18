import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const artificialIntelligence: Division = {
  id: "artificial-intelligence",
  slug: "artificial-intelligence",
  name: "Artificial Intelligence",
  tagline: "Inteligencia artificial aplicada a decisiones de negocio",
  description:
    "Integramos inteligencia artificial en los procesos empresariales para optimizar decisiones, automatizar operaciones y descubrir oportunidades de crecimiento. No vendemos tecnología — aplicamos IA donde genera valor real.",
  vision:
    "La inteligencia artificial es una herramienta de crecimiento, no un fin en sí mismo. La implementamos con criterio estratégico, priorizando el impacto en el negocio sobre la innovación por innovar.",
  capabilities: [
    { id: "inteligencia-artificial", name: "Inteligencia Artificial", description: "Implementación de IA para optimización de procesos y decisiones." },
    { id: "automatizaciones", name: "Automatizaciones", description: "Automatización de procesos empresariales para ganar eficiencia." },
    { id: "diseno-web", name: "Diseño Web", description: "Experiencias digitales premium orientadas a conversión." },
  ],
  order: 2,
  featured: true,
  seo: {
    title: "Inteligencia Artificial para Empresas — Consultoría IA",
    description:
      "Consultoría de inteligencia artificial para empresas. Automatización, IA aplicada a negocio y transformación digital con enfoque estratégico.",
    keywords: ["inteligencia artificial empresas", "consultoría IA", "automatización empresarial", "IA para negocios"],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("es"),
  locale: "es",
};
