import { FaStar } from "react-icons/fa";

import { FaHotel } from "react-icons/fa";
import { PiBuildings } from "react-icons/pi";


const LuxuryExperience = () => {
  return (
    <div className="w-full bg-white min-h-[92vh] flex items-center">
      <div className=" md:max-w-7xl mx-auto  md:px-4 w-full">
        <div className="grid grid-cols-5 gap-6 items-center">
          {/* Left Content: 3 columns */}
         <div className="col-span-5 px-4 pt-3 md:col-span-3">
  <h2 className="text-2xl sm:text-4xl md:text-5xl text-gray-800 mb-3">
    Experience the Elegance of Ocean Residence
  </h2>
  
  <p className="text-xs text-justify sm:text-sm md:text-base text-gray-500 leading-relaxed mb-4">
    Ocean Residence offers a serene retreat blending luxury with comfort. 
    Our thoughtfully designed rooms provide a peaceful atmosphere, 
    creating an unforgettable stay for travelers seeking tranquility and elegance.
  </p>
  <p className="text-xs text-justify sm:text-sm md:text-base text-gray-500 leading-relaxed mb-4">
    With personalized services, modern amenities, and a warm, welcoming atmosphere, 
    Ocean Residence ensures that every guest feels right at home. Whether you're here 
    for business or leisure, our dedicated team is committed to making your visit seamless and memorable.
  </p>
</div>


          {/* Right Content: 2 columns */}
          <div className="col-span-5 mx-4 bg-black md:col-span-2 relative h-full">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: "url('/img/g1.jpg')",
              }}
            ></div>

        

<div className="relative bg-white bg-opacity-50 m-2 text-black h-auto flex flex-col items-center px-4 sm:px-6 py-6 sm:py-8 text-center space-y-3 sm:space-y-5">

  {/* Logo */}
 <div className="pt-3 flex flex-col items-center ">
  {/* Icon */}
  <div className="text-2xl sm:text-4xl text-sky-500">
   <PiBuildings/>
  </div>

  {/* Main Heading */}
  <h3 className="text-xl text-sky-500 sm:text-2xl font-bold ">
    Ocean Residence
  </h3>

  {/* Sub Text */}
  <p className="text-sm text-black">Luxury Experience</p>
</div>


  {/* Stars */}
  <div className="flex justify-center pt-4 sm:pt-0 space-x-1">
    {Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar key={i} className="text-yellow-400 w-4 sm:w-5 h-4 sm:h-5" />
      ))}
  </div>

 {/* Subtitle */}
<h4 className="text-base sm:text-lg pt-4 sm:pt-5 font-bold">Luxury Hotel</h4>

{/* Description */}
<p className="text-xs sm:text-sm md:text-sm leading-relaxed px-2 sm:px-0">
  Experience unparalleled comfort and world-class services in the heart of the city.  
  Our hotel combines modern amenities with timeless elegance to make your stay unforgettable.
</p>

</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryExperience;
