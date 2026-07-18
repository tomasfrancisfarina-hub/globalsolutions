"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { locales, localeConfigs, type Locale } from "@/types/locale";
import { stripLocale } from "@/lib/i18n/config";

interface LocaleSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export function LocaleSwitcher({ currentLocale, className }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const pathWithoutLocale = stripLocale(pathname);

  return (
    <div className={cn("flex items-center gap-1 text-sm", className)}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
          className={cn(
            "px-2 py-1 transition-opacity duration-150",
            locale === currentLocale
              ? "font-medium text-foreground"
              : "text-subtle hover:text-foreground",
          )}
          aria-current={locale === currentLocale ? "page" : undefined}
        >
          {localeConfigs[locale].label.slice(0, 2).toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
