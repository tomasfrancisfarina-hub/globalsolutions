import Link from "next/link";
import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { SlideUp } from "@/components/motion";
import { localizedPath } from "@/lib/i18n/config";
import type { CaseStudy, CaseStudySector, Locale } from "@/types";
import { CaseStudyCard } from "./case-study-card";
import { CaseStudyBookingCta } from "./case-study-booking-cta";

interface CaseStudySectorDetailProps {
  sector: CaseStudySector;
  locale: Locale;
  listedCases: CaseStudy[];
  labels: {
    eyebrow: string;
    empty: string;
    back: string;
    viewCase: string;
  };
}

export function CaseStudySectorDetail({
  sector,
  locale,
  listedCases,
  labels,
}: CaseStudySectorDetailProps) {
  return (
    <Section spacing="hero">
      <Container size="wide">
        <SlideUp>
          <div className="max-w-3xl">
            <Eyebrow>{labels.eyebrow}</Eyebrow>
            <Heading as="h1" size="hero" className="mt-6">
              {sector.name}
            </Heading>
            <Text variant="lead" className="mt-6">
              {sector.description}
            </Text>
            {listedCases.length === 0 && (
              <Text className="mt-10 text-muted">{labels.empty}</Text>
            )}
            <Link
              href={localizedPath("/case-studies", locale)}
              className="mt-10 inline-block text-sm text-subtle transition-colors duration-300 hover:text-foreground"
            >
              ← {labels.back}
            </Link>
          </div>
        </SlideUp>

        <CaseStudyBookingCta
          locale={locale}
          compact
          className="mt-12 sm:mt-16"
        />

        {listedCases.length > 0 && (
          <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
            {listedCases.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                caseStudy={caseStudy}
                locale={locale}
                viewLabel={labels.viewCase}
              />
            ))}
          </div>
        )}

        <CaseStudyBookingCta locale={locale} className="mt-16 md:mt-24" />
      </Container>
    </Section>
  );
}
