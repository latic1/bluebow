import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav-bar";
import { Footer } from "@/components/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blue Bow Maritime Agency",
  description: "We specialize in offering a comprehensive range of services that include shipping, stevedoring, P&I insurance, and marine operations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Global Meta Tags */}
        <meta name="description" content="Blue Bow Maritime Agency provides comprehensive maritime services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Blue Bow Maritime Agency" />
        <meta property="og:description" content="Comprehensive maritime services including shipping, stevedoring, and marine operations." />
        <meta property="og:image" content="/img/logo.jpeg" />
        <meta property="og:url" content="www.bluebowmaritimelib.com" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
