"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { Button } from "@/components/ui/button";
import { localizedPath } from "@/lib/i18n/config";
import type { Locale, NavItem } from "@/types";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  locale: Locale;
  navigation: NavItem[];
  ctaLabel: string;
}

export function MobileMenu({ locale, navigation, ctaLabel }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center text-foreground"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={cn(
          "fixed inset-0 top-20 z-40 bg-background/98 backdrop-blur-xl transition-opacity duration-500",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col px-6 py-8" aria-label="Mobile navigation">
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
          <div className="mt-8 flex items-center justify-between">
            <LocaleSwitcher currentLocale={locale} />
            <Link href={localizedPath("/contact", locale)} onClick={() => setOpen(false)}>
              <Button>{ctaLabel}</Button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
