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
    className="relative w-full max-w-4xl rounded overflow-hidden shadow cursor-pointer aspect-video"
    onClick={() => setIsVideoPlaying(true)}
  >
    {isVideoPlaying && (
 <video
  className="w-full max-w-4xl rounded overflow-hidden shadow aspect-video bg-black"
  src="/img/video.mp4"
  controls
  autoPlay
/>


    )}
  </div>
</div>


    </div>
  );
}
