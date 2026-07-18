/**
 * Global Solutions — Feature Flags
 *
 * Toggle future capabilities without modifying core architecture.
 * See docs/ROADMAP.md for activation timeline.
 */

export const features = {
  /** Multi-language support — ES + EN from day one */
  i18n: true,

  /** Insights / Blog section for SEO content */
  blog: false,

  /** Client private area */
  clientPortal: false,

  /** Investor portal */
  investorPortal: false,

  /** Conversational AI assistant */
  conversationalAI: false,

  /** Analytics tracking */
  analytics: false,

  /** CRM integration (HubSpot, Pipedrive) */
  crm: false,

  /** SEM landing pages — Google Ads optimized */
  semLandingPages: true,
} as const;

export type Features = typeof features;
export type FeatureKey = keyof Features;

/** Check if a feature is enabled */
export function isFeatureEnabled(feature: FeatureKey): boolean {
  return features[feature];
}
