'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
const slides = [
  {
    center: '/exc/exc7.jpg',
    bgImage: '/exc/exc8.jpg'
  },
  {
    center: '/exc/exc3.jpg',
    bgImage: '/exc/exc4.jpg'
  },
  {
    center: '/exc/exc5.jpg',
    bgImage: '/exc/exc6.jpg'
  }
];

export default function ExclusiveSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [fade, setFade] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (current !== prev) {
      setFade(true);
      const timeout = setTimeout(() => {
        setFade(false);
        setPrev(current);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [current, prev]);

  return (
    <div className="w-full h-auto text-white py-3 md:py-10 relative overflow-hidden">
      {/* Background Layers */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700`}
        style={{ backgroundImage: `url(${slides[prev].bgImage})`, opacity: fade ? 1 : 1 }}
      />
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700 pointer-events-none`}
        style={{ backgroundImage: `url(${slides[current].bgImage})`, opacity: fade ? 1 : 0 }}
      />

      {/* Top Text Section */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row justify-between items-center my-1 md:mt-10 gap-6">
        {/* Left text block */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
          <div className="w-full flex justify-center items-center">
            <div className="w-10 h-[2px] bg-white"></div>
            <span className="ml-3 text-2xl md:text-4xl">Exclusively</span>
          </div>
          <span className="text-lg md:text-2xl mt-1">for You</span>
        </div>

        {/* Right text block */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <p className="text-xs md:text-base max-w-md text-gray-200 text-center md:text-start">
            Refinement and creativity intertwine with dreamlike destinations and soulful moments on each sojourn with Taj.
          </p>
        </div>
      </div>

      {/* Slider Section */}
      <div className="container mx-auto  px-4 my-8 md:my-15 relative z-10">
        <Swiper
          modules={[Navigation]}
          navigation={false}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
          speed={800}
          effect="slide"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-row items-center justify-between w-full h-auto md:h-[480px] gap-2">
                {/* Prev Button Section */}
                <div className="flex w-[15%] h-[328px] pe-1  md:h-full border-b-2 border-t-2 border-e-2 border-fade-right items-center justify-center relative">
                  <div className=" items-center  ">
                      <button
                      onClick={() => swiperRef.current?.slidePrev()}
                      className="w-10 md:w-11 h-10 md:h-11 text-xl  md:text-xl border  border-sky-400 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition cursor-pointer"
                    >
                      <FaChevronLeft/>
                    </button>
                  
                  
                  </div>
                </div>

                {/* Center Content Section */}
                <div className="w-[660%] md:w-1/2 h-auto md:h-full flex flex-col">
                  <div className="relative h-[205px] md:h-[70%] w-full">
                    <Image
                      src={slide.center}
                      alt="Center"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="h-auto md:h-[34%] bg-white text-black flex flex-col items-center justify-center px-2 md:px-4 py-2 md:py-5 text-center">
                    <h3 className="text-base md:text-2xl mb-2">Lorem</h3>
                    <p className="text-xs md:text-lg mb-2 md:mb-4 text-gray-500">This is a sample description text that explains more about the image or the offer.</p>
                    <Link
                               href="/rout/local"
                               className="  text-sky-500 rounded px-3 underline py-2 hidden md:flex items-center gap-2   "
                             >
                               Explore More
                             </Link>
                  </div>
                </div>

                {/* Next Button Section */}
                <div className="flex w-[15%] h-[328px] ps-1 md:h-full  border-b-2 border-s-2 border-t-2 border-fade-left items-center justify-center relative">
                  <div className=" items-center ">
                    
                  
                    <button
                      onClick={() => swiperRef.current?.slideNext()}
                      className="w-10 md:w-11 h-10 md:h-11 text-xl md:text-xl border border-sky-400  text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition cursor-pointer"
                    >
                      <FaChevronRight/>
                    </button>
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