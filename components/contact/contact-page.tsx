import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { ContactForm } from "@/components/contact/contact-form";
import { SlideUp } from "@/components/motion";
import { siteConfig } from "@/config/site";
import type { ContactContent, Locale } from "@/types";

interface ContactPageContentProps {
  content: ContactContent;
  locale: Locale;
}

export function ContactPageContent({ content, locale }: ContactPageContentProps) {
  const isEs = locale === "es";

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
                <span className="text-subtle">{isEs ? "Email" : "Email"}:</span>{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-foreground transition-opacity hover:opacity-70"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <span className="text-subtle">LinkedIn:</span>{" "}
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
                <span className="text-subtle">{isEs ? "Alcance" : "Reach"}:</span>{" "}
                {isEs ? "Estados Unidos · Europa · Dubái" : "United States · Europe · Dubai"}
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
