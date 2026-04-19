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
  ],
  applicationName: 'YTTOScript',
  authors: [{ name: 'YTTOScript' }],
  creator: 'YTTOScript',
  publisher: 'YTTOScript',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
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
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen bg-[#f9fafb] text-gray-900 antialiased`}>
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