// app/about/page.jsx
import Image from "next/image";
import AnimatedStats from "./Animated";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Our Hotel</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-[17px]">
          Where comfort meets luxury — experience the best stay with world-class hospitality and timeless elegance.
        </p>
      </section>

      {/* Image + Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Image
          src="/hotel/about.jpg"
          alt="Our Hotel"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 text-[16px] mb-4 leading-relaxed">
            Established in 2012, our hotel has been a beacon of hospitality and warmth. We provide world-class service, luxurious rooms, and unforgettable experiences to travelers from all over the world.
          </p>
          <p className="text-gray-700 text-[16px] leading-relaxed">
            Whether you're here for business or leisure, our dedicated team ensures that every moment you spend with us is exceptional.
          </p>
        </div>
      </div>

      {/* Stats */}
      <section className="mt-20 grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
        {[
          { label: "Years of Excellence", value: "10+" },
          { label: "Happy Guests", value: "50K+" },
          { label: "Ratings", value: "★ 5.0/5" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-gray-100 p-8 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Mission / Vision */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-blue-50 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">🏆 Our Mission</h3>
          <p className="text-gray-700 text-[15px]">
            To create memorable stays by offering exceptional comfort, service, and local experiences to each of our guests.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">🌍 Our Vision</h3>
          <p className="text-gray-700 text-[15px]">
            To become the most trusted and loved hospitality destination for travelers across the globe.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-6">Explore Our Hotel</h2>
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/x7xk_wp_wl8" // 🔁 Replace with your real video
            title="Hotel Promo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Team */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Mr. Aminul Haque",
              role: "Managing Director",
              img: "/team/aminul.jpg",
            },
            {
              name: "Ms. Farhana Rahman",
              role: "Guest Experience Manager",
              img: "/team/farhana.jpg",
            },
            {
              name: "Mr. Rafiq Hasan",
              role: "Operations Head",
              img: "/team/rafiq.jpg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 object-cover h-[150px] w-[150px]"
              />
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
            <AnimatedStats/>
      {/* Contact CTA */}
      <section className="mt-24 bg-blue-600 text-white rounded-2xl py-10 px-6 text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Want to Reach Us?</h2>
        <p className="mb-6 text-sm md:text-base">
          Our support team is available 24/7 to answer your queries and help plan your perfect stay.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
