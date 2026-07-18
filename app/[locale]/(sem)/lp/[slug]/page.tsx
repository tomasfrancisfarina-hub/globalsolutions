import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllLandingPageParams, getLandingPageBySlug } from "@/content/registry/landing-pages.registry";
import { createSemMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n/config";
import { isFeatureEnabled } from "@/config/features";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/types";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  if (!isFeatureEnabled("semLandingPages")) return [];
  return getAllLandingPageParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const lp = getLandingPageBySlug(slug, locale as Locale);
  if (!lp) return {};
  return createSemMetadata({
    seo: lp.seo,
    path: `/lp/${slug}`,
    locale: locale as Locale,
  });
}

/** SEM landing — no site navigation, conversion only */
export default async function LandingPage({ params }: Props) {
  if (!isFeatureEnabled("semLandingPages")) notFound();

  const { locale, slug } = await params;
  const loc = locale as Locale;
  const lp = getLandingPageBySlug(slug, loc);
  if (!lp) notFound();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4">
        <Link href={localizedPath("/", loc)} className="text-sm font-medium">
          Global Solutions
        </Link>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">{lp.headline}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">{lp.subheadline}</p>
        {lp.socialProof && <p className="mt-8 text-sm text-subtle">{lp.socialProof}</p>}

        <ul className="mt-12 space-y-4">
          {lp.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 text-muted">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-16 rounded-2xl border border-border p-8 md:p-10">
          <h2 className="text-2xl font-medium">{lp.conversion.headline}</h2>
          <p className="mt-3 text-muted">{lp.conversion.description}</p>
          {lp.conversion.proofPoints && (
            <ul className="mt-6 space-y-2">
              {lp.conversion.proofPoints.map((point) => (
                <li key={point} className="text-sm text-subtle">— {point}</li>
              ))}
            </ul>
          )}
          <Link href={localizedPath(lp.conversion.cta.href, loc)} className="mt-8 inline-block">
            <Button size="lg">{lp.conversion.cta.label}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
