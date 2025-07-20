"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
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
    path: "/rout/rooms/deluxe",
  },
 
  {
    title: "Family Room",
    img: "/img/h21.jpg",
    price: "$150/night",
    desc: "Spacious room perfect for families.",
    path: "/rout/rooms/family",
  },
  {
    title: "Single Room",
    img: "/img/h21.jpg",
    price: "$90/night",
    desc: "Affordable option for solo travelers.",
    path: "/rout/rooms/single",
  },
  {
    title: "Premium Room",
    img: "/img/h21.jpg",
    price: "$200/night",
    desc: "Top-tier comfort & exclusive amenities.",
    path: "/rout/rooms/premium",
  },
];


export default function RoomSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full bg-sky-50 md:px-0  px-4 ">
    <section className="pt-18  pb-14  max-w-7xl mx-auto relative">
    <h2 className="text-5xl mb-3">
  Our Best Rooms
</h2>

<div className="flex justify-between mb-7 gap-4">
  <h2 className="font-bold text-gray-500 text-left flex-1">
    Our best rooms available for your vacation
  </h2>

<Link
  href="/rout/rooms/roomsPage"
  className="text-gray-700 font-semibold text-right flex-1 text-sm sm:text-base md:text-lg hover:underline  transition "
>
  View all rooms →
</Link>
</div>


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
        className="pb-5"
      >
        {rooms.map((room, i) => (
        <SwiperSlide key={i}>
  <div className="bg-white mb-1 rounded shadow p-0 flex flex-col  w-full max-w-[400px] h-[500px] mx-auto transition overflow-hidden">
  {/* Image Container */}
  <div className="relative w-full h-[390px]">
    <Image
      src={room.img}
      alt={room.title}
      fill
      className="object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* Content */}
  <div className="px-6 pt-4 mt-0 flex flex-col flex-grow">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-semibold">{room.title}</h3>
      <span className="text-gray-500 bg-gray-200 h-8 w-25 pt-1 ps-3 rounded-lg font-semibold">
        {room.price}
      </span>
    </div>
    <p className="text-gray-600 text-sm mt-2">{room.desc}</p>
    <div className="mt-auto pt-6 flex justify-between">
      <Link
    href={room.path}
    className="pb-4 text-sky-500 underline tracking-widest transition"
  >
    Details
  </Link>

    </div>
  </div>
</div>

</SwiperSlide>

        ))}
      </Swiper>

      <div className="custom-pagination mt-6 text-center" />
    </section>
    </div>
  );
}
