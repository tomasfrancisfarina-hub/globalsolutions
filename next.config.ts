import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  outputFileTracingIncludes: {
    "/api/dominicana-dossier/assets/[...path]": [
      "./dominicana-dossier/private-assets/**/*",
    ],
    "/api/dominicana-dossier/document/[locale]": [
      "./dominicana-dossier/content/**/*",
    ],
  },

  async headers() {
    return [
      {
        source: "/:locale/inversiones/republica-dominicana",
        headers: [
          { key: "Cache-Control", value: "private, no-store, no-cache, must-revalidate" },
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
      {
        source: "/:locale/investments/dominican-republic",
        headers: [
          { key: "Cache-Control", value: "private, no-store, no-cache, must-revalidate" },
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
    ];
  },
};

export default nextConfig;
