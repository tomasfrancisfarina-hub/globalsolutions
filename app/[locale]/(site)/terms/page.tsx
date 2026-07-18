import type { Metadata } from "next";
import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
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
      title: isEs ? "Términos de uso" : "Terms of Use",
      path: "/terms",
      locale: locale as Locale,
    }),
    robots: { index: false, follow: false },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const isEs = loc === "es";

  return (
    <Section spacing="hero">
      <Container>
        <div className="flex flex-wrap items-center gap-4">
          <Eyebrow>{isEs ? "Legal" : "Legal"}</Eyebrow>
          <PlaceholderBadge status="placeholder" locale={loc} />
        </div>
        <Heading as="h1" size="h2" className="mt-6">
          {isEs ? "Términos de uso" : "Terms of Use"}
        </Heading>
        <Text className="mt-8 max-w-2xl">
          {isEs
            ? "[Placeholder] Términos de uso pendientes de contenido legal definitivo."
            : "[Placeholder] Terms of use pending final legal content."}
        </Text>
      </Container>
    </Section>
  );
}
