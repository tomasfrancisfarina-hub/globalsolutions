import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { DivisionCta } from "@/components/divisions/division-cta";
import type { Service, Locale } from "@/types";

interface ServiceHeroProps {
  service: Service;
  eyebrow: string;
}

export function ServiceHero({ service, eyebrow }: ServiceHeroProps) {
  return (
    <Section spacing="hero">
      <Container>
        <SlideUp>
          <div className="max-w-3xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading as="h1" size="hero" className="mt-6">
              {service.name}
            </Heading>
            <Text variant="lead" className="mt-6">
              {service.shortDescription}
            </Text>
            <Text className="mt-8 max-w-2xl">{service.fullDescription}</Text>
          </div>
        </SlideUp>
      </Container>
    </Section>
  );
}

interface ServiceFeaturesProps {
  title: string;
  features: string[];
}

export function ServiceFeatures({ title, features }: ServiceFeaturesProps) {
  return (
    <Section>
      <Container>
        <SlideUp>
          <Heading as="h2" size="h3">
            {title}
          </Heading>
        </SlideUp>
        <StaggerContainer className="mt-12 space-y-0 md:mt-16">
          {features.map((feature, index) => (
            <StaggerItem key={feature}>
              <div
                className={`flex items-start gap-3 border-t border-border py-6 text-muted md:py-8 ${
                  index === features.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                {feature}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}

interface ServiceFaqProps {
  faq: { question: string; answer: string }[];
}

export function ServiceFaq({ faq }: ServiceFaqProps) {
  if (!faq.length) return null;

  return (
    <Section spacing="compact">
      <Container>
        <SlideUp>
          <Heading as="h2" size="h3">
            FAQ
          </Heading>
        </SlideUp>
        <StaggerContainer className="mt-12 space-y-0 md:mt-16">
          {faq.map((item, index) => (
            <StaggerItem key={item.question}>
              <div
                className={`border-t border-border py-8 md:py-10 ${
                  index === faq.length - 1 ? "border-b" : ""
                }`}
              >
                <h3 className="text-xl font-medium tracking-tight">{item.question}</h3>
                <Text className="mt-3">{item.answer}</Text>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}

interface ServicePageLayoutProps {
  service: Service;
  locale: Locale;
  eyebrow: string;
  featuresTitle: string;
}

export function ServicePageLayout({
  service,
  locale,
  eyebrow,
  featuresTitle,
}: ServicePageLayoutProps) {
  return (
    <>
      <ServiceHero service={service} eyebrow={eyebrow} />
      <ServiceFeatures title={featuresTitle} features={service.features} />
      <ServiceFaq faq={service.faq ?? []} />
      <DivisionCta block={service.conversion} locale={locale} />
    </>
  );
}
