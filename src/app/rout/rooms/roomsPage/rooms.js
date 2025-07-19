import { FaBed, FaWifi, FaShower, FaCouch, FaCity, FaUserFriends, FaUtensils, FaVolumeMute, FaSpa, FaWindowMaximize } from "react-icons/fa";

export const rooms = [
  {
    title: "Deluxe Room",
    img: [
      "/img/h21.jpg",
    //   "/img/image1.jpg",
      "/img/image1.jpg",
    ],
    price: "$120/night",
    features: [
      { icon: <FaBed />, text: "1 King Bed" },
      { icon: <FaShower />, text: "Private Bathroom" },
      { icon: <FaWifi />, text: "Free Wi-Fi" },
    ],
    desc: "Perfect for couples or business travelers.",
  },
  {
    title: "Executive Suite",
    img: [
      "/img/h21.jpg",
      "/img/h21.jpg",
      "/img/image1.jpg",
    ],
    price: "$180/night",
    features: [
      { icon: <FaBed />, text: "1 King Bed" },
      { icon: <FaCouch />, text: "Lounge Area" },
      { icon: <FaCity />, text: "City View" },
    ],
    desc: "Luxurious suite with space & comfort for VIPs.",
  },
  {
    title: "Family Room",
    img: [
      "/img/h21.jpg",
      "/img/image1.jpg",
      "/img/image1.jpg",
    ],
    price: "$150/night",
    features: [
      { icon: <FaBed />, text: "2 Queen Beds" },
      { icon: <FaUserFriends />, text: "For 4 guests" },
      { icon: <FaUtensils />, text: "Breakfast Included" },
    ],
    desc: "Spacious room perfect for families.",
  },
  {
    title: "Twin Room",
    img: [
      "/img/h21.jpg",
      "/img/h21.jpg",
      "/img/h21.jpg",
    ],
    price: "$110/night",
    features: [
      { icon: <FaBed />, text: "2 Single Beds" },
      { icon: <FaShower />, text: "Ensuite" },
      { icon: <FaVolumeMute />, text: "Quiet Zone" },
    ],
    desc: "Great for friends or solo travelers sharing.",
  },
  {
    title: "Single Room",
    img: [
     "/img/h21.jpg",
      "/rooms/single2.jpg",
      "/rooms/single3.jpg",
    ],
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
    price: "$200/night",
    features: [
      { icon: <FaSpa />, text: "Spa Access" },
      { icon: <FaVolumeMute />, text: "Soundproof" },
      { icon: <FaWifi />, text: "High-Speed Wi-Fi" },
    ],
    desc: "Top-tier comfort & exclusive amenities.",
  },
];
