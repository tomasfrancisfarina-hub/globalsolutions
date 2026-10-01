import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DossierAccess } from "@/dominicana-dossier/components/dossier-access";
import { DOMINICANA_ROUTES } from "@/dominicana-dossier/config";
import { getDossierGateCopy, toDossierLocale, type DossierLocale } from "@/dominicana-dossier/copy";
import type { Locale } from "@/types/locale";

interface DossierPageProps {
  locale: string;
  expected: DossierLocale;
}

export function dossierMetadata(expected: DossierLocale): Metadata {
  const copy = getDossierGateCopy(expected);
  const path = DOMINICANA_ROUTES[expected].path;
  return {
    title: copy.title,
    description: copy.body,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
        nosnippet: true,
      },
    },
    alternates: {
      canonical: `/${expected}${path}`,
    },
  };
}

export function renderDossierPage({ locale, expected }: DossierPageProps) {
  if (locale !== expected) notFound();
  return <DossierAccess locale={expected} />;
}

export function isDossierLocale(locale: Locale): locale is DossierLocale {
  return locale === "es" || locale === "en";
}

export { toDossierLocale };
