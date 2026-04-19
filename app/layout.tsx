import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = 'https://yttoscript.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'YTTOScript | Fast YouTube to Text Script Converter',
    template: '%s | YTTOScript',
  },
  description:
    'Convert YouTube videos into clean, professional scripts instantly with YTTOScript. Fast, simple, and creator-friendly AI-powered transcription.',
  keywords: [
    'youtube to script',
    'youtube transcript',
    'youtube to text',
    'video to script converter',
    'youtube caption to text',
    'creator tools',
    'ai transcription tool',
    'content repurposing tool',
    'youtube transcript generator',
    'youtube video to script',
    'youtube to hindi script',
    'youtube script converter',
  ],
  applicationName: 'YTTOScript',
  authors: [{ name: 'YTTOScript', url: siteUrl }],
  creator: 'YTTOScript',
  publisher: 'YTTOScript',
  category: 'technology',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'hi-IN': '/hi',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'YTTOScript',
    title: 'YTTOScript | Fast YouTube to Text Script Converter',
    description:
      'Convert YouTube videos into clean, professional scripts instantly with AI-powered formatting.',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'YTTOScript - YouTube to Script Converter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YTTOScript | Fast YouTube to Text Script Converter',
    description:
      'Convert YouTube videos into clean, professional scripts instantly with AI-powered formatting.',
    images: ['/og-image.png'],
    creator: '@yourhandle',
    site: '@yourhandle',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'YTTOScript',
    url: siteUrl,
    description:
      'Convert YouTube videos into clean, professional scripts instantly with AI-powered transcription.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'YTTOScript',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      'https://twitter.com/yourhandle',
      'https://github.com/yourhandle',
      'https://youtube.com/@yourchannel',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'support@yttoscript.com',
        url: `${siteUrl}/contact`,
        availableLanguage: ['English', 'Hindi'],
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
      </body>
    </html>
  );
}