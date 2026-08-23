"use client";

import { useState, type FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { DOMINICANA_UNLOCK_PATH } from "@/dominicana-dossier/config";
import { getDossierGateCopy } from "@/dominicana-dossier/copy";
import type { Locale } from "@/types/locale";

interface DossierGateProps {
  locale: Locale;
  onSuccess: () => void;
}

export function DossierGate({ locale, onSuccess }: DossierGateProps) {
  const copy = getDossierGateCopy(locale);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    setPending(true);
    setError(null);

    const form = event.currentTarget;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    try {
      const response = await fetch(DOMINICANA_UNLOCK_PATH, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.status === 429) {
        setError(copy.limited);
        return;
      }

      if (!response.ok) {
        setError(copy.error);
        form.reset();
        return;
      }

      onSuccess();
    } catch {
      setError(copy.genericError);
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="flex min-h-dvh items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-[28rem]">
        <Logo locale={locale} priority className="mb-14" />
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-subtle">
          Global Solutions Worldwide
        </p>
        <h1 className="mt-4 text-display-sm text-balance text-foreground">{copy.title}</h1>
        <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted">{copy.body}</p>

        <form onSubmit={onSubmit} className="mt-12 space-y-8" noValidate>
          <div>
            <label
              htmlFor="dossier-password"
              className="text-xs font-medium uppercase tracking-widest text-subtle"
            >
              {copy.passwordLabel}
            </label>
            <div className="relative mt-2">
              <input
                id="dossier-password"
                name="password"
                type={visible ? "text" : "password"}
                autoComplete="current-password"
                required
                disabled={pending}
                className="w-full border-b border-border bg-transparent py-3 pr-12 text-base outline-none transition-colors focus:border-foreground disabled:opacity-60"
              />
              <button
                type="button"
                onClick={() => setVisible((value) => !value)}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-subtle transition-colors hover:text-foreground"
                aria-label={visible ? copy.hide : copy.show}
              >
                {visible ? <EyeOff size={18} strokeWidth={1.6} /> : <Eye size={18} strokeWidth={1.6} />}
              </button>
            </div>
          </div>

          <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
            {copy.submit}
          </Button>

          {error ? (
            <p className="text-sm text-muted" role="alert">
              {error}
            </p>
          ) : null}
        </form>
      </div>
    </main>
  );
}
