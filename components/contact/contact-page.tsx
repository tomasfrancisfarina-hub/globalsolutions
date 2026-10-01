import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { ContactForm } from "@/components/contact/contact-form";
import { SlideUp } from "@/components/motion";
import { siteConfig } from "@/config/site";
import { getUiCopy } from "@/lib/i18n/ui-copy";
import type { ContactContent, Locale } from "@/types";

interface ContactPageContentProps {
  content: ContactContent;
  locale: Locale;
}

export function ContactPageContent({ content, locale }: ContactPageContentProps) {
  const ui = getUiCopy(locale);

  return (
    <Section spacing="hero">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
          <SlideUp>
            <Eyebrow>{content.hero.eyebrow}</Eyebrow>
            <Heading as="h1" size="hero" className="mt-6 whitespace-pre-line text-balance">
              {content.hero.headline}
            </Heading>
            <Text variant="lead" className="mt-6">
              {content.hero.description}
            </Text>
            <div className="mt-8 space-y-3 break-words text-[15px] text-muted sm:mt-10">
              <p>
                <span className="text-subtle">{ui.emailLabel}:</span>{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-foreground transition-opacity hover:opacity-70"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <span className="text-subtle">{ui.linkedInLabel}:</span>{" "}
                <a
                  href={siteConfig.social.linkedin}
                  className="text-foreground transition-opacity hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Global Solutions
                </a>
              </p>
              <p>
                <span className="text-subtle">{ui.reachLabel}:</span> {ui.reachValue}
              </p>
            </div>
          </SlideUp>
          <SlideUp delay={0.1}>
            <ContactForm content={content.form} locale={locale} />
          </SlideUp>
        </div>
      </Container>
    </Section>
  );
}
