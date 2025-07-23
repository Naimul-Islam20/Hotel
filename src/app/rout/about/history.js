'use client';
import Image from 'next/image';

export default function TajIntro() {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat py-10 md:py-20"
      style={{ backgroundImage: "url('/exc/about2.jpg')" }}
    >
      {/* Banner Section */}
      <div
        className="w-full bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
      >
        <h1 className="text-xl sm:text-2xl md:text-4xl uppercase text-black leading-tight">
          The Unparalleled <br /> Guardian of Grandeur
        </h1>
        <p className="mt-6 max-w-3xl text-xs sm:text-sm md:text-lg text-gray-800">
          Built on a vision of grandeur, Taj Hotels conjures a panoply of superlative experiences that are envisioned to indulge and forge unforgettable memories.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-2 md:gap-8 my-5 md:my-12 px-2 md:px-4 relative">
        {/* Left Box */}
        <div className="bg-white p-2 sm:p-6 md:p-10 shadow-md z-10 md:translate-x-4">
          {/* Top Border Line with Text only left side border */}
          <div className="flex items-center mb-2">
            <div className="w-6 sm:w-8 md:w-10 border-t-2 border-gray-700"></div>
            <span className="ml-2 sm:ml-3 md:ml-4 text-lg sm:text-2xl md:text-4xl uppercase text-gray-700">
              A Monumental
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-xl sm:text-2xl md:text-4xl uppercase text-gray-700 mb-3 md:mb-7">
            Vision
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
            In December 1903, a visionary realised his dream. Mr Jamsetji Nusserwanji Tata – patriot, philanthropist, entrepreneur – opened the doors of what would become one of the world’s greatest hotels.
          </p>
        </div>

{/* Right Box (Image Top + Text Bottom) */}
<div className="relative md:-translate-x-18 md:translate-y-10">
  <div className="w-[240px] sm:w-[350px] md:w-[410px] bg-white shadow rounded overflow-hidden">
    
    {/* Top: Image 70% approx */}
    <div className="aspect-[4/3]">
      <Image
        src="/img/ceo.jpg"
        alt="Sky Founder"
        width={600}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Bottom: Name & Title */}
    <div className="px-4 py-3 bg-white text-center">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800">
        Mr. Naimul Islam
      </h3>
      <p className="text-xs sm:text-sm text-gray-600">
        Founder, Ocean Residence
      </p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
