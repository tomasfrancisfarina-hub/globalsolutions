"use client";

import { useEffect, useState } from "react";
import { DossierFrame } from "@/dominicana-dossier/components/dossier-frame";
import { DossierGate } from "@/dominicana-dossier/components/dossier-gate";
import { DOMINICANA_SESSION_PATH } from "@/dominicana-dossier/config";
import { getDossierGateCopy } from "@/dominicana-dossier/copy";
import type { Locale } from "@/types/locale";

interface DossierAccessProps {
  locale: Locale;
}

export function DossierAccess({ locale }: DossierAccessProps) {
  const copy = getDossierGateCopy(locale);
  const [state, setState] = useState<"checking" | "gate" | "open">("checking");

  useEffect(() => {
    let cancelled = false;
    fetch(DOMINICANA_SESSION_PATH, { method: "GET", credentials: "same-origin" })
      .then((response) => {
        if (!cancelled) setState(response.ok ? "open" : "gate");
      })
      .catch(() => {
        if (!cancelled) setState("gate");
      });
    return () => {
      cancelled = true;
    };
  }, [locale]);

  if (state === "checking") {
    return <main className="min-h-dvh bg-background" aria-busy="true" />;
  }

  if (state === "open") {
    return <DossierFrame locale={locale} title={copy.title} />;
  }

  return <DossierGate locale={locale} onSuccess={() => setState("open")} />;
}
