import React from "react";
import blackFriday from "../utils/products.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function BlackFriday() {
  return (
    <div className="mx-3 sm:mx-5 space-y-4">
      <div className="bg-purple-700 px-5 text-white rounded-t-lg">
        <h1 className="text-lg md:text-xl font-medium py-3">
          Black Friday
        </h1>
      </div>
      <div className="mx-auto w-11/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {blackFriday.map((product, index) => (
          <div
            key={index}
            className="hover:animate-shake group cursor-pointer shadow-2xl relative rounded-lg bg-[#f8f8f8]"
          >
            <div className="absolute h-60 w-full top-0 left-0 flex flex-col justify-center">
              <img src={product?.image} className="self-center object-cover" />
            </div>
            <div className="mt-56 py-3 px-5 text-center space-y-2">
              <span className="text-sm font-light">{product?.section}</span>
              <h1 className="relative md:text-lg font-semibold">
                {product.name}
              </h1>
              <h3>₦{product?.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlackFriday;
