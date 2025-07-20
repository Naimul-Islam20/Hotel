"use client";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaCarSide,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image"; // যদি তুমি Next.js use করো
import { IoAirplane } from "react-icons/io5";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="w-full bg-gray-300 text-gray-800">
       {/* ✅ Hero Section */}
      <section
        className="w-full h-[230px] md:h-[230px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4 relative"
        style={{ backgroundImage: "url('/exc/about2.jpg')" }} // 🔁 তোমার background image path
      >
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold uppercase">Contact Us</h1>
           <Link href="/" className="hover:underline text-white">Home</Link> &gt; Contact Us
           
        </div>
      </section>
      {/* Contact + Form */}
    
      <div className="px-6 w-full md:px-14 bg-gray-100 lg:px-24 py-16">
        {/* Section Heading with border break */}
        {/* Section Heading with Border Break */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="absolute w-full border-t border-gray-400"></div>
          <h2 className="relative z-10 bg-gray-100 px-3 text-3xl md:text-4xl  text-gray-800">
            Our Location
          </h2>
        </div>

        {/* Main Grid Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded shadow p-8">
          
           {/* ✅ Column 2 & 3: Google Map (col-span-2) */}
          <div className="md:col-span-2 w-full h-[320px] md:h-[500px] rounded-lg overflow-hidden shadow-inner">
            <iframe
              title="Muktodhara Technology Limited Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.5914230645894!2d91.78723127434566!3d22.33128684177332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd90f5872b99d%3A0x878f02d031662a33!2sMuktodhara%20Technology%20Limited!5e0!3m2!1sen!2sbd!4v1752478976306!5m2!1sen!2sbd"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          {/* ✅ Column 1: GETTING HERE Info */}
          <div className="space-y-6">
            {/* GETTING HERE Info */}
            <div className="space-y-2">
              <h3 className="text-2xl  text-black">
                GETTING HERE
              </h3>
              <p className="text-sm text-gray-700 font-medium">
                Agrabad Residencial Hotel
              </p>
              <p className="text-sm text-gray-700">
                Agrabad, Bangladesh, 1212 <br />
                Tel: +880 9-638200100
              </p>
            </div>

            {/* Toggle 1 */}
            <details className="group border border-gray-300 rounded-md overflow-hidden">
              <summary className="cursor-pointer bg-gray-100 px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-700 group-open:bg-sky-50 group-open:text-sky-500">
                <IoAirplane className="text-lg" />
                Airport
                <span className="text-lg transform group-open:rotate-180 transition">
                  <FaCaretDown />
                </span>
              </summary>
              <div className="px-4 py-3 text-sm text-gray-600 space-y-1">
                <p>
                  Transfers to and from Shah Amanat International Airport take approximately one hour by car
                </p>
                
              </div>
            </details>

            {/* ✅ Toggle 2: Others Transport */}
            <details className="group border border-gray-300 rounded-md overflow-hidden">
              <summary className="cursor-pointer bg-gray-100 px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-700 group-open:bg-sky-50 group-open:text-sky-500">
                <FaCarSide className="text-lg" /> Others Transport
                <span className="text-lg transform group-open:rotate-180 transition">
                  <FaCaretDown />
                </span>
              </summary>
              <div className="px-4 py-3 text-sm text-gray-600 space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-700"> Public taxis are readily available. Hotel cars and town cars can be organised by the concierge</h4>
                 
                </div>
              </div>
            </details>
          </div>

         
        </div>
      </div>
    </div>
  );
}
