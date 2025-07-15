"use client";
import Image from "next/image";
import { FaBed, FaWifi, FaBath, FaTv, FaSnowflake, FaMugHot } from "react-icons/fa";
import RoomImageSlider from "./img";

export default function DeluxeRoomPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pb-12">
      {/* Hero */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/rooms/deluxe.jpg"
          alt="Deluxe Room"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Deluxe Room</h1>
        </div>
      </div>

      {/* Details */}
      <div className="max-w-6xl mx-auto mt-10 px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Room Overview</h2>
          <p className="text-gray-700">
            Our Deluxe Room is designed for both comfort and elegance. Perfect for couples or business travelers, this room provides everything you need for a relaxing stay. Featuring a plush king-size bed, private modern bathroom, and contemporary décor — it's your home away from home.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <li className="flex items-center gap-2"><FaBed className="text-blue-600" /> 1 King Size Bed</li>
            <li className="flex items-center gap-2"><FaBath className="text-blue-600" /> Private Bathroom</li>
            <li className="flex items-center gap-2"><FaWifi className="text-blue-600" /> Free Wi-Fi</li>
            <li className="flex items-center gap-2"><FaTv className="text-blue-600" /> 42" Smart TV</li>
            <li className="flex items-center gap-2"><FaSnowflake className="text-blue-600" /> Air Conditioning</li>
            <li className="flex items-center gap-2"><FaMugHot className="text-blue-600" /> Complimentary Breakfast</li>
          </ul>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Price</h3>
            <p className="text-lg text-gray-900 font-bold">$120 / night</p>
          </div>

          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>

        {/* Right: Gallery */}
        <RoomImageSlider/>
      </div>
    </div>
  );
}
