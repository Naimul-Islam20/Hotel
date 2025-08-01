// RoomInfoSection.jsx

import React from 'react';
import { FaUserFriends, FaCalendarAlt, FaBed, FaRulerCombined } from 'react-icons/fa';

const RoomInfoSection = () => {
  const info = [
    {
      icon: <FaUserFriends className="text-xl" />,
      title: 'Max. Guests',
      detail: '2 Adults / 2 Children',
    },
    {
      icon: <FaCalendarAlt className="text-xl" />,
      title: 'Booking Nights',
      detail: '1 Min.',
    },
    {
      icon: <FaBed className="text-xl" />,
      title: 'Bed Type',
      detail: 'King Size',
    },
    {
      icon: <FaRulerCombined className="text-xl" />,
      title: 'Area',
      detail: '60 m²',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto  py-6 bg-white ">
      <div className="flex flex-wrap justify-between gap-6">
        {info.map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-gray-500 min-w-[150px]">
            <div className="p-2 rounded bg-blue-100 ">
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs text-gray-500">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomInfoSection;
