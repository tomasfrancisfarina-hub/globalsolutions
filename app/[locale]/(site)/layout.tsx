import { PageLayout } from "@/components/layout/page-layout";
import { requireLocale } from "@/lib/i18n/require-locale";

interface SiteLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function SiteLayout({ children, params }: SiteLayoutProps) {
  const { locale } = await params;
  return <PageLayout locale={requireLocale(locale)}>{children}</PageLayout>;
}
