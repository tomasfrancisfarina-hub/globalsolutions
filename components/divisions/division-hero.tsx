import Image from "next/image";
import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { SlideUp } from "@/components/motion";
import { getDivisionVisual } from "@/config/visual-assets";
import type { Division } from "@/types";

interface DivisionHeroProps {
  division: Division;
  eyebrow: string;
}

const CINEMATIC_HERO_SLUGS = new Set([
  "growth-marketing",
  "artificial-intelligence",
  "international-expansion",
]);

export function DivisionHero({ division, eyebrow }: DivisionHeroProps) {
  const visual = CINEMATIC_HERO_SLUGS.has(division.slug)
    ? getDivisionVisual(division.slug)
    : undefined;

  if (visual) {
    return (
      <section className="relative overflow-hidden bg-ink">
        <div className="xl:absolute xl:inset-0">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] xl:aspect-auto xl:h-full">
            <Image
              src={visual.src}
              alt={visual.alt[division.locale]}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[48%_center] sm:object-center"
            />
            <div
              className="absolute inset-0 hidden bg-gradient-to-r from-ink/95 via-ink/55 to-ink/20 xl:block"
              aria-hidden
            />
          </div>
        </div>
        <Container className="relative py-12 sm:py-16 xl:py-56">
          <SlideUp>
            <div className="w-full min-w-0 max-w-3xl">
              <Eyebrow className="text-white/40">{eyebrow}</Eyebrow>
              <Heading
                as="h1"
                size="hero"
                className="mt-6 max-w-full text-pretty [overflow-wrap:anywhere] hyphens-none text-white"
              >
                {division.name}
              </Heading>
              <Text
                variant="lead"
                className="mt-6 max-w-full text-pretty [overflow-wrap:anywhere] hyphens-none text-white/55"
              >
                {division.tagline}
              </Text>
              <Text className="mt-8 max-w-full text-pretty [overflow-wrap:anywhere] hyphens-none text-white/55 sm:max-w-2xl">
                {division.description}
              </Text>
            </div>
          </SlideUp>
        </Container>
      </section>
    );
  }

  return (
    <Section spacing="hero">
      <Container>
        <SlideUp>
          <div className="max-w-3xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading as="h1" size="hero" className="mt-6">
              {division.name}
            </Heading>
            <Text variant="lead" className="mt-6">
              {division.tagline}
            </Text>
            <Text className="mt-8 max-w-2xl">{division.description}</Text>
          </div>
        </SlideUp>
      </Container>
    </Section>
  );
}
