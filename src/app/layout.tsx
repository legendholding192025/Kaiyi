import type { Metadata } from "next";
import { Bruno_Ace_SC } from "next/font/google";
import "./globals.css";

const brunoAceSC = Bruno_Ace_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bruno-ace-sc",
});

export const metadata: Metadata = {
  title: "KAIYI - Innovation Meets Excellence",
  description: "Discover KAIYI's cutting-edge solutions and innovative approach to technology and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${brunoAceSC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
