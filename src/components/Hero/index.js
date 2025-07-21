"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const images = ["/img/hero1.jpg", "/img/hero2.jpg", "/img/hero1.jpg"];
const  captions = [
  "EXPERIENCE LUXURY",
  "STAY IN COMFORT",
  "BOOK YOUR DREAM VACATION",
];


const subtitles = ["FROM $69", "FROM $69", "FROM $69"];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    resetAutoSlide();
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    resetAutoSlide();
  };

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="inline-block me-[8px] text-[125%]"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <div className="relative  w-full h-[85vh] hero-section overflow-visible">
      {/* Image without animation */}
      <img
        src={images[current]}
        alt="Hero Slide"
        className="w-full h-full object-cover absolute inset-0"
        draggable={false}
      />

      {/* Caption container */}
      <div className="absolute top-1/2 left-4 right-4 md:left-[2in] md:right-[1in] transform -translate-y-1/2 z-20 px-4 flex flex-col items-start ">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: -500, x: -100 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="text-left"
          >
            {/* Subtitle */}
            {/* <p className="text-white mb-2 opacity-90 text-sm sm:text-sm md:text-lg lg:text-xl">
              {splitText(subtitles[current], "")}
            </p> */}

            {/* Main Caption */}
            <h2 className="text-white font-bold mb-6 leading-tight text-2xl sm:text-2xl md:text-2xl lg:text-6xl xl:text-5xl">
              {splitText(captions[current], "")}
            </h2>

            {/* Button */}
            


            <Link
              href="/rout/contact"
              className="mt-4 inline-block px-6 py-2 text-white bg-sky-500 text-sm sm:text-base md:text-lg lg:text-xl
              hover:bg-sky-600 hover:-translate-y-1 rounded transition-all duration-500 ease-in-out transform"
            >
              CONTACT US
            </Link>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2  bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full z-30"
      >
        <FaChevronLeft className="text-white w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2  bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full z-30"
      >
        <FaChevronRight className="text-white w-6 h-6" />
      </button>
      

   


    </div>
  );
}
