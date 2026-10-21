"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CaseImageProps {
  filename: string;
  alt: string;
  src?: string;
  type?: "image" | "video" | "slider";
  poster?: string;
  aspect?: "16/9" | "4/3" | "1/1" | "3/4" | "auto";
  fit?: "cover" | "contain";
  className?: string;
  priority?: boolean;
  compact?: boolean;
  pendingLabel?: string;
  caption?: string;
  playLabel?: string;
  pauseLabel?: string;
  crop?: CaseVideoCrop;
}

/** Fixed-aspect frame that zooms into a video to trim empty background around the mockup. */
export interface CaseVideoCrop {
  aspect: string;
  scale: number;
  origin: string;
}

/** Renders the attached file at full intrinsic size — no crop, no leftover frame. */
export function CaseImage({
  filename,
  alt,
  src,
  type = "image",
  poster,
  className,
  priority = false,
  pendingLabel,
  caption,
  playLabel = "Play",
  pauseLabel = "Pause",
  crop,
}: CaseImageProps) {
  const mediaType =
    type === "slider"
      ? "image"
      : (type ?? (src?.match(/\.(mp4|webm|mov)(\?|$)/i) ? "video" : "image"));

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
        <CaseVideo
          src={src}
          poster={poster}
          alt={alt}
          playLabel={playLabel}
          pauseLabel={pauseLabel}
          crop={crop}
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

function CaseVideo({
  src,
  poster,
  alt,
  playLabel,
  pauseLabel,
  crop,
}: {
  src: string;
  poster?: string;
  alt: string;
  playLabel: string;
  pauseLabel: string;
  crop?: CaseVideoCrop;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    let visible = false;

    const sync = () => setPlaying(!el.paused);
    const tryPlay = () => {
      if (!visible || reduceMotion) return;
      void el.play().catch(() => undefined);
    };

    el.addEventListener("play", sync);
    el.addEventListener("pause", sync);
    el.addEventListener("canplay", tryPlay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio > 0;
        if (!visible) {
          el.pause();
          return;
        }
        tryPlay();
      },
      { threshold: [0, 0.05, 0.25, 0.5] },
    );
    observer.observe(el);

    return () => {
      el.removeEventListener("play", sync);
      el.removeEventListener("pause", sync);
      el.removeEventListener("canplay", tryPlay);
      observer.disconnect();
    };
  }, [reduceMotion, src]);

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
    } else {
      el.pause();
    }
  };

  const video = (
    <video
      ref={videoRef}
      className={cn(
        crop
          ? "absolute inset-0 h-full w-full object-cover"
          : "block h-auto w-full max-w-full object-contain [-webkit-transform:translateZ(0)]",
      )}
      style={
        crop
          ? { transform: `scale(${crop.scale})`, transformOrigin: crop.origin }
          : undefined
      }
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      controls={false}
      disablePictureInPicture
      aria-label={alt}
    />
  );

  return (
    <div className="relative">
      {crop ? (
        <div
          className="relative w-full overflow-hidden bg-black"
          style={{ aspectRatio: crop.aspect }}
        >
          {video}
        </div>
      ) : (
        video
      )}
      <button
        type="button"
        className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-white/40 bg-black/70 text-[11px] text-white opacity-90 hover:opacity-100"
        aria-label={playing ? pauseLabel : playLabel}
        onClick={toggle}
      >
        {playing ? "❚❚" : "▶"}
      </button>
    </div>
  );
}
