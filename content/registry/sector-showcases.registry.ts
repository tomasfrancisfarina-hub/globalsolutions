/**
 * Sector showcases — editorial sector pages built from approved HTML references
 */

import type { Locale, SectorShowcase } from "@/types";
import { sectorShowcasesEs } from "@/content/locales/es/case-studies/showcases";
import { sectorShowcasesEn } from "@/content/locales/en/case-studies/showcases";
import { sectorShowcasesDe } from "@/content/locales/de/case-studies/showcases";

const byLocale: Record<Locale, SectorShowcase[]> = {
  es: sectorShowcasesEs,
  en: sectorShowcasesEn,
  de: sectorShowcasesDe,
};

export function getSectorShowcase(
  sectorId: string,
  locale: Locale,
): SectorShowcase | undefined {
  return (byLocale[locale] ?? byLocale.en).find(
    (showcase) => showcase.sectorId === sectorId,
  );
}
