import { FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Topbar = () => {
  return (
    <div className="w-full bg-sky-200 border-b border-gray-200 text-gray-700 text-xs sm:text-sm md:text-base">
      <div className="w-full mx-auto px-4 py-2 flex justify-between items-center">
        
        {/* Left Side: Location & Phone */}
        <div className="flex items-center  gap-1 sm:gap-6 whitespace-nowrap">
          
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-gray-600" />
            <span>+880 123 456 789</span>
          </div>
          <div className="flex items-center gap-1">
            <GoLocation className="text-black" />
            <span>123/A Agrabad, Chitagong</span>
          </div>
        </div>

        {/* Right Side: Language Icon
        <div className="flex items-center gap-1 cursor-pointer">
          <FaGlobe className="text-gray-700" />
          <select className="border px-2 py-1 text-xs rounded bg-white">
              <option>English</option>
              
            </select>
        </div>
         */}
      </div>
    </div>
  );
};

export default Topbar;
