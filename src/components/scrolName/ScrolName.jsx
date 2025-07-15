"use client";


  const names = [
    "Deluxe Room",
    "Suite",
    "Family Room",
    "Executive",
    "Honeymoon",
    "Classic Room",
    "Budget Stay",
    "Royal Suite",
    "Sea View",
    "Luxury Tent",
  ];


export default function MarqueeSlider() {
  const repeatedNames = [...names, ...names];

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 30s linear infinite;
          }
        `}
      </style>

      <div className="overflow-hidden whitespace-nowrap w-full bg-gray-100 py-4">
        <div className="marquee">
          {repeatedNames.map((name, i) => (
            <span
              key={i}
              className="inline-block px-2 py-2 mx-2  text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
