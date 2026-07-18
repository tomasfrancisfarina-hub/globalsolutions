import Link from "next/link";
import { localizedPath } from "@/lib/i18n/config";
import { Button } from "@/components/ui/button";
import type { ConversionBlock, Locale } from "@/types";
import { cn } from "@/lib/utils";

interface ConversionCtaProps {
  block: ConversionBlock;
  locale: Locale;
  className?: string;
}

/** Reusable conversion block — trust + meeting booking on every SEO page */
export function ConversionCta({ block, locale, className }: ConversionCtaProps) {
  return (
    <section className={cn("rounded-2xl border border-border p-8 md:p-10", className)}>
      <h2 className="text-2xl font-medium md:text-3xl">{block.headline}</h2>
      <p className="mt-3 max-w-xl text-lg text-muted">{block.description}</p>
      {block.proofPoints && (
        <ul className="mt-6 space-y-2">
          {block.proofPoints.map((point) => (
            <li key={point} className="text-sm text-subtle">
              — {point}
            </li>
          ))}
        </ul>
      )}
      <Link href={localizedPath(block.cta.href, locale)} className="mt-8 inline-block">
        <Button size="lg">{block.cta.label}</Button>
      </Link>
    </section>
  );
}
