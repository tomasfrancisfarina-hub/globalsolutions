import Link from "next/link";
import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { SlideUp } from "@/components/motion";
import { localizedPath } from "@/lib/i18n/config";

const COPY = {
  es: {
    eyebrow: "Oportunidad actual",
    title: "Oportunidad hotelera en Samaná",
    text: "Dossier informativo de un activo hotelero en República Dominicana, pensado para compartir con inversores.",
    cta: "Ver dossier",
    href: "/inversiones/samana",
  },
  en: {
    eyebrow: "Current opportunity",
    title: "Hotel opportunity in Samaná",
    text: "Information dossier for a hospitality asset in the Dominican Republic, ready to share with investors.",
    cta: "View dossier",
    href: "/investments/samana",
  },
} as const;

interface DivisionOpportunityProps {
  locale: "es" | "en";
}

export function DivisionOpportunity({ locale }: DivisionOpportunityProps) {
  const copy = COPY[locale];

  return (
    <Section spacing="compact">
      <Container>
        <SlideUp>
          <div className="max-w-3xl rounded-2xl border border-border p-8 md:p-10">
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <Heading as="h2" size="h3" className="mt-4">
              {copy.title}
            </Heading>
            <Text className="mt-4">{copy.text}</Text>
            <Link
              href={localizedPath(copy.href, locale)}
              rel="nofollow"
              className="mt-6 inline-block text-sm text-subtle transition-colors duration-300 hover:text-foreground"
            >
              {copy.cta} →
            </Link>
          </div>
        </SlideUp>
      </Container>
    </Section>
  );
}
