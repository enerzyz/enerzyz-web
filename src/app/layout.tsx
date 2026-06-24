import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import CookieBanner from "@/components/cookie-banner";
import "./globals.css";

const SITE_URL = "https://enerzyz.com";

const primarySans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const codeMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Enerzyz | AI Operating System for Energy Assets",
    template: "%s | Enerzyz",
  },
  description:
    "AI operating system for energy assets. Cut energy costs 30%+, extend asset life 25%+, and hit net-zero targets — autonomously.",
  keywords: [
    "energy asset management",
    "AI building optimization",
    "predictive maintenance HVAC",
    "smart building platform",
    "facility management AI",
    "chiller optimization",
    "HVAC optimization",
    "energy efficiency software",
    "building automation AI",
    "SCADA AI integration",
    "BMS optimization",
    "autonomous facility management",
    "commercial building energy management",
    "data center cooling optimization",
    "industrial energy optimization",
    "Enerzyz",
    "energy asset autopilot",
    "predictive energy analytics",
    "net zero building technology",
    "energy usage optimization",
    "HVAC energy conservation",
    "smart building",
    "AI powered BMS",
    "ESG compliance automation",
    "equipment lifecycle management",
  ],
  authors: [{ name: "Enerzyz", url: SITE_URL }],
  creator: "Enerzyz",
  publisher: "Enerzyz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Enerzyz",
    title: "Enerzyz | Autopilot for Energy Assets",
    description:
      "AI operating system for energy assets. Cut energy costs 30%+, extend asset life 25%+, and hit net-zero targets — autonomously.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enerzyz | Autopilot for Energy Assets",
    description:
      "Cut energy costs 30%+, extend asset life 25%+, hit net-zero targets. AI-powered facility management.",
    creator: "@enerzyz",
    site: "@enerzyz",
  },
  category: "Technology",
};

/* JSON-LD structured data for Organization + WebSite */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Enerzyz",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/enerzyz-logo-long.png`,
      },
      description:
        "AI operating system for energy assets — predictive optimization for HVAC, chillers, generators, BESS, pumps, and more.",
      sameAs: [
        "https://www.linkedin.com/company/enerzyz",
        "https://www.youtube.com/@Enerzyz",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "team@enerzyz.com",
        contactType: "sales",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Enerzyz",
      publisher: { "@id": `${SITE_URL}/#organization` },
      description:
        "Autopilot for energy assets — AI-driven optimization for commercial buildings, data centers, hospitals, and industrial facilities.",
    },
    {
      "@type": "SoftwareApplication",
      name: "Enerzyz OS",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud",
      url: "https://os.enerzyz.com",
      description:
        "AI-powered energy asset management platform with predictive maintenance, autonomous optimization, and real-time facility control.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        price: "0",
        description: "Book a demo for custom pricing",
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${primarySans.variable} ${codeMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google tag (gtag.js) — GA4 + Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7D7JZWE943"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7D7JZWE943');
            gtag('config', 'AW-17791793912');
          `}
        </Script>
        {/* Apollo website visitor tracking */}
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`
            function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;o.async=!0;o.defer=!0;
            o.onload=function(){window.trackingFunctions.onLoad({appId:"69673b00ee8147001d2af160"})};
            document.head.appendChild(o)}initApollo();
          `}
        </Script>
        <SiteHeader />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
