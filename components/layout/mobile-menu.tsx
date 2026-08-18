"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { Button } from "@/components/ui/button";
import { localizedPath } from "@/lib/i18n/config";
import type { Locale, NavItem } from "@/types";

interface MobileMenuProps {
  locale: Locale;
  navigation: NavItem[];
  ctaLabel: string;
}

export function MobileMenu({ locale, navigation, ctaLabel }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="relative z-50 flex h-10 w-10 shrink-0 items-center justify-center text-foreground"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open ? (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-20 z-40 overflow-y-auto overscroll-contain bg-background"
          role="dialog"
          aria-modal="true"
        >
          <nav
            className="flex min-h-[calc(100dvh-5rem)] flex-col px-5 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-8"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={localizedPath(item.href, locale)}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-lg font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <LocaleSwitcher currentLocale={locale} />
              <Link
                href={localizedPath("/contact", locale)}
                onClick={() => setOpen(false)}
              >
                <Button>{ctaLabel}</Button>
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
