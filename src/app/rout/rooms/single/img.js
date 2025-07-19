
"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
  '/img/h21.jpg',
  '/img/h21.jpg',
 '/img/h21.jpg',
  '/img/h21.jpg',
  '/img/h21.jpg',
];

const ImageSliderWithModal = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full  mx-auto">
      {/* Main Slider */}
      <Swiper
        modules={[Navigation, Thumbs, Autoplay]}
        spaceBetween={10}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className=" overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index}`} className="w-full  h-128 object-cover" />
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
              className={`h-20 w-full object-cover  border-2 ${activeIndex === index ? 'border-blue-500' : 'border-transparent'}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox Modal */}
      {isOpen && (
        <Lightbox
          mainSrc={images[activeIndex]}
          nextSrc={images[(activeIndex + 1) % images.length]}
          prevSrc={images[(activeIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setActiveIndex((activeIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setActiveIndex((activeIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default ImageSliderWithModal;

