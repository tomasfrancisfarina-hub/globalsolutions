import type { Metadata } from "next";
import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { createBrandingMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/types";

interface Props {
  params: Promise<{ locale: string }>;
}

function termsCopy(locale: Locale) {
  switch (locale) {
    case "es":
      return {
        title: "Términos de uso",
        body:
          "El uso de este sitio web está sujeto a las condiciones aplicables y a la información legal del operador. Para los datos de identificación del proveedor, consulte el Impressum.",
        note: "Texto orientativo. Se recomienda revisión jurídica profesional antes de su uso definitivo.",
      };
    case "de":
      return {
        title: "Nutzungsbedingungen",
        body:
          "Die Nutzung dieser Website unterliegt den geltenden rechtlichen Rahmenbedingungen. Angaben zum Anbieter finden Sie im Impressum; Hinweise zur Datenverarbeitung in der Datenschutzerklärung.",
        note: "[Rechtliche Prüfung empfohlen] Dieser Text ist eine Orientierung und ersetzt keine individuell geprüften AGB oder Nutzungsbedingungen.",
      };
    default:
      return {
        title: "Terms of Use",
        body:
          "Use of this website is subject to applicable terms and the operator’s legal notice. For provider identification details, please see the Impressum.",
        note: "Guidance text only. Professional legal review is recommended before relying on this page as final legal copy.",
      };
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const copy = termsCopy(loc);
  return {
    ...createBrandingMetadata({
      title: copy.title,
      path: "/terms",
      locale: loc,
    }),
    robots: { index: false, follow: false },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const copy = termsCopy(loc);

  return (
    <Section spacing="hero">
      <Container>
        <Eyebrow>Legal</Eyebrow>
        <Heading as="h1" size="h2" className="mt-6">
          {copy.title}
        </Heading>
        <Text className="mt-8 max-w-2xl">{copy.body}</Text>
        <Text className="mt-10 max-w-2xl text-sm text-subtle">{copy.note}</Text>
      </Container>
    </Section>
  );
}
