/**
 * Isolated Dominican Republic hotel dossier.
 * Delete this folder plus the thin routes listed in README.md to remove the project.
 */

export const DOMINICANA_COOKIE_NAME = "gsw_dominicana_session";
export const DOMINICANA_PASSWORD_ENV = "DOMINICANA_DOSSIER_PASSWORD";
export const DOMINICANA_SESSION_TTL_MS = 12 * 60 * 60 * 1000;
export const DOMINICANA_ASSET_PREFIX = "/api/dominicana-dossier/assets";
export const DOMINICANA_UNLOCK_PATH = "/api/dominicana-dossier/unlock";
export const DOMINICANA_SESSION_PATH = "/api/dominicana-dossier/session";
export const DOMINICANA_DOCUMENT_PREFIX = "/api/dominicana-dossier/document";

export const DOMINICANA_ROUTES = {
  es: {
    locale: "es" as const,
    path: "/inversiones/republica-dominicana",
  },
  en: {
    locale: "en" as const,
    path: "/investments/dominican-republic",
  },
} as const;

export const PRIVATE_ROBOTS_PATHS = [
  "/es/inversiones/",
  "/en/investments/",
  "/api/dominicana-dossier/",
] as const;
