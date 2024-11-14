"use client";
import Image from "next/image";
import { useRef } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

function Carousel({ title }) {
  const carouselRef = useRef(null);

  const scrollAmount = () => window.innerWidth - 16; // Scroll amount based on viewport width - 1rem

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -scrollAmount(),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollAmount(),
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="p-4 relative">
      <div className="w-full flex justify-between items-center">
        <h3 className="mb-2 text-2xl font-bold">{title}</h3>
        <div className="flex gap-x-2">
          <button
            onClick={scrollRight}
            className="bg-gray-400 hover:bg-gray-50 text-gray-50 hover:text-gray-700 transition-colors duration-200 rounded-full shadow"
          >
            <CiCircleChevRight size={28} />
          </button>
          <button
            onClick={scrollLeft}
            className="bg-gray-400 hover:bg-gray-50 text-gray-50 hover:text-gray-700 transition-colors duration-200 rounded-full shadow"
          >
            <CiCircleChevLeft size={28} />
          </button>
        </div>
      </div>
      <div className="overflow-x-hidden relative">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-x-4 scroll-smooth hide-scrollbar"
        >
          {[1, 2, 3, 4, 1, 2, 3, , 3, 5, 6, 4, 5].map((item, index) => (
            <div
              key={index}
              className="flex-none w-40 p-4 bg-white shadow rounded-md"
            >
              <div className="relative w-full h-32 bg-gray-100">
                <Image
                  src="/placeholder-image.webp"
                  alt="Watch"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h4 className="mt-2 text-sm font-medium">ساعت مدل {item}</h4>
              <p className="mt-1 text-sm text-gray-600">
                {2 * item * 100},000 تومان
              </p>
              <button className="mt-2 px-3 py-1 text-xs bg-blue-500 text-white rounded-full">
                مشاهده
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
