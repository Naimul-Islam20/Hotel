const LuxuryExperience = () => {
  return (
    <div className="w-full bg-white min-h-[92vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-5 gap-6 items-center">
          {/* Left Content: 3 columns */}
          <div className="col-span-5 md:col-span-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-3">
              Enjoy a Luxury Experience
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-7">
              We provide accommodation services since 1990
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
              deleniti nulla, hic voluptatibus eum voluptatum libero suscipit nemo
              voluptates cupiditate, ipsum provident facere modi tempora ducimus enim
              dicta laborum esse aliquam rem assumenda dolores.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed mb-4">
              Commodi, aperiam, blanditiis! Ipsum iure necessitatibus eaque, fuga.
              Excepturi facilis libero dicta soluta officiis, sint sit voluptatem, vero
              doloribus nesciunt suscipit dolores veritatis minus quam atque non autem
              quasi consequatur quae sequi ex, ipsa facere qui ut recusandae. Quod earum
              cupiditate quaerat assumenda. Excepturi facilis libero dicta soluta
              officiis, sint sit voluptatem, vero doloribus nesciunt suscipit dolores
              veritatis minus quam atque non autem quasi consequatur quae sequi ex, ipsa
              facere qui ut recusandae. Quod earum cupiditate quaerat assumenda.
            </p>
          </div>

          {/* Right Content: 2 columns */}
          <div className="col-span-5 mx-4 bg-black md:col-span-2 relative h-full">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: "url('/img/g1.jpg')",
              }}
            ></div>

            {/* Overlay with spaced content */}
            <div className="relative bg-white bg-opacity-50 m-2 text-black h-[470px] flex flex-col items-center px-4 sm:px-6 py-8 sm:py-10 text-center space-y-4 sm:space-y-6">
              {/* Title */}
              <h3 className="text-xl sm:text-2xl pt-3 font-semibold">Sky Hotel</h3>

              {/* Stars */}
              <div className="flex justify-center pt-10 sm:pt-14 space-x-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  ))}
              </div>

              {/* Subtitle */}
              <h4 className="text-base sm:text-lg pt-4 sm:pt-5 font-bold">Luxury Hotel</h4>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-sm leading-relaxed px-2 sm:px-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorem iste
                suscipit. Ad dolorem iste suscipit.sint sit voluptatem, vero doloribus nesciunt suscipit dolores
                veritatis minus quam atque non autem quasi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryExperience;
