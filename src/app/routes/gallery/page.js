"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function GalleryPage() {
  const viewRef = useRef(null);
  const guestRef = useRef(null);
  const othersRef = useRef(null);

  const [activeTab, setActiveTab] = useState("view");

  const scrollToSection = (ref, tab) => {
    setActiveTab(tab);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
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
        <Link href="/" className="hover:underline text-gray-600">
          Home
        </Link>{" "}
        {">"} <span> Gallery </span>
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
            activeTab === "guest"
              ? "border-b-2 text-sm border-black text-black"
              : ""
          }`}
        >
          Executive
        </button>
        <button
          onClick={() => scrollToSection(othersRef, "dining")}
          className={`mx-4 px-1 py-2 transition ${
            activeTab === "dining"
              ? "border-b-2 text-sm border-black text-black "
              : ""
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
              <PhotoView src="/img/premium1.jpg">
                <div className="relative w-full h-24 sm:h-40 lg:h-50">
                  <Image
                    src="/img/premium1.jpg"
                    alt="Guest room"
                    fill
                    className="object-cover"
                  />
                </div>
              </PhotoView>
              <PhotoView src="/img/family.jpg">
                <div className="relative w-full h-24 sm:h-40 lg:h-50">
                  <Image
                    src="/img/family.jpg"
                    alt="Guest room"
                    fill
                    className="object-cover"
                  />
                </div>
              </PhotoView>
              <PhotoView src="/img/premium3.jpg">
                <div className="relative w-full h-24 sm:h-40 lg:h-50">
                  <Image
                    src="/img/premium3.jpg"
                    alt="Guest room"
                    fill
                    className="object-cover"
                  />
                </div>
              </PhotoView>

              <div className="col-span-2 sm:col-span-2 sm:row-span-2">
                <PhotoView src="/img/premium4.jpg">
                  <div className="relative w-full h-[180px] sm:h-[250px] lg:h-[417px] rounded-md overflow-hidden">
                    <Image
                      src="/img/premium4.jpg"
                      alt="Guest room"
                      fill
                      className="object-cover"
                    />
                  </div>
                </PhotoView>
              </div>

              <PhotoView src="/img/family4.jpg">
                <div className="relative w-full h-24 sm:h-40 lg:h-50">
                  <Image
                    src="/img/family4.jpg"
                    alt="Guest room"
                    fill
                    className="object-cover"
                  />
                </div>
              </PhotoView>
              <PhotoView src="/img/deluxe1.jpg">
                <div className="relative w-full h-24 sm:h-40 lg:h-50">
                  <Image
                    src="/img/deluxe1.jpg"
                    alt="Guest room"
                    fill
                    className="object-cover"
                  />
                </div>
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
              <PhotoView src="/img/family.jpg">
                <div className="relative w-full h-24 sm:h-40 lg:h-50">
                  <Image
                    src="/img/family.jpg"
                    alt="Guest room"
                    fill
                    className="object-cover"
                  />
                </div>
              </PhotoView>
              <PhotoView src="/img/family3.jpg">
                <div className="relative w-full h-24 sm:h-40 lg:h-50">
                  <Image
                    src="/img/family3.jpg"
                    alt="Guest room"
                    fill
                    className="object-cover"
                  />
                </div>
              </PhotoView>
              <PhotoView src="/img/family4.jpg">
                <div className="relative w-full h-24 sm:h-40 lg:h-50">
                  <Image
                    src="/img/family4.jpg"
                    alt="Guest room"
                    fill
                    className="object-cover"
                  />
                </div>
              </PhotoView>

              <div className="col-span-2 sm:col-span-2 sm:row-span-2">
                <PhotoView src="/img/family.jpg">
                  <div className="relative w-full h-[180px] sm:h-[250px] lg:h-[417px] rounded-md overflow-hidden">
                    <Image
                      src="/img/family.jpg"
                      alt="Guest room"
                      fill
                      className="object-cover"
                    />
                  </div>
                </PhotoView>
              </div>

              <PhotoView src="/img/family3.jpg">
                <div className="relative w-full h-24 sm:h-40 lg:h-50">
                  <Image
                    src="/img/family3.jpg"
                    alt="Guest room"
                    fill
                    className="object-cover"
                  />
                </div>
              </PhotoView>
              <PhotoView src="/img/family.jpg">
                <div className="relative w-full h-24 sm:h-40 lg:h-50">
                  <Image
                    src="/img/family.jpg"
                    alt="Guest room"
                    fill
                    className="object-cover"
                  />
                </div>
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
              <PhotoView src="/img/view1.jpg">
                <div className="relative w-full h-24 sm:h-40 lg:h-50">
                  <Image
                    src="/img/view1.jpg"
                    alt="Other gallery"
                    fill
                    className="object-cover"
                  />
                </div>
              </PhotoView>
              <PhotoView src="/img/view2.jpg">
                <div className="relative w-full h-24 sm:h-40 lg:h-50">
                  <Image
                    src="/img/view2.jpg"
                    alt="Other gallery"
                    fill
                    className="object-cover"
                  />
                </div>
              </PhotoView>
              <PhotoView src="/img/view3.jpg">
                <div className="relative w-full h-24 sm:h-40 lg:h-50">
                  <Image
                    src="/img/view3.jpg"
                    alt="Other gallery"
                    fill
                    className="object-cover"
                  />
                </div>
              </PhotoView>

              <div className="col-span-2 sm:col-span-2 sm:row-span-2">
                <PhotoView src="/img/view4.jpg">
                  <div className="relative w-full h-[180px] sm:h-[250px] lg:h-[417px] rounded-md overflow-hidden">
                    <Image
                      src="/img/view4.jpg"
                      alt="Other gallery"
                      fill
                      className="object-cover"
                    />
                  </div>
                </PhotoView>
              </div>

              <PhotoView src="/img/view5.jpg">
                <div className="relative w-full h-24 sm:h-40 lg:h-50">
                  <Image
                    src="/img/view5.jpg"
                    alt="Other gallery"
                    fill
                    className="object-cover"
                  />
                </div>
              </PhotoView>
              <PhotoView src="/img/view6.jpg">
                <div className="relative w-full h-24 sm:h-40 lg:h-50">
                  <Image
                    src="/img/view6.jpg"
                    alt="Other gallery"
                    fill
                    className="object-cover"
                  />
                </div>
              </PhotoView>
            </div>
          </section>
        </div>
      </PhotoProvider>
    </div>
  );
}
