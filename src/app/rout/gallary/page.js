"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

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
    <div className="w-screen bg-white pe-2">
      {/* ====== Hero Section ====== */}
        <div className="w-full bg-blue-100 py-12 text-center">
              <h1 className="text-4xl font-bold text-gray-800">Gallery</h1>
              <Link href="/" className="hover:underline text-gray-600">Home</Link> &gt; Gallery
            </div>
      

      {/* ====== Filter Buttons ====== */}
      <div className="w-screen border-b border-gray-400 flex justify-center gap-4 ">
        <button
          onClick={() => scrollToSection(viewRef, "view")}
          className={`mx-4 px-1 py-2 text-gray-700 transition ${
            activeTab === "view"
              ? "border-b-2 border-black text-sm text-sky-600 "
              : ""
          }`}
        >
          Premium
        </button>
        <button
          onClick={() => scrollToSection(guestRef, "guest")}
          className={`mx-4 px-1 py-2 transition ${
            activeTab === "guest" ? "border-b-2 text-sm border-black text-black" : ""
          }`}
        >
          Executive
        </button>
        <button
          onClick={() => scrollToSection(othersRef, "dining")}
          className={`mx-4 px-1 py-2 transition ${
            activeTab === "dining" ? "border-b-2 text-sm border-black text-black " : ""
          }`}
        >
          View
        </button>
      </div>

      {/* ====== Gallery Sections Container ====== */}
      <PhotoProvider>
        <div className="max-w-7xl mx-auto bg-black">
          {/* ========== View Section ========== */}
          <section
            ref={viewRef}
            className="bg-gray-100 mx-auto border-b border-gray-400 scroll-mt-17 px-4 sm:px-10 py-8"
          >
            <h2 className="text-2xl uppercase mb-3">Deluxe room</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* 3 small images */}
              <PhotoView src="/img/premium1.jpg">
                <img
                  src="/img/premium1.jpg"
                  alt="Guest room"
                  className="w-full h-24 sm:h-40 lg:h-50 object-cover"
                />
              </PhotoView>
              <PhotoView src="/img/family.jpg">
                <img
                  src="/img/family.jpg"
                  alt="Guest room"
                  className="w-full h-24 sm:h-40 lg:h-50 object-cover"
                />
              </PhotoView>
              <PhotoView src="/img/premium3.jpg">
                <img
                  src="/img/premium3.jpg"
                  alt="Guest room"
                  className="w-full h-24 sm:h-40 lg:h-50 object-cover"
                />
              </PhotoView>

              {/* 2x2 layout */}
              <div className="col-span-2 sm:col-span-2 sm:row-span-2">
                <PhotoView src="/img/premium4.jpg">
                  <img
                    src="/img/premium4.jpg"
                    alt="Guest room"
                    className="w-full h-[180px] sm:h-[250px] lg:h-[417px] object-cover rounded-md"
                  />
                </PhotoView>
              </div>

              {/* 2 small images */}
              <PhotoView src="/img/family4.jpg">
                <img
                  src="/img/family4.jpg"
                  alt="Guest room"
                  className="w-full h-24 sm:h-40 lg:h-50 object-cover"
                />
              </PhotoView>
              <PhotoView src="/img/deluxe1.jpg">
                <img
                  src="/img/deluxe1.jpg"
                  alt="Guest room"
                  className="w-full h-24 sm:h-40 lg:h-50 object-cover"
                />
              </PhotoView>
            </div>
          </section>

          {/* ========== Guest Section ========== */}
          <section
            ref={guestRef}
            className="bg-gray-100 mx-auto border-b border-gray-400 scroll-mt-17 px-4 sm:px-10 py-8"
          >
            <h2 className="text-2xl uppercase mb-6">Executive ROOMS</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* 3 small images */}
              <PhotoView src="/img/family.jpg">
                <img
                  src="/img/family.jpg"
                  alt="Guest room"
                  className="w-full h-24 sm:h-40 lg:h-50 object-cover"
                />
              </PhotoView>
              <PhotoView src="/img/family3.jpg">
                <img
                  src="/img/family3.jpg"
                  alt="Guest room"
                  className="w-full h-24 sm:h-40 lg:h-50 object-cover"
                />
              </PhotoView>
              <PhotoView src="/img/family4.jpg">
                <img
                  src="/img/family4.jpg"
                  alt="Guest room"
                  className="w-full h-24 sm:h-40 lg:h-50 object-cover"
                />
              </PhotoView>

              {/* 2x2 layout */}
              <div className="col-span-2 sm:col-span-2 sm:row-span-2">
                <PhotoView src="/img/family.jpg">
                  <img
                    src="/img/family.jpg"
                    alt="Guest room"
                    className="w-full h-[180px] sm:h-[250px] lg:h-[417px] object-cover rounded-md"
                  />
                </PhotoView>
              </div>

              {/* 2 small images */}
              <PhotoView src="/img/family3.jpg">
                <img
                  src="/img/family3.jpg"
                  alt="Guest room"
                  className="w-full h-24 sm:h-40 lg:h-50 object-cover"
                />
              </PhotoView>
              <PhotoView src="/img/family.jpg">
                <img
                  src="/img/family.jpg"
                  alt="Guest room"
                  className="w-full h-24 sm:h-40 lg:h-50 object-cover"
                />
              </PhotoView>
            </div>
          </section>

          {/* ========== Others Section ========== */}
          <section
            ref={othersRef}
            className="bg-gray-100 mx-auto border-b border-gray-400 scroll-mt-17 px-4 sm:px-10 py-8"
          >
            <h2 className="text-2xl uppercase mb-6">Hotel View</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* 3 small images */}
              <PhotoView src="/img/view1.jpg">
                <img
                  src="/img/view1.jpg"
                  alt="Other gallery"
                  className="w-full h-24 sm:h-40 lg:h-50 object-cover"
                />
              </PhotoView>
              <PhotoView src="/img/view2.jpg">
                <img
                  src="/img/view2.jpg"
                  alt="Other gallery"
                  className="w-full h-24 sm:h-40 lg:h-50 object-cover"
                />
              </PhotoView>
              <PhotoView src="/img/view3.jpg">
                <img
                  src="/img/view3.jpg"
                  alt="Other gallery"
                  className="w-full h-24 sm:h-40 lg:h-50 object-cover"
                />
              </PhotoView>

              {/* 2x2 layout */}
              <div className="col-span-2 sm:col-span-2 sm:row-span-2">
                <PhotoView src="/img/view4.jpg">
                  <img
                    src="/img/view4.jpg"
                    alt="Other gallery"
                    className="w-full h-[180px] sm:h-[250px] lg:h-[417px] object-cover rounded-md"
                  />
                </PhotoView>
              </div>

              {/* 5 small images */}
              <PhotoView src="/img/view5.jpg">
                <img
                  src="/img/view5.jpg"
                  alt="Other gallery"
                  className="w-full h-24 sm:h-40 lg:h-50 object-cover"
                />
              </PhotoView>
              <PhotoView src="/img/view6.jpg">
                <img
                  src="/img/view6.jpg"
                  alt="Other gallery"
                  className="w-full h-24 sm:h-40 lg:h-50 object-cover"
                />
              </PhotoView>
              
            </div>
          </section>
        </div>
      </PhotoProvider>
    </div>
  );
}
