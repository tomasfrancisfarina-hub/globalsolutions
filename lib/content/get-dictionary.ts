import { requireLocale } from "@/lib/i18n/require-locale";
import type { Locale } from "@/types";
import { homeContent as homeEs } from "@/content/locales/es/home";
import { homeContent as homeEn } from "@/content/locales/en/home";
import { homeContent as homeDe } from "@/content/locales/de/home";
import { navigation as navEs } from "@/content/locales/es/navigation";
import { navigation as navEn } from "@/content/locales/en/navigation";
import { navigation as navDe } from "@/content/locales/de/navigation";
import { methodologyContent as methodologyEs } from "@/content/locales/es/methodology";
import { methodologyContent as methodologyEn } from "@/content/locales/en/methodology";
import { methodologyContent as methodologyDe } from "@/content/locales/de/methodology";
import { aboutContent as aboutEs } from "@/content/locales/es/about";
import { aboutContent as aboutEn } from "@/content/locales/en/about";
import { aboutContent as aboutDe } from "@/content/locales/de/about";
import { contactContent as contactEs } from "@/content/locales/es/contact";
import { contactContent as contactEn } from "@/content/locales/en/contact";
import { contactContent as contactDe } from "@/content/locales/de/contact";
import type { HomeContent, Navigation, MethodologyContent, AboutContent, ContactContent } from "@/types";

const homeByLocale: Record<Locale, HomeContent> = { es: homeEs, en: homeEn, de: homeDe };
const navigationByLocale: Record<Locale, Navigation> = { es: navEs, en: navEn, de: navDe };
const methodologyByLocale: Record<Locale, MethodologyContent> = {
  es: methodologyEs,
  en: methodologyEn,
  de: methodologyDe,
};
const aboutByLocale: Record<Locale, AboutContent> = { es: aboutEs, en: aboutEn, de: aboutDe };
const contactByLocale: Record<Locale, ContactContent> = {
  es: contactEs,
  en: contactEn,
  de: contactDe,
};

export function getHomeContent(locale: Locale): HomeContent {
  const validLocale = requireLocale(locale);
  const home = homeByLocale[validLocale];
  if (!home) {
    throw new Error(`Missing home dictionary for locale "${validLocale}"`);
  }
  return home;
}

export function getNavigation(locale: Locale): Navigation {
  return navigationByLocale[locale] ?? navigationByLocale.en;
}

export function getMethodologyContent(locale: Locale): MethodologyContent {
  return methodologyByLocale[locale] ?? methodologyByLocale.en;
}

export function getAboutContent(locale: Locale): AboutContent {
  return aboutByLocale[locale] ?? aboutByLocale.en;
}

export function getContactContent(locale: Locale): ContactContent {
  return contactByLocale[locale] ?? contactByLocale.en;
}

export function getDictionary(locale: Locale) {
  const validLocale = requireLocale(locale);
  const home = getHomeContent(validLocale);
  const navigation = navigationByLocale[validLocale];
  const methodology = methodologyByLocale[validLocale];
  const about = aboutByLocale[validLocale];
  const contact = contactByLocale[validLocale];
  if (!navigation || !methodology || !about || !contact) {
    throw new Error(`Incomplete dictionary for locale "${validLocale}"`);
  }
  return {
    home,
    navigation,
    methodology,
    about,
    contact,
  };
}

export type Dictionary = ReturnType<typeof getDictionary>;
