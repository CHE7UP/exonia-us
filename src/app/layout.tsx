import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavBar from "../components/navbar/TopNavBar";
import MainNavBar from "@/components/navbar/MainNavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'Exonia North America | Sustainable & Innovative Packaging',
  description: 'Exonia North America delivers custom, biodegradable paper packaging solutions for food, pharma, and industrial markets across the U.S.',
  keywords: [
    'sustainable packaging',
    'biodegradable bags',
    'custom packaging',
    'eco-friendly',
    'North America',
    'food packaging',
    'pharma packaging',
    'industrial packaging'
  ],
  alternates: {
    canonical: 'https://exonia.us',
  },
  openGraph: {
    title: 'Exonia North America | Sustainable & Innovative Packaging',
    description: 'From biodegradable paper shopping bags to multi-layer industrial sacks, Exonia North America provides high-quality, eco-friendly packaging tailored for U.S. food, pharma, and industrial brands.',
    url: 'https://exonia.us',
    siteName: 'Exonia North America',
    type: 'website',
    images: [
      {
        url: 'https://exonia.us/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Exonia North America sustainable packaging solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exonia North America | Sustainable & Innovative Packaging',
    description: 'Custom biodegradable paper bags, multi-layer sacks and more—Exonia North America’s eco-friendly packaging for U.S. food, pharma & industrial markets.',
    images: ['https://exonia.us/og-image.png']
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
        <TopNavBar />
        <MainNavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
