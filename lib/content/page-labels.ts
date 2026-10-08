import type { Locale } from "@/types";

export function getPageLabels(locale: Locale) {
  if (locale === "es") {
    return {
      caseStudies: {
        eyebrow: "Casos de éxito",
        title: "Resultados que hablan",
        description:
          "Proyectos organizados por sector. Entra en cada área para explorar el trabajo de GSW.",
        viewCase: "Ver caso",
        viewSector: "Explorar",
        sectorEyebrow: "Sector",
        sectorEmpty:
          "Los casos de este sector se incorporarán de forma progresiva.",
        backToSectors: "Volver a sectores",
        portfolioIntroTitle: "Trabajo seleccionado",
        portfolioIntroMedia: "Espacio para animación de logo / video intro",
        portfolioMediaEmpty: "Espacio visual · imagen o video final",
        portfolioCanvasNote:
          "Lienzo listo para la narrativa visual de este caso. Los materiales se incorporarán cuando estén aprobados.",
        portfolioBackToSector: "Volver al sector",
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
          "Projekte nach Sektor organisiert. Öffnen Sie jeden Bereich, um die Arbeit von GSW zu erkunden.",
        viewCase: "Fallstudie ansehen",
        viewSector: "Entdecken",
        sectorEyebrow: "Sektor",
        sectorEmpty:
          "Die Fallstudien dieses Sektors werden schrittweise ergänzt.",
        backToSectors: "Zurück zu den Sektoren",
        portfolioIntroTitle: "Ausgewählte Arbeiten",
        portfolioIntroMedia: "Platz für Logo-Animation / Intro-Video",
        portfolioMediaEmpty: "Visueller Platz · finales Bild oder Video",
        portfolioCanvasNote:
          "Leinwand bereit für die visuelle Erzählung dieses Falls. Materialien folgen nach Freigabe.",
        portfolioBackToSector: "Zurück zum Sektor",
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
        "Projects organized by sector. Enter each area to explore GSW’s work.",
      viewCase: "View case",
      viewSector: "Explore",
      sectorEyebrow: "Sector",
      sectorEmpty: "Cases in this sector will be added progressively.",
      backToSectors: "Back to sectors",
      portfolioIntroTitle: "Selected work",
      portfolioIntroMedia: "Space for logo animation / intro video",
      portfolioMediaEmpty: "Visual slot · final image or video",
      portfolioCanvasNote:
        "Canvas ready for this case’s visual narrative. Materials will be added once approved.",
      portfolioBackToSector: "Back to sector",
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
