"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
const attractions = [
  {
    name: "Foy's Lake",
    distance: "2.3 km",
    description: "চট্টগ্রামের অন্যতম জনপ্রিয় লেক ও থিম পার্ক।",
    image: "/img/image1.jpg",
    mapLink: "https://maps.app.goo.gl/Zr3ABDtSoWfbLxa69",
    tag: "Lake & Park",
  },
  {
    name: "Patenga Sea Beach",
    distance: "5.8 km",
    description: "সুন্দর সূর্যাস্তের জন্য বিখ্যাত এই সৈকত।",
    image: "/img/image1.jpg",
    mapLink: "https://maps.app.goo.gl/wZuTtTvPRN2vYFqS7",
    tag: "Sea Beach",
  },
  {
    name: "Butterfly Park",
    distance: "6.1 km",
    description: "বাচ্চাদের জন্য মনোমুগ্ধকর প্রজাপতির পার্ক।",
    image: "/img/image1.jpg",
    mapLink: "https://maps.app.goo.gl/HUFGghySmDQMXEX28",
    tag: "Family Spot",
  },
  {
    name: "Chandranath Pahar",
    distance: "32 km",
    description: "সীতাকুণ্ডে অবস্থিত পাহাড় ও মন্দির ভ্রমণপ্রেমীদের আকর্ষণ করে।",
    image: "/img/image1.jpg",
    mapLink: "https://maps.app.goo.gl/DhnWVpzH9yPES69A8",
    tag: "Hill & Temple",
  },
  {
    name: "Rangamati Lake View",
    distance: "75 km",
    description: "নৌকা ভ্রমণের জন্য উপযুক্ত প্রাকৃতিক সৌন্দর্য।",
    image: "/img/image1.jpg",
    mapLink: "https://maps.app.goo.gl/ZjLfwmvayecVBTHe8",
    tag: "Nature",
  },
  {
    name: "Cox's Bazar Beach",
    distance: "155 km",
    description: "বিশ্বের দীর্ঘতম প্রাকৃতিক সমুদ্র সৈকত।",
    image: "/img/image1.jpg",
    mapLink: "https://maps.app.goo.gl/G63pNEFwCyiy3piM8",
    tag: "Beach",
  },
  {
    name: "Zia Memorial Museum",
    distance: "3.2 km",
    description: "প্রাক্তন রাষ্ট্রপতি জিয়ার স্মৃতিসৌধ ও ইতিহাস সংগ্রহশালা।",
    image: "/img/image1.jpg",
    mapLink: "https://maps.app.goo.gl/5o8GLiFc1Bu7sxNY8",
    tag: "Museum",
  },
  {
    name: "War Cemetery",
    distance: "4.5 km",
    description: "দ্বিতীয় বিশ্বযুদ্ধের শহীদদের স্মরণে নির্মিত।",
    image: "/img/image1.jpg",
    mapLink: "https://maps.app.goo.gl/Jrdy8qTH9w4aySwt9",
    tag: "Historical",
  },
  {
    name: "Ethnological Museum",
    distance: "5.0 km",
    description: "বাংলাদেশের জাতিগোষ্ঠীর ইতিহাসের দারুণ সংগ্রহশালা।",
    image: "/img/image1.jpg",
    mapLink: "https://maps.app.goo.gl/XbS7kQ6PU5JGswHw6",
    tag: "Museum",
  },
  {
    name: "DC Hill Park",
    distance: "3.9 km",
    description: "চট্টগ্রামের মাঝে পাহাড়ি পার্ক ও সংস্কৃতি কেন্দ্র।",
    image: "/img/image1.jpg",
    mapLink: "https://maps.app.goo.gl/ov4aCL4kZLPG6ZTt5",
    tag: "Park",
  },
  {
    name: "Batik Painting Village",
    distance: "7.1 km",
    description: "হস্তশিল্প ও ঐতিহ্যবাহী বাটিক শিল্পের জন্য বিখ্যাত।",
    image: "/batik.jpg",
    mapLink: "https://maps.app.goo.gl/JkFjCNWmN6SZ5CQy5",
    tag: "Cultural",
  },
  {
    name: "Bayazid Bostami Mazar",
    distance: "5.6 km",
    description: "ধর্মীয় ঐতিহ্যের নিদর্শন ও turtle pond সহ মনোরম স্থান।",
    image: "/bayazid.jpg",
    mapLink: "https://maps.app.goo.gl/Y96q3ohf7SgnzUhF7",
    tag: "Religious",
  },
];


export default function AttractionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 md:px-14 lg:px-24 pt-4 pb-12">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-700"> Nearby Attractions</h1>
        <p className="mt-2 text-lg text-gray-600">
          ঘোরাঘুরির সেরা স্থানগুলো আমাদের হোটেল থেকে হাতের নাগালে!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractions.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded shadow  transition duration-300 overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="px-5 py-2 space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-blue-600 text-sm font-medium">
                  {item.distance} দূরে
                </span>
                <a
                  href={item.mapLink}
                  target="_blank"
                  className="flex items-center gap-1 text-sm text-green-600 hover:underline"
                >
                  <FaMapMarkerAlt />
                  View on Map
                </a>
              </div>
              {/* <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded mt-2">
                #{item.tag}
              </span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
