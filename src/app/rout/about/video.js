'use client';
import { useState } from "react";

export default function PaathyaSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="w-full px-4 bg-white">
     {/* Large Heading */}
<div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 text-center pb-4 pt-14">
  <div className="border-t border-gray-700 w-12 sm:w-16"></div>
  <span className="text-base sm:text-lg md:text-2xl lg:text-3xl text-black uppercase tracking-widest font-semibold">
    A Feeling Called ‘Sky hotel’
  </span>
  <div className="border-t border-gray-700 w-12 sm:w-16"></div>
</div>


      {/* Paragraph */}
      <p className="max-w-4xl mx-auto text-center text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-12 px-2">
        Derived from the Sanskrit term , inferring a path, Paathya encapsulates
        our initiatives to lead positive change in alignment with the core values of IHCL: 
        Trust amongst stakeholders, Awareness of the needs of our ecosystem and Joy at the heart of all efforts.
      </p>

      {/* Responsive Video */}
      <div className="flex justify-center pb-12 md:pb-28">
        <div
          className="relative w-full max-w-4xl rounded overflow-hidden shadow cursor-pointer"
          style={{ paddingTop: '56.25%' }} // 16:9 aspect ratio
          onClick={() => setIsVideoPlaying(true)}
        >
          {isVideoPlaying ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/x7xk_wp_wl8?autoplay=1"
              title="Paathya Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src="https://img.youtube.com/vi/x7xk_wp_wl8/hqdefault.jpg"
                alt="Paathya Video Thumbnail"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center  bg-opacity-40">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
