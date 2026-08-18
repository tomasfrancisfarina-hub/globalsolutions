import type { Metadata } from "next";
import { Container, Section, Eyebrow, Heading, Text } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { createBrandingMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/types";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    ...createBrandingMetadata({
      title: "Impressum",
      path: "/impressum",
      locale: locale as Locale,
    }),
    robots: { index: true, follow: true },
  };
}

export default async function ImpressumPage() {
  const { tradeName, owner, address } = siteConfig.legal;
  const email = siteConfig.contact.email;

  return (
    <Section spacing="hero">
      <Container>
        <Eyebrow>Legal</Eyebrow>
        <Heading as="h1" size="h2" className="mt-6">
          Impressum
        </Heading>
        <Text className="mt-4 max-w-2xl text-subtle">
          Angaben gemäß § 5 DDG
        </Text>

        <div className="mt-12 max-w-2xl space-y-10 text-base leading-relaxed text-muted md:text-[17px] md:leading-[1.75]">
          <section>
            <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
              Anbieter
            </h2>
            <p className="mt-4">
              {tradeName}
              <br />
              {owner}
              <br />
              {address.street}
              <br />
              {address.postalCode} {address.city}
              <br />
              {address.country}
            </p>
            <p className="mt-4">
              Einzelunternehmen / Kleinunternehmer
            </p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
              Kontakt
            </h2>
            <p className="mt-4">
              E-Mail:{" "}
              <a
                href={`mailto:${email}`}
                className="text-foreground transition-opacity hover:opacity-70"
              >
                {email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
              Verantwortlich für den Inhalt
            </h2>
            <p className="mt-4">
              {owner}
              <br />
              {address.street}
              <br />
              {address.postalCode} {address.city}
              <br />
              {address.country}
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
