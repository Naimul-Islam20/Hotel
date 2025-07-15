"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const roomImages = [
  "/rooms/deluxe1.jpg",
  "/rooms/deluxe2.jpg",
  "/rooms/deluxe3.jpg",
  "/rooms/deluxe4.jpg",
];

export default function RoomImageSlider() {
  return (
    <div className="relative">
      {/* Left Arrow */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 swiper-button-prev">
        <FaCircleChevronLeft className="text-4xl text-blue-600 hover:text-blue-800 transition cursor-pointer bg-white rounded-full shadow-md" />
      </div>

      {/* Right Arrow */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 swiper-button-next">
        <FaCircleChevronRight className="text-4xl text-blue-600 hover:text-blue-800 transition cursor-pointer bg-white rounded-full shadow-md" />
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="rounded-lg"
      >
        {roomImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-[250px] md:h-[450px] relative rounded-lg overflow-hidden shadow">
              <Image
                src={src}
                alt={`Room Image ${idx + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
