"use client";

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { localAttractions } from "./src";
import Narby from "../narby/page";
import { Link as ScrollLink, Element } from "react-scroll";
import { useState } from "react";
import Link from "next/link"; // ✅ Breadcrumb এর জন্য

export default function LocalAttractions() {
  const [activeTab, setActiveTab] = useState("local");

  return (
    <div className="bg-white text-black ">
      
      {/* ✅ Hero Section */}
      <div
        className="relative h-[180px] md:h-[260px]    flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url(/img/hero1.jpg)", // তুমি চাইলে এখানে ভিন্ন ছবি দিতে পারো
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50" />
        <h1 className="relative z-10 text-2xl  md:text-5xl font-bold text-center">
          Attraction Chittagong Area
        </h1>
        {/* Breadcrumb */}
        <div className="relative z-10 mt-2">
          <p className="text-sm text-gray-200">
            <Link href="/" className="hover:underline ">
              Home
            </Link>{" "}
            &gt; <span className="text-white">Attraction</span>
          </p>
        </div>
      </div>

      {/* ✅ Filter Buttons */}
      <div className="flex justify-center gap-4 md:mt-5 border-b border-gray-300">
        <ScrollLink
          to="localSection"
          smooth={true}
          duration={800}
          offset={-60}
          onSetActive={() => setActiveTab("local")}
          className={`cursor-pointer px-4 py-2 font-medium relative ${
            activeTab === "local"
              ? "border-b-2 border-black"
              : "border-b-2 border-transparent"
          }`}
        >
          Local
        </ScrollLink>

        <ScrollLink
          to="nearbySection"
          smooth={true}
          duration={800}
          offset={-60}
          onSetActive={() => setActiveTab("nearby")}
          className={`cursor-pointer px-4 py-2 font-medium relative ${
            activeTab === "nearby"
              ? "border-b-2 border-black text-sky-400"
              : "border-b-2 border-transparent"
          }`}
        >
          Nearby
        </ScrollLink>
      </div>

      {/* ✅ Local Section */}
      <Element
        name="localSection"
        className="max-w-7xl mx-auto bg-gray-50 px-2 md:px-10 py-2 md:py-8"
      >
        <h1 className=" text-xl md:text-2xl mb-2 md:mb-7 ">LOCAL ATTRACTIONS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-2 md:gap-6">
          {localAttractions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white  shadow border border-gray-100  overflow-hidden flex flex-col"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-72 object-cover"
                priority={idx === 0}
              />
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div className="flex justify-between items-center mb-1">
                  <h2 className="text-md md:text-xl  font-semibold">{item.title}</h2>
                  <span className="text-sm text-sky-600 ">
                    {item.distance}
                  </span>
                </div>

                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-700 text-sm ">
                    {item.location}
                  </span>
                  <a
                    href={item.googleMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    title="Open in Google Maps"
                  >
                    <FaMapMarkerAlt className="inline mr-1" /> Location
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Element>

      {/* ✅ Nearby Section */}
      <Element name="nearbySection">
        <Narby />
      </Element>
    </div>
  );
}
