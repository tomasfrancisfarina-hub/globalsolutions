import { notFound } from "next/navigation";
import { locales, type Locale } from "@/types/locale";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return children;
}
