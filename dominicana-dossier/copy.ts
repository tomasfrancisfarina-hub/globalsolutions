import type { Locale } from "@/types/locale";

export const dossierGateCopy = {
  es: {
    title: "Acceso privado para inversores",
    body: "Esta documentación contiene información confidencial. Introduzca su contraseña para continuar.",
    passwordLabel: "Contraseña",
    submit: "Acceder",
    show: "Mostrar contraseña",
    hide: "Ocultar contraseña",
    error: "La contraseña no es correcta.",
    limited: "Demasiados intentos. Espere unos minutos e inténtelo de nuevo.",
    genericError: "No ha sido posible validar el acceso. Inténtelo de nuevo.",
  },
  en: {
    title: "Private investor access",
    body: "This documentation contains confidential information. Enter your password to continue.",
    passwordLabel: "Password",
    submit: "Access",
    show: "Show password",
    hide: "Hide password",
    error: "The password is not correct.",
    limited: "Too many attempts. Please wait a few minutes and try again.",
    genericError: "Access could not be validated. Please try again.",
  },
} as const;

export function getDossierGateCopy(locale: Locale) {
  return dossierGateCopy[locale];
}
