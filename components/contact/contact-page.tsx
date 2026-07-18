import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { ContactForm } from "@/components/contact/contact-form";
import { SlideUp } from "@/components/motion";
import type { ContactContent } from "@/types";

interface ContactPageContentProps {
  content: ContactContent;
}

export function ContactPageContent({ content }: ContactPageContentProps) {
  return (
    <Section spacing="hero">
      <Container>
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <SlideUp>
            <Eyebrow>{content.hero.eyebrow}</Eyebrow>
            <Heading as="h1" size="hero" className="mt-6 whitespace-pre-line">
              {content.hero.headline}
            </Heading>
            <Text variant="lead" className="mt-6">
              {content.hero.description}
            </Text>
          </SlideUp>
          <SlideUp delay={0.1}>
            <ContactForm content={content.form} />
          </SlideUp>
        </div>
      </Container>
    </Section>
  );
}
