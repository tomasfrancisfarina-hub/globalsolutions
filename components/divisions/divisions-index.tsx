import Link from "next/link";
import { Container, Section, Eyebrow, Heading, Text, Button } from "@/components/ui";
import { DivisionCard } from "@/components/sections/divisions/division-card";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { localizedPath } from "@/lib/i18n/config";
import { getDivisionSummaries } from "@/content/registry/divisions.registry";
import type { Locale } from "@/types";

interface DivisionsIndexProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  ctaHeadline: string;
  ctaDescription: string;
  ctaButton: string;
}

export function DivisionsIndex({
  locale,
  eyebrow,
  title,
  description,
  ctaHeadline,
  ctaDescription,
  ctaButton,
}: DivisionsIndexProps) {
  const divisions = getDivisionSummaries(locale);

  return (
    <>
      <Section spacing="hero">
        <Container size="wide">
          <SlideUp>
            <div className="max-w-3xl">
              <Eyebrow>{eyebrow}</Eyebrow>
              <Heading as="h1" size="hero" className="mt-6">
                {title}
              </Heading>
              <Text variant="lead" className="mt-6">
                {description}
              </Text>
            </div>
          </SlideUp>

          <StaggerContainer className="mt-16 grid gap-6 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division, index) => (
              <StaggerItem key={division.id}>
                <DivisionCard division={division} locale={locale} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container>
          <SlideUp>
            <div className="mx-auto max-w-2xl border-t border-border pt-16 text-center md:pt-24">
              <Heading as="h2" size="h3">
                {ctaHeadline}
              </Heading>
              <Text variant="lead" className="mx-auto mt-4">
                {ctaDescription}
              </Text>
              <Link href={localizedPath("/contact", locale)} className="mt-8 inline-block">
                <Button size="lg">{ctaButton}</Button>
              </Link>
            </div>
          </SlideUp>
        </Container>
      </Section>
    </>
  );
}
