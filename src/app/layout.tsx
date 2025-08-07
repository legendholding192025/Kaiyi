import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAIYI UAE",
  description: "Discover KAIYI's cutting-edge solutions and innovative approach to technology and design.",
  icons: {
    icon: [
      { url: '/kaiyi.ico?v=3', sizes: '32x32', type: 'image/x-icon' },
      { url: '/kaiyi.ico?v=3', sizes: '16x16', type: 'image/x-icon' },
    ],
    shortcut: '/kaiyi.ico?v=3',
    apple: '/kaiyi.ico?v=3',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/kaiyi.ico?v=3" />
        <link rel="shortcut icon" type="image/x-icon" href="/kaiyi.ico?v=3" />
        <link rel="apple-touch-icon" href="/kaiyi.ico?v=3" />
        <link rel="icon" href="/kaiyi.ico?v=3" />
        <link rel="icon" type="image/png" href="/kaiyi.ico?v=3" />
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
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
