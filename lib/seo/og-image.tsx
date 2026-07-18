import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export const ogContentType = "image/png";

/** Shared OG / icon brand styles */
export function OgBrand({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#FFFFFF",
        padding: "80px",
      }}
    >
      <div
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#999999",
        }}
      >
        Global Solutions
      </div>
      <div
        style={{
          marginTop: 24,
          fontSize: 64,
          fontWeight: 500,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          color: "#111111",
          maxWidth: 900,
        }}
      >
        {title}
      </div>
      {subtitle && (
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            lineHeight: 1.5,
            color: "#6B6B6B",
            maxWidth: 800,
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
}

export function generateOgImage(title: string, subtitle?: string) {
  return new ImageResponse(<OgBrand title={title} subtitle={subtitle} />, {
    ...ogSize,
  });
}
