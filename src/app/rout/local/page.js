"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { localAttractions } from "./src";
import Narby from "../narby/page";
import { Link as ScrollLink, Element } from "react-scroll";
import { useState } from "react";

export default function LocalAttractions() {
  const [activeTab, setActiveTab] = useState("local");

  return (
    <div>
      <div>
        <h1 className="text-4xl item-center text-center justify-center pt-4 ">Attraction Chittagong area</h1>
      </div>
      {/* Filter Buttons */}

      <div className="flex justify-center gap-4 mt-5 border-b border-gray-300">
        <ScrollLink
          to="localSection"
          smooth={true}
          duration={800}
          offset={-60}
          onSetActive={() => setActiveTab("local")}
          className={`cursor-pointer px-4 py-2  font-medium relative
            ${activeTab === "local" ? "border-b-2 border-black " : "border-b-2 border-transparent"}
          `}
        >
          Local
        </ScrollLink>

        <ScrollLink
          to="nearbySection"
          smooth={true}
          duration={800}
          offset={-60}
          onSetActive={() => setActiveTab("nearby")}
          className={`cursor-pointer px-4 py-2  font-medium relative
            ${activeTab === "nearby" ? "border-b-2 border-black text-sky-400" : "border-b-2 border-transparent "}
          `}
        >
          Nearby
        </ScrollLink>
      </div>

      {/* Local Section */}
      <Element name="localSection" className="max-w-7xl mx-auto bg-white   px-10 py-8">
        <h1 className="text-2xl   mb-3">
          LOCAL ATTRACTIONS 
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {localAttractions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow border border-gray-100 overflow-hidden flex flex-col"
            >
              <Image
                src="/img/view.jpg"
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-72 object-cover"
                priority={idx === 0}
              />
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div className="flex justify-between items-center mb-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <span className="text-sm text-blue-600 font-medium">
                    {item.distance}
                  </span>
                </div>

                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-600 text-sm">{item.location}</span>
                  <a
                    href={item.googleMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    title="Open in Google Maps"
                  >
                    <FaMapMarkerAlt className="text-lg" /> Location
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Element>

      {/* Nearby Section */}
      <Element name="nearbySection">
        <Narby />
      </Element>
    </div>
  );
}
