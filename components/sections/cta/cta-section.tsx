import Link from "next/link";
import Image from "next/image";
import { Container, Heading, Text, Button } from "@/components/ui";
import { SectionRule } from "@/components/shared/section-rhythm";
import { SlideUp } from "@/components/motion";
import { homeVisuals } from "@/config/visual-assets";
import { localizedPath } from "@/lib/i18n/config";
import type { HomeContent, Locale } from "@/types";

interface CtaSectionProps {
  content: HomeContent["cta"];
  locale: Locale;
}

export function CtaSection({ content, locale }: CtaSectionProps) {
  const image = homeVisuals.cta;

  return (
    <section className="relative overflow-hidden bg-ink">
      <SectionRule className="relative z-10 border-white/10" />
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt[locale]}
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden />
      </div>

      <Container size="wide" className="relative py-32 md:py-44 lg:py-56 xl:py-64">
        <SlideUp>
          <div className="mx-auto max-w-3xl text-center">
            <Heading as="h2" size="h2" className="whitespace-pre-line text-white">
              {content.headline}
            </Heading>
            <Text variant="lead" className="mx-auto mt-10 max-w-xl text-white/45">
              {content.description}
            </Text>
            <div className="mt-14">
              <Link href={localizedPath(content.button.href, locale)}>
                <Button size="lg" className="min-w-[240px]">
                  {content.button.label}
                </Button>
              </Link>
            </div>
          </div>
        </SlideUp>
      </Container>
    </section>
  );
}
