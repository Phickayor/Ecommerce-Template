import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Categories() {
  return (
    <div className=" text-center bg-purple-700 ">
      <ul className="[&>*]:p-4 px-5 text-white hover:[&>*]:bg-white hover:[&>*]:text-purple-700 font-medium hidden md:grid grid-cols-5 [&>*]:cursor-pointer">
        <li>Clothes</li>
        <li>Shoes</li>
        <li>Bags</li>
        <li>Jewelries</li>
        <li className="h-full">Accessories</li>
      </ul>
      <div className="md:hidden mx-auto w-9/12 flex p-4">
        <input
          type="search"
          placeholder="Find items..."
          className="rounded-l-lg w-full text-sm md:text-md focus:outline-none px-3"
        />
        <div className="bg-white h-full p-2 rounded-r-lg">
          <AiOutlineSearch className="text-xl text-purple-500 self-center" />
        </div>
      </div>
    </div>
  );
}

export default Categories;
