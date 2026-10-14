import type { Locale } from "@/types";

const bookingCopy = {
  es: {
    label: "Reservar diagnóstico gratuito",
    description: "30 minutos para analizar tu negocio y ver cómo podemos ayudarte.",
  },
  en: {
    label: "Book a free consultation",
    description: "30 minutes to discuss your business and see how we can help.",
  },
  de: {
    label: "Kostenloses Erstgespräch buchen",
    description:
      "30 Minuten, um Ihr Unternehmen und mögliche Unterstützung zu besprechen.",
  },
} as const;

export function getCaseStudyBookingCopy(locale: Locale) {
  return bookingCopy[locale] ?? bookingCopy.en;
}
