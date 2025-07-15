"use client";

import ScrollCountUp from "./scrolCount";

export default function AnimatedStats() {
  return (
    <section
      id="animated-stats"
      className="mt-20 grid grid-cols-1 sm:grid-cols-3 text-center gap-8 max-w-7xl mx-auto px-4"
    >
      <div className="bg-gray-100 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-blue-600">
          <ScrollCountUp end={10} suffix="+" duration={2} />
        </h3>
        <p className="text-gray-600 mt-2">Years of Excellence</p>
      </div>

      <div className="bg-gray-100 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-blue-600">
          <ScrollCountUp end={100000} suffix="+" duration={2} />
        </h3>
        <p className="text-gray-600 mt-2">Happy Guests</p>
      </div>

      <div className="bg-gray-100 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-blue-600">
          <ScrollCountUp end={5} suffix="/5 ★" duration={2} />
        </h3>
        <p className="text-gray-600 mt-2">Ratings</p>
      </div>
    </section>
  );
}
