'use client';
export default function TajIntro() {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat py-10 md:py-20"
      style={{ backgroundImage: "url('/exc/about2.jpg')" }}
    >
      {/* Banner Section */}
      <div className="w-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-xl sm:text-2xl md:text-4xl uppercase text-black leading-tight">
          The Unparalleled <br /> Guardian of Grandeur
        </h1>
        <p className="mt-6 max-w-3xl  text-xs sm:text-sm md:text-lg text-gray-800">
          Built on a vision of elegance, Ocean Residence curates a collection of exceptional experiences designed to delight guests and create unforgettable memories in the heart of Chittagong.
        </p>
      </div>

      {/* Main Section - Single Column */}
      <div className="max-w-4xl mx-auto my-10 md:my-16 px-4">
        {/* Vision Box */}
        <div className="bg-white p-4 sm:p-6 md:p-10 shadow relative z-10">
       
<span className="  text-lg sm:text-2xl md:text-4xl uppercase text-gray-700">
              — A Monumental
            </span>
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-4xl uppercase text-gray-700 mb-3 md:mb-7">
            Vision
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 text-justify text-xs sm:text-sm md:text-base leading-relaxed">
            “Ocean Residence was our long-held dream.
We wanted to raise the standards of hospitality in Chittagong.
Today, that dream has come true.
Thanks to everyone’s support, this journey has been successful.”
          </p>

          {/* Chairman Info */}
          <div className="mt-8 text-start">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
              CEO
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Ocean Residence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
