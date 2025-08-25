"use client";
// import type { Metadata } from "next";
import "../globals.css";
import PageWrapper from "@/compontents/ui/layout/PageWrapper";
import Script from "next/script";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

////////////////////////////

function saveOrUpdateUTMParameters() {
  if (typeof window !== "undefined") {
    const queryParams = new URLSearchParams(window.location.search);
    // Define an array to store UTM parameters
    const utmParams: { key: string; value: string | null }[] = [];

    if (queryParams.has("utm_source")) {
      utmParams.push({
        key: "utm_source",
        value: queryParams.get("utm_source"),
      });
    }
    if (queryParams.has("utm_medium")) {
      utmParams.push({
        key: "utm_medium",
        value: queryParams.get("utm_medium"),
      });
    }
    if (queryParams.has("utm_campaign")) {
      utmParams.push({
        key: "utm_campaign",
        value: queryParams.get("utm_campaign"),
      });
    }
    if (queryParams.has("utm_term")) {
      utmParams.push({
        key: "utm_term",
        value: queryParams.get("utm_term"),
      });
    }
    if (queryParams.has("utm_content")) {
      utmParams.push({
        key: "utm_content",
        value: queryParams.get("utm_content"),
      });
    }

    // Loop through the UTM parameters and save each one in a separate cookie
    utmParams.forEach((param) => {
      if (param.value !== null) {
        setCookie(param.key, param.value, 30);
      }
    });
  }
}

// Call the function to save or update UTM parameters
saveOrUpdateUTMParameters();

// Function to set a cookie
function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  const cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  document.cookie = cookie; // Set the cookie in the browser environment
}

/////////////////////////////
export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* <meta name="description" content="description"></meta> */}
        <meta name="robots" content="index, follow" />
        <link
          rel="shortlink"
          href={`${process.env.NEXT_PUBLIC_MAIN_SITE}/${locale}`}
        />
        {/* <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/favicon.ico`}
          type="image/x-icon"
        /> */}
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/logo.png" />

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_MAIN_SITE}/${locale}`}
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K3HZZV5Z');
            `,
          }}
        />
        <Script
          id="schema.org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kettaneh",
              url: "https://www.kettaneh.com.jo",
              logo: "https://www.kettaneh.com.jo/images/logo.png",
            }),
          }}
        />
      </head>
      <body className="font-avenir w-full overflow-x-hidden">
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
