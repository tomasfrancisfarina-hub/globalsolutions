import Link from "next/link";
import { Container, Section, Heading, Text } from "@/components/ui";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { localizedPath } from "@/lib/i18n/config";
import type { Service, Locale } from "@/types";

interface DivisionRelatedServicesProps {
  title: string;
  services: Service[];
  locale: Locale;
  learnMoreLabel: string;
}

export function DivisionRelatedServices({
  title,
  services,
  locale,
  learnMoreLabel,
}: DivisionRelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <Section spacing="compact">
      <Container>
        <SlideUp>
          <Heading as="h2" size="h3">
            {title}
          </Heading>
        </SlideUp>

        <StaggerContainer className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <Link
                href={localizedPath(`/services/${service.slug}`, locale)}
                className="group block rounded-2xl border border-border p-8 transition-colors duration-300 hover:border-border-hover md:p-10"
              >
                <h3 className="text-xl font-medium tracking-tight">{service.name}</h3>
                <Text className="mt-3">{service.shortDescription}</Text>
                <span className="mt-6 inline-block text-sm text-subtle transition-colors duration-300 group-hover:text-foreground">
                  {learnMoreLabel} →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
