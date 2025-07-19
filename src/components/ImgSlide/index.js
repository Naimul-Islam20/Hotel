'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const slides = [
  {
    center: '/exc/exc7.jpg',
    bgColor: '#0d1b2a',
    bgImage: '/exc/exc8.jpg'
  },
  {
    center: '/exc/exc3.jpg',
    bgColor: '#1b263b',
    bgImage: '/exc/exc4.jpg'
  },
  {
    center: '/exc/exc5.jpg',
    bgColor: '#343a40',
    bgImage: '/exc/exc6.jpg'
  }
];

export default function ExclusiveSlider() {
  const [current, setCurrent] = useState(0);
  const [fadeBg, setFadeBg] = useState(true);

  useEffect(() => {
    setFadeBg(false);
    const timeout = setTimeout(() => setFadeBg(true), 100);
    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <div
      className={`w-full h-[940px] text-white py-10 bg-cover bg-center transition-all duration-700 ${fadeBg ? 'opacity-100' : 'opacity-0'}`}
      style={{
        backgroundColor: slides[current].bgColor,
        backgroundImage: `url(${slides[current].bgImage})`
      }}
    >
      {/* Top section */}
      <div className="container flex flex-col mt-10 md:flex-row justify-between items-center mx-10">
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="w-full flex justify-center md:justify-start items-center mb-2">
            <div className="w-10 h-1 bg-white"></div>
            <span className="ml-3 text-2xl font-bold">Exclusively</span>
          </div>
          <span className="text-2xl font-bold mt-2">for You</span>
        </div>
        <p className="text-sm md:text-base max-w-md mt-4 md:mt-0 text-gray-300 text-center md:text-center">
          Refinement and creativity intertwine with dreamlike destinations and soulful moments on each sojourn with Taj.
        </p>
      </div>

      {/* Swiper Slide Section */}
      <div className="container mt-20 relative">
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
          speed={800}
          effect="slide"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-between w-full h-[630px]">
                {/* Left Box with Text */}
                <div className="hidden md:flex w-1/5 h-full border-t border-b border-e border-white items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl font-semibold">New</p>
                    <p className="text-xl font-semibold">Beginnings</p>
                  </div>
                </div>

                {/* Center Box with Image and Text */}
                <div className="w-full md:w-1/2 h-full border border-white flex flex-col">
                  {/* Upper image part */}
                  <div className="relative h-[70%] w-full">
                    <Image
                      src={slide.center}
                      alt="Center"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Lower text part */}
                  <div className="h-[30%] bg-white text-black flex flex-col items-center justify-center px-6 py-4 text-center">
                    <h3 className="text-2xl mb-2">Lorem</h3>
                    <p className="text-lg mb-4 text-gray-500 ">This is a sample description text that explains more about the image or the offer.</p>
                    <button className=" text-sky-400 underline tracking-widest py-2">Explore More</button>
                  </div>
                </div>

                {/* Right Box with Text */}
                <div className="hidden md:flex w-1/5 h-full border-t border-b border-s border-white items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl font-semibold">New</p>
                    <p className="text-xl font-semibold">Beginnings</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}