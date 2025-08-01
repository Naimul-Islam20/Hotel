// RoomServices.jsx
import React from 'react';
import { FaBath,FaWifi , FaCoffee, FaCar, FaWind, FaMugHot } from 'react-icons/fa';
import { MdMicrowave } from 'react-icons/md';
import { FaTv } from "react-icons/fa";
const RoomServices = () => {
  const services = [
    { icon: <FaBath className="text-md" />, label: 'Towels' },
   
    { icon: <FaCar className="text-md" />, label: 'Parking' },
    { icon: <FaWind className="text-md" />, label: 'Air Conditioner' },
    { icon: <FaMugHot className="text-md" />, label: 'Tea Maker' },
   { icon: <FaTv className="text-xl" />, label: 'TV' },
{ icon: < FaWifi className="text-md" />, label: 'WiFi' },

  ];

  return (
    <div className="max-w-7xl mx-auto py-8 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Services</h2>
      <div className="grid grid-cols-2  md:grid-cols-3 gap-6">
        {services.map(({ icon, label }, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 text-gray-700    cursor-pointer"
            role="button"
            tabIndex={0}
          >
            <div className="p-2 rounded-lg border border-gray-200  text-gray-500">{icon}</div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomServices;
