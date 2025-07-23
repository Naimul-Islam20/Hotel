// RoomDetailsPage.jsx

import React from 'react';
import ImageSliderWithModal from './img';
import RoomInfo from './roomInfo';
import RoomServices from './service';
import AdditionalServices from './additional';
import ContactActions from './contactAction';
 import Link from "next/link";
import Calendar from './calendar'

import { FaBath, FaCoffee, FaCar, FaWind, FaMugHot, FaWifi, FaShuttleVan, FaSpa, FaHotTub } from 'react-icons/fa';
import { MdMicrowave } from 'react-icons/md';

import { FaQuestionCircle } from 'react-icons/fa'; // Optional icon
import { FaCaretDown, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGlobe } from 'react-icons/fa';

// import { Accordion } from '@/components/ui/accordion'; // যদি Tailwind UI or Custom component use করো

const RoomDetailsPage = () => {
  return (
    <div className="w-full">
     {/* ✅ Hero Section */}
                <section
                  className="w-full bg-cover bg-center flex flex-col items-center justify-center text-black text-center px-4 py-10 relative"
                  // style={{ backgroundImage: "url('/exc/about2.jpg')" }}
                >
                  <div className="absolute inset-0 bg-sky-200" />
                  <div className="relative z-10">
                    <h1 className="text-3xl md:text-5xl  pb-5">Superior Room </h1>
                    <Link href="/" className="hover:underline text-sm text-gray-700 ">
                      Home
                    </Link>{" "}
                    &gt;Superior Room 
                  </div>
                </section>

      {/* 🟨 Main Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-4">


        {/* 🖼️ First 3 Columns: Image Slider */}
        <div className="md:col-span-3 mx-5 ">
          <ImageSliderWithModal />
          <RoomInfo/>
          <RoomServices/>
          <AdditionalServices/>
          <Calendar/>

            <div className="max-w-7xl mx-auto  py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Overview</h2>
            <p className="text-gray-600 leading-relaxed text-justify">
                Elevate your stay with our Superior Room — a perfect choice for guests seeking comfort with a touch of sophistication. Spacious and tastefully decorated, this room offers a restful king-size bed, stylish lighting, and an airy layout that brings in natural light. It includes all the essentials for a hassle-free stay: Smart TV, fast Wi-Fi, and a functional workspace. The modern bathroom is equipped with a walk-in rain shower, fresh towels, and complimentary luxury toiletries. Whether for a short visit or an extended stay, the Superior Room delivers elegance, comfort, and thoughtful details.
            </p>
            </div>


        </div>

       
<div className="space-y-4 w-full p-2 bg-gray-100 h-fit sticky top-18">
  <h2 className="text-xl font-semibold mb-2">Contact Info</h2>

  {/* Location */}
  <details className="group border border-gray-300 rounded-md overflow-hidden">
    <summary className="cursor-pointer bg-white px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-700 group-open:bg-blue-50 group-open:text-sky-500">
      <span className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-base" />
        <span className="leading-none">Location</span>
      </span>
      <FaCaretDown className="text-lg transform group-open:rotate-180 transition" />
    </summary>
    <div className="px-4 py-3 text-sm text-gray-600">
      Ocean tower, 9th floor, Agrabad access road, beparilara, circle Chittagong, Bangladesh.
    </div>
  </details>

  {/* Email */}
  <details className="group border border-gray-300 rounded-md overflow-hidden">
    <summary className="cursor-pointer bg-white px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-700 group-open:bg-blue-50 group-open:text-sky-500">
      <span className="flex items-center gap-2">
        <FaEnvelope className="text-base" />
        <span className="leading-none">Email</span>
      </span>
      <FaCaretDown className="text-lg transform group-open:rotate-180 transition" />
    </summary>
    <div className="px-4 py-3 text-sm text-gray-600">
      contact@oceanresidence.com
    </div>
  </details>

  {/* Phone */}
  <details className="group border border-gray-300 rounded-md overflow-hidden">
    <summary className="cursor-pointer bg-white px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-700 group-open:bg-blue-50 group-open:text-sky-500">
      <span className="flex items-center gap-2">
        <FaPhoneAlt className="text-base" />
        <span className="leading-none">Phone</span>
      </span>
      <FaCaretDown className="text-lg transform group-open:rotate-180 transition" />
    </summary>
    <div className="px-4 py-3 text-sm text-gray-600">
      +880 1234-567890
    </div>
  </details>

  {/* Website */}
  <details className="group border border-gray-300 rounded-md overflow-hidden">
    <summary className="cursor-pointer bg-white px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-700 group-open:bg-blue-50 group-open:text-sky-500">
      <span className="flex items-center gap-2">
        <FaGlobe className="text-base" />
        <span className="leading-none">Website</span>
      </span>
      <FaCaretDown className="text-lg transform group-open:rotate-180 transition" />
    </summary>
    <div className="px-4 py-3 text-sm text-gray-600">
      <a href="https://oceanresidencectg.com" className="text-blue-600 underline" target="_blank" rel="noreferrer">
        www.oceanresidencectg.com
      </a>
    </div>
  </details>

  {/* Contact Us Button */}
 <div className="bg-sky-500 rounded text-center">
  <Link
    href="/rout/contact"
    className="block w-full text-white tracking-widest px-4 py-2 font-medium transition duration-200 hover:bg-sky-600"
  >
    Contact Us
  </Link>
</div>

</div>

      </div>
  
    </div>
  );
};

export default RoomDetailsPage;
