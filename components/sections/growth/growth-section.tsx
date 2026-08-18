import { Container, Eyebrow, Heading } from "@/components/ui";
import { EditorialImage } from "@/components/shared/editorial-image";
import { SectionRule, sectionPad } from "@/components/shared/section-rhythm";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { homeVisuals } from "@/config/visual-assets";
import type { HomeContent, Locale } from "@/types";

interface GrowthSectionProps {
  content: HomeContent["growth"];
  locale: Locale;
}

export function GrowthSection({ content, locale }: GrowthSectionProps) {
  const image = homeVisuals.growth;

  return (
    <section className="overflow-x-clip bg-background">
      <SectionRule />
      <Container size="wide" className={sectionPad}>
        <div className="grid min-w-0 gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">
          <div className="min-w-0 lg:col-span-5">
            <SlideUp>
              <Eyebrow>{content.eyebrow}</Eyebrow>
              <Heading as="h2" size="h2" className="mt-8 whitespace-pre-line text-balance sm:mt-10">
                {content.headline}
              </Heading>
            </SlideUp>

            <SlideUp delay={0.08} className="mt-10 sm:mt-14 lg:mt-20">
              <EditorialImage
                src={image.src}
                alt={image.alt[locale]}
                aspect="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]"
                sizes="(max-width: 1024px) 100vw, 38vw"
                imageClassName="object-cover object-center"
              />
            </SlideUp>
          </div>

          <div className="min-w-0 lg:col-span-7 lg:pt-4">
            <StaggerContainer className="divide-y divide-border/80">
              {content.steps.map((step) => (
                <StaggerItem
                  key={step.number}
                  className="grid gap-3 py-8 first:pt-0 last:pb-0 md:grid-cols-[72px_1fr] md:gap-12 md:py-16"
                >
                  <span className="font-mono text-[11px] tracking-[0.3em] text-subtle">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-normal tracking-[-0.02em] md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-[15px] leading-[1.75] text-muted md:text-base">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}
