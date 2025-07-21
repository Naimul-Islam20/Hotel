"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DynamicSwiper({ rooms }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <>
      {/* Navigation Buttons */}
      <div className="absolute left-4 top-1/2 z-20 -translate-y-1/2">
        <div ref={prevRef} className="bg-white rounded-full border border-sky-300 shadow-md flex items-center justify-center cursor-pointer w-12 h-12">
          <FaChevronLeft className="text-sky-500 text-lg" />
        </div>
      </div>

      <div className="absolute right-4 top-1/2 z-20 -translate-y-1/2">
        <div ref={nextRef} className="bg-white rounded-full border border-sky-300 shadow-md flex items-center justify-center cursor-pointer w-12 h-12">
          <FaChevronRight className="text-sky-500 text-lg" />
        </div>
      </div>

      {/* Swiper */}
      {swiperReady && (
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            if (prevRef.current && nextRef.current && swiper.params?.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-5"
        >
          {rooms.map((room, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white mb-1 rounded shadow p-0 flex flex-col w-full max-w-[400px] h-[500px] mx-auto transition overflow-hidden">
                <div className="relative w-full h-[390px]">
                  <Image
                    src={room.img}
                    alt={room.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-6 pt-4 mt-0 flex flex-col flex-grow">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{room.title}</h3>
                    <span className="text-gray-500 bg-gray-200 h-8 w-25 pt-1 ps-3 rounded-lg font-semibold">
                      {room.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">{room.desc}</p>
                  <div className="mt-auto pt-6 flex justify-between">
                    <Link href={room.path} className="pb-4 text-sky-500 underline tracking-widest transition">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
