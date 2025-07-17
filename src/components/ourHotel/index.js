"use client";
import { useState, useRef, useEffect } from "react";

export default function HotelInfoPage() {
  const [showFull, setShowFull] = useState(false);
  const contentRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      const fullHeight = contentRef.current.scrollHeight;
      const partialHeight = contentRef.current.firstChild.clientHeight;
      setContainerHeight(showFull ? fullHeight : partialHeight);
    }
  }, [showFull]);

  const handleToggle = () => {
    setShowFull(!showFull);
  };

  return (
    <div
      className="w-full flex justify-center items-start bg-gray-100 transition-all duration-500 ease-in-out overflow-hidden"
      style={{ minHeight: `${containerHeight + 100}px` }} // extra 100px for padding/button
    >
      {/* Card Container */}
      <div className="w-full max-w-5xl p-10 text-center mt-12">
        {/* h5 Title */}
        <h5 className="text-lg font-semibold text-gray-700">
          Welcome to Renaissance Dhaka Gulshan Hotel
        </h5>

        {/* underline */}
        <div className="w-24 h-[2px] bg-gray-400 mx-auto my-2" />

        {/* h1 Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">
          LIFESTYLE AND LUXURY HOTEL IN DHAKA GULSHAN AREA
        </h1>

        {/* Paragraph container with ref */}
        <div
          ref={contentRef}
          className="relative mt-6 text-base text-justify text-gray-700 leading-relaxed transition-all duration-500 ease-in-out"
        >
          <p className={`${!showFull ? "line-clamp-2" : ""} pr-24`}>
            Located in the vibrant corporate hub of Gulshan, the Renaissance Dhaka
            Gulshan Hotel is ideal for business & leisure travelers. International
            Airport is just 10 minutes away with the new elevated expressway. You
            can experience the unique local essence of Dhaka during your stay. Our
            rooms and suites feature elegant décor and modern designs. Enjoy city
            view from our temperature-controlled infinity rooftop pool or while
            enjoying a cocktail from R Bar. Dining options include BAHAR all day
            dining for local and international cuisine, GBC for delicious bakery
            items 24/7 available, and SEAR for fine dining fusion delicacies as we
            ensure you the best F&B destination. Get pamper at our spa and salon
            or work out at the 24-hour fitness center with an on-site instructor.
            Our refined ballroom of 6,567 square feet, is perfect for imaginative
            events in city center of Dhaka. Conveniently located within the
            corporate and diplomatic zone. Experience it all at Renaissance a
            leading lifestyle brand of Marriot.
          </p>

          {/* Inline Show More Button */}
          {!showFull && (
            <button
              onClick={handleToggle}
              className="absolute top-[2.2em] right-0 text-sm text-blue-600 font-medium hover:underline  pl-2"
            >
              Show More
            </button>
          )}
        </div>

        {/* Show Less Button */}
        {showFull && (
          <button
            onClick={handleToggle}
            className="mt-4 text-blue-600 font-medium hover:underline"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}
