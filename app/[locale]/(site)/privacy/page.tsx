import type { Metadata } from "next";
import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { createBrandingMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/types";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = (locale as Locale) === "es";
  return {
    ...createBrandingMetadata({
      title: isEs ? "Política de privacidad" : "Privacy Policy",
      path: "/privacy",
      locale: locale as Locale,
    }),
    robots: { index: false, follow: false },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const isEs = loc === "es";

  return (
    <Section spacing="hero">
      <Container>
        <Eyebrow>{isEs ? "Legal" : "Legal"}</Eyebrow>
        <Heading as="h1" size="h2" className="mt-6">
          {isEs ? "Política de privacidad" : "Privacy Policy"}
        </Heading>
        <Text className="mt-8 max-w-2xl">
          {isEs
            ? "Esta página se actualizará con el contenido legal definitivo antes del lanzamiento oficial."
            : "This page will be updated with final legal content before the official launch."}
        </Text>
      </Container>
    </Section>
  );
}
