"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { Locale } from "@/types/locale";
import { toDossierLocale } from "@/dominicana-dossier/copy";

const COPY = {
  es: {
    title: "Captura no permitida",
    body: "Este dossier es confidencial. Las capturas de pantalla no están permitidas.",
  },
  en: {
    title: "Capture not allowed",
    body: "This dossier is confidential. Screenshots are not permitted.",
  },
} as const;

interface DossierCaptureGuardProps {
  locale: Locale;
  children: ReactNode;
}

function isDesktopPointer() {
  return (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(pointer: coarse)").matches
  );
}

export function DossierCaptureGuard({ locale, children }: DossierCaptureGuardProps) {
  const copy = COPY[toDossierLocale(locale)];
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    const hide = () => {
      setBlocked(false);
      if (timer) window.clearTimeout(timer);
    };
    const onKeyUp = (event: KeyboardEvent) => {
      if (!isDesktopPointer()) return;
      if (event.key !== "PrintScreen" && event.keyCode !== 44) return;
      setBlocked(true);
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(hide, 1800);
    };

    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keyup", onKeyUp);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0">
      {children}
      {blocked ? (
        <button
          type="button"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#071b1d] px-8 text-center text-[#f3efe8]"
          onClick={() => setBlocked(false)}
        >
          <span>
            <span className="block font-serif text-[1.75rem] leading-tight">{copy.title}</span>
            <span className="mx-auto mt-3 block max-w-md text-[16px] leading-relaxed text-[#cbd3d0]">
              {copy.body}
            </span>
          </span>
        </button>
      ) : null}
    </div>
  );
}
