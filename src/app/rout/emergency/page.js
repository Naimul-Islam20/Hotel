import React from 'react';
import Link from "next/link";

const EmergencyFacilityPage = () => {
  const facilities = [
    "24/7 Doctor On Call for Emergencies",
    "Ambulance Support Available for Emergency Situations Within the Hotel Premises",
    "Basic First Aid and Immediate Treatment in Case of Emergency",
    "Emergency Oxygen Support Available On-Site",
    "Immediate Care for Minor Injuries During Emergencies",
    "Fast Access to Nearby Pharmacy for Emergency Needs",
    "Wheelchair and Medical Bed Support in Emergency Cases",
    "Trained Staff Ready to Assist During Medical Emergencies"
  ];

  return (
    <div className="w-full bg-white">

      {/* ✅ Hero Section - now at top */}
      <section
        className="w-full bg-cover bg-center flex flex-col items-center justify-center text-black text-center px-4 py-10 relative"
        // style={{ backgroundImage: "url('/exc/about2.jpg')" }}
      >
        <div className="absolute inset-0 bg-red-100" />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl pb-5">Emergency Care</h1>
          <Link href="/" className="hover:underline text-sm text-gray-700">
            Home
          </Link>{" > "}
          Medical Help
        </div>
      </section>

      {/* ✅ Emergency Content */}
      <div className="py-10 px-4 flex items-center justify-center">
        <div className="max-w-2xl bg-white p-8 rounded-xl shadow border border-red-200">
          <h1 className="text-3xl font-bold text-red-600 text-center mb-6">
            Emergency Medical Support Available
          </h1>
          <p className="text-gray-700 text-center mb-6">
            In case of any emergency, we have medical facilities available within the hotel building. The following services are provided:
          </p>

          <ul className="list-disc list-inside list-indent  text-gray-800 space-y-2">
            {facilities.map((item, index) => (
              <li key={index} className=" text-lg">{item}</li>
            ))}
          </ul>

          <p className="text-center text-gray-700 mt-6">
            For urgent assistance, please contact the reception or call <span className="font-bold text-red-600">+8801336188906</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyFacilityPage;
