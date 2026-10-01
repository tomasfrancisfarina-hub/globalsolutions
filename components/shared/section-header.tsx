import { Eyebrow, Heading, Text } from "@/components/ui";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  align?: "left" | "center";
  /** Page heroes should pass "h1"; section intros keep default "h2". */
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  headline,
  description,
  align = "left",
  as = "h2",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading
        as={as}
        size={as === "h1" ? "hero" : "h2"}
        className={cn("whitespace-pre-line text-balance", eyebrow && "mt-6 sm:mt-8 md:mt-10")}
      >
        {headline}
      </Heading>
      {description && (
        <Text variant="lead" className="mt-5 max-w-2xl sm:mt-8">
          {description}
        </Text>
      )}
    </div>
  );
}
