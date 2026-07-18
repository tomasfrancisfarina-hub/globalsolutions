import { Eyebrow, Heading, Text } from "@/components/ui";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  headline,
  description,
  align = "left",
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
        as="h2"
        size="h2"
        className={cn("whitespace-pre-line", eyebrow && "mt-8 md:mt-10")}
      >
        {headline}
      </Heading>
      {description && (
        <Text variant="lead" className="mt-8 max-w-2xl">
          {description}
        </Text>
      )}
    </div>
  );
}
