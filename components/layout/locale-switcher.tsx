"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { locales, localeConfigs, type Locale } from "@/types/locale";
import { stripLocale } from "@/lib/i18n/config";
import { localeSwitchHref } from "@/lib/i18n/locale-paths";

interface LocaleSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export function LocaleSwitcher({ currentLocale, className }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const pathWithoutLocale = stripLocale(pathname);

  return (
    <div className={cn("flex items-center gap-1 text-sm", className)} role="navigation" aria-label="Language">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={localeSwitchHref(pathWithoutLocale, locale)}
          hrefLang={localeConfigs[locale].hreflang}
          className={cn(
            "px-2 py-1 transition-opacity duration-150",
            locale === currentLocale
              ? "font-medium text-foreground"
              : "text-subtle hover:text-foreground",
          )}
          aria-current={locale === currentLocale ? "page" : undefined}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
