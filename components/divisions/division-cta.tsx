import { Container, Section } from "@/components/ui";
import { ConversionCta } from "@/components/shared/conversion-cta";
import { SlideUp } from "@/components/motion";
import type { ConversionBlock, Locale } from "@/types";

interface DivisionCtaProps {
  block: ConversionBlock;
  locale: Locale;
}

export function DivisionCta({ block, locale }: DivisionCtaProps) {
  return (
    <Section spacing="compact">
      <Container>
        <SlideUp>
          <ConversionCta block={block} locale={locale} />
        </SlideUp>
      </Container>
    </Section>
  );
}
