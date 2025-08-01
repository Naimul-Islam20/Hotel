"use client";
import Image from "next/image";

export default function PaathyaSection() {
  return (
    <div className="w-full px-2 md:px-4 py-5 md:py-16 bg-sky-100">
      
      {/* Large Heading */}
      <div className="flex items-center justify-center mb-6">
        <div className="border-t border-gray-800 w-12 sm:w-16 md:w-20"></div>
        <span className="mx-4 text-2xl sm:text-3xl md:text-4xl text-black uppercase tracking-widest font-semibold">
          Paathya
        </span>
        <div className="border-t border-gray-800 w-12 sm:w-16 md:w-20"></div>
      </div>

      {/* Paragraph */}
      <p className="max-w-4xl mx-auto text-center text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-16 px-2">
        Inspired by the concept of meaningful journeys, Ocean Residence reflects our commitment to bringing positive change — grounded in trust, attentiveness to our guests and community, and a spirit of joy that defines every stay.
      </p>

      {/* Main Section with centered PNG image */}
      <div className="flex justify-center px-4">
    <Image
  src="/exc/about.png"
  alt="Paathya Illustration"
  width={600}
  height={400}
  className="object-contain w-full max-w-xl"
  loading="eager" // ✅ এটুকু দিলেই সমস্যা মিটে যাবে
  priority
/>

      </div>
    </div>
  );
}
