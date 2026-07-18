import type { Metric } from "./case-study";
import type { ContentStatus } from "./content-status";
import type { Testimonial } from "./case-study";

/** Homepage content — branding focused, not SEO optimized */
export interface HomeContent {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    cta: {
      primary: { label: string; href: string };
      secondary: { label: string; href: string };
    };
  };
  vision: {
    eyebrow: string;
    headline: string;
    description: string;
    pillars: {
      title: string;
      description: string;
    }[];
  };
  divisions: {
    eyebrow: string;
    headline: string;
    description: string;
  };
  growth: {
    eyebrow: string;
    headline: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  proof: {
    eyebrow: string;
    headline: string;
    metrics: Metric[];
    status: ContentStatus;
  };
  methodology: {
    eyebrow: string;
    headline: string;
    description: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  cta: {
    headline: string;
    description: string;
    button: { label: string; href: string };
  };
}

/** About page content */
export interface AboutContent {
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
  };
  mission: {
    headline: string;
    description: string;
  };
  values: {
    title: string;
    description: string;
  }[];
  testimonials: Testimonial[];
}

/** Methodology page content */
export interface MethodologyContent {
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
  };
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
  principles: {
    title: string;
    description: string;
  }[];
}

/** Contact page content */
export interface ContactContent {
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
  };
  form: {
    nameLabel: string;
    emailLabel: string;
    companyLabel: string;
    messageLabel: string;
    submitLabel: string;
    successMessage: string;
    errorMessage: string;
  };
}
