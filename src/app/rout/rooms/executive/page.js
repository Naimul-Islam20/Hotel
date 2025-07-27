// RoomDetailsPage.jsx

import React from 'react';
import ImageSliderWithModal from './img';
import RoomInfo from './roomInfo';
import RoomServices from './service';
import ContactActions from './contactAction';
 import Link from "next/link";

import Calendar from './calendar'
// ⬇️ এই imports গুলো উপরে রাখতে হবে
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
               <h1 className="text-3xl md:text-5xl  pb-5">Executive Room</h1>
               <Link href="/" className="hover:underline text-sm text-gray-700 ">
                 Home
               </Link>{" "}
               &gt; Executive Room
             </div>
           </section>

      {/* 🟨 Main Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-4">


        {/* 🖼️ First 3 Columns: Image Slider */}
        <div className="md:col-span-3 mx-5 ">
          <ImageSliderWithModal />
         <div className="w-full bg-white py-6 text-start">
      <h2 className="text-2xl font-semibold text-black">
        Price: <span className="text-sky-500">৳3000 / night</span>
      </h2>
    </div>
          <RoomInfo/>
          <RoomServices/>
          
          <Calendar/>

            <div className="max-w-7xl mx-auto  py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Overview</h2>
            <p className="text-gray-600 text-justify leading-relaxed ">
              Discover the perfect balance of luxury and practicality in our Executive Room — designed to meet the needs of discerning travelers. The room features a refined interior with premium furnishings, a spacious king-size bed, and a comfortable work area ideal for both business and leisure.


While the room itself offers a peaceful indoor retreat, guests can enjoy a breathtaking port view from the hotel’s top-floor terrace, perfect for relaxing and soaking in the natural beauty.

For entertainment, enjoy a selection of local and international channels on the flat-screen Smart TV. The en-suite bathroom includes a walk-in rain shower, deluxe toiletries, and soft bathrobes, creating a relaxing atmosphere after a long day. Every detail in the Executive Room is thoughtfully curated to offer you a seamless and memorable stay.
            </p>
            </div>


        </div>

        
       
  <div className="space-y-4 w-full border border-gray-300 p-2 bg-gray-100 h-fit sticky top-24">
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
      Ocean Tower, 6th Floor, Agrabad Access Road, Beparilara, Circle Chittagong, Bangladesh.
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
  <a href="mailto:oceanresidence10@gmail.com" className="text-blue-600 underline">
    oceanresidence10@gmail.com
  </a>
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
  <a href="tel:+8801336188906" className="text-blue-600 underline">
    +8801336188906
  </a>
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
      <a
        href="https://oceanresidencectg.com"
        className="text-blue-600 underline"
        target="_blank"
        rel="noreferrer"
      >
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

  {/* Footer Messages */}
  <div className="text-sm text-gray-600 pt-4 border-t border-gray-300 space-y-4">
    {/* English */}
    <ul className="list-indent space-y-1">
      <li>Experience comfort, elegance, and care — only at Ocean Residence.</li>
      <li>Your peaceful stay is our top priority.</li>
      <li>Friendly service, secure environment, unforgettable memories.</li>
      <li>Ocean Residence — where hospitality feels like home.</li>
    </ul>
  </div>
</div>
      </div>
  
    </div>
  );
};

export default RoomDetailsPage;
