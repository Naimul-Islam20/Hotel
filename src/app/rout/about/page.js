// app/about/page.jsx
"use client";
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

      

    </main>
  );
}
