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
    "/api/dominicana-share/assets/[...path]": [
      "./dominicana-dossier/private-assets/**/*",
    ],
    "/[locale]/inversiones/samana": [
      "./dominicana-share/content/es.html",
    ],
    "/[locale]/investments/samana": [
      "./dominicana-share/content/en.html",
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
      {
        source: "/:locale/inversiones/samana",
        headers: [
          { key: "Cache-Control", value: "public, max-age=300, stale-while-revalidate=86400" },
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
      {
        source: "/:locale/investments/samana",
        headers: [
          { key: "Cache-Control", value: "public, max-age=300, stale-while-revalidate=86400" },
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
    ];
  },
};

export default nextConfig;
