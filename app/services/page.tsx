import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";




export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Blue Bow Maritime Liberia's expert services—Stevedoring, Shipping, P&I Insurance, and Logistics—delivering efficiency and reliability in Liberia and beyond.",
  openGraph: {
    title: "Blue Bow Maritime Liberia | Our Services",
    description:
      "Explore Blue Bow Maritime Liberia's expert services—Stevedoring, Shipping, P&I Insurance, and Logistics—delivering efficiency and reliability in Liberia and beyond.",
    url: `${siteUrl}/services/`,
    siteName: "Blue Bow Maritime Liberia",
    images: [
      {
        url: "/img/slide1.jpg",
        width: 1200,
        height: 630,
        alt: "Blue Bow Maritime Liberia services overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Bow Maritime Liberia | Our Services",
    description:
      "Explore Blue Bow Maritime Liberia's expert services—Stevedoring, Shipping, P&I Insurance, and Logistics—delivering efficiency and reliability in Liberia and beyond.",
    images: ["/img/slide1.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/services/`,
  },
};

const services = [
  {
    title: "Stevedoring",
    description: `Our expert stevedoring services streamline cargo handling, reducing turnaround times and ensuring secure, efficient transfers. Using advanced equipment and proven methods, we manage bulk, breakbulk, and containerized cargo with precision. Our trained stevedores follow strict safety protocols to optimize dockside operations, keeping your port workflow seamless and on schedule.`,
    imgSrc: "/img/jjhkjhk.jpeg",
    alt: "Stevedoring team loading cargo at the port",
  },
  {
    title: "Shipping",
    description: `Our comprehensive shipping solutions prioritize punctuality, reliability, and cargo safety. We oversee every step—from logistics coordination to customs compliance—ensuring your cargo arrives on time and intact. Tailored to each shipment’s needs, our services deliver efficiency and peace of mind across the globe.`,
    imgSrc: "/img/Shippingimg.jpeg",
    alt: "Shipping vessel transporting cargo across the sea",
  },
  {
    title: "P&I Insurance",
    description: `Our Protection & Indemnity (P&I) insurance safeguards your maritime operations against risks like third-party injuries, pollution, and cargo damage. With tailored coverage and expert support, we provide the financial security you need to operate confidently and maintain smooth workflows.`,
    imgSrc: "/img/vlad-deep-mCqi3MljC4E-unsplash.jpg",
    alt: "P&I insurance support for maritime operations",
  },
  {
    title: "Logistics",
    description: `Our end-to-end logistics solutions simplify your supply chain, from warehousing and inventory management to final-mile delivery. With transparent tracking, efficient routing, and strategic planning, we enhance operational efficiency and support your business growth.`,
    imgSrc: "/img/Logisticsimg.jpeg",
    alt: "Logistics team managing supply chain operations",
  },
];

const ServicesPage = () => {
  return (
    <div className="w-full text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[320px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/container-vessel-4989914_1280.jpg"
            alt="Container Vessel Navigating Open Waters"
            fill
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Our Services
          </h1>
        </div>
      </section>

      {/* Services Section */}
      <main className="bg-white py-12 sm:py-16 lg:py-24">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Maritime Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              At Blue Bow Maritime Liberia, we deliver specialized services tailored to your needs,
              ensuring efficiency, safety, and reliability every step of the way.
            </p>
          </header>
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;