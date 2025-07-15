"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const messages = [
  {
    id: 1,
    name: "Mr. Rahman",
    title: "Founder & CEO",
    photo: "/owner.jpg",
    message:
      "Our mission has always been to offer a peaceful, luxurious and welcoming experience to every guest. We take pride in every smile we receive.",
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    title: "Operations Manager",
    photo: "/manager.jpg",
    message:
      "We believe every detail matters. From the room decor to the food quality – we ensure excellence at every step.",
  },
];

export default function HotelMessageSlider() {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        💬 Message from Our Team
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        slidesPerView={1}
        className="max-w-3xl mx-auto"
      >
        {messages.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-gray-100 rounded-2xl shadow-md p-6 transition">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={item.photo}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </div>
              <div className="text-gray-700 text-sm italic relative pl-6">
                <FaQuoteLeft className="absolute left-0 top-1 text-gray-400" />
                {item.message}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination bullets are inside swiper now and will show by default */}
    </section>
  );
}
