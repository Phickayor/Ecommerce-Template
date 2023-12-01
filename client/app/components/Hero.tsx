import React from "react";
function Hero() {
  const categories = ["CLOTHES","SHOES","JEWELRIES","BAGS"]
  return (
    <div className="mx-3 sm:mx-5">
      <div className="flex lg:flex-row flex-col justify-between gap-5">
        <div className="lg:w-9/12">
          <div className="mx-auto relative grid grid-cols-2 gap-5 bg-black md:h-96 h-60 rounded-lg">
            <div className="relative space-y-5 z-10 lg::w-10/12 col-span-2 text-white">
              <h1 className="text-sm sm:text-md md:text-xl py-5 p-8 md:p-10 font-semibold">
                Jet Collections
              </h1>
              <div className="absolute p-8 md:p-10 top-0 left-0 h-full flex flex-col justify-center gap-6">
                <h1 className="text-xs sm:text-md md:text-3xl md:leading-[50px]">
                  Unleash your inner fashionista and discover a world of style
                  that empowers you to express your individuality.
                </h1>
                <button className="bg-orange-500 flex gap-3 hover:gap-4 py-2 px-4 md:px-8 sm:py-3 md:py-3 w-fit text-white font-medium text-sm sm:text-md md:text-lg ">
                  Shop Now <span>&gt;</span>
                </button>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=4000"
              className="h-full absolute w-full opacity-60 object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="lg:w-4/12 grid grid-cols-2 gap-3 md:gap-5">
          {categories.map((category,index)=>(<div key={index} className="relative ">
            <img
              src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=4000"
              className="h-full object-cover rounded-lg"
            />
            <div className="group absolute top-0 text-center w-full h-full hover:backdrop-blur cursor-pointer flex flex-col justify-center rounded-lg">
              <h1 className="relative text-xl md:text-2xl hidden group-hover:block font-semibold duration-300">{category}</h1>
            </div>
          </div>))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
