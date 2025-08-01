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

const rooms = [
  {
    title: "Deluxe Room",
    img: "/img/deluxe.jpg",
    price: "৳3000/night",
    desc: "Perfect for couples or business travelers.",
    path: "/routes/rooms/deluxe",
  },
 
  {
    title: "Executive Room",
    img: "/img/single.jpg",
    price: "৳3000/night",
    desc: "Affordable option for solo travelers.",
    path: "/routes/rooms/executive",
  },
 
];

export default function RoomSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSwiperReady(true), 100); // Delay to prevent flicker
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-sky-100 md:px-0 px-4">
      <section className="pt-18 pb-14 max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-5xl mb-3">Our Best Rooms</h2>
        <div className="flex justify-between mb-7 gap-4">
          <h2 className="text-gray-600 text-left flex-1">
            Our best rooms available for your vacation
          </h2>
          <div className="flex flex-col justify-end items-end flex-1">
            <Link
              href="/routes/rooms/roomsPage"
              className="text-sky-600 font-semibold text-sm sm:text-base md:text-lg hover:underline transition"
            >
              View all rooms →
            </Link>
          </div>
        </div>

        {/* Navigation Buttons */}
        {/* Left Arrow */}
<div className="absolute left-4 top-1/2 z-20 -translate-y-1/2">
  <div
    ref={prevRef}
    className="bg-white/100 backdrop-blur-md hover:bg-white/80 transition duration-300 rounded-full   shadow-lg flex items-center justify-center cursor-pointer w-12 h-12"
  >
    <FaChevronLeft className="text-sky-600 text-lg" />
  </div>
</div>

{/* Right Arrow */}
<div className="absolute right-4 top-1/2 z-20 -translate-y-1/2">
  <div
    ref={nextRef}
    className="bg-white/100 backdrop-blur-md hover:bg-white/80 transition duration-300 rounded-full  shadow-lg flex items-center justify-center cursor-pointer w-12 h-12"
  >
    <FaChevronRight className="text-sky-600  text-lg" />
  </div>
</div>


        {/* Swiper OR Skeleton */}
        {swiperReady ? (
         <Swiper
  modules={[Navigation, Autoplay, Pagination]}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  onSwiper={(swiper) => {
    if (
      prevRef.current &&
      nextRef.current &&
      swiper.params?.navigation
    ) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }}
  pagination={{
    el: ".custom-pagination",
    clickable: true,
  }}
  autoplay={{
    delay: 2500,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  }}
  loop={true}
  slidesPerView={1}
  spaceBetween={20}
  breakpoints={{
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 2 }, // 🟢 আগে ছিল 3, এখন 2
  }}
  className="pb-5"
>

            {rooms.map((room, i) => (
             <SwiperSlide key={i}>
  <Link href={room.path}>
    <div className="bg-white mb-1 rounded shadow p-0 flex flex-col w-full max-w-[700px] h-[500px] mx-auto transition overflow-hidden cursor-pointer">
      {/* Image */}
      <div className="relative w-full h-[390px]">
        <Image
          src={room.img}
          alt={room.title}
          fill
          className="object-cover transition-transform"
        />
      </div>

      {/* Content */}
      <div className="px-6 pt-4 mt-0 flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{room.title}</h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              window.location.href = room.path;
            }}
            className="bg-sky-100 text-sky-600 text-sm px-4 py-1 rounded-lg font-semibold hover:bg-sky-200 transition"
          >
            Details Room
          </button>
        </div>

        <p className="text-gray-600 text-sm mt-2">{room.desc}</p>
      </div>
    </div>
  </Link>
</SwiperSlide>

            ))}
          </Swiper>
        ) : (
          // 🔵 Skeleton loader
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white animate-pulse rounded shadow p-0 w-full max-w-[400px] h-[500px] mx-auto flex flex-col overflow-hidden"
              >
                <div className="bg-gray-300 h-[390px] w-full" />
                <div className="px-6 pt-4 flex-1 flex flex-col gap-2">
                  <div className="h-5 bg-gray-300 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="mt-auto h-4 bg-gray-300 rounded w-1/4 mb-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="custom-pagination mt-6 text-center" />
      </section>
    </div>
  );
}
