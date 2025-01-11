import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <section className="relative h-[320px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/container-vessel-4989914_1280.jpg"
            alt="Container Vessel at Sea"
            layout="fill"
            objectFit="cover"
            priority
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
              About Us{" "}
            </h1>
          </div>
        </div>
      </section>{" "}
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <p className="text-sm font-semibold uppercase tracking-widest">
                WHO WE ARE
              </p>

              {/* <h2 className="max-w-lg mt-5 mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                We are the leading maritime services provider based in Liberia.
              </h2> */}
              <p className="mt-4 text-base text-gray-700 md:text-lg leading-relaxed">
                Founded and based in Liberia, Blue Bow Maritime LIB is a trusted
                partner in the maritime industry. We offer a wide range of
                services tailored to meet the unique needs of the global
                shipping and logistics sectors. Our team of experienced
                professionals is committed to delivering superior service and
                ensuring safe and efficient operations for our clients.
              </p>
              <p className="text-base text-gray-700 md:text-lg leading-relaxed">
                With a strong network of partners and a deep understanding of
                local and international maritime regulations, we are able to
                provide best-in-class services. Our commitment to safety,
                sustainability, and operational excellence ensures that our
                clients receive the highest quality solutions.
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
        <div className="mt-10">
          {" "}
          <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
            <div>
              <h6 className="mb-2 font-semibold leading-5">Mission </h6>
              <p className="text-sm text-gray-900 leading-relaxed">
                To be the leading provider of comprehensive maritime services,
                offering innovative, reliable, and efficient solutions that meet
                the dynamic needs of the global shipping industry.
              </p>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">Vision </h6>
              <p className="text-sm text-gray-900 leading-relaxed">
                To build long-term partnerships with clients by delivering
                exceptional value, maintaining high standards of service, and
                creating a safer, more sustainable maritime environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-7xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Why Choose Us?{" "}
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Excellence in Maritime Solutions
          </h2>
          {/* <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p> */}
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
                  Expertise and Experience
                </h6>
                <p className="text-sm text-gray-900">
                  With years of experience in the maritime industry, Blue Bow
                  Maritime LIB brings deep knowledge and operational excellence
                  to every project we undertake. Our team is skilled in
                  navigating the complexities of maritime logistics and
                  operations, delivering the highest standards of service to our
                  clients.
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
                  Global Reach, Local Knowledge
                </h6>
                <p className="text-sm text-gray-900">
                  While we operate internationally, our deep understanding of
                  Liberia’s ports and logistics network gives us an edge in
                  delivering effective, locally-informed solutions for our
                  clients. Our global reach ensures we can meet the needs of
                  clients worldwide, while our local expertise ensures
                  cost-effective and efficient operations.
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
                  Commitment to Safety and Sustainability
                </h6>
                <p className="text-sm text-gray-900">
                  We prioritize safety and environmental sustainability in
                  everything we do. From safe cargo handling and vessel
                  operations to complying with environmental regulations, Blue
                  Bow Maritime LIB ensures that all services are delivered in a
                  manner that protects both people and the planet.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto my-20 py-24 bg-sky-500 rounded-lg text-center">
        <h3 className="text-5xl font-semibold text-white">
          Ready to Elevate Your Business?
        </h3>
        <p className="mt-8 text-xl font-light text-white">
          Unlock your potential with solutions designed to streamline
          operations, drive growth, and create lasting success.
        </p>
        <p className="mt-8">
          
          <button
            type="button"
            className="py-5 px-16 text-lg bg-black rounded text-white"
          >
            Get Started Today
          </button>
        </p>
      </section>
    </div>
  );
};

export default Page;
