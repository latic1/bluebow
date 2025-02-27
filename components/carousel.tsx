"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import { slides } from "@/static";

export const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="embla__slide relative flex h-[30rem] items-center justify-start lg:h-[45rem] "
          >
            {/* Overlay Content */}
            <div className="absolute z-20 flex h-full flex-col items-center justify-center p-10 text-center text-white sm:px-24 md:w-2/3 md:text-left">
              <h1 className="mb-2 text-3xl font-black sm:text-3xl lg:text-6xl">
                {slide.header}
              </h1>
              <p className="mb-2 font-semibold md:text-xl">{slide.details}</p>
              <div className="mt-5 w-full">
                <Link href="/contact">
                  <button className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-black transition hover:bg-gray-200">
                    Contact Us <ChevronRightIcon />
                  </button>
                </Link>
              </div>
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

            {/* Background Image */}
            <Image
              src={slide.image}
              alt="Background image"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 h-full w-full z-[-1]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
