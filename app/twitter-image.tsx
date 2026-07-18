import { siteConfig } from "@/config/site";
import { generateOgImage } from "@/lib/seo/og-image";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return generateOgImage(
    "Business growth consulting",
    "Strategy, intelligence, automation, and execution.",
  );
}
