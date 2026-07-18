/** Shared conversion blocks by locale */
import type { ConversionBlock } from "@/types";
import type { Locale } from "@/types";

export function getDefaultConversion(locale: Locale): ConversionBlock {
  if (locale === "es") {
    return {
      headline: "Hablemos sobre el crecimiento de tu empresa",
      description:
        "Agenda una conversación estratégica con nuestro equipo. Sin compromiso, con respuesta en 24 horas.",
      cta: { label: "Agendar una conversación", href: "/contact" },
      proofPoints: [
        "Equipo senior en cada proyecto",
        "Consulta inicial sin compromiso",
        "Respuesta en 24 horas",
      ],
    };
  }

  return {
    headline: "Let's discuss growing your business",
    description:
      "Schedule a strategic conversation with our team. No obligation, response within 24 hours.",
    cta: { label: "Schedule a conversation", href: "/contact" },
    proofPoints: [
      "Senior team on every engagement",
      "No-obligation initial consultation",
      "Response within 24 hours",
    ],
  };
}
