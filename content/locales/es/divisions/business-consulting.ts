import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const businessConsulting: Division = {
  id: "business-consulting",
  slug: "business-consulting",
  name: "Consultoría de Negocio",
  tagline: "Consultoría estratégica para empresas en crecimiento",
  description:
    "Acompañamos a directivos y equipos directivos en la toma de decisiones estratégicas, la optimización de procesos y el desarrollo de nuevas líneas de negocio. Nuestro enfoque combina análisis riguroso con ejecución práctica.",
  vision:
    "Las empresas que crecen de forma sostenible lo hacen con estrategia clara y ejecución disciplinada. Ayudamos a construir ambas.",
  capabilities: [
    { id: "consultoria-empresarial", name: "Consultoría Empresarial", description: "Asesoramiento estratégico para directivos y equipos de dirección." },
    { id: "estrategia-comercial", name: "Estrategia Comercial", description: "Diseño e implementación de estrategias comerciales." },
    { id: "optimizacion-procesos", name: "Optimización de Procesos", description: "Mejora operativa y eficiencia empresarial." },
    { id: "desarrollo-negocio", name: "Desarrollo de Negocio", description: "Identificación y desarrollo de nuevas oportunidades de negocio." },
  ],
  order: 3,
  featured: true,
  seo: {
    title: "Consultoría Empresarial — Estrategia y Desarrollo de Negocio",
    description:
      "Consultoría empresarial especializada en crecimiento. Estrategia comercial, optimización de procesos, desarrollo de negocio y asesoramiento a directivos.",
    keywords: ["consultoría empresarial", "consultoría estratégica", "desarrollo de negocio", "optimización procesos"],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("es"),
  locale: "es",
};
