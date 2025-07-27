"use client";
import Image from "next/image";
import Masonry from "react-masonry-css";

const nearbyData = [
  {
    title: "Foy’s Lake Concord Amusement World",
    distance: "7.0 KM",
    description:
      "Foy’s Lake Concord Amusement World is one of Chittagong’s top entertainment destinations. It features a range of thrill rides, a fully-equipped water park with a wave pool and lazy river, and scenic lakeside resorts. Ideal for families and children looking for a fun and adventurous day out amidst nature.",
    contact: "Information available at entrance or official site",
    img: "/local/foys2.jpg",
  },
  {
    title: "Chattogram Shishu Park",
    distance: "5.0 KM",
    description:
      "Located near the M A Aziz Stadium, Chattogram Shishu Park is a public amusement park specially designed for children. It includes various fun rides, a toy train, playgrounds, and regularly hosts cultural programs on holidays. It’s a nostalgic and enjoyable place for both kids and their parents.",
    contact: "Usually local number, info available on-site",
    img: "/local/sisu.jpg",
  },
  {
    title: "Chittagong Zoo",
    distance: "7.0 KM",
    description:
      "Situated next to Foy’s Lake, the Chittagong Zoo is home to more than 500 animals from 66 different species. Highlights include rare species such as the white Bengal tiger. The zoo is a favorite for educational school trips and a delightful destination for families with children.",
    contact: "Contact available at gate or website",
    img: "/local/zoo2.jpg",
  },
  {
    title: "Jamboree Park",
    distance: "4.0 KM",
    description:
      "Located in Agrabad, Jamboree Park is a beautifully designed 8.5-acre urban park featuring walking and jogging tracks, fountains, and open recreational spaces. It's a peaceful and clean environment, making it ideal for evening walks, exercise, or simply spending quality time with loved ones.",
    contact: "Managed by CDA; no direct phone number available",
    img: "/local/jambura.jpg",
  },
  {
    title: "Chittagong Club Golf Course",
    distance: "6.0 KM",
    description:
      "The golf course at Chittagong Club is an exclusive facility for club members. In addition to golfing, the club offers luxurious amenities including a swimming pool, tennis courts, and fine dining options. It’s a prestigious destination for leisure and social interaction among the elite.",
    contact: "+880 31-716632 (General Club Info)",
    img: "/local/club.jpg",
  },
  {
    title: "Spa at Foy’s Lake Resort",
    distance: "7.0 KM",
    description:
      "Located within the Foy’s Lake Resort premises, the spa offers various wellness and relaxation treatments. Visitors can enjoy soothing massages while overlooking the tranquil lake. It’s the perfect retreat after a day of fun activities or simply to unwind in a calm, scenic atmosphere.",
    contact: "Available upon booking the resort",
    img: "/local/resort.jpg",
  },
];


export default function NearbyThingsToDo() {
  const breakpointColumnsObj = {
    default: 2,
    640: 1, // mobile one column
  };

  return (
    <div className="max-w-7xl mx-auto bg-gray-50 px-2 md:px-10 py-3 md:py-12">
      <h2 className="text-xl md:text-2xl mb-3  md:mb-7">NEARBY THINGS </h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="flex flex-col gap-2 md:gap-6"
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
                <h3 className="md:text-xl text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.distance}</p>
                <p className="text-gray-700 text-justify text-sm mb-3">{item.description}</p>
              </div>
             
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}
