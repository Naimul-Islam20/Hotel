"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

import { FaCaretLeft, FaCaretRight, FaWifi, FaTv, FaFan, FaUtensils, FaBath, FaSnowflake, FaDoorOpen } from "react-icons/fa";

export default function RoomCard({ room }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Extra static features (can be merged with room.features if dynamic)
  const extraFeatures = [
    { icon: <FaWifi />, text: "Free Wi-Fi" },
    { icon: <FaTv />, text: "Smart TV" },
    { icon: <FaSnowflake />, text: "AC Room" },
    { icon: <FaBath />, text: "Attached Bath" },
    { icon: <FaUtensils />, text: "Dining Facility" },
    { icon: <FaFan />, text: "Ceiling Fan" },
    { icon: <FaDoorOpen />, text: "Private Entrance" },
  ];

  return (
    <div className="bg-white rounded-xl mx-5 shadow-md transition overflow-hidden border border-gray-200">
      {/* Swiper Slider */}
      <div className="relative h-80 sm:h-[22rem] md:h-[26rem]">
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
          className="absolute top-1/2 -translate-y-1/2 left-2 z-10 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full"
        >
          <FaCaretLeft size={22} />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 right-2 z-10 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full"
        >
          <FaCaretRight size={22} />
        </button>
      </div>

      {/* Title & Price */}
      <div className="flex justify-between items-center px-4 pt-4">
        <h3 className="text-3xl ">{room.title}</h3>
        <p className="text-base text-blue-600 font-bold">{room.price}</p>
      </div>

      {/* Features */}
      <div className="px-4 py-6 flex flex-wrap gap-4">
        {[...room.features, ...extraFeatures].map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-gray-700 text-sm w-[calc(50%-0.5rem)]"
          >
            <span className="text-lg ">{feature.icon}</span>
            <span>{feature.text}</span>
          </div>
        ))}
      </div>

      {/* Description + Actions */}
      <div className="px-4 pb-5 space-y-5">
        <p className="text-sm text-gray-500">{room.desc}</p>
        <p className="text-sm text-gray-500">
          Our rooms are designed to provide maximum comfort with all essential amenities to make your stay relaxing and memorable. Whether you're here for business or leisure, we got you covered.
        </p>
        <div className="flex justify-between items-center pt-2">
         <Link
              href={room.path}
              className="pb-4 text-sky-500 underline tracking-widest transition"
            >
              Details
            </Link>
          <Link
            href="/rout/contact"
            className="text-sm border px-4 py-1.5 rounded hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
