import { Carousel } from "@/components/carousel";
import { Services } from "@/components/servicees";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="text-gray-900">
        <Carousel />{" "}
        <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Welcome to <br />
                  Blue Bow Maritime LIB
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Blue Bow Maritime LIB is a leading maritime services provider
                  based in Liberia. We specialize in offering a comprehensive
                  range of services that include shipping, stevedoring, P&I
                  insurance, and marine operations. Our mission is to provide
                  reliable, efficient, and safe solutions to meet the needs of
                  clients in the maritime industry. With years of experience and
                  a skilled team, we are dedicated to delivering unparalleled
                  service with a focus on innovation, security, and customer
                  satisfaction.
                </p>
              </div>
              <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
                <div>
                  <h6 className="mb-2 font-semibold leading-5">Mission</h6>
                  <p className="text-sm text-gray-900">
                    To be the leading provider of comprehensive maritime
                    services, offering innovative, reliable, and efficient
                    solutions that meet the dynamic needs of the global shipping
                    industry.
                  </p>
                </div>
                <div>
                  <h6 className="mb-2 font-semibold leading-5">Vision </h6>
                  <p className="text-sm text-gray-900">
                    To build long-term partnerships with clients by delivering
                    exceptional value, maintaining high standards of service,
                    and creating a safer, more sustainable maritime environment.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="/img/hero11.jpeg"
                alt=""
                height={224}
                width={400}
              />
            </div>
          </div>
        </section>
        <Services />
        <section className="container mx-auto my-20 py-20 bg-sky-500 rounded-lg text-center">
          <h3 className="text-5xl font-semibold text-white">
            Ready to Elevate Your Business?
          </h3>
          <p className="mt-8 text-xl font-light text-white">
            Unlock your potential with solutions designed to streamline
            operations, drive growth, and create lasting success.
          </p>
          <p className="mt-8">
            <Link href={"/contact"}>
              {" "}
              <button
                type="button"
                className="py-5 px-16 text-lg bg-black rounded text-white transition duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95 shadow-lg"
              >
                Get in Touch
              </button>
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
