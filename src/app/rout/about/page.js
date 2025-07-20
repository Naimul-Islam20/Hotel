// app/about/page.jsx
import Image from "next/image";
import AnimatedStats from "./Animated";
import History from "./history";
import Link from "next/link";
import Brand from "./brand";
import Tree from './tree';
import Video from "./video"

export default function AboutPage() {
  return (
    <main className="w-full py-0">

      {/* ✅ Hero Section */}
      <section
        className="w-full h-[230px] md:h-[230px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4 relative"
        style={{ backgroundImage: "url('/exc/about2.jpg')" }} // 🔁 তোমার background image path
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold uppercase">About Us</h1>
           <Link href="/" className="hover:underline text-white">Home</Link> &gt; About Us
           
        </div>
      </section>
<Brand/>
<Tree/>
      {/* 🔽 History Section */}
      <History />
      <Video/>

      
{/* 
      🔽 Team Section
      <section className="mt-20 px-4">
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
      </section> */}
    </main>
  );
}
