"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Section, Heading, Text } from "@/components/ui";
import { localizedPath } from "@/lib/i18n/config";
import { defaultLocale, type Locale } from "@/types/locale";
import { isValidLocale } from "@/lib/i18n/config";

function localeFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  if (segment && isValidLocale(segment)) return segment;
  return defaultLocale;
}

export function NotFoundContent() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname ?? "/");
  const isEs = locale === "es";

  return (
    <Section spacing="hero">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-subtle">404</p>
          <Heading as="h1" size="hero" className="mt-6">
            {isEs ? "Página no encontrada" : "Page not found"}
          </Heading>
          <Text variant="lead" className="mx-auto mt-6">
            {isEs
              ? "La página que buscas no existe o ha sido movida."
              : "The page you are looking for does not exist or has been moved."}
          </Text>
          <Link
            href={localizedPath("/", locale)}
            className="mt-12 inline-block text-sm transition-opacity hover:opacity-60"
          >
            {isEs ? "Volver al inicio →" : "Back to home →"}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
