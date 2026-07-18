"use client";

import Link from "next/link";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { Logo } from "@/components/shared/logo";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Button } from "@/components/ui/button";
import { localizedPath } from "@/lib/i18n/config";
import type { Locale, NavItem } from "@/types";
import { cn } from "@/lib/utils";

interface HeaderProps {
  locale: Locale;
  navigation: NavItem[];
  ctaLabel: string;
}

export function Header({ locale, navigation, ctaLabel }: HeaderProps) {
  const scrolled = useScrollPosition(10);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "border-b border-border/50 bg-background/95 backdrop-blur-xl"
          : "border-b border-transparent bg-background/80 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Logo locale={locale} />

        <nav className="hidden items-center gap-12 xl:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={localizedPath(item.href, locale)}
              className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted transition-colors duration-300 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <LocaleSwitcher currentLocale={locale} className="hidden sm:flex" />
          <Link href={localizedPath("/contact", locale)} className="hidden md:block">
            <Button size="sm">{ctaLabel}</Button>
          </Link>
          <MobileMenu locale={locale} navigation={navigation} ctaLabel={ctaLabel} />
        </div>
      </div>
    </header>
  );
}
