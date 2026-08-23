import type { MetadataRoute } from "next";
import { isIndexingAllowed } from "@/config/indexing";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexingAllowed()) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/lp/", "/es/inversiones/", "/en/investments/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
