"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function RoomCard({ room }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-white rounded shadow transition overflow-hidden border border-gray-200">
      {/* Swiper Slider */}
      <div className="relative h-64 sm:h-72 md:h-80">
        <Swiper
          modules={[Navigation]}
          loop={true}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="w-full h-full"
        >
          {room.img.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={room.title}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute top-1/2 -translate-y-1/2 left-2 z-10 text-white bg-black/40 hover:bg-black/70 p-1 rounded-full"
        >
          <FaCaretLeft size={20} />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 right-2 z-10 text-white bg-black/40 hover:bg-black/70 p-1 rounded-full"
        >
          <FaCaretRight size={20} />
        </button>
      </div>

      {/* Title & Price */}
      <div className="flex justify-between items-center px-4 pt-4">
        <h3 className="text-lg font-semibold">{room.title}</h3>
        <p className="text-sm text-blue-600 font-bold">{room.price}</p>
      </div>

      {/* Features */}
      <div className="px-4 py-3 flex flex-wrap gap-3">
        {room.features.map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-1 text-gray-700 text-sm w-[calc(33.333%-0.5rem)]"
          >
            <span className="text-base">{feature.icon}</span>
            <span>{feature.text}</span>
          </div>
        ))}
      </div>

      {/* Description + Actions */}
      <div className="px-4 pb-4 space-y-2">
        <p className="text-sm text-gray-500">{room.desc}</p>
        <div className="flex justify-between items-center pt-2">
          <button className="text-blue-600 hover:underline text-sm">
            View Details
          </button>
          <a
            href="/contact"
            className="text-sm border px-3 py-1 rounded hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
