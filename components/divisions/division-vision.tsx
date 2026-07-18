import { Container, Section, Eyebrow, Text } from "@/components/ui";
import { SlideUp } from "@/components/motion";

interface DivisionVisionProps {
  eyebrow: string;
  vision: string;
}

export function DivisionVision({ eyebrow, vision }: DivisionVisionProps) {
  return (
    <Section spacing="compact">
      <Container>
        <SlideUp>
          <div className="max-w-3xl border-t border-border pt-16 md:pt-24">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Text variant="lead" className="mt-6">
              {vision}
            </Text>
          </div>
        </SlideUp>
      </Container>
    </Section>
  );
}
