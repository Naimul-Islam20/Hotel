import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGlobe } from 'react-icons/fa';

const ContactLinks = () => {
  return (
    <div className="flex justify-around mt-6 max-w-md mx-auto">
      {/* Location */}
      <div className="flex flex-col items-center">
        <a
          href="https://goo.gl/maps/yourlocation"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 text-3xl"
          aria-label="Location"
        >
          <FaMapMarkerAlt />
        </a>
        <span className="text-center mt-1 text-gray-700 font-medium text-base">Location</span>
      </div>

      {/* Email */}
      <div className="flex flex-col items-center">
        <a
          href="mailto:contact@hotelblue.com"
          className="text-blue-600 text-3xl"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <span className="text-center mt-1 text-gray-700 font-medium text-base">Email</span>
      </div>

      {/* Phone */}
      <div className="flex flex-col items-center">
        <a
          href="tel:+8801234567890"
          className="text-blue-600 text-3xl"
          aria-label="Phone"
        >
          <FaPhoneAlt />
        </a>
        <span className="text-center mt-1 text-gray-700 font-medium text-base">Phone</span>
      </div>

      {/* Website */}
      <div className="flex flex-col items-center">
        <a
          href="https://hotelblue.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 text-3xl"
          aria-label="Website"
        >
          <FaGlobe />
        </a>
        <span className="text-center mt-1 text-gray-700 font-medium text-base">Website</span>
      </div>
    </div>
  );
};

export default ContactLinks;
