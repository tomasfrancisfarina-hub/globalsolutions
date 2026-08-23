import { DossierCaptureGuard } from "@/dominicana-dossier/components/dossier-capture-guard";
import { DOMINICANA_DOCUMENT_PREFIX } from "@/dominicana-dossier/config";
import type { Locale } from "@/types/locale";

interface DossierFrameProps {
  locale: Locale;
  title: string;
}

export function DossierFrame({ locale, title }: DossierFrameProps) {
  return (
    <DossierCaptureGuard locale={locale}>
      <iframe
        src={`${DOMINICANA_DOCUMENT_PREFIX}/${locale}`}
        title={title}
        className="fixed inset-0 h-[100dvh] min-h-[100svh] w-full border-0 bg-[#f3efe8]"
      />
    </DossierCaptureGuard>
  );
}
