import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { SectionHeader } from "@/components/shared/section-header";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";
import type { AboutContent, Locale } from "@/types";

interface AboutPageContentProps {
  content: AboutContent;
  locale: Locale;
  valuesTitle: string;
  testimonialsTitle: string;
}

export function AboutPageContent({
  content,
  locale,
  valuesTitle,
  testimonialsTitle,
}: AboutPageContentProps) {
  return (
    <>
      <Section spacing="hero">
        <Container>
          <SlideUp>
            <SectionHeader
              eyebrow={content.hero.eyebrow}
              headline={content.hero.headline}
              description={content.hero.description}
            />
          </SlideUp>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container>
          <SlideUp>
            <div className="max-w-3xl border-t border-border pt-16 md:pt-24">
              <Heading as="h2" size="h3">
                {content.mission.headline}
              </Heading>
              <Text variant="lead" className="mt-4">
                {content.mission.description}
              </Text>
            </div>
          </SlideUp>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container>
          <SlideUp>
            <h2 className="text-2xl font-medium md:text-3xl">{valuesTitle}</h2>
          </SlideUp>
          <StaggerContainer className="mt-12 grid gap-12 md:mt-16 md:grid-cols-3">
            {content.values.map((v) => (
              <StaggerItem key={v.title}>
                <h3 className="text-xl font-medium tracking-tight">{v.title}</h3>
                <Text className="mt-3">{v.description}</Text>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container>
          <SlideUp>
            <h2 className="text-2xl font-medium md:text-3xl">{testimonialsTitle}</h2>
          </SlideUp>
          <StaggerContainer className="mt-12 space-y-8 md:mt-16">
            {content.testimonials.map((t) => (
              <StaggerItem key={t.id}>
                <blockquote className="rounded-2xl border border-border p-8 md:p-10">
                  <div className="mb-6">
                    <PlaceholderBadge status={t.status} locale={locale} />
                  </div>
                  <Text variant="lead" className="text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </Text>
                  <footer className="mt-8">
                    <p className="font-medium">{t.author}</p>
                    <p className="mt-1 text-sm text-muted">
                      {t.role}, {t.company}
                    </p>
                  </footer>
                </blockquote>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>
    </>
  );
}
