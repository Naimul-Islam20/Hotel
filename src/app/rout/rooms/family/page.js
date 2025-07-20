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
      {/* 🟦 Hero Section */}
      <div className="w-full bg-blue-100 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Family Room</h1>
         <Link href="/" className="hover:underline text-white">Home</Link> &gt; Family Room
                  
      </div>

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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Description</h2>
            <p className="text-gray-600 leading-relaxed text-justify">
                Quisque fermentum aliquam consectetur. Ut molestie dictum enim vel placerat. Suspendisse potenti. 
                Pellentesque sed quam ante. Mauris ut felis sodales, euismod erat et, hendrerit purus. Sed diam orci, 
                aliquet a condimentum nec, consequat fermentum velit. Duis gravida aliquet fermentum. Pellentesque nec dui 
                at lorem mollis molestie sed eu orci. Vestibulum et elit dolor. Mauris vulputate felis quis urna consequat, 
                a tincidunt libero blandit. Morbi eros metus, egestas eget magna ac, dignissim imperdiet est. In eget augue 
                nunc. In id nisi porta, mollis tellus auctor, rhoncus justo. Praesent imperdiet tincidunt ipsum, vel tincidunt 
                odio iaculis et. Sed posuere sollicitudin nisi in dignissim.
            </p>
            </div>


        </div>

<div className="space-y-4 w-full p-2 bg-gray-100 h-fit sticky top-18">
  <h2 className="text-xl font-semibold mb-2">Contact Info</h2>

  {/* Location */}
  <details className="group border border-gray-300 rounded-md overflow-hidden">
    <summary className="cursor-pointer bg-white px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-700 group-open:bg-blue-50 group-open:text-blue-700">
      <span className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-base" />
        <span className="leading-none">Location</span>
      </span>
      <FaCaretDown className="text-lg transform group-open:rotate-180 transition" />
    </summary>
    <div className="px-4 py-3 text-sm text-gray-600">
      123, Beach Road, Cox’s Bazar, Bangladesh.
    </div>
  </details>

  {/* Email */}
  <details className="group border border-gray-300 rounded-md overflow-hidden">
    <summary className="cursor-pointer bg-white px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-700 group-open:bg-blue-50 group-open:text-blue-700">
      <span className="flex items-center gap-2">
        <FaEnvelope className="text-base" />
        <span className="leading-none">Email</span>
      </span>
      <FaCaretDown className="text-lg transform group-open:rotate-180 transition" />
    </summary>
    <div className="px-4 py-3 text-sm text-gray-600">
      contact@hotelblue.com
    </div>
  </details>

  {/* Phone */}
  <details className="group border border-gray-300 rounded-md overflow-hidden">
    <summary className="cursor-pointer bg-white px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-700 group-open:bg-blue-50 group-open:text-blue-700">
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
    <summary className="cursor-pointer bg-white px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-700 group-open:bg-blue-50 group-open:text-blue-700">
      <span className="flex items-center gap-2">
        <FaGlobe className="text-base" />
        <span className="leading-none">Website</span>
      </span>
      <FaCaretDown className="text-lg transform group-open:rotate-180 transition" />
    </summary>
    <div className="px-4 py-3 text-sm text-gray-600">
      <a href="https://hotelblue.com" className="text-blue-600 underline" target="_blank" rel="noreferrer">
        www.hotelblue.com
      </a>
    </div>
  </details>

  {/* Contact Us Button */}
  <div className="pt-4 text-center">
    <button className="text-sky-400 underline tracking-widest py-2 font-medium   transition duration-200">
      Contact Us
    </button>
  </div>
</div>

      </div>
  
    </div>
  );
};

export default RoomDetailsPage;
