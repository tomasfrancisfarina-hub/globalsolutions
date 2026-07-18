import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { localizedPath } from "@/lib/i18n/config";
import type { Locale, FooterColumn } from "@/types";

interface FooterProps {
  locale: Locale;
  footer: FooterColumn[];
}

export function Footer({ locale, footer }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="grid min-w-0 gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo locale={locale} />
            <p className="mt-4 text-sm text-muted">
              {locale === "es"
                ? "Consultoría de crecimiento empresarial"
                : "Business growth consulting"}
            </p>
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

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-sm text-subtle">
            © {currentYear} Global Solutions.{" "}
            {locale === "es" ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
