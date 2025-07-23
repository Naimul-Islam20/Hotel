'use client';
import Link from 'next/link';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGlobe, FaCaretDown } from "react-icons/fa";

export default function ContactMapSection() {
  return (
    <div className="w-full bg-sky-100 px-2 sm:px-4 py-12">
      
      {/* Stylish Section Heading */}
      <div className="flex items-center justify-center gap-3 sm:gap-5 mb-10">
        <div className="flex-grow border-t-2 border-gray-700"></div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center tracking-wider uppercase text-black">
          Our Location
        </h2>
        <div className="flex-grow border-t-2 border-gray-700"></div>
      </div>

      {/* Container Fluid */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
        
        {/* Left: Google Map */}
        <div className="w-full md:w-2/3 h-[300px] md:h-[500px] rounded overflow-hidden shadow-inner">
          <iframe
            title="Ocean Residence Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.655460609474!2d91.80170537436182!3d22.328866441861148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd90075dfd4b5%3A0x243e1276af5452d1!2sOcean%20residence!5e0!3m2!1sen!2sbd!4v1753263245597!5m2!1sen!2sbd"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right: Contact Info */}
        <div className="w-full md:w-1/3 space-y-4">
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

          {/* Contact Button */}
          <div className="p-2 bg-sky-500 rounded text-center">
            <Link href="/rout/contact" className="text-white tracking-widest py-2 font-medium transition duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
