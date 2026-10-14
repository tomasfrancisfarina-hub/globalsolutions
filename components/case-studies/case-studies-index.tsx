import Link from "next/link";
import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { localizedPath } from "@/lib/i18n/config";
import type { CaseStudySector, Locale } from "@/types";
import { CaseStudyBookingCta } from "./case-study-booking-cta";

interface SectorCardProps {
  sector: CaseStudySector;
  locale: Locale;
  eyebrow: string;
  viewLabel: string;
}

export function SectorCard({ sector, locale, eyebrow, viewLabel }: SectorCardProps) {
  return (
    <Link
      href={localizedPath(`/case-studies/${sector.slug}`, locale)}
      className="group block h-full rounded-2xl border border-border p-6 transition-colors duration-300 hover:border-border-hover sm:p-8 md:p-10"
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading as="h3" size="h3" className="mt-6">
        {sector.name}
      </Heading>
      <p className="mt-6 break-words font-mono text-2xl font-medium tracking-tight sm:text-3xl">
        {sector.highlight}
      </p>
      <p className="mt-2 text-sm text-muted">{sector.description}</p>
      <span className="mt-8 inline-block text-sm text-subtle transition-colors duration-300 group-hover:text-foreground">
        {viewLabel} →
      </span>
    </Link>
  );
}

interface CaseStudiesIndexProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  sectors: CaseStudySector[];
  sectorEyebrow: string;
  viewLabel: string;
}

export function CaseStudiesIndex({
  locale,
  eyebrow,
  title,
  description,
  sectors,
  sectorEyebrow,
  viewLabel,
}: CaseStudiesIndexProps) {
  return (
    <Section spacing="hero">
      <Container size="wide">
        <SlideUp>
          <div className="max-w-3xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading as="h1" size="hero" className="mt-6">
              {title}
            </Heading>
            <Text variant="lead" className="mt-6">
              {description}
            </Text>
          </div>
        </SlideUp>

        <CaseStudyBookingCta
          locale={locale}
          compact
          className="mt-12 sm:mt-16"
        />

        <StaggerContainer className="mt-16 grid gap-6 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <StaggerItem key={sector.id}>
              <SectorCard
                sector={sector}
                locale={locale}
                eyebrow={sectorEyebrow}
                viewLabel={viewLabel}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <CaseStudyBookingCta locale={locale} className="mt-16 md:mt-24" />
      </Container>
    </Section>
  );
}
