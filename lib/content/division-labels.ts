/** Locale-aware labels for division pages */
import type { Locale } from "@/types";

export function getDivisionLabels(locale: Locale) {
  if (locale === "es") {
    return {
      eyebrow: "División",
      eyebrowIndex: "Divisiones",
      indexTitle: "Nuestras divisiones",
      indexDescription:
        "Seis áreas de expertise especializadas dentro de una visión unificada de crecimiento empresarial.",
      approachEyebrow: "Nuestro enfoque",
      capabilitiesTitle: "Capacidades",
      relatedServicesTitle: "Servicios relacionados",
      learnMore: "Más información",
      viewDivision: "Ver división",
      indexCtaHeadline: "¿No encuentras lo que buscas?",
      indexCtaDescription: "Hablemos sobre el reto específico de tu empresa.",
      indexCtaButton: "Iniciar una conversación",
    };
  }

  if (locale === "de") {
    return {
      eyebrow: "Division",
      eyebrowIndex: "Divisionen",
      indexTitle: "Unsere Divisionen",
      indexDescription:
        "Sechs spezialisierte Kompetenzbereiche innerhalb einer einheitlichen Vision für Unternehmenswachstum.",
      approachEyebrow: "Unser Ansatz",
      capabilitiesTitle: "Leistungen",
      relatedServicesTitle: "Verwandte Services",
      learnMore: "Mehr erfahren",
      viewDivision: "Division ansehen",
      indexCtaHeadline: "Nicht das Richtige gefunden?",
      indexCtaDescription: "Sprechen Sie mit uns über die konkrete Herausforderung Ihres Unternehmens.",
      indexCtaButton: "Gespräch starten",
    };
  }

  return {
    eyebrow: "Division",
    eyebrowIndex: "Divisions",
    indexTitle: "Our divisions",
    indexDescription:
      "Six specialized areas of expertise within a unified vision of business growth.",
    approachEyebrow: "Our approach",
    capabilitiesTitle: "Capabilities",
    relatedServicesTitle: "Related services",
    learnMore: "Learn more",
    viewDivision: "View division",
    indexCtaHeadline: "Don't see what you're looking for?",
    indexCtaDescription: "Let's discuss your company's specific challenge.",
    indexCtaButton: "Start a conversation",
  };
}
