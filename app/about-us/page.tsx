import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Blue Bow Maritime Liberia Ltd—our mission, vision, and dedication to reliable maritime solutions in Liberia and beyond.",
  openGraph: {
    title: "Blue Bow Maritime Liberia | About Us",
    description:
      "Learn about Blue Bow Maritime Liberia Ltd—our mission, vision, and dedication to reliable maritime solutions in Liberia and beyond.",
    url: `${siteUrl}/about-us/`,
    siteName: "Blue Bow Maritime Liberia",
    images: [
      {
        url: "/img/wef.JPG",
        width: 1200,
        height: 630,
        alt: "Blue Bow Maritime Liberia team and operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Bow Maritime Liberia | About Us",
    description:
      "Learn about Blue Bow Maritime Liberia Ltd—our mission, vision, and dedication to reliable maritime solutions in Liberia and beyond.",
    images: ["/img/wef.JPG"],
  },
  alternates: {
    canonical: `${siteUrl}/about-us/`,
  },
};

const Page = () => {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[320px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/container-vessel-4989914_1280.jpg"
            alt="Container Vessel Navigating Open Waters"
            fill
            priority
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-black/60"
            aria-hidden="true"
          ></div>
        </div>
        <div className="container absolute inset-0 z-10 mx-auto flex items-center justify-center">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            About Blue Bow Maritime
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {/* Who We Are */}
        <section className="mb-16">
          <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-700">
                WHO WE ARE
              </p>
              <h2 className="mt-4 max-w-lg text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted Maritime Solutions in Liberia
              </h2>
              <p className="mt-5 text-lg text-gray-700 leading-relaxed">
                Blue Bow Maritime Liberia Ltd, headquartered in Liberia, is a
                premier provider accredited by the Liberia Maritime Authority.
                We specialize in Third-Party P&I Insurance, Shipping Agency,
                Stevedoring, and tailored marine solutions for the global
                shipping industry. Our experienced team delivers safe,
                efficient, and reliable services that exceed expectations.
              </p>
              <p className="mt-4 text-base text-gray-700 md:text-lg leading-relaxed">
                With a robust partner network and deep expertise in local and
                international maritime regulations, we offer unmatched
                support—from cargo supervision to crew repatriation and
                insurance handling. Safety, sustainability, and excellence are
                at the core of everything we do.
              </p>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="/img/wef.JPG"
                alt="Blue Bow Maritime Liberia Team in Action"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
            <div>
              <h6 className="mb-2 font-semibold leading-5">Our Mission</h6>
              <p className="text-sm text-gray-900 leading-relaxed">
                To lead the maritime sector by delivering innovative,
                dependable, and efficient solutions that address the evolving
                demands of global shipping.
              </p>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">Our Vision</h6>
              <p className="text-sm text-gray-900 leading-relaxed">
                To foster enduring client partnerships through exceptional
                service, high standards, and a dedication to a safer, more
                sustainable maritime future.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-7xl md:mb-12">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Why Choose Us?
            </p>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Your Partner in Maritime Excellence
            </h2>
          </div>
          <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
            <div className="flex flex-col justify-center">
              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                    Proven Expertise
                  </h6>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    With decades of maritime experience, our team excels in
                    managing complex logistics—from draft surveys to on/off-hire
                    bunker assessments—ensuring top-tier service every time.
                  </p>
                  <hr className="w-full my-6 border-gray-300" />
                </div>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                    Global Reach, Local Insight
                  </h6>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    Our international presence pairs with unrivaled expertise in
                    Liberia’s maritime landscape, delivering seamless,
                    cost-effective solutions tailored to your needs.
                  </p>
                  <hr className="w-full my-6 border-gray-300" />
                </div>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                    Safety & Sustainability First
                  </h6>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    We uphold rigorous safety and sustainable practices across
                    all operations—from cargo handling to vessel
                    management—protecting our people and the planet.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <img
                className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                src="/img/rfref.JPG"
                alt="Blue Bow Maritime Liberia Operations"
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src="/img/b392ac82-5ac6-4914-b471-1603d2744fee.JPG"
                alt="Maritime Vessel Inspection"
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src="/img/dkfghfd.JPG"
                alt="Cargo Handling by Blue Bow Team"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Call-to-Action */}
      <section className="container mx-auto my-20 py-24 bg-sky-500 rounded-lg text-center">
        <h3 className="text-5xl font-semibold text-white">
          Ready to Advance Your Maritime Goals?
        </h3>
        <p className="mt-8 text-xl font-light text-white">
          Partner with us to streamline operations, enhance efficiency, and
          achieve lasting success in the maritime industry.
        </p>
        <p className="mt-8">
          <Link href={"/contact"}>
            <button
              type="button"
              className="py-5 px-16 text-lg bg-black rounded text-white transition duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95 shadow-lg"
            >
              Contact Us Now
            </button>
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Page;
