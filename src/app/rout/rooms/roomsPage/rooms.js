import {
  FaBed,
  FaWifi,
  FaShower,
  FaCouch,
  FaCity,
  FaUserFriends,
  FaUtensils,
  FaVolumeMute,
  FaSpa,
  FaWindowMaximize,
} from "react-icons/fa";


export const rooms = [
  {
    title: "Deluxe Room",
    img: [
      "/img/premium1.jpg",
      "/img/premium2.jpg",
      "/img/premium3.jpg",
      "/img/premium4.jpg",
    ],
    path: "/rout/rooms/deluxe",
    price: "৳3500/night",
    features: [
      { icon: <FaSpa />, text: "Spa Access" },
      { icon: <FaVolumeMute />, text: "Soundproof" },
      { icon: <FaWifi />, text: "High-Speed Wi-Fi" },
    ],
    desc: "Perfect for couples or business travelers.",
    about:
      "Our deluxe rooms are designed to provide maximum comfort with all essential amenities to make your stay relaxing and memorable. Whether you're here for business or leisure, we got you covered.",
  },
  {
    title: "Executive Room",
    img: [
      "/img/family4.jpg",
      "/img/family.jpg",
      "/img/deluxe5.jpg",
    ],
    path: "/rout/rooms/executive",
    price: "৳3000/night",
    features: [
      { icon: <FaBed />, text: "1 King Bed" },
      { icon: <FaShower />, text: "Private Bathroom" },
      { icon: <FaWifi />, text: "Free Wi-Fi" },
    ],
    desc: "Perfect for couples or business travelers.",
    about:
      "Executive rooms offer a blend of style and comfort, ideal for business trips or relaxing getaways. Equipped with modern amenities to ensure a pleasant and productive stay.",
  },
];
