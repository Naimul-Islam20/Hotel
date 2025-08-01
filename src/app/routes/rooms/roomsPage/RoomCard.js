"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

import { FaCaretLeft, FaCaretRight, FaWifi, FaTv, FaFan, FaUtensils, FaBath, FaSnowflake, FaDoorOpen } from "react-icons/fa";

export default function RoomCard({ room }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-white rounded mx-1 md:mx-5 shadow transition overflow-hidden border border-gray-200">
      {/* Swiper Slider */}
      <div className="relative h-70 sm:h-[22rem] md:h-[26rem]">
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
              <Image
                src={src}
                alt={room.title}
                fill
                style={{ objectFit: "cover" }}
                priority={idx === 0} // প্রথম ছবি priority দিলে ভালো লোড হয়
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons
        <button
          ref={prevRef}
          className="absolute top-1/2 -translate-y-1/2 left-2 z-10 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full"
        >
          <FaCaretLeft size={22} />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 right-2 z-10 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full"
        >
          <FaCaretRight size={22} />
        </button> */}
      </div>

      {/* Title & Price */}
      <div className="flex justify-between items-center px-4 pt-2 md:pt-4">
        <h3 className="text-3xl ">{room.title}</h3>
         <span className="text-gray-700 bg-gray-200 h-8 w-30 pt-1 ps-3 rounded-lg font-semibold">
                      {room.price}
                    </span>
      </div>

      {/* Features */}
      {/* <div className="px-4 py-6 flex flex-wrap gap-4">
        {[...room.features, ...extraFeatures].map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-gray-700 text-sm w-[calc(50%-0.5rem)]"
          >
            <span className="text-lg ">{feature.icon}</span>
            <span>{feature.text}</span>
          </div>
        ))}
      </div> */}

      {/* Description + Actions */}
      <div className=" px-2 md:px-4 pb-2 md:pb-5 space-y-3 md:space-y-5">
        <p className="text-sm text-gray-500">{room.desc}</p>
        <p className="text-sm text-gray-500">
         {room.about}
        </p>
        <div className="flex justify-between items-center pt-2">
         <Link
              href={room.path}
              className=" text-sky-500  underline tracking-widest transition"
            >
              Details Room
            </Link>
          <Link
            href="/routes/contact"
            className="text-sm  text-white px-4 py-1.5 bg-sky-500 rounded hover:bg-sky-600 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
