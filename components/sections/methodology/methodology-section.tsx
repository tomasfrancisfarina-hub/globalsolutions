import { Container, Eyebrow, Heading, Text } from "@/components/ui";
import { EditorialImage } from "@/components/shared/editorial-image";
import { SectionRule } from "@/components/shared/section-rhythm";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { homeVisuals } from "@/config/visual-assets";
import type { HomeContent, Locale } from "@/types";

interface MethodologySectionProps {
  content: HomeContent["methodology"];
  locale: Locale;
}

export function MethodologySection({ content, locale }: MethodologySectionProps) {
  const image = homeVisuals.methodology;

  return (
    <section className="bg-ink text-white">
      <SectionRule className="border-white/10" />
      <div className="py-28 md:py-40 lg:py-48">
        <Container size="wide">
          <div className="grid min-w-0 gap-20 lg:grid-cols-12 lg:items-stretch lg:gap-16 xl:gap-20">
            <div className="lg:col-span-6 lg:order-1">
              <SlideUp>
                <Eyebrow className="text-white/40">{content.eyebrow}</Eyebrow>
                <Heading as="h2" size="h2" className="mt-10 whitespace-pre-line text-white">
                  {content.headline}
                </Heading>
                <Text variant="lead" className="mt-10 max-w-xl text-white/45">
                  {content.description}
                </Text>
              </SlideUp>

              <StaggerContainer className="mt-20 divide-y divide-white/10 md:mt-28">
                {content.steps.map((step) => (
                  <StaggerItem
                    key={step.number}
                    className="grid gap-4 py-10 md:grid-cols-[64px_1fr] md:gap-10 md:py-12"
                  >
                    <p className="font-mono text-[11px] tracking-[0.3em] text-white/30">
                      {step.number}
                    </p>
                    <div>
                      <h3 className="text-lg font-normal tracking-[-0.02em] text-white md:text-xl">
                        {step.title}
                      </h3>
                      <Text className="mt-3 text-[15px] leading-relaxed text-white/45">
                        {step.description}
                      </Text>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div className="relative min-h-[420px] sm:min-h-[480px] lg:col-span-6 lg:order-2 lg:min-h-0 lg:self-stretch">
              <SlideUp delay={0.06} className="absolute inset-0 lg:-mr-8 xl:-mr-12">
                <EditorialImage
                  src={image.src}
                  alt={image.alt[locale]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="bg-transparent"
                  imageClassName="opacity-90"
                  imageStyle={{ objectPosition: "35% center" }}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/35 to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/15 lg:to-transparent"
                  aria-hidden
                />
              </SlideUp>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
