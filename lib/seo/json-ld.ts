import { siteConfig } from "@/config/site";
import type { Division, Service } from "@/types";

/** Organization structured data */
export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    foundingDate: siteConfig.organization.foundingDate,
    areaServed: siteConfig.organization.areaServed,
    knowsAbout: siteConfig.organization.knowsAbout,
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contact.email,
      contactType: "customer service",
    },
    sameAs: [siteConfig.social.linkedin].filter(Boolean),
  };
}

/** WebSite structured data with search action */
export function createWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

/** Service structured data for division pages */
export function createDivisionServiceSchema(division: Division) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: division.name,
    description: division.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: siteConfig.organization.areaServed,
  };
}

/** Service structured data for service pages */
export function createServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.fullDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: siteConfig.organization.areaServed,
  };
}

/** FAQ structured data for service pages */
export function createFaqSchema(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Breadcrumb structured data */
export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Article structured data for insights/blog */
export function createArticleSchema(article: {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}
