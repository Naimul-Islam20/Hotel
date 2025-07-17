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

export default function ContactPage() {
  return (
    <div className="w-full bg-gray-300 text-gray-800">
      {/* Hero */}
      <div className="text-center py-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h1 className="text-4xl font-bold">📬 Get in Touch</h1>
        <p className="mt-2 text-lg">
          We’d love to hear from you. Reach out anytime!
        </p>
      </div>

      {/* Contact + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-14 lg:px-24 py-12">
        {/* Contact Info & Image */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-2">
              📞 Contact Information
            </h2>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
              <span>+880 1234 567 890</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-600" />
              <span>info@muktodhara.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-600" />
              <span>+880 1987 654 321</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-purple-600" />
              <span>Halishahar K Block, Chattogram, Bangladesh</span>
            </div>

            {/* 👉 Direct Call/WhatsApp Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="tel:+8801234567890"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/8801987654321"
                target="_blank"
                className="bg-[#25D366] text-white px-4 py-2 rounded hover:bg-green-700"
              >
                💬 WhatsApp Now
              </a>
            </div>

            {/* 👉 Social Icons */}
            <div className="pt-4 flex gap-4 text-lg">
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-blue-600 hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-pink-500 hover:scale-110 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-blue-800 hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="text-red-600 hover:scale-110 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* 👉 Support Agent Image */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/agent.jpg" // 👉 তোমার public ফোল্ডারে agent.jpg রাখো
              alt="Support Agent"
              width={600}
              height={400}
              className="w-full object-cover h-64"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-semibold">✉️ Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="px-6 w-full md:px-14 bg-gray-100 lg:px-24 py-16">
        {/* Section Heading with border break */}
        {/* Section Heading with Border Break */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="absolute w-full border-t border-gray-700"></div>
          <h2 className="relative z-10 bg-gray-100 px-1 text-3xl md:text-4xl  text-gray-800">
            Our Location
          </h2>
        </div>

        {/* Main Grid Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded shadow p-8 border border-gray-300">
          {/* ✅ Column 1: GETTING HERE Info */}
          <div className="space-y-6">
            {/* GETTING HERE Info */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">
                GETTING HERE
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                Agrabad Residencial Hotel
              </p>
              <p className="text-sm text-gray-600">
                Agrabad, Bangladesh, 1212 <br />
                Tel: +880 9-638200100
              </p>
            </div>

            {/* Toggle 1 */}
            <details className="group border border-gray-300 rounded-md overflow-hidden">
              <summary className="cursor-pointer bg-gray-100 px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-700 group-open:bg-blue-50 group-open:text-blue-700">
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
              <summary className="cursor-pointer bg-gray-100 px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-700 group-open:bg-blue-50 group-open:text-blue-700">
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
        </div>
      </div>
    </div>
  );
}
