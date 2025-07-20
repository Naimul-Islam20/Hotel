'use client';
import { useState } from "react";

export default function PaathyaSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="w-full px-4  bg-[#13130f]">
      {/* Large Heading */}
      <div className="flex items-center justify-center pb-4 pt-14">
        <div className="border-t border-gray-300" style={{ width: '4rem' }}></div>
        <span className="mx-4 text-4xl text-white uppercase tracking-widest font-semibold">
          A Feeling Called ‘Sky hotel’
        </span>
        <div className="border-t border-gray-200" style={{ width: '4rem' }}></div>
      </div>

      {/* Paragraph */}
      <p className="max-w-4xl mx-auto text-center text-gray-300 text-base md:text-lg leading-relaxed mb-12">
        Derived from the Sanskrit term पथ्य, inferring a path, Paathya encapsulates
        our initiatives to lead positive change in alignment with the core values of IHCL: 
        Trust amongst stakeholders, Awareness of the needs of our ecosystem and Joy at the heart of all efforts.
      </p>

      {/* Click-to-Play Video */}
      <div className="flex justify-center pb-28">
        <div
          className="relative w-[1000px] h-[550px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
          onClick={() => setIsVideoPlaying(true)}
        >
          {isVideoPlaying ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/x7xk_wp_wl8?autoplay=1"
              title="Paathya Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src="https://img.youtube.com/vi/x7xk_wp_wl8/hqdefault.jpg"
                alt="Paathya Video Thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
                <svg
                  className="w-16 h-16 text-white"
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
