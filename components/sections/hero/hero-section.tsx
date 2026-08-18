import Link from "next/link";
import { Container, Eyebrow, Heading, Text, Button } from "@/components/ui";
import { EditorialImage } from "@/components/shared/editorial-image";
import { SlideUp } from "@/components/motion";
import { homeVisuals } from "@/config/visual-assets";
import { localizedPath } from "@/lib/i18n/config";
import type { HomeContent, Locale } from "@/types";

interface HeroSectionProps {
  content: HomeContent["hero"];
  locale: Locale;
}

const marketLine = {
  es: "Estados Unidos · Europa · Dubái",
  en: "United States · Europe · Dubai",
};

export function HeroSection({ content, locale }: HeroSectionProps) {
  const heroImage = homeVisuals.hero;

  return (
    <section className="relative bg-background">
      <div className="lg:grid lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[minmax(0,44%)_minmax(0,56%)]">
        {/* Copy — generous whitespace */}
        <Container
          size="wide"
          className="flex flex-col justify-center py-12 sm:py-16 md:py-28 lg:py-0 lg:pl-8 xl:pl-12"
        >
          <SlideUp className="max-w-xl lg:max-w-none lg:pr-16 xl:pr-24">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-foreground/20" aria-hidden />
              <Eyebrow className="text-foreground/50">{content.eyebrow}</Eyebrow>
            </div>

            <Heading as="h1" size="hero" className="mt-8 whitespace-pre-line text-balance sm:mt-10">
              {content.headline}
            </Heading>

            <Text variant="lead" className="mt-6 max-w-md text-foreground/55 sm:mt-10">
              {content.subheadline}
            </Text>

            <p className="mt-8 text-[12px] font-medium tracking-[0.12em] text-subtle uppercase sm:mt-10 sm:text-[13px] sm:tracking-[0.18em]">
              {marketLine[locale]}
            </p>

            <div className="mt-10 flex w-full flex-col items-stretch gap-4 sm:mt-14 sm:w-auto sm:flex-row sm:items-center sm:gap-10">
              <Link href={localizedPath(content.cta.primary.href, locale)} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">{content.cta.primary.label}</Button>
              </Link>
              <Link href={localizedPath(content.cta.secondary.href, locale)}>
                <Button size="lg" variant="secondary">
                  {content.cta.secondary.label} →
                </Button>
              </Link>
            </div>
          </SlideUp>
        </Container>

        {/* Cinematic image — edge to edge */}
        <div className="relative mt-6 h-[42vh] min-h-[260px] sm:mt-4 sm:h-[50vh] sm:min-h-[340px] md:min-h-[400px] lg:mt-0 lg:h-auto lg:min-h-0">
          <SlideUp delay={0.1} className="absolute inset-0 overflow-hidden">
            <EditorialImage
              src={heroImage.src}
              alt={heroImage.alt[locale]}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              imageClassName="object-cover object-[62%_center] sm:object-right sm:scale-105 lg:scale-100"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent sm:via-background/20 lg:via-transparent"
              aria-hidden
            />
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
