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
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "KAIYI UAE - Premium Cars & SUVs | Family Cars",
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
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Enable debug mode
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                debug_mode: true,
                send_page_view: true,
                allow_google_signals: true,
                allow_ad_personalization_signals: true
              });
              
              // Send a test event immediately
              gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href,
                debug_mode: true
              });
              
              // Log to console for debugging
              console.log('Google Analytics initialized with tracking ID: ${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
              console.log('Current URL:', window.location.href);
              console.log('Page title:', document.title);
            `,
          }}
        />

        {/* Bing Webmaster Tools Verification */}
        <meta name="msvalidate.01" content="8F6CEAF64432436F0288577E8A27755A" />
        
        {/* Critical CSS Inline - Above the fold styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for first paint - Minimal and non-conflicting */
            body { 
              margin: 0; 
              font-family: system-ui, -apple-system, sans-serif; 
            }
            
            /* Essential layout utilities - only what's absolutely necessary */
            .min-h-screen { min-height: 100vh; }
            .relative { position: relative; }
            .absolute { position: absolute; }
            .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
            .z-10 { z-index: 10; }
            
            /* Basic flexbox - minimal */
            .flex { display: flex; }
            .items-center { align-items: center; }
            .justify-center { justify-content: center; }
            
            /* Essential spacing - minimal */
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            
            /* Critical text styles - minimal */
            .text-white { color: white; }
            .text-center { text-align: center; }
            .font-bold { font-weight: 700; }
            
            /* Essential transitions - minimal */
            .transition-opacity { transition-property: opacity; }
            .duration-1000 { transition-duration: 1000ms; }
            .opacity-100 { opacity: 1; }
            .opacity-0 { opacity: 0; }
            
            /* Critical background - minimal */
            .bg-gradient-to-br { 
              background: linear-gradient(to bottom right, #0f172a, #581c87, #0f172a); 
            }
            
            /* Essential overflow - minimal */
            .overflow-hidden { overflow: hidden; }
          `
        }} />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/kaiyi.ico" as="image" />
        <link rel="preload" href="https://cdn.legendholding.com/images/cdn_68933f58b721e4.14363203_20250806_114112.jpg" as="image" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdn.legendholding.com" />
        <link rel="dns-prefetch" href="//kaiyiglobal.com" />
        
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
