"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const images = [
  '/img/family.jpg',
  '/img/family3.jpg',
  '/img/family4.jpg',
  '/img/single.jpg',
  '/img/single2.jpg',
];

const ImageSliderWithModal = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full mx-auto">
      <PhotoProvider>
        {/* Main Slider */}
        <Swiper
          modules={[Navigation, Thumbs, Autoplay]}
          spaceBetween={10}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="overflow-hidden cursor-pointer"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <PhotoView src={img}>
                <div className="relative w-full h-[280px] md:h-[480px]">
                  <Image
                    src={img}
                    alt={`Slide ${index}`}
                    fill
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              </PhotoView>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Slider */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          watchSlidesProgress
          className="mt-4"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-14 md:h-20">
                <Image
                  src={img}
                  alt={`Thumb ${index}`}
                  fill
                  className={`object-cover border-2 ${activeIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </PhotoProvider>
    </div>
  );
};

export default ImageSliderWithModal;
