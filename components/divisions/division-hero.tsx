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
      <section className="relative overflow-hidden bg-ink py-32 md:py-48 lg:py-56">
        <div className="absolute inset-0">
          <Image
            src={visual.src}
            alt={visual.alt[division.locale]}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/55 to-ink/20"
            aria-hidden
          />
        </div>
        <Container className="relative">
          <SlideUp>
            <div className="max-w-3xl">
              <Eyebrow className="text-white/40">{eyebrow}</Eyebrow>
              <Heading as="h1" size="hero" className="mt-6 text-white">
                {division.name}
              </Heading>
              <Text variant="lead" className="mt-6 text-white/55">
                {division.tagline}
              </Text>
              <Text className="mt-8 max-w-2xl text-white/55">{division.description}</Text>
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
