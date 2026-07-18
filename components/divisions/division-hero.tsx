import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { SlideUp } from "@/components/motion";
import type { Division } from "@/types";

interface DivisionHeroProps {
  division: Division;
  eyebrow: string;
}

export function DivisionHero({ division, eyebrow }: DivisionHeroProps) {
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
