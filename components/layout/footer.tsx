import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { localizedPath } from "@/lib/i18n/config";
import { getUiCopy } from "@/lib/i18n/ui-copy";
import type { Locale, FooterColumn } from "@/types";

interface FooterProps {
  locale: Locale;
  footer: FooterColumn[];
}

export function Footer({ locale, footer }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const ui = getUiCopy(locale);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 md:py-24 pb-[max(3.5rem,env(safe-area-inset-bottom))]">
        <div className="grid min-w-0 gap-10 sm:grid-cols-2 sm:gap-12 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            <Logo locale={locale} />
            <p className="mt-4 text-sm text-muted">{ui.tagline}</p>
          </div>

          {footer.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-medium uppercase tracking-widest text-subtle">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={localizedPath(link.href, locale)}
                      className="text-sm text-muted transition-opacity duration-150 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:mt-16 md:flex-row md:items-center">
          <p className="text-sm text-subtle">
            © {currentYear} Global Solutions. {ui.rights}
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-subtle" aria-label="Legal">
            <Link
              href={localizedPath("/impressum", locale)}
              className="transition-opacity duration-150 hover:text-foreground"
            >
              Impressum
            </Link>
            <Link
              href={localizedPath("/datenschutz", locale)}
              className="transition-opacity duration-150 hover:text-foreground"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
