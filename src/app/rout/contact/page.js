"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaCarSide,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="w-full bg-gray-300 text-gray-800">
      
      {/* ✅ Hero Section */}
      <section
        className="w-full bg-cover bg-center flex flex-col items-center justify-center text-black text-center px-4 py-10 relative"
        // style={{ backgroundImage: "url('/exc/about2.jpg')" }}
      >
        <div className="absolute inset-0 bg-sky-200" />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl  pb-5">Contact Us</h1>
          <Link href="/" className="hover:underline text-sm text-gray-700 ">
            Home
          </Link>{" "}
          &gt; Contact Us
        </div>
      </section>

      {/* ✅ Contact Info Section */}
      <section className="w-full px-4 py-10 flex bg-white justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-black">Hotel Sky </h2>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900">Address</h4>
              <p className="text-sm sm:text-base text-gray-950">Ocean tower, 9th floor, Agrabad access road, beparilara, circle</p>
              <p className="text-sm sm:text-base text-gray-950">Chattogram - Bangladesh</p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900">Bookings</h4>
              <p className="text-sm sm:text-base text-gray-800">+41 934 121 1334</p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900">Questions</h4>
              <p className="text-sm sm:text-base text-gray-800">info@oceanresidence.com</p>
            </div>

            {/* ✅ Social Icons */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-blue-500">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-pink-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-blue-600">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-red-600">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Airport + Transport */}
          <div className="w-full space-y-6 bg-white p-1 rounded ">
            
            {/* Airport Toggle */}
            <details className="group border border-gray-300 rounded-md overflow-hidden">
              <summary className="cursor-pointer bg-gray-100 px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-700 group-open:bg-sky-50 group-open:text-sky-500">
                <IoAirplane className="text-lg" />
                Airport
                <span className="text-lg transform group-open:rotate-180 transition">
                  <FaCaretDown />
                </span>
              </summary>
              <div className="px-1 py-3 text-sm text-gray-600 space-y-1">
                <p>
                  Transfers to and from Shah Amanat International Airport take approximately one hour by car.
                </p>
              </div>
            </details>

            {/* Others Transport Toggle */}
            <details className="group border border-gray-300 rounded-md overflow-hidden">
              <summary className="cursor-pointer bg-gray-100 px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-700 group-open:bg-sky-50 group-open:text-sky-500">
                <FaCarSide className="text-lg" /> Others Transport
                <span className="text-lg transform group-open:rotate-180 transition">
                  <FaCaretDown />
                </span>
              </summary>
              <div className="px-4 py-3 text-sm text-gray-600 space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-700">
                    Public taxis are readily available. Hotel cars and town cars can be organised by the concierge.
                  </h4>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ✅ Location Section */}
      <div className=" w-full  bg-gray-100 ">
        
        {/* Section Heading */}
       

        {/* Google Map Full Width */}
        <div className="w-full bg-white  ">
          <div className="w-full h-[320px] md:h-[500px] rounded overflow-hidden shadow-inner">
          <iframe
  title="Ocean Residence Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.655460609474!2d91.80170537436182!3d22.328866441861148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd90075dfd4b5%3A0x243e1276af5452d1!2sOcean%20residence!5e0!3m2!1sen!2sbd!4v1753263245597!5m2!1sen!2sbd"
  className="w-full h-full border-0"
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
        </div>
      </div>
    </div>
  );
}
