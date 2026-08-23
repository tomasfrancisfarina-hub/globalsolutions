import type { Metadata } from "next";
import { dossierMetadata, renderDossierPage } from "@/dominicana-dossier/render-page";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  return dossierMetadata("es");
}

export default async function DominicanaDossierEsPage({ params }: PageProps) {
  const { locale } = await params;
  return renderDossierPage({ locale, expected: "es" });
}
