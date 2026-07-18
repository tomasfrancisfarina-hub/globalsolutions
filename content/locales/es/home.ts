import type { HomeContent } from "@/types";

/**
 * Homepage content — branding, trust, conversion.
 * NOT optimized for SEO keywords.
 * SEO strategy lives in divisions, services, and insights.
 */
export const homeContent: HomeContent = {
  hero: {
    eyebrow: "Consultoría de crecimiento empresarial",
    headline: "Ayudamos a empresas\na crecer con claridad",
    subheadline:
      "Combinamos estrategia, inteligencia artificial, automatización y ejecución para impulsar el crecimiento sostenible de empresas ambiciosas.",
    cta: {
      primary: { label: "Iniciar una conversación", href: "/contact" },
      secondary: { label: "Explorar divisiones", href: "/divisions" },
    },
  },
  vision: {
    eyebrow: "Nuestra visión",
    headline: "Simplificamos lo complejo\npara acelerar lo importante",
    description:
      "Creemos que el crecimiento empresarial sostenible nace de la claridad estratégica, la ejecución disciplinada y la inteligencia aplicada.",
    pillars: [
      {
        title: "Estrategia",
        description: "Definimos el rumbo con análisis riguroso y visión de largo plazo.",
      },
      {
        title: "Ejecución",
        description: "Transformamos la estrategia en resultados con procesos claros y medibles.",
      },
      {
        title: "Inteligencia",
        description: "Aplicamos IA y automatización donde generan valor real para el negocio.",
      },
    ],
  },
  divisions: {
    eyebrow: "Divisiones",
    headline: "Seis áreas de expertise.\nUna sola ambición: crecer.",
    description:
      "Cada división aporta una perspectiva especializada dentro de una visión unificada de crecimiento empresarial.",
  },
  growth: {
    eyebrow: "Cómo trabajamos",
    headline: "Un proceso claro\npara resultados concretos",
    steps: [
      {
        number: "01",
        title: "Diagnóstico",
        description: "Analizamos la situación actual, el mercado y las oportunidades de crecimiento.",
      },
      {
        number: "02",
        title: "Estrategia",
        description: "Diseñamos un plan claro con objetivos medibles y prioridades definidas.",
      },
      {
        number: "03",
        title: "Ejecución",
        description: "Implementamos con rigor, acompañando a los equipos en cada fase.",
      },
      {
        number: "04",
        title: "Escala",
        description: "Optimizamos, medimos y escalamos lo que funciona.",
      },
    ],
  },
  proof: {
    eyebrow: "Resultados",
    headline: "Impacto medible",
    metrics: [
      { value: "Marca", label: "Posicionamiento estratégico" },
      { value: "Mercados", label: "Expansión internacional" },
      { value: "Crecimiento", label: "Ejecución con claridad" },
    ],
    status: "published" as const,
  },
  methodology: {
    eyebrow: "Metodología",
    headline: "Un framework probado\npara el crecimiento",
    description:
      "Nuestra metodología combina rigor analítico con agilidad en la ejecución, adaptándose a la realidad de cada empresa.",
    steps: [
      { number: "01", title: "Análisis", description: "Diagnóstico profundo de la situación actual." },
      { number: "02", title: "Diseño", description: "Estrategia personalizada con objetivos claros." },
      { number: "03", title: "Implementación", description: "Ejecución acompañada con métricas de seguimiento." },
      { number: "04", title: "Optimización", description: "Mejora continua basada en datos." },
      { number: "05", title: "Escala", description: "Expansión de lo que funciona." },
    ],
  },
  cta: {
    headline: "Hablemos sobre el crecimiento\nde tu empresa.",
    description: "Agenda una conversación estratégica sin compromiso.",
    button: { label: "Agendar una conversación", href: "/contact" },
  },
};
