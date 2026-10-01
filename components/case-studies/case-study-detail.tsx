import { Container, Section, Eyebrow, Heading, Text, CustomLink } from "@/components/ui";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { ConversionCta } from "@/components/shared/conversion-cta";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { getDefaultConversion } from "@/content/shared/conversion";
import type { CaseStudy, Locale, Metric } from "@/types";

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

function MetricFigure({ metric, prominent }: { metric: Metric; prominent?: boolean }) {
  return (
    <>
      <p
        className={
          prominent
            ? "max-w-full break-words font-mono text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl"
            : "max-w-full break-words font-mono text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl"
        }
      >
        {metric.value}
      </p>
      <p className="mt-3 max-w-full break-words text-muted">{metric.label}</p>
    </>
  );
}

export function CaseStudyDetail({ caseStudy, locale, labels }: CaseStudyDetailProps) {
  const emphasized = caseStudy.results.filter((metric) => metric.emphasis);
  const supporting =
    emphasized.length > 0
      ? caseStudy.results.filter((metric) => !metric.emphasis)
      : caseStudy.results;

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
              {caseStudy.referenceLink && (
                <CustomLink
                  href={caseStudy.referenceLink.href}
                  external
                  className="mt-6 inline-block text-sm text-subtle"
                >
                  {caseStudy.referenceLink.label}
                </CustomLink>
              )}
            </div>
          </SlideUp>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container>
          <SlideUp>
            <div className="max-w-3xl space-y-10 border-t border-border pt-10 sm:space-y-16 sm:pt-16 md:pt-24">
              <div>
                <Heading as="h2" size="h3">
                  {caseStudy.headings?.challenge ?? labels.challenge}
                </Heading>
                <Text className="mt-4">{caseStudy.challenge}</Text>
              </div>
              <div>
                <Heading as="h2" size="h3">
                  {caseStudy.headings?.approach ?? labels.approach}
                </Heading>
                <Text className="mt-4">{caseStudy.approach}</Text>
              </div>
              {caseStudy.reading && (
                <div>
                  <Heading as="h2" size="h3">
                    {caseStudy.reading.title}
                  </Heading>
                  <Text className="mt-4">{caseStudy.reading.body}</Text>
                </div>
              )}
              {caseStudy.nextStep && (
                <div>
                  <Heading as="h2" size="h3">
                    {caseStudy.nextStep.title}
                  </Heading>
                  <Text className="mt-4">{caseStudy.nextStep.body}</Text>
                </div>
              )}
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
          {emphasized.length > 0 && (
            <StaggerContainer className="mt-12 grid min-w-0 grid-cols-1 gap-10 sm:grid-cols-2 md:mt-16 md:gap-x-10 lg:gap-x-16">
              {emphasized.map((metric) => (
                <StaggerItem key={metric.label} className="min-w-0">
                  <MetricFigure metric={metric} prominent />
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
          <StaggerContainer
            className={
              emphasized.length > 0
                ? "mt-12 grid min-w-0 grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-x-10 md:gap-y-12 lg:gap-x-16"
                : "mt-12 grid min-w-0 grid-cols-1 gap-12 md:mt-16 md:grid-cols-3 md:gap-x-10 md:gap-y-12 lg:gap-x-16"
            }
          >
            {supporting.map((metric) => (
              <StaggerItem key={metric.label} className="min-w-0">
                <MetricFigure metric={metric} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container>
          <SlideUp>
            <ConversionCta
              block={caseStudy.conversion ?? getDefaultConversion(locale)}
              locale={locale}
            />
          </SlideUp>
        </Container>
      </Section>
    </>
  );
}
