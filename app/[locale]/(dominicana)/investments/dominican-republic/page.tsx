import type { Metadata } from "next";
import { dossierMetadata, renderDossierPage } from "@/dominicana-dossier/render-page";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  return dossierMetadata("en");
}

export default async function DominicanaDossierEnPage({ params }: PageProps) {
  const { locale } = await params;
  return renderDossierPage({ locale, expected: "en" });
}
