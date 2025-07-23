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
             className="w-full bg-cover bg-center flex flex-col items-center justify-center text-black text-center px-4 py-10 relative"
             // style={{ backgroundImage: "url('/exc/about2.jpg')" }}
           >
             <div className="absolute inset-0 bg-sky-200" />
             <div className="relative z-10">
               <h1 className="text-3xl md:text-5xl  pb-5">About Us</h1>
               <Link href="/" className="hover:underline text-sm text-gray-700 ">
                 Home
               </Link>{" "}
               &gt; About Us
             </div>
           </section>
<Brand/>

      {/* 🔽 History Section */}
      <History />
      <Tree/>
      <Video/>

      

    </main>
  );
}
