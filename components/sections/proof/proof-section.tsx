import { Container } from "@/components/ui";
import { SectionHeader } from "@/components/shared/section-header";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { SectionRule, sectionPad } from "@/components/shared/section-rhythm";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";
import type { HomeContent, Locale } from "@/types";

interface ProofSectionProps {
  content: HomeContent["proof"];
  locale: Locale;
}

export function ProofSection({ content, locale }: ProofSectionProps) {
  return (
    <section className="bg-background">
      <SectionRule />
      <Container size="wide" className={sectionPad}>
        <SlideUp>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeader eyebrow={content.eyebrow} headline={content.headline} />
            <PlaceholderBadge status={content.status} locale={locale} />
          </div>
        </SlideUp>

        <StaggerContainer className="mt-24 grid gap-16 md:mt-32 md:grid-cols-3 md:gap-12 lg:gap-20">
          {content.metrics.map((metric) => (
            <StaggerItem key={metric.label} className="border-t border-foreground/10 pt-10 md:pt-12">
              <p className="font-mono text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-none tracking-[-0.03em]">
                {metric.value}
              </p>
              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                {metric.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
