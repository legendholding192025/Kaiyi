import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import PrivacyPolicyBar from "@/components/PrivacyPolicyBar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAIYI UAE - Premium Cars & SUVs | Family Cars | Test Drive Available",
  description: "Discover KAIYI's premium cars and SUVs in UAE. Book test drive for KAIYI X7, X3 Pro, and E5 models. Family cars designed for comfort and adventure. Visit our showroom today.",
  keywords: "KAIYI UAE, KAIYI cars, KAIYI X7, KAIYI X3 Pro, KAIYI E5, SUV cars, family cars, car dealership UAE, test drive KAIYI, KAIYI 2026, KAIYI price UAE, KAIYI agent UAE",
  authors: [{ name: "KAIYI International" }],
  creator: "KAIYI International",
  publisher: "KAIYI International",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kaiyi.ae'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ar': '/ar',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kaiyi.ae',
    siteName: 'KAIYI UAE',
    title: 'KAIYI UAE - Premium Cars & SUVs | Family Cars | Test Drive Available',
    description: 'Discover KAIYI\'s premium cars and SUVs in UAE. Book test drive for KAIYI X7, X3 Pro, and E5 models. Family cars designed for comfort and adventure.',
    images: [
      {
        url: 'https://cdn.legendholding.com/images/cdn_68933f58b721e4.14363203_20250806_114112.jpg',
        width: 1200,
        height: 630,
        alt: 'KAIYI X7 - Where Family Adventures Begin',
      },
      {
        url: 'https://cdn.legendholding.com/images/cdn_68933ff403d2b1.16599158_20250806_114348.jpg',
        width: 1200,
        height: 630,
        alt: 'KAIYI X3 Pro - Designed for comfort and styled to fit your life',
      },
      {
        url: 'https://cdn.legendholding.com/images/cdn_6893408dd09af2.58861825_20250806_114621.jpg',
        width: 1200,
        height: 630,
        alt: 'KAIYI E5 - Sporty efficiency with the power you need every day',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAIYI UAE - Premium Cars & SUVs | Family Cars | Test Drive Available',
    description: 'Discover KAIYI\'s premium cars and SUVs in UAE. Book test drive for KAIYI X7, X3 Pro, and E5 models.',
    images: ['https://cdn.legendholding.com/images/cdn_68933f58b721e4.14363203_20250806_114112.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: '/kaiyi.ico',
    shortcut: '/kaiyi.ico',
    apple: '/kaiyi.ico',
  },
  manifest: '/site.webmanifest',
  category: 'automotive',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "KAIYI International",
              "url": "https://kaiyi.ae",
              "logo": "https://kaiyi.ae/kaiyi.ico",
              "description": "Premium car manufacturer specializing in family cars and SUVs",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "UAE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "UAE"
              },
              "sameAs": [
                "https://kaiyiglobal.com"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <PrivacyPolicyBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
