"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const rooms = [
  {
    title: "Deluxe Room",
    img: "/img/h21.jpg",
    price: "$120/night",
    desc: "Perfect for couples or business travelers.",
  },
  {
    title: "Executive Suite",
    img: "/img/h21.jpg",
    price: "$180/night",
    desc: "Luxurious suite with space & comfort for VIPs.",
  },
  {
    title: "Family Room",
    img: "/img/h21.jpg",
    price: "$150/night",
    desc: "Spacious room perfect for families.",
  },
  {
    title: "Twin Room",
    img: "/rooms/twin.jpg",
    price: "$110/night",
    desc: "Great for friends or solo travelers sharing.",
  },
  {
    title: "Single Room",
    img: "/img/h21.jpg",
    price: "$90/night",
    desc: "Affordable option for solo travelers.",
  },
  {
    title: "Premium Room",
    img: "/img/h21.jpg",
    price: "$200/night",
    desc: "Top-tier comfort & exclusive amenities.",
  },
];

export default function RoomSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto relative">
      <h2 className="text-4xl font-bold text-center mb-12">
        Room Types & Accommodations
      </h2>

      {/* Navigation Buttons */}
      {/* Left Arrow */}
<div className="absolute left-2  sm:left-4 md:left-6 lg:left-8 top-1/2 z-20 -translate-y-1/2">
  <div
    ref={prevRef}
    className="bg-white rounded-full border border-sky-300 shadow-md flex items-center justify-center cursor-pointer w-12 h-12 md:w-14 md:h-14"
  >
    <FaChevronLeft className="text-sky-500 text-lg md:text-xl" />
  </div>
</div>

{/* Right Arrow */}
<div className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 z-20 -translate-y-1/2">
  <div
    ref={nextRef}
    className="bg-white rounded-full  shadow-md flex items-center justify-center cursor-pointer w-12 h-12 md:w-14 md:h-14"
    className="bg-white rounded-full border border-sky-300 shadow-md flex items-center justify-center cursor-pointer w-12 h-12 md:w-14 md:h-14"
  >
    <FaChevronRight className="text-sky-500 text-lg md:text-xl" />
  </div>
</div>


      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (
            typeof window !== "undefined" &&
            swiper?.params?.navigation &&
            prevRef.current &&
            nextRef.current
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {rooms.map((room, i) => (
        <SwiperSlide key={i}>
  <div className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col h-full w-full  max-w-[400px] mx-auto transition">
    <div className="overflow-hidden rounded-2xl">
      <Image
        src={room.img}
        alt={room.title}
        width={600}
        height={400}
        className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="mt-5 flex flex-col flex-grow">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{room.title}</h3>
        <span className="text-blue-600 font-semibold">{room.price}</span>
      </div>
      <p className="text-gray-600 text-sm mt-2">{room.desc}</p>
      <div className="mt-auto pt-6 flex justify-between">
        <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded-full hover:bg-gray-700 transition">
          Details
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</SwiperSlide>

        ))}
      </Swiper>

      <div className="custom-pagination mt-8 text-center" />
    </section>
  );
}
