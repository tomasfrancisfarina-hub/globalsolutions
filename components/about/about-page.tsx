import { Container, Section, Heading, Text } from "@/components/ui";
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
              as="h1"
            />
          </SlideUp>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container>
          <SlideUp>
            <div className="max-w-3xl border-t border-border pt-10 sm:pt-16 md:pt-24">
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
          <StaggerContainer className="mt-10 border-t border-border md:mt-16">
            {content.testimonials.map((t) => (
              <StaggerItem key={t.id}>
                <blockquote className="grid gap-4 border-b border-border py-10 sm:gap-8 sm:py-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.55fr)_minmax(0,0.7fr)] md:items-start md:gap-12 md:py-16">
                  <div className="min-w-0">
                    <PlaceholderBadge status={t.status} locale={locale} />
                    <p className="break-words text-[clamp(1.35rem,3.2vw,2.35rem)] font-medium leading-[1.12] tracking-tight">
                      {t.author}
                    </p>
                  </div>
                  <p className="max-w-2xl text-[15px] leading-relaxed text-foreground sm:text-[17px] md:text-xl md:leading-[1.65]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="min-w-0 text-[11px] uppercase leading-snug tracking-[0.12em] text-muted md:text-right md:text-[12px] md:tracking-[0.14em]">
                    <p>{t.role}</p>
                    {t.company ? <p className="mt-1.5">{t.company}</p> : null}
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
