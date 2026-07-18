import Link from "next/link";
import { Container, Section, Heading, Text } from "@/components/ui";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { getServiceBySlug } from "@/content/registry/services.registry";
import { localizedPath } from "@/lib/i18n/config";
import type { Capability, Locale } from "@/types";

interface DivisionCapabilitiesProps {
  title: string;
  capabilities: Capability[];
  locale: Locale;
  learnMoreLabel: string;
}

export function DivisionCapabilities({
  title,
  capabilities,
  locale,
  learnMoreLabel,
}: DivisionCapabilitiesProps) {
  return (
    <Section>
      <Container>
        <SlideUp>
          <Heading as="h2" size="h3">
            {title}
          </Heading>
        </SlideUp>

        <StaggerContainer className="mt-12 space-y-0 md:mt-16">
          {capabilities.map((cap, index) => {
            const service = getServiceBySlug(cap.id, locale);
            const isLast = index === capabilities.length - 1;

            const content = (
              <>
                <h3 className="text-xl font-medium tracking-tight">{cap.name}</h3>
                <Text className="mt-2 max-w-2xl">{cap.description}</Text>
                {service && (
                  <span className="mt-4 inline-block text-sm text-subtle transition-colors duration-300 group-hover:text-foreground">
                    {learnMoreLabel} →
                  </span>
                )}
              </>
            );

            return (
              <StaggerItem key={cap.id}>
                {service ? (
                  <Link
                    href={localizedPath(`/services/${service.slug}`, locale)}
                    className={`group block border-t border-border py-8 md:py-10 ${isLast ? "border-b" : ""}`}
                  >
                    {content}
                  </Link>
                ) : (
                  <div
                    className={`border-t border-border py-8 md:py-10 ${isLast ? "border-b" : ""}`}
                  >
                    {content}
                  </div>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
