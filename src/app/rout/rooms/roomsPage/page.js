import { rooms } from "./rooms";
import RoomCard from "./RoomCard";

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Explore Our Rooms</h1>
        <p className="text-gray-500 italic mt-2">
          Comfortable, affordable, and designed for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>
    </div>
  );
}
