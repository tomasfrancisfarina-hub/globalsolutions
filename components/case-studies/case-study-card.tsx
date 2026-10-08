import Link from "next/link";
import { Eyebrow, Heading } from "@/components/ui";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { localizedPath } from "@/lib/i18n/config";
import type { CaseStudySummary, Locale } from "@/types";

interface CaseStudyCardProps {
  caseStudy: CaseStudySummary;
  locale: Locale;
  viewLabel: string;
}

/** Used when a case is listed inside its sector. Not shown while listed is false. */
export function CaseStudyCard({ caseStudy, locale, viewLabel }: CaseStudyCardProps) {
  const highlight = caseStudy.teaser ?? caseStudy.results[0];

  return (
    <Link
      href={localizedPath(`/case-studies/${caseStudy.slug}`, locale)}
      className="group block h-full rounded-2xl border border-border p-6 transition-colors duration-300 hover:border-border-hover sm:p-8 md:p-10"
    >
      <div className="flex min-w-0 items-start justify-between gap-3 sm:gap-4">
        <div className="min-w-0 flex-1">
          <Eyebrow>{caseStudy.industry}</Eyebrow>
        </div>
        <PlaceholderBadge status={caseStudy.status} locale={locale} />
      </div>
      <Heading as="h3" size="h3" className="mt-6">
        {caseStudy.client}
      </Heading>
      {highlight && (
        <p className="mt-6 break-words font-mono text-2xl font-medium tracking-tight sm:text-3xl">
          {highlight.value}
        </p>
      )}
      {highlight && <p className="mt-2 text-sm text-muted">{highlight.label}</p>}
      <span className="mt-8 inline-block text-sm text-subtle transition-colors duration-300 group-hover:text-foreground">
        {viewLabel} →
      </span>
    </Link>
  );
}
