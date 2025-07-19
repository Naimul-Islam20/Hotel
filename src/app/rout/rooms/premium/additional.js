// AdditionalServices.jsx

import React from 'react';
import { FaShuttleVan, FaSpa, FaHotTub } from 'react-icons/fa';

const AdditionalServices = () => {
  const services = [
    { icon: <FaShuttleVan className="text-xl" />, label: 'Airport Pickup' },
    { icon: <FaSpa className="text-xl" />, label: 'Massage' },
    { icon: <FaHotTub className="text-xl" />, label: 'Jacuzzi' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex items-center text-sm gap-2 text-gray-700  rounded-md  cursor-pointer"
            role="button"
            tabIndex={0}
          >
            <div className="p-2 rounded-md border text-sm border-gray-200 text-gray-500">{service.icon}</div>
            <span>{service.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalServices;
