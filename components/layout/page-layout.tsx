import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getDictionary } from "@/lib/content/get-dictionary";
import type { Locale } from "@/types";

interface PageLayoutProps {
  locale: Locale;
  children: React.ReactNode;
}

export function PageLayout({ locale, children }: PageLayoutProps) {
  const { navigation } = getDictionary(locale);

  const ctaLabel =
    locale === "es" ? "Contacto" : "Contact";

  return (
    <>
      <Header
        locale={locale}
        navigation={navigation.main}
        ctaLabel={ctaLabel}
      />
      <main className="pt-20">{children}</main>
      <Footer locale={locale} footer={navigation.footer} />
    </>
  );
}
