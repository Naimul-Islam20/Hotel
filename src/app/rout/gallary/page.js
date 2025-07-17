"use client";
import React, { useRef, useState, useEffect } from "react";

export default function GalleryPage() {
  const imgSrc = "/img/image1.jpg";

  const viewRef = useRef(null);
  const guestRef = useRef(null);
  const othersRef = useRef(null);

  const [activeTab, setActiveTab] = useState("view");

  const scrollToSection = (ref, tab) => {
    setActiveTab(tab);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Intersection Observer logic
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // center point
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === viewRef.current) {
            setActiveTab("view");
          } else if (entry.target === guestRef.current) {
            setActiveTab("guest");
          } else if (entry.target === othersRef.current) {
            setActiveTab("dining");
          }
        }
      });
    }, options);

    if (viewRef.current) observer.observe(viewRef.current);
    if (guestRef.current) observer.observe(guestRef.current);
    if (othersRef.current) observer.observe(othersRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className=" w-screen bg-white pe-2">
      {/* Main Gallery Title */}
      <h1 className="text-4xl  text-center p-4">PHOTOS AND VIDEOS</h1>

      {/* Filter Buttons */}
      <div className="w-screen border-b border-gray-400 flex justify-center gap-4 ">
        <button
          onClick={() => scrollToSection(viewRef, "view")}
          className={`mx-4 px-1 py-2 text-gray-700 transition ${
            activeTab === "view" ? "border-b-2 border-black text-semibolt text-sky-600 " : ""
          }`}
        >
          Hotel View
        </button>
        <button
          onClick={() => scrollToSection(guestRef, "guest")}
          className={`mx-4 px-1 py-2 transition ${
            activeTab === "guest" ? "border-b-2 border-black text-black" : ""
          }`}
        >
          Guest Rooms
        </button>
        <button
          onClick={() => scrollToSection(othersRef, "dining")}
          className={`mx-4 px-1 py-2 transition ${
            activeTab === "dining" ? "border-b-2 border-black text-black " : ""
          }`}
        >
          Dining
        </button>
      </div>

      {/* ========== View Section ========== */}
      <div className="bg-gray-100 w-screen ">
        <section
        ref={viewRef}
        className="w-screen bg-gray-50 mx-auto border-b  border-gray-400 scroll-mt-17 ps-19 pe-23 py-8"
      >
        <h2 className="text-2xl  mb-3 ">HOTEL VIEW</h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          <img src={imgSrc} className="w-full h-50 object-cover " />
          <img src={imgSrc} className="w-full h-50 object-cover " />
          <img src={imgSrc} className="w-full h-50 object-cover " />
          <img
            src={imgSrc}
            className="w-full h-[417px] object-cover  col-span-2 row-span-2"
          />
          <img
            src={imgSrc}
            className="w-full h-50 object-cover  row-start-2 col-start-3"
          />
          <img
            src={imgSrc}
            className="w-full h-50 object-cover  row-start-3 col-start-3"
          />
        </div>
      </section>

      {/* ========== Guest Section ========== */}
      <section
        ref={guestRef}
        className="w-screen bg-gray-50 mx-auto border-b  border-gray-300 scroll-mt-[15px] ps-19 pe-23 py-12"
      >
        <h2 className="text-2xl  mb-6 ">GUEST ROOMS</h2>
        <div className="grid grid-cols-3 grid-rows-4 gap-4">
          <img src={imgSrc} className="w-full h-50 object-cover " />
          <img src={imgSrc} className="w-full h-50 object-cover " />
          <img src={imgSrc} className="w-full h-50 object-cover " />
          <img
            src={imgSrc}
            className="w-full h-[417px] object-cover rounded-md col-span-2 row-span-2"
          />
          <img
            src={imgSrc}
            className="w-full h-50 object-cover rounded-md row-start-2 col-start-3"
          />
          <img
            src={imgSrc}
            className="w-full h-50 object-cover rounded-md row-start-3 col-start-3"
          />
          <img src={imgSrc} className="w-full h-50 object-cover " />
          <img src={imgSrc} className="w-full h-50 object-cover " />
          <img src={imgSrc} className="w-full h-50 object-cover " />
        </div>
      </section>

      {/* ========== Others Section ========== */}
      <section
        ref={othersRef}
        className="w-screen bg-gray-50 mx-auto border-b  border-gray-300 scroll-mt-[15px] ps-19 pe-23 py-12"
      >
        <h2 className="text-2xl  mb-6 ">OTHERS GALLARY</h2>
        <div className="grid grid-cols-3 grid-rows-4 gap-4">
          <img src={imgSrc} className="w-full h-50 object-cover " />
          <img src={imgSrc} className="w-full h-50 object-cover " />
          <img src={imgSrc} className="w-full h-50 object-cover " />
          <img
            src={imgSrc}
            className="w-full h-[417px] object-cover  col-span-2 row-span-2"
          />
          <img
            src={imgSrc}
            className="w-full h-50 object-cover  row-start-2 col-start-3"
          />
          <img
            src={imgSrc}
            className="w-full h-50 object-cover  row-start-3 col-start-3"
          />
          <img src={imgSrc} className="w-full h-50 object-cover " />
          <img src={imgSrc} className="w-full h-50 object-cover " />
          <img src={imgSrc} className="w-full h-50 object-cover " />
        </div>
      </section>
      </div>
    </div>
  );
}
