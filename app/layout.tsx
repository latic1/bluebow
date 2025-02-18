import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav-bar";
import { Footer } from "@/components/Footer";

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

export const metadata = {
  title: "Blue Bow Maritime LIB",
  description:
    "We specialize in offering a comprehensive range of services that include shipping, stevedoring, P&I insurance, and marine operations.",
  icons: {
    icon: "/img/favicon.ico",
  },
  openGraph: {
    title: "Blue Bow Maritime LIB",
    description:
      "Comprehensive maritime services including shipping, stevedoring, and marine operations.",
    url: "https://www.bluebowmaritimelib.com",
    siteName: "Blue Bow Maritime LIB",
    images: [
      {
        url: "/img/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Blue Bow Maritime LIB Logo",
      },
    ],
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
