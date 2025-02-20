import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Blue Bow Maritime Liberia",
  description:
    "Reach out to Blue Bow Maritime Liberia Ltd for inquiries about our maritime services—Stevedoring, Shipping, P&I Insurance, and Logistics. We’re here to assist you.",
};

const ContactPage = () => {
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
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12 sm:py-16 lg:py-20">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <header className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Let’s Connect
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Have questions or need assistance? Reach out to our team at Blue Bow Maritime Liberia—we’re ready to support your maritime needs.
            </p>
          </header>

          {/* Contact Info & Form */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Map & Contact Details */}
            <div className="relative flex flex-col rounded-lg bg-gray-300 overflow-hidden">
              <iframe
                width="100%"
                height="400"
                className="w-full"
                title="Blue Bow Maritime Liberia Location"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63444.46723854464!2d-10.829543274195577!3d6.357895524608252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf09f9c2aea20d0d%3A0x28f7876242d5b145!2sBushrod%20Island!5e0!3m2!1sen!2sgh!4v1736857337319!5m2!1sen!2sgh"
              ></iframe>
              <div className="p-6 bg-white rounded-b-lg shadow-md">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-semibold tracking-widest text-gray-900 uppercase">
                      Address
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Bushrod Island, Freeport<br />
                      Opposite the Main Gate, Monrovia
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-widest text-gray-900 uppercase">
                      Contact
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Email: <a href="mailto:pkppateh@gmail.com" className="text-blue-500 hover:underline">pkppateh@gmail.com</a><br />
                      Phone: <a href="tel:+231770444450" className="text-blue-500 hover:underline">+231 770 444 450</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="mt-1 w-full h-32 rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors duration-200 resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded bg-blue-500 px-6 py-2 text-lg text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;