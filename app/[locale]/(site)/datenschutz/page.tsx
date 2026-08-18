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
      title: "Datenschutzerklärung",
      path: "/datenschutz",
      locale: locale as Locale,
    }),
    robots: { index: true, follow: true },
  };
}

export default async function DatenschutzPage() {
  const { tradeName, owner, address } = siteConfig.legal;
  const email = siteConfig.contact.email;

  return (
    <Section spacing="hero">
      <Container>
        <Eyebrow>Legal</Eyebrow>
        <Heading as="h1" size="h2" className="mt-6">
          Datenschutzerklärung
        </Heading>
        <Text className="mt-4 max-w-2xl text-subtle">
          Informationen zur Verarbeitung personenbezogener Daten gemäß der DSGVO
        </Text>

        <div className="mt-12 max-w-2xl space-y-10 text-base leading-relaxed text-muted md:text-[17px] md:leading-[1.75]">
          <section>
            <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
              1. Verantwortlicher
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
              <br />
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
              2. Hosting
            </h2>
            <p className="mt-4">
              Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, USA („Vercel“) gehostet. Beim Aufruf der Seiten
              können technisch erforderliche Server-Logdaten verarbeitet werden
              (z.&nbsp;B. IP-Adresse, Zeitpunkt des Zugriffs, angeforderte
              Ressource, Browser-/Geräteinformationen). Rechtsgrundlage ist Art.
              6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und
              stabilen Bereitstellung der Website).
            </p>
            <p className="mt-4">
              Weitere Informationen:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                className="text-foreground transition-opacity hover:opacity-70"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com/legal/privacy-policy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
              3. Kontaktformular
            </h2>
            <p className="mt-4">
              Wenn Sie das Kontaktformular nutzen, verarbeiten wir die von Ihnen
              angegebenen Daten (Name, E-Mail-Adresse, optional Unternehmen sowie
              Ihre Nachricht), um Ihre Anfrage zu bearbeiten und zu beantworten.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              bzw. vertragliche Kommunikation) sowie Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der Bearbeitung von Anfragen).
            </p>
            <p className="mt-4">
              Der Versand erfolgt über den E-Mail-Dienst Resend (Resend, Inc.,
              USA). Die übermittelten Formulardaten werden an Resend weitergegeben,
              soweit dies für den E-Mail-Versand erforderlich ist. Weitere
              Informationen:{" "}
              <a
                href="https://resend.com/legal/privacy-policy"
                className="text-foreground transition-opacity hover:opacity-70"
                target="_blank"
                rel="noopener noreferrer"
              >
                resend.com/legal/privacy-policy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
              4. Cookies und ähnliche Technologien
            </h2>
            <p className="mt-4">
              Diese Website setzt derzeit keine nicht notwendigen Cookies für
              Analyse- oder Marketingzwecke ein. Es werden keine Tools wie Google
              Analytics, Google Tag Manager oder Meta Pixel aktiv geladen.
            </p>
            <p className="mt-4">
              Technisch erforderliche Verarbeitungen im Rahmen des Hostings
              (siehe Abschnitt Hosting) können weiterhin stattfinden. Ein
              Cookie-Einwilligungsbanner ist daher derzeit nicht erforderlich.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
              5. Schriftarten
            </h2>
            <p className="mt-4">
              Die Website verwendet selbst gehostete Schriftarten (Geist). Es
              erfolgt kein Abruf von Schriftarten über externe Dienste wie Google
              Fonts beim Seitenaufruf.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
              6. Externe Links
            </h2>
            <p className="mt-4">
              Unsere Website kann Links zu externen Angeboten (z.&nbsp;B.
              LinkedIn) enthalten. Beim Aufruf dieser Angebote gelten die
              Datenschutzbestimmungen der jeweiligen Anbieter. Wir haben keinen
              Einfluss auf deren Datenverarbeitung.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
              7. Speicherdauer
            </h2>
            <p className="mt-4">
              Personenbezogene Daten werden nur so lange gespeichert, wie es für
              die jeweiligen Zwecke erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen. Anfragen aus dem Kontaktformular
              werden gelöscht, wenn sie erledigt sind und keine gesetzlichen
              Gründe einer längeren Aufbewahrung entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
              8. Ihre Rechte
            </h2>
            <p className="mt-4">
              Sie haben gegenüber uns — soweit die gesetzlichen Voraussetzungen
              vorliegen — insbesondere folgende Rechte: Auskunft (Art. 15 DSGVO),
              Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO),
              Einschränkung der Verarbeitung (Art. 18 DSGVO),
              Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen
              Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21
              DSGVO).
            </p>
            <p className="mt-4">
              Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde
              zu beschweren. Zuständig ist unter anderem der Hamburgische
              Beauftragte für Datenschutz und Informationsfreiheit.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
              9. Kontakt zum Datenschutz
            </h2>
            <p className="mt-4">
              Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten wenden
              Sie sich bitte an:{" "}
              <a
                href={`mailto:${email}`}
                className="text-foreground transition-opacity hover:opacity-70"
              >
                {email}
              </a>
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
