import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://yttoscript.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YTTOScript | Fast YouTube to Text Script Converter",
    template: "%s | YTTOScript",
  },
  description:
    "Convert YouTube videos into clean, professional scripts instantly with YTTOScript. Fast, simple, and creator-friendly AI-powered transcription.",
  keywords: [
    "youtube to script",
    "youtube transcript",
    "youtube to text",
    "video to script converter",
    "youtube caption to text",
    "creator tools",
    "ai transcription tool",
    "content repurposing tool",
    "youtube transcript generator",
    "youtube video to script",
    "youtube to hindi script",
    "youtube script converter",
  ],
  applicationName: "YTTOScript",
  authors: [{ name: "YTTOScript", url: siteUrl }],
  creator: "YTTOScript",
  publisher: "YTTOScript",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "YTTOScript",
    title: "YTTOScript | Fast YouTube to Text Script Converter",
    description:
      "Convert YouTube videos into clean, professional scripts instantly with AI-powered formatting.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YTTOScript - YouTube to Script Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YTTOScript | Fast YouTube to Text Script Converter",
    description:
      "Convert YouTube videos into clean, professional scripts instantly with AI-powered formatting.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "YTTOScript",
    url: siteUrl,
    description:
      "Convert YouTube videos into clean, professional scripts instantly with AI-powered transcription.",
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "YTTOScript",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@yttoscript.com",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen bg-[#f9fafb] text-gray-900 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        <CookieBanner />

        <Script
          id="adsterra-popunder"
          src="https://pl29193773.profitablecpmratenetwork.com/53/e0/db/53e0db33560292ecf4c1245a741cf94e.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}