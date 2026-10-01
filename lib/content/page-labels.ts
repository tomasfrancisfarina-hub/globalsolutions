import type { Locale } from "@/types";

export function getPageLabels(locale: Locale) {
  if (locale === "es") {
    return {
      caseStudies: {
        eyebrow: "Casos de éxito",
        title: "Resultados que hablan",
        description:
          "Proyectos donde la estrategia, la ejecución y la inteligencia aplicada generaron impacto medible.",
        viewCase: "Ver caso",
        detailEyebrow: "Caso de éxito",
        challenge: "El reto",
        approach: "Nuestro enfoque",
        results: "Resultados",
      },
      methodology: {
        principlesTitle: "Principios",
      },
      about: {
        valuesTitle: "Valores",
        testimonialsTitle: "Lo que dicen nuestros clientes",
      },
      service: {
        eyebrow: "Servicio",
        featuresTitle: "Qué incluye",
      },
      notFound: {
        title: "Página no encontrada",
        description: "La página que buscas no existe o ha sido movida.",
        back: "Volver al inicio",
      },
    };
  }

  if (locale === "de") {
    return {
      caseStudies: {
        eyebrow: "Fallstudien",
        title: "Ergebnisse, die sprechen",
        description:
          "Projekte, in denen Strategie, Umsetzung und angewandte Intelligenz messbare Wirkung erzielt haben.",
        viewCase: "Fallstudie ansehen",
        detailEyebrow: "Fallstudie",
        challenge: "Die Herausforderung",
        approach: "Unser Ansatz",
        results: "Ergebnisse",
      },
      methodology: {
        principlesTitle: "Prinzipien",
      },
      about: {
        valuesTitle: "Werte",
        testimonialsTitle: "Was unsere Kunden sagen",
      },
      service: {
        eyebrow: "Service",
        featuresTitle: "Was enthalten ist",
      },
      notFound: {
        title: "Seite nicht gefunden",
        description: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
        back: "Zur Startseite",
      },
    };
  }

  return {
    caseStudies: {
      eyebrow: "Case studies",
      title: "Results that speak",
      description:
        "Projects where strategy, execution, and applied intelligence generated measurable impact.",
      viewCase: "View case",
      detailEyebrow: "Case study",
      challenge: "The challenge",
      approach: "Our approach",
      results: "Results",
    },
    methodology: {
      principlesTitle: "Principles",
    },
    about: {
      valuesTitle: "Values",
      testimonialsTitle: "What our clients say",
    },
    service: {
      eyebrow: "Service",
      featuresTitle: "What's included",
    },
    notFound: {
      title: "Page not found",
      description: "The page you are looking for does not exist or has been moved.",
      back: "Back to home",
    },
  };
}
