import Image from "next/image";
import Hero from '@/components/Hero'


// import HotelMessageSlider from "@/components/HotelMassage";
import Features from "@/components/Features";
import RoomSection from "@/components/GalleryTeaser";
// import ScrollingNames from "@/components/scrolName/ScrolName";
// import ImgDan from "@/components/RoomsPreview";
import HotelTag from '@/components/ourHotel'
import Ex from "@/components/ImgSlide"

import ContactInfo from "@/components/contactInfo";

export default function Home() {
  return (
    <main>
      <div>
       <Hero/>
       <HotelTag/>
       <RoomSection/>
       
       {/* <ScrollingNames/>
      <HotelMessageSlider/> */}
      <Ex/>
      <Features/>
      <ContactInfo/>
    
      {/* <ImgDan/> */}
      </div>
    </main>
  );
}
