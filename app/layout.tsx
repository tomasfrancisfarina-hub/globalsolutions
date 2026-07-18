import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { siteConfig } from "@/config/site";
import { GoogleAnalytics } from "@/lib/analytics/google-analytics";
import { LOCALE_HEADER } from "@/lib/i18n/constants";
import { defaultLocale, type Locale } from "@/types/locale";
import { isValidLocale } from "@/lib/i18n/config";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  ...(googleVerification && {
    verification: { google: googleVerification },
  }),
};

async function getLocale(): Promise<Locale> {
  const headersList = await headers();
  const locale = headersList.get(LOCALE_HEADER);
  if (locale && isValidLocale(locale)) return locale;
  return defaultLocale;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-background font-sans antialiased">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
