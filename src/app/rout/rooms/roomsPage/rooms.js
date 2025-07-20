import { FaBed, FaWifi, FaShower, FaCouch, FaCity, FaUserFriends, FaUtensils, FaVolumeMute, FaSpa, FaWindowMaximize } from "react-icons/fa";

export const rooms = [
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
      "/img/h21.jpg",
      "/img/image1.jpg",
      "/img/image1.jpg",
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
     "/img/h21.jpg",
      "/rooms/single2.jpg",
      "/rooms/single3.jpg",
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
  {
    title: "Premium Room",
    img: [
      "/img/h21.jpg",
      "/rooms/premium2.jpg",
      "/rooms/premium3.jpg",
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
];
