import { Container, Eyebrow, Heading, Text } from "@/components/ui";
import { EditorialImage } from "@/components/shared/editorial-image";
import { SectionRule, sectionPad } from "@/components/shared/section-rhythm";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { homeVisuals } from "@/config/visual-assets";
import type { HomeContent, Locale } from "@/types";

interface VisionSectionProps {
  content: HomeContent["vision"];
  locale: Locale;
}

export function VisionSection({ content, locale }: VisionSectionProps) {
  const visionImage = homeVisuals.vision;

  return (
    <section className="bg-ink text-white">
      <SectionRule className="border-white/10" />
      <div className={`${sectionPad} lg:grid lg:grid-cols-[minmax(0,48%)_minmax(0,52%)] lg:gap-0`}>
        {/* Image bleeds left */}
        <div className="relative min-h-[480px] lg:min-h-[720px]">
          <SlideUp className="absolute inset-0 lg:-left-8 xl:-left-16">
            <EditorialImage
              src={visionImage.src}
              alt={visionImage.alt[locale]}
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              imageClassName="opacity-92"
            />
          </SlideUp>
        </div>

        <Container size="wide" className="flex flex-col justify-center px-4 py-20 sm:px-6 lg:px-16 xl:px-24 lg:py-0">
          <SlideUp>
            <Eyebrow className="text-white/40">{content.eyebrow}</Eyebrow>
            <Heading
              as="h2"
              size="h2"
              className="mt-10 max-w-xl whitespace-pre-line text-white"
            >
              {content.headline}
            </Heading>
            <Text variant="lead" className="mt-10 max-w-lg text-white/45">
              {content.description}
            </Text>
          </SlideUp>

          <StaggerContainer className="mt-20 space-y-0">
            {content.pillars.map((pillar, index) => (
              <StaggerItem
                key={pillar.title}
                className="border-t border-white/10 py-10 first:border-t-0 first:pt-0 md:py-12"
              >
                <span className="font-mono text-[11px] tracking-[0.3em] text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-normal tracking-[-0.02em] text-white md:text-2xl">
                  {pillar.title}
                </h3>
                <Text className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/45">
                  {pillar.description}
                </Text>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </div>
    </section>
  );
}
