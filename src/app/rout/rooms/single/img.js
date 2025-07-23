"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const images = [
  '/img/single.jpg',
  '/img/single.jpg',
  '/img/single.jpg',
  '/img/single.jpg',
  '/img/single.jpg',
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
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-full h-70 md:h-120 object-cover"
                />
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
              <img
                src={img}
                alt={`Thumb ${index}`}
                className={` h-14 md:h-20 w-full object-cover border-2 ${activeIndex === index ? 'border-blue-500' : 'border-transparent'}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </PhotoProvider>
    </div>
  );
};

export default ImageSliderWithModal;
