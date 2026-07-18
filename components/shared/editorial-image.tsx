import Image from "next/image";
import { cn } from "@/lib/utils";

interface EditorialImageProps {
  src: string;
  alt: string;
  aspect?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  /** Fill parent — for cinematic / full-bleed layouts */
  fill?: boolean;
}

export function EditorialImage({
  src,
  alt,
  aspect = "aspect-[4/5]",
  priority = false,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill = false,
}: EditorialImageProps) {
  return (
    <div
      className={cn(
        "group/image relative overflow-hidden bg-accent-soft",
        !fill && aspect,
        fill && "absolute inset-0",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover transition-[transform,opacity] duration-[1.2s] ease-out",
          "group-hover/image:scale-[1.03]",
          imageClassName,
        )}
      />
    </div>
  );
}
