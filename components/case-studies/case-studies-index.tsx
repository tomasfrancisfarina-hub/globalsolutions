import Link from "next/link";
import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { localizedPath } from "@/lib/i18n/config";
import type { CaseStudySummary, Locale } from "@/types";

interface CaseStudyCardProps {
  caseStudy: CaseStudySummary;
  locale: Locale;
  viewLabel: string;
}

export function CaseStudyCard({ caseStudy, locale, viewLabel }: CaseStudyCardProps) {
  const highlight = caseStudy.teaser ?? caseStudy.results[0];

  return (
    <Link
      href={localizedPath(`/case-studies/${caseStudy.slug}`, locale)}
      className="group block h-full rounded-2xl border border-border p-6 transition-colors duration-300 hover:border-border-hover sm:p-8 md:p-10"
    >
      <div className="flex min-w-0 items-start justify-between gap-3 sm:gap-4">
        <div className="min-w-0 flex-1">
          <Eyebrow>{caseStudy.industry}</Eyebrow>
        </div>
        <PlaceholderBadge status={caseStudy.status} locale={locale} />
      </div>
      <Heading as="h3" size="h3" className="mt-6">
        {caseStudy.client}
      </Heading>
      {highlight && (
        <p className="mt-6 break-words font-mono text-2xl font-medium tracking-tight sm:text-3xl">
          {highlight.value}
        </p>
      )}
      {highlight && (
        <p className="mt-2 text-sm text-muted">{highlight.label}</p>
      )}
      <span className="mt-8 inline-block text-sm text-subtle transition-colors duration-300 group-hover:text-foreground">
        {viewLabel} →
      </span>
    </Link>
  );
}

interface CaseStudiesIndexProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  caseStudies: CaseStudySummary[];
  viewLabel: string;
}

export function CaseStudiesIndex({
  locale,
  eyebrow,
  title,
  description,
  caseStudies,
  viewLabel,
}: CaseStudiesIndexProps) {
  return (
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
          {caseStudies.map((cs) => (
            <StaggerItem key={cs.id}>
              <CaseStudyCard caseStudy={cs} locale={locale} viewLabel={viewLabel} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
