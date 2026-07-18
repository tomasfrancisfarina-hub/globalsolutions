import Script from "next/script";

/** Load GA4 only when explicitly enabled and ID is configured */
export function shouldLoadAnalytics(): boolean {
  return (
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true" &&
    Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)
  );
}

export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!shouldLoadAnalytics() || !measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
