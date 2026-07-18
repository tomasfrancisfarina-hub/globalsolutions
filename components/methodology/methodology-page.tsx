import { Container, Section, Text } from "@/components/ui";
import { SectionHeader } from "@/components/shared/section-header";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { ConversionCta } from "@/components/shared/conversion-cta";
import { getDefaultConversion } from "@/content/shared/conversion";
import type { MethodologyContent, Locale } from "@/types";

interface MethodologyPageContentProps {
  content: MethodologyContent;
  locale: Locale;
  principlesTitle: string;
}

export function MethodologyPageContent({
  content,
  locale,
  principlesTitle,
}: MethodologyPageContentProps) {
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

      <Section>
        <Container>
          <StaggerContainer className="space-y-0">
            {content.steps.map((step, index) => (
              <StaggerItem key={step.number}>
                <div
                  className={`grid gap-4 border-t border-border py-8 md:grid-cols-[80px_1fr_2fr] md:gap-8 md:py-10 ${
                    index === content.steps.length - 1 ? "border-b" : ""
                  }`}
                >
                  <p className="font-mono text-sm text-subtle">{step.number}</p>
                  <h3 className="text-xl font-medium tracking-tight">{step.title}</h3>
                  <Text>{step.description}</Text>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container>
          <SlideUp>
            <h2 className="text-2xl font-medium md:text-3xl">{principlesTitle}</h2>
          </SlideUp>
          <StaggerContainer className="mt-12 grid gap-12 md:mt-16 md:grid-cols-3">
            {content.principles.map((p) => (
              <StaggerItem key={p.title}>
                <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
                <Text className="mt-3">{p.description}</Text>
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
