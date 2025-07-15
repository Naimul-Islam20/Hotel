"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { motion, AnimatePresence } from "framer-motion";

const allImages = [
  { src: "/img/image1.jpg", category: "Room" },
  { src: "/img/image1.jpg", category: "Room" },
  { src: "/img/image1.jpg", category: "Pool" },
  { src: "/img/image1.jpg", category: "Pool" },
  { src: "/img/image1.jpg", category: "Restaurant" },
  { src: "/img/image1.jpg", category: "Restaurant" },
  { src: "/img/image1.jpg", category: "View" },
  { src: "/img/image1.jpg", category: "View" },
];

export default function GallerySection() {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-16 bg-white" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">Photo Gallery</h2>
        <p className="text-center text-gray-500 mb-8">
          Explore our rooms, views, and elegant surroundings
        </p>

        {/* Gallery Grid Without Filter */}
        <div
          className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
          data-aos="fade-up"
        >
          <AnimatePresence mode="wait">
            {allImages.map((img, idx) => (
              <motion.div
                key={img.src + idx}
                layout
                transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
                onClick={() => setIndex(idx)}
                className="overflow-hidden rounded relative group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={`Gallery Image ${idx + 1}`}
                  className="w-full transition-transform duration-300 group-hover:scale-105 group-hover:opacity-90"
                  draggable={false}
                />

                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl flex items-end p-3">
                  <div className="text-white">
                    <p className="text-base font-semibold drop-shadow">
                      {img.category}
                    </p>
                    <p className="text-sm text-gray-200">
                      Explore our {img.category.toLowerCase()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={allImages}
          index={index}
          plugins={[Thumbnails]}
        />
      </div>
    </section>
  );
}
