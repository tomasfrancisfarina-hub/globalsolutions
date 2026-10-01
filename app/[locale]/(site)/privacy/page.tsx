import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { createBrandingMetadata } from "@/lib/seo/metadata";
import { localizedPath } from "@/lib/i18n/config";
import type { Locale } from "@/types";

interface Props {
  params: Promise<{ locale: string }>;
}

function privacyCopy(locale: Locale) {
  switch (locale) {
    case "es":
      return {
        title: "Política de privacidad",
        body:
          "La información detallada sobre el tratamiento de datos personales se encuentra en nuestra declaración de protección de datos (Datenschutz), elaborada conforme a la normativa alemana y al RGPD.",
        linkLabel: "Ver protección de datos (Datenschutz)",
        note: "Texto orientativo. Se recomienda revisión jurídica profesional antes de su uso definitivo.",
      };
    case "de":
      return {
        title: "Datenschutzhinweis",
        body:
          "Die verbindliche Datenschutzerklärung finden Sie auf der Seite Datenschutz. Sie beschreibt die tatsächlich eingesetzten Dienste und Verarbeitungen dieser Website.",
        linkLabel: "Zur Datenschutzerklärung",
        note: "[Rechtliche Prüfung empfohlen] Dieser Kurzhinweis ersetzt nicht die vollständige Datenschutzerklärung.",
      };
    default:
      return {
        title: "Privacy Policy",
        body:
          "Detailed information on personal data processing is provided in our German/GDPR data protection statement (Datenschutz), which reflects the services actually used on this website.",
        linkLabel: "View data protection statement (Datenschutz)",
        note: "Guidance text only. Professional legal review is recommended before relying on this page as final legal copy.",
      };
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const copy = privacyCopy(loc);
  return {
    ...createBrandingMetadata({
      title: copy.title,
      path: "/privacy",
      locale: loc,
    }),
    robots: { index: false, follow: false },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const copy = privacyCopy(loc);

  return (
    <Section spacing="hero">
      <Container>
        <Eyebrow>Legal</Eyebrow>
        <Heading as="h1" size="h2" className="mt-6">
          {copy.title}
        </Heading>
        <Text className="mt-8 max-w-2xl">{copy.body}</Text>
        <p className="mt-6">
          <Link
            href={localizedPath("/datenschutz", loc)}
            className="text-sm text-foreground transition-opacity hover:opacity-70"
          >
            {copy.linkLabel} →
          </Link>
        </p>
        <Text className="mt-10 max-w-2xl text-sm text-subtle">{copy.note}</Text>
      </Container>
    </Section>
  );
}
