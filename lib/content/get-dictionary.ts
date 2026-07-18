import type { Locale } from "@/types";
import { homeContent as homeEs } from "@/content/locales/es/home";
import { homeContent as homeEn } from "@/content/locales/en/home";
import { navigation as navEs } from "@/content/locales/es/navigation";
import { navigation as navEn } from "@/content/locales/en/navigation";
import { methodologyContent as methodologyEs } from "@/content/locales/es/methodology";
import { methodologyContent as methodologyEn } from "@/content/locales/en/methodology";
import { aboutContent as aboutEs } from "@/content/locales/es/about";
import { aboutContent as aboutEn } from "@/content/locales/en/about";
import { contactContent as contactEs } from "@/content/locales/es/contact";
import { contactContent as contactEn } from "@/content/locales/en/contact";
import type { HomeContent, Navigation, MethodologyContent, AboutContent, ContactContent } from "@/types";

const homeByLocale: Record<Locale, HomeContent> = { es: homeEs, en: homeEn };
const navigationByLocale: Record<Locale, Navigation> = { es: navEs, en: navEn };
const methodologyByLocale: Record<Locale, MethodologyContent> = { es: methodologyEs, en: methodologyEn };
const aboutByLocale: Record<Locale, AboutContent> = { es: aboutEs, en: aboutEn };
const contactByLocale: Record<Locale, ContactContent> = { es: contactEs, en: contactEn };

export function getHomeContent(locale: Locale): HomeContent {
  return homeByLocale[locale] ?? homeByLocale.en;
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
  return {
    home: getHomeContent(locale),
    navigation: getNavigation(locale),
    methodology: getMethodologyContent(locale),
    about: getAboutContent(locale),
    contact: getContactContent(locale),
  };
}

export type Dictionary = ReturnType<typeof getDictionary>;
