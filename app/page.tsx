import { Carousel } from "@/components/carousel";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Services } from "@/components/services";


export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Blue Bow Maritime Liberia—your trusted partner for innovative maritime solutions in Liberia and beyond.",
  openGraph: {
    title: "Blue Bow Maritime Liberia | Home",
    description:
      "Welcome to Blue Bow Maritime Liberia—your trusted partner for innovative maritime solutions in Liberia and beyond.",
    images: [
      {
        url: "/img/hero11.jpeg", 
        width: 1200,
        height: 630,
        alt: "Blue Bow Maritime Liberia Operations",
      },
    ],
  },
  twitter: {
    images: ["/img/hero11.jpeg"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="text-gray-900">
        <Carousel />
        <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Welcome to <br />
                  Blue Bow Maritime Liberia
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Blue Bow Maritime Agency Liberia Ltd is proudly accredited by
                  the Liberia Maritime Authority as a trusted provider of Third-Party
                  P&I Insurance, Shipping Agency, and Stevedoring services. Based in
                  Liberia, we deliver a full spectrum of maritime solutions, from
                  marine operations to comprehensive insurance support. Our mission
                  is simple: to provide safe, reliable, and efficient services tailored
                  to the needs of the global maritime industry. With extensive
                  experience and a dedicated team, we prioritize innovation, security,
                  and client satisfaction in everything we do.
                </p>
              </div>
              <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
                <div>
                  <h6 className="mb-2 font-semibold leading-5">Our Mission</h6>
                  <p className="text-sm text-gray-900">
                    To lead the maritime industry with innovative, dependable, and
                    efficient solutions that adapt to the evolving demands of global
                    shipping.
                  </p>
                </div>
                <div>
                  <h6 className="mb-2 font-semibold leading-5">Our Vision</h6>
                  <p className="text-sm text-gray-900">
                    To forge lasting partnerships by delivering exceptional value,
                    upholding the highest service standards, and promoting a safer,
                    more sustainable maritime future.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-56 sm:h-96">
              <Image
                src="/img/hero11.jpeg"
                alt="Blue Bow Maritime Operations"
                fill
                className="object-cover rounded shadow-lg"
              />
            </div>
          </div>
        </section>
        <Services />
        <section className="container mx-auto max-w-7xl my-20 py-20 bg-sky-500 rounded-lg text-center">
          <h3 className="text-5xl font-semibold text-white">
            Ready to Transform Your Maritime Operations?
          </h3>
          <p className="mt-8 text-xl font-light text-white">
            Discover tailored solutions that optimize efficiency, boost growth,
            and ensure long-term success in the maritime industry.
          </p>
          <p className="mt-8">
            <Link href="/contact"> 
              <button
                type="button"
                aria-label="Contact Blue Bow Maritime Liberia"
                className="py-5 px-16 text-lg bg-black rounded text-white transition duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95 shadow-lg"
              >
                Contact Us Today
              </button>
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}