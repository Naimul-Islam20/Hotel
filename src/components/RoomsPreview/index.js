"use client";

const images = [
  "/img/image1.jpg",
  "/img/image1.jpg",
  "/img/image1.jpg",
  "/img/image1.jpg",
  "/img/image1.jpg",
  "/img/image1.jpg",
  "/img/image1.jpg",
  "/img/image1.jpg",
  "/img/image1.jpg",
  "/img/image1.jpg",
];

export default function ImgDan() {
  const repeatedImages = [...images, ...images]; // for smooth loop

  return (
    <>
      <style jsx>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .marquee {
          display: inline-block;
          white-space: nowrap;
        }
        .left-scroll {
          animation: marqueeLeft 20s linear infinite;
        }
        .right-scroll {
          animation: marqueeRight 20s linear infinite;
        }
      `}</style>

      {/* Top Marquee (Left) */}
      <div className="overflow-hidden whitespace-nowrap w-full bg-gray-200 pt-4">
        <div className="marquee left-scroll">
          {repeatedImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Image ${i}`}
              className="inline-block mx-1 h-28 w-auto rounded shadow"
            />
          ))}
        </div>
      </div>

      {/* Bottom Marquee (Right) */}
      <div className="overflow-hidden whitespace-nowrap w-full bg-gray-200 pb-4 pt-2">
        <div className="marquee right-scroll">
          {repeatedImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Image ${i}`}
              className="inline-block mx-1 h-28 w-auto rounded "
            />
          ))}
        </div>
      </div>
    </>
  );
}
