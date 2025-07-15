import Image from "next/image";
import Hero from '@/components/Hero'


import HotelMessageSlider from "@/components/HotelMassage";
import Features from "@/components/Features";
import RoomSection from "@/components/GalleryTeaser";
import ScrollingNames from "@/components/scrolName/ScrolName";
import ImgDan from "@/components/RoomsPreview";

export default function Home() {
  return (
    <main>
      <div>
       <Hero/>
       <Features/>
       <ScrollingNames/>
      <HotelMessageSlider/>
      
      <RoomSection/>
      <ImgDan/>
      </div>
    </main>
  );
}
