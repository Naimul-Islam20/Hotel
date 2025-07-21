// components/Features/index.jsx
import { FaSwimmer, FaCar, FaWifi, FaSpa } from "react-icons/fa";
import { MdLocalDining, MdOutlineSecurity } from "react-icons/md";
import { FaBellConcierge, FaUmbrellaBeach, FaBed } from "react-icons/fa6";
import { GiKeyCard } from "react-icons/gi";

const features = [
  {
    icon: <FaBellConcierge />,
    title: "24/7 Room Service",
    description: "Always available to serve your comfort needs.",
  },
 
  {
    icon: <FaCar />,
    title: "Free Secure Parking",
    description: "Spacious & secure parking for all guests.",
  },
  {
    icon: <MdLocalDining />,
    title: "Fine Dining",
    description: "World-class meals prepared by top chefs.",
  },
  {
    icon: <FaWifi />,
    title: "High-Speed Wi-Fi",
    description: "Stay connected throughout the hotel premises.",
  },
  {
    icon: <MdOutlineSecurity />,
    title: "24/7 Security",
    description: "Your safety is our top priority at all times.",
  },
  
  {
    icon: <GiKeyCard />,
    title: "Smart Key Card",
    description: "Keyless and secure access to your room.",
  },
];

const Features = () => {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="max-w-7xl  mx-auto px-4 md:px-2  text-center">
        <p className="text-sky-500 mb-2">
          Our Services
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Hotel Facilities
        </h2>
       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-1xl  p-8 md:py-14 md:p-6 shadow transition duration-300 text-center"
            >
              <div className="text-4xl mb-4 flex justify-center items-center text-sky-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
