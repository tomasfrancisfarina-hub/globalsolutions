"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Section, Heading, Text } from "@/components/ui";
import { localizedPath, isValidLocale } from "@/lib/i18n/config";
import { getPageLabels } from "@/lib/content/page-labels";
import { defaultLocale, type Locale } from "@/types/locale";

function localeFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  if (segment && isValidLocale(segment)) return segment;
  return defaultLocale;
}

export function NotFoundContent() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname ?? "/");
  const labels = getPageLabels(locale).notFound;

  return (
    <Section spacing="hero">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-subtle">404</p>
          <Heading as="h1" size="hero" className="mt-6">
            {labels.title}
          </Heading>
          <Text variant="lead" className="mx-auto mt-6">
            {labels.description}
          </Text>
          <Link
            href={localizedPath("/", locale)}
            className="mt-12 inline-block text-sm transition-opacity hover:opacity-60"
          >
            {labels.back} →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
