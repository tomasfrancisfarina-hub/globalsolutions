import type { Locale } from "@/types";

/** Shared UI copy used outside content dictionaries */
export function getUiCopy(locale: Locale) {
  switch (locale) {
    case "es":
      return {
        tagline: "Consultoría de crecimiento empresarial",
        rights: "Todos los derechos reservados.",
        viewDivision: "Ver división",
        contactCta: "Contacto",
        reachLabel: "Alcance",
        reachValue: "Europa · Asia · USA - Dubai",
        marketLine: "Europa · Asia · USA - Dubai",
        placeholderBadge: "Contenido placeholder",
        emailLabel: "Email",
        whatsappLabel: "WhatsApp",
        linkedInLabel: "LinkedIn",
      };
    case "de":
      return {
        tagline: "Unternehmensberatung für Wachstum",
        rights: "Alle Rechte vorbehalten.",
        viewDivision: "Division ansehen",
        contactCta: "Kontakt",
        reachLabel: "Reichweite",
        reachValue: "Europa · Asia · USA - Dubai",
        marketLine: "Europa · Asia · USA - Dubai",
        placeholderBadge: "Platzhalterinhalt",
        emailLabel: "E-Mail",
        whatsappLabel: "WhatsApp",
        linkedInLabel: "LinkedIn",
      };
    default:
      return {
        tagline: "Business growth consulting",
        rights: "All rights reserved.",
        viewDivision: "View division",
        contactCta: "Contact",
        reachLabel: "Reach",
        reachValue: "Europa · Asia · USA - Dubai",
        marketLine: "Europa · Asia · USA - Dubai",
        placeholderBadge: "Placeholder content",
        emailLabel: "Email",
        whatsappLabel: "WhatsApp",
        linkedInLabel: "LinkedIn",
      };
  }
}
