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
        reachValue: "Estados Unidos · Europa · Dubái",
        marketLine: "Estados Unidos · Europa · Dubái",
        placeholderBadge: "Contenido placeholder",
        emailLabel: "Email",
        linkedInLabel: "LinkedIn",
      };
    case "de":
      return {
        tagline: "Unternehmensberatung für Wachstum",
        rights: "Alle Rechte vorbehalten.",
        viewDivision: "Division ansehen",
        contactCta: "Kontakt",
        reachLabel: "Reichweite",
        reachValue: "Vereinigte Staaten · Europa · Dubai",
        marketLine: "Vereinigte Staaten · Europa · Dubai",
        placeholderBadge: "Platzhalterinhalt",
        emailLabel: "E-Mail",
        linkedInLabel: "LinkedIn",
      };
    default:
      return {
        tagline: "Business growth consulting",
        rights: "All rights reserved.",
        viewDivision: "View division",
        contactCta: "Contact",
        reachLabel: "Reach",
        reachValue: "United States · Europe · Dubai",
        marketLine: "United States · Europe · Dubai",
        placeholderBadge: "Placeholder content",
        emailLabel: "Email",
        linkedInLabel: "LinkedIn",
      };
  }
}
