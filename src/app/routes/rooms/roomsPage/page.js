import { rooms } from "./rooms";
import RoomCard from "./RoomCard";
import Link from "next/link";

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-gray-50 w-full text-gray-800 md:mb-6  ">
       {/* 🟦 Hero Section */}
            <div className="w-full bg-blue-100 py-12 text-center">
              <h1 className="text-4xl font-bold text-gray-800">Explore Our Rooms</h1>
              <Link href="/" className="hover:underline text-gray-600">Home</Link> &gt; Rooms
            </div>

      <div className="grid grid-cols-1 mt-3 md:mt-6 sm:grid-cols-2 gap-6 w-full md:max-w-7xl mx-auto">
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>
    </div>
  );
}
