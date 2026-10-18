"use client";

import { cn } from "@/lib/utils";

interface CaseImageProps {
  filename: string;
  alt: string;
  src?: string;
  type?: "image" | "video";
  aspect?: "16/9" | "4/3" | "1/1" | "3/4" | "auto";
  fit?: "cover" | "contain";
  className?: string;
  priority?: boolean;
  compact?: boolean;
  pendingLabel?: string;
  caption?: string;
}

/** Renders the attached file at full intrinsic size — no crop, no leftover frame. */
export function CaseImage({
  filename,
  alt,
  src,
  type = "image",
  className,
  priority = false,
  pendingLabel,
  caption,
}: CaseImageProps) {
  const mediaType =
    type ?? (src?.match(/\.(mp4|webm|mov)(\?|$)/i) ? "video" : "image");

  return (
    <div
      className={cn(
        "relative h-fit w-full self-start overflow-hidden",
        "[transform:translateZ(0)]",
        className,
      )}
      data-case-image={filename}
      data-media-type={mediaType}
      data-media-ready={src ? "true" : "false"}
    >
      {src && mediaType === "image" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="block h-auto w-full max-w-full"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      )}

      {src && mediaType === "video" && (
        <video
          className="block h-auto w-full max-w-full [-webkit-transform:translateZ(0)]"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          controls={false}
          disablePictureInPicture
          aria-label={alt}
        />
      )}

      {!src && (
        <div className="flex min-h-24 items-end p-4 sm:p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
            {pendingLabel ?? `[dev] ${filename}`}
          </p>
        </div>
      )}
      {caption ? (
        <p className="mt-2 text-[11px] leading-snug text-white/70">{caption}</p>
      ) : null}
    </div>
  );
}
