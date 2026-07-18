import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { ConversionCta } from "@/components/shared/conversion-cta";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { getDefaultConversion } from "@/content/shared/conversion";
import type { CaseStudy, Locale } from "@/types";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
  locale: Locale;
  labels: {
    eyebrow: string;
    challenge: string;
    approach: string;
    results: string;
  };
}

export function CaseStudyDetail({ caseStudy, locale, labels }: CaseStudyDetailProps) {
  return (
    <>
      <Section spacing="hero">
        <Container>
          <SlideUp>
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-4">
                <Eyebrow>{labels.eyebrow}</Eyebrow>
                <PlaceholderBadge status={caseStudy.status} locale={locale} />
              </div>
              <Heading as="h1" size="hero" className="mt-6">
                {caseStudy.client}
              </Heading>
              <Text variant="lead" className="mt-4">
                {caseStudy.industry}
              </Text>
            </div>
          </SlideUp>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container>
          <SlideUp>
            <div className="max-w-3xl space-y-16 border-t border-border pt-16 md:pt-24">
              <div>
                <Heading as="h2" size="h3">
                  {labels.challenge}
                </Heading>
                <Text className="mt-4">{caseStudy.challenge}</Text>
              </div>
              <div>
                <Heading as="h2" size="h3">
                  {labels.approach}
                </Heading>
                <Text className="mt-4">{caseStudy.approach}</Text>
              </div>
            </div>
          </SlideUp>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container>
          <SlideUp>
            <Heading as="h2" size="h3">
              {labels.results}
            </Heading>
          </SlideUp>
          <StaggerContainer className="mt-12 grid min-w-0 grid-cols-1 gap-12 md:mt-16 md:grid-cols-3 md:gap-x-10 md:gap-y-12 lg:gap-x-16">
            {caseStudy.results.map((metric) => (
              <StaggerItem key={metric.label} className="min-w-0">
                <p className="max-w-full break-words font-mono text-5xl font-medium leading-[1.1] tracking-tight">
                  {metric.value}
                </p>
                <p className="mt-3 max-w-full break-words text-muted">{metric.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container>
          <SlideUp>
            <ConversionCta block={getDefaultConversion(locale)} locale={locale} />
          </SlideUp>
        </Container>
      </Section>
    </>
  );
}
