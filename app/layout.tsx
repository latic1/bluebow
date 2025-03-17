import { Geist, Geist_Mono } from "next/font/google";import "./globals.css";
import Navbar from "@/components/nav-bar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Blue Bow Maritime Liberia",
    template: "%s | Blue Bow Maritime Liberia",
  },
  description:
    "Blue Bow Maritime Liberia Ltd provides trusted maritime solutions across Liberia and beyond.",
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "Blue Bow Maritime Liberia",
    description:
      "Discover our comprehensive maritime services—shipping, stevedoring, P&I insurance, and logistics—tailored for safety and efficiency.",
    url: siteUrl,
    siteName: "Blue Bow Maritime Liberia",
    images: [
      {
        url: `${siteUrl}/img/logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "Blue Bow Maritime Liberia Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Bow Maritime Liberia",
    description:
      "Expert maritime services: shipping, stevedoring, P&I insurance, and logistics.",
    images: [`${siteUrl}/img/logo.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}