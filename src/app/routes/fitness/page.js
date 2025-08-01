"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const images = ["/img/gym1.jpg", "/img/gym2.jpg"];

export default function FitnessPage() {
  return (
    <main className="w-full pb-20">
      {/* Hero Section */}
      <section className="relative w-full bg-gray-900 rounded overflow-hidden mb-16 h-[180px] md:h-[260px] flex justify-center items-center px-10">
        <Image
          src="/img/f1.jpg"
          alt="Fitness Hero"
          fill
          className="object-cover opacity-60"
          draggable={false}
        />
        <h1 className="relative text-white text-3xl md:text-5xl font-extrabold text-center">
          Fitness Center
        </h1>
      </section>

      {/* Two Column Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 px-6 max-w-7xl mx-auto">
        {/* Left Column (Text) */}
        <div className="md:w-1/2 space-y-6 text-gray-800">
          <h2 className="text-3xl font-bold">Gym & Movement</h2>
          <p className="leading-relaxed text-gray-700">
            Build strength, improve mobility, and move with confidence. Our training programs are designed to support a healthier, stronger you—every step of the way.
          </p>

          <div>
            <h3 className="font-semibold mb-2">Opening Hours</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Gym Center: 7:00 am - 9:00 pm</li>
            </ul>
          </div>

          <Link
            href="/routes/contact"
            className="text-lg text-white p-3 bg-sky-500 rounded hover:bg-sky-600 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Right Column (Slider with PhotoView) */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="w-full max-w-md h-[400px] rounded overflow-hidden shadow-lg relative">
            <PhotoProvider>
              <Swiper
                className="w-full h-full"
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <PhotoView src={img}>
                      <div className="relative w-full h-[400px] cursor-zoom-in">
                        <Image
                          src={img}
                          alt={`Fitness Image ${i + 1}`}
                          fill
                          className="object-cover"
                          draggable={false}
                        />
                      </div>
                    </PhotoView>
                  </SwiperSlide>
                ))}
              </Swiper>
            </PhotoProvider>
          </div>
        </div>
      </section>
    </main>
  );
}
