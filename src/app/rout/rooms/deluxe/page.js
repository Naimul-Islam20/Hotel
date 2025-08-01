// RoomDetailsPage.jsx

import React from 'react';
import ImageSliderWithModal from './img';
import RoomInfo from './roomInfo';
import RoomServices from './service';
import AdditionalServices from './additional';
import ContactActions from './contactAction';

import Calendar from './calendar'
// ⬇️ এই imports গুলো উপরে রাখতে হবে
import { FaBath, FaCoffee, FaCar, FaWind, FaMugHot, FaWifi, FaShuttleVan, FaSpa, FaHotTub } from 'react-icons/fa';
import { MdMicrowave } from 'react-icons/md';
import Link from "next/link";

import { FaQuestionCircle } from 'react-icons/fa'; // Optional icon
import { FaCaretDown, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGlobe } from 'react-icons/fa';

// import { Accordion } from '@/components/ui/accordion'; // যদি Tailwind UI or Custom component use করো

const DeluxeRoomDetails = () => {
  return (
    <div className="w-full">
          {/* ✅ Hero Section */}
            <section
              className="w-full bg-cover bg-center flex flex-col items-center justify-center text-black text-center px-4 py-10 relative"
              // style={{ backgroundImage: "url('/exc/about2.jpg')" }}
            >
              <div className="absolute inset-0 bg-sky-200" />
              <div className="relative z-10">
                <h1 className="text-3xl md:text-5xl  pb-5">Deluxe Room</h1>
                <Link href="/" className="hover:underline text-sm text-gray-700 ">
                  Home
                </Link>{" > "}
                 Deluxe Room
              </div>
            </section>

      {/* 🟨 Main Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-4">


        {/* 🖼️ First 3 Columns: Image Slider */}
        <div className="md:col-span-3 mx-5 ">
          <ImageSliderWithModal />
             <div className="w-full bg-white py-6 text-start">
                <h2 className="text-2xl font-semibold text-black">
                  Price: <span className="text-sky-500">৳3500 / night</span>
                </h2>
              </div>
          <RoomInfo/>
          <RoomServices/>
          {/* <AdditionalServices/> */}
          <Calendar/>

            <div className="max-w-7xl mx-auto  py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Overview</h2>
            <p className="text-gray-600 text-justify leading-relaxed ">
               Our Deluxe Room is a refined space that combines simplicity with charm, offering extra space and thoughtful design. Ideal for travelers who appreciate comfort without compromising on style, it features elegant furnishings, a soft double or king-size bed, and large windows that invite daylight and scenic views.

While the room itself offers a peaceful indoor retreat, guests can enjoy a breathtaking port view from the hotel’s top-floor terrace, perfect for relaxing and soaking in the natural beauty.

The room comes with modern amenities such as a Smart TV, high-speed Wi-Fi, and a writing desk for added convenience. The attached bathroom is well-appointed with a rain shower, essential toiletries, and premium fittings. With a calm, inviting ambiance, the Deluxe Room ensures a restful and rejuvenating experience.
            </p>
            </div>


        </div>

<div className="space-y-4 w-full p-2 border border-gray-300 bg-gray-100 h-fit sticky top-24">
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
      Ocean Tower, 6th Floor, Agrabad Access Road, Beparipara, Circle Chittagong, Bangladesh.
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
  <div className="bg-sky-500 rounded hover:bg-sky-600 text-center">
    <Link
      href="/rout/contact"
      className="block w-full text-white tracking-widest px-4 py-2 font-medium transition duration-200 "
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

export default DeluxeRoomDetails;
