"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const rooms = [
  {
    title: "Deluxe Room",
    img: "/rooms/deluxe.jpg",
    price: "$120/night",
    features: "🛏️ 1 King Bed · 🚿 Private Bathroom · 🌐 Free Wi-Fi",
    desc: "Perfect for couples or business travelers.",
  },
  {
    title: "Executive Suite",
    img: "/rooms/suite.jpg",
    price: "$180/night",
    features: "🛏️ 1 King Bed · 🛋️ Lounge Area · 🌆 City View",
    desc: "Luxurious suite with space & comfort for VIPs.",
  },
  {
    title: "Family Room",
    img: "/rooms/family.jpg",
    price: "$150/night",
    features: "🛏️ 2 Queen Beds · 👨‍👩‍👧‍👦 For 4 guests · 🍳 Breakfast",
    desc: "Spacious room perfect for families.",
  },
  {
    title: "Twin Room",
    img: "/rooms/twin.jpg",
    price: "$110/night",
    features: "🛏️ 2 Single Beds · 🚿 Ensuite · 🔇 Quiet Zone",
    desc: "Great for friends or solo travelers sharing.",
  },
  {
    title: "Single Room",
    img: "/rooms/single.jpg",
    price: "$90/night",
    features: "🛏️ 1 Bed · 🧼 Clean & Compact · 🪟 View",
    desc: "Affordable option for solo travelers.",
  },
  {
    title: "Premium Room",
    img: "/rooms/premium.jpg",
    price: "$200/night",
    features: "🌟 Luxury · 🎧 Soundproof · 🧖 Spa Access",
    desc: "Top-tier comfort & exclusive amenities.",
  },
];

export default function RoomSlider() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        Room Types & Accommodations
      </h2>

      {/* Navigation buttons */}
      <div className="relative">
        <div className="swiper-button-prev z-10 absolute top-1/2 -translate-y-1/2 left-2 bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100">
          <FaChevronLeft />
        </div>
        <div className="swiper-button-next z-10 absolute top-1/2 -translate-y-1/2 right-2 bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100">
          <FaChevronRight />
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 1000,
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
              <div className="bg-gray-100  rounded-md shadow-md p-6 flex flex-col mb-2 h-full transition">
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
                  <h3 className="text-2xl font-semibold">{room.title}</h3>
                  <p className="text-gray-700 text-sm mt-1">{room.features}</p>
                  <div className="mt-auto pt-4">
                    <p className="text-gray-600 text-[15px]">{room.desc}</p>
                    <p className="text-blue-600 font-semibold mt-1">{room.price}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination bullets outside slider */}
      <div className="custom-pagination mt-8 text-center" />
    </section>
  );
}
