'use client';
import { useState } from "react";

export default function PaathyaSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="w-full px-4 bg-white">
      {/* ===== Heading Section ===== */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 text-center pb-4 pt-14">
        <div className="border-t border-gray-700 w-12 sm:w-16"></div>
        <span className="text-base sm:text-lg md:text-2xl lg:text-3xl text-black uppercase tracking-widest font-semibold">
          A Feeling Called ‘Ocean Residence’
        </span>
        <div className="border-t border-gray-700 w-12 sm:w-16"></div>
      </div>

      {/* ===== Description Paragraph ===== */}
      <p className="max-w-4xl mx-auto text-center text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-12 px-2">
        Rooted in a vision of purpose and direction, Ocean Residence represents our initiative to inspire positive change — guided by trust in our guests and partners, awareness of our environment’s needs, and the joy that lies at the heart of every stay.
      </p>
{/* ===== Responsive Video Embed ===== */}
<div className="flex justify-center pb-12 md:pb-28">
  <div
    className="relative w-full max-w-xl rounded overflow-hidden shadow bg-black"
    style={{ aspectRatio: '16 / 9' }} // ✅ এখানে aspect ratio স্টাইল দিয়ে ফিক্স করা হলো
    onClick={() => setIsVideoPlaying(true)}
  >
    {isVideoPlaying ? (
      <video
        className="w-full h-full object-contain bg-black"
        src="/img/video2.mp4"
        controls
        autoPlay
      />
    ) : (
      <div className="relative w-full h-full cursor-pointer bg-black">
        <img
          src="/img/video-thumbnail.jpg"
          alt="Video thumbnail"
          className="absolute inset-0 w-full h-full object-cover rounded"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white bg-black bg-opacity-50 p-4 rounded-full text-4xl select-none">
            ▶
          </div>
        </div>
      </div>
    )}
  </div>
</div>


    </div>
  );
}
