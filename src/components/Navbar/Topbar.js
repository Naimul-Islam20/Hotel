import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";

const Topbar = () => {
  return (
    <div className="w-full bg-sky-400 border-b border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center items-center gap-6 sm:gap-10 whitespace-nowrap overflow-hidden">

        {/* Only Contact Info - centered and responsive */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm md:text-base">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <GoLocation className="text-blue-600" />
            <span>123/A Gulshan, Dhaka</span>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <FaPhoneAlt className="text-green-600" />
            <span>+880 123 456 789</span>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <HiOutlineMail className="text-red-500" />
            <span>info@example.com</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Topbar;
