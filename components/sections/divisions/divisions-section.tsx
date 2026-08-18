import { Container } from "@/components/ui";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionRule, sectionPad } from "@/components/shared/section-rhythm";
import { DivisionCard } from "@/components/sections/divisions/division-card";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { getDivisionCardVariant } from "@/config/visual-assets";
import { getFeaturedDivisions } from "@/content/registry/divisions.registry";
import type { HomeContent, Locale } from "@/types";

interface DivisionsSectionProps {
  content: HomeContent["divisions"];
  locale: Locale;
}

export function DivisionsSection({ content, locale }: DivisionsSectionProps) {
  const divisions = getFeaturedDivisions(locale);

  return (
    <section className="bg-pearl">
      <SectionRule />
      <div className={sectionPad}>
        <Container size="wide" className="mb-10 sm:mb-16 md:mb-28 lg:mb-32">
          <SlideUp>
            <SectionHeader
              eyebrow={content.eyebrow}
              headline={content.headline}
              description={content.description}
              className="max-w-3xl"
            />
          </SlideUp>
        </Container>

        <StaggerContainer className="space-y-4 px-5 sm:space-y-5 sm:px-8 lg:space-y-6 lg:px-12">
          {/* 01 — cinematic full bleed */}
          <StaggerItem>
            <DivisionCard
              division={divisions[0]}
              locale={locale}
              index={0}
              variant="cinematic"
            />
          </StaggerItem>

          {/* 02 + 03 */}
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            {divisions.slice(1, 3).map((division, i) => (
              <StaggerItem key={division.id}>
                <DivisionCard
                  division={division}
                  locale={locale}
                  index={i + 1}
                  variant="large"
                />
              </StaggerItem>
            ))}
          </div>

          {/* 04 — cinematic strip */}
          <StaggerItem>
            <DivisionCard
              division={divisions[3]}
              locale={locale}
              index={3}
              variant="cinematic"
            />
          </StaggerItem>

          {/* 05 + 06 */}
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            {divisions.slice(4, 6).map((division, i) => (
              <StaggerItem key={division.id}>
                <DivisionCard
                  division={division}
                  locale={locale}
                  index={i + 4}
                  variant={getDivisionCardVariant(i + 4)}
                />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
