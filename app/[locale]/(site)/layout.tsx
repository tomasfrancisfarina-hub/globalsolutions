import { PageLayout } from "@/components/layout/page-layout";
import type { Locale } from "@/types";

interface SiteLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function SiteLayout({ children, params }: SiteLayoutProps) {
  const { locale } = await params;
  return <PageLayout locale={locale as Locale}>{children}</PageLayout>;
}
