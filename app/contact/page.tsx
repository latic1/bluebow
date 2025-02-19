import Image from "next/image";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "...",
};

const page = () => {
  return (
    <div className="">
      <div className="relative h-[320px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/container-vessel-4989914_1280.jpg"
            alt="Container Vessel at Sea"
            layout="fill"
            objectFit="cover"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-black/60"
            aria-hidden="true"
          ></div>
        </div>
        <div className="container absolute inset-9 z-10 mx-auto flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0 md:w-1/2">
            <h1 className="mb-2 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Contact
            </h1>
          </div>
        </div>
      </div>

      <section className="body-font relative py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                In hac habitasse platea dictumst
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-wrap px-5 sm:flex-nowrap">
          <div className="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 md:w-1/2 lg:w-2/3">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63444.46723854464!2d-10.829543274195577!3d6.357895524608252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf09f9c2aea20d0d%3A0x28f7876242d5b145!2sBushrod%20Island!5e0!3m2!1sen!2sgh!4v1736857337319!5m2!1sen!2sgh"
            ></iframe>

            <div className="relative flex flex-wrap rounded bg-white py-6 shadow-md">
              <div className="px-6 lg:w-1/2">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  BUSHROD ISLAND, FREEPORT. OPP. THE MAIN GATE, MONRO{" "}
                </p>
              </div>
              <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                  EMAIL
                </h2>
                <a className="leading-relaxed text-blue-500">
                  pkppateh@gmail.com{" "}
                </a>
                <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">
                  PHONE
                </h2>
                <p className="leading-relaxed">0770444450</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col bg-white md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3">
            {/* <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p> */}
            <div className="relative mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              ></textarea>
            </div>
            <button className="rounded border-0 bg-blue-500 px-6 py-2 text-lg text-white hover:bg-blue-600 focus:outline-none">
              Button
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
