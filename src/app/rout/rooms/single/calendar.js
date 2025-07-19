"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const notAvailableDates = [
  new Date(2025, 6, 3),
  new Date(2025, 6, 4),
  new Date(2025, 7, 7),
   new Date(2025, 6, 20),
  // অন্য মাসের তারিখ এখানে যোগ করো
];

const RoomAvailability = () => {
  const [date, setDate] = useState(new Date());
  const [activeStartDate, setActiveStartDate] = useState(new Date());

  const today = new Date();
  today.setHours(0, 0, 0, 0); // সময় বাদ দিয়ে শুধু তারিখ

  // দিনগুলোতে ক্লাস অ্যাসাইন করা
  const tileClassName = ({ date: tileDate, view }) => {
    if (view !== "month") return "";

    const activeMonth = activeStartDate.getMonth();
    const activeYear = activeStartDate.getFullYear();

    if (
      tileDate.getMonth() !== activeMonth ||
      tileDate.getFullYear() !== activeYear
    ) {
      return "other-month-date";
    }

    if (tileDate < today) return "";

    // নট-অ্যাভেইলেবল ডেট চেক করো
    const isNotAvailable = notAvailableDates.some(
      (d) =>
        d.getFullYear() === tileDate.getFullYear() &&
        d.getMonth() === tileDate.getMonth() &&
        d.getDate() === tileDate.getDate()
    );

    return isNotAvailable ? "not-available-date" : "available-date";
  };

  // Disable লজিক
  const tileDisabled = ({ date: tileDate, view }) => {
    if (view !== "month") return false;

    const activeMonth = activeStartDate.getMonth();
    const activeYear = activeStartDate.getFullYear();

    if (
      tileDate.getMonth() !== activeMonth ||
      tileDate.getFullYear() !== activeYear
    ) {
      return true;
    }

    if (tileDate < today) return true;

    const isNotAvailable = notAvailableDates.some(
      (d) =>
        d.getFullYear() === tileDate.getFullYear() &&
        d.getMonth() === tileDate.getMonth() &&
        d.getDate() === tileDate.getDate()
    );

    return isNotAvailable;
  };

  return (
    <div className="max-w-full mx-auto py-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Room Availability</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
        tileDisabled={tileDisabled}
        className="custom-calendar"
        minDate={today}
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveStartDate(activeStartDate)
        }
      />
      <div className="flex justify-center gap-8 mt-6 text-gray-700 text-lg">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-green-300 border rounded"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-red-300 border rounded"></div>
          <span>Not Available</span>
        </div>
      </div>
    </div>
  );
};

export default RoomAvailability;
