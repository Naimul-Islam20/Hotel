"use client";
import Image from "next/image";
import Masonry from "react-masonry-css";

const nearbyData = [
  {
    title: "Foy’s Lake Concord Amusement World",
    distance: "7.0 KM",
    description:
      "Foy’s Lake Concord is one of the most popular amusement parks in Chittagong, featuring thrill rides, a water park with wave pool and lazy river, and lakeside resorts for families and children.",
    contact: "Information available at entrance or official site",
    img: "/img/foys.jpg",
  },
  {
    title: "Chattogram Shishu Park",
    distance: "5.0 KM",
    description:
      "Chattogram Shishu Park is a public children’s amusement park near M A Aziz Stadium. It includes rides, toy train, playgrounds, and hosts cultural programs on holidays. Shishu Park is a public children’s amusement park near M A Aziz Stadium. It includes rides, toy train, playgrounds, and hosts cultural programs on holidays  Shishu Park is a public children’s amusement park near M A Aziz Stadium. It includes rides, toy train, playgrounds, and hosts cultural programs on holidays  Shishu Park is a public children’s amusement park near M A Aziz Stadium. It includes rides, toy train, playgrounds, and hosts cultural programs on holidays Shishu Park is a public children’s amusement park near M A Aziz Stadium. It includes rides, toy train, playgrounds, and hosts cultural programs on holidays Shishu Park is a public children’s amusement park near M A Aziz Stadium. It includes rides, toy train, playgrounds, and hosts cultural programs on holidays",
    contact: "Usually local number, info available on-site",
    img: "/img/shishu.jpg",
  },
  {
    title: "Chittagong Zoo",
    distance: "7.0 KM",
    description:
      "Located beside Foy’s Lake, the zoo hosts 66 species and over 500 animals including the rare white Bengal tiger. It’s a popular spot for kids and educational tours.",
    contact: "Contact available at gate or website",
    img: "/img/zoo.jpg",
  },
  {
    title: "Jamboree Park",
    distance: "4.0 KM",
    description:
      "Located in Agrabad, this 8.5-acre urban park features walking tracks, water features, and open space. Perfect for an evening walk with family and children.",
    contact: "Managed by CDA; no direct phone number available",
    img: "/img/jamboree.jpg",
  },
  {
    title: "Chittagong Club Golf Course",
    distance: "6.0 KM",
    description:
      "Chittagong Club offers a premium golf course with additional facilities like swimming pool, tennis courts, and fine dining. Membership required.",
    contact: "+880 31-716632 (General Club Info)",
    img: "/img/golf.jpg",
  },
  {
    title: "Spa at Foy’s Lake Resort",
    distance: "7.0 KM",
    description:
      "This resort inside Foy’s Lake offers spa and wellness services alongside scenic lake views—ideal for a relaxing time after fun activities.",
    contact: "Available upon booking the resort",
    img: "/img/spa.jpg",
  },
];

export default function NearbyThingsToDo() {
  const breakpointColumnsObj = {
    default: 2,
    640: 1, // mobile one column
  };

  return (
    <div className="max-w-7xl mx-auto bg-gray-50  px-10 py-12">
      <h2 className="text-2xl  mb-10">Nearby Things </h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="flex flex-col gap-6"
      >
        {nearbyData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow border border-gray-100 rounded overflow-hidden flex flex-col"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.distance}</p>
                <p className="text-gray-700 text-sm mb-3">{item.description}</p>
              </div>
              <p className="text-sm text-blue-600 mt-auto">📞 {item.contact}</p>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}
