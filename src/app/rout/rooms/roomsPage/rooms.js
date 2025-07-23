import { FaBed, FaWifi, FaShower, FaCouch, FaCity, FaUserFriends, FaUtensils, FaVolumeMute, FaSpa, FaWindowMaximize } from "react-icons/fa";

export const rooms = [
  {
    title: "Premium Room",
    img: [
      "/img/premium1.jpg",
      "/img/premium2.jpg",
      "/img/premium3.jpg",
      "/img/premium4.jpg",
      "/img/premium5.jpg",
    ],
    path: "/rout/rooms/premium",
    price: "$200/night",
    features: [
      { icon: <FaSpa />, text: "Spa Access" },
      { icon: <FaVolumeMute />, text: "Soundproof" },
      { icon: <FaWifi />, text: "High-Speed Wi-Fi" },
    ],
    desc: "Top-tier comfort & exclusive amenities.",
  },
  {
    title: "Deluxe Room",
    img: [
      "/img/h21.jpg",
    //   "/img/image1.jpg",
      "/img/image1.jpg",
    ],
    path: "/rout/rooms/deluxe",
    price: "$120/night",
    features: [
      { icon: <FaBed />, text: "1 King Bed" },
      { icon: <FaShower />, text: "Private Bathroom" },
      { icon: <FaWifi />, text: "Free Wi-Fi" },
    ],
    desc: "Perfect for couples or business travelers.",
  },
  
  {
    title: "Family Room",
    img: [
      "/img/family.jpg",
      "/img/family3.jpg",
      "/img/family4.jpg",
    ],
    path: "/rout/rooms/family",
    price: "$150/night",
    features: [
      { icon: <FaBed />, text: "2 Queen Beds" },
      { icon: <FaUserFriends />, text: "For 4 guests" },
      { icon: <FaUtensils />, text: "Breakfast Included" },
    ],
    desc: "Spacious room perfect for families.",
  },
  
  {
    title: "Single Room",
    img: [
    
      "/img/single.jpg",
      "/img/single.jpg",
    ],
    path: "/rout/rooms/single",
    price: "$90/night",
    features: [
      { icon: <FaBed />, text: "1 Bed" },
      { icon: <FaShower />, text: "Clean & Compact" },
      { icon: <FaWindowMaximize />, text: "Nice View" },
    ],
    desc: "Affordable option for solo travelers.",
  },
  
];
