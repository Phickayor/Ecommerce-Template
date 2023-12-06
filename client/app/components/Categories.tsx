import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import FurtherNav from "./FurtherNav";
import clothes from "../utils/clothes.json";
import bags from "../utils/bags.json";
import accessories from "../utils/accessories.json";
import jewelry from "../utils/jewelry.json";
import shoes from "../utils/shoes.json";
function Categories() {
  return (
    <div className=" text-center bg-purple-700 ">
      <ul className="text-white hover:[&>*]:bg-white hover:[&>*]:text-purple-700 font-medium hidden md:grid grid-cols-5 [&>*]:cursor-pointer">
        <li className="group">
          <h1 className="p-5">Clothes</h1>
          <div className="hidden group-hover:block text-black">
            <FurtherNav category={clothes} />
          </div>
        </li>
        <li className="group">
          <h1 className="p-5">Shoes</h1>
          <div className="hidden group-hover:block text-black">
            <FurtherNav category={shoes} />
          </div>
        </li>
        <li className="group">
          <h1 className="p-5">Bags</h1>
          <div className="hidden group-hover:block text-black">
            <FurtherNav category={bags}/>
          </div>
        </li>
        <li className="group">
          <h1 className="p-5">Jewelry</h1>
          <div className="hidden group-hover:block text-black">
            <FurtherNav category={jewelry}/>
          </div>
        </li>
        <li className="group">
          <h1 className="p-5">Accessories</h1>
          <div className="hidden group-hover:block text-black">
            <FurtherNav category={accessories}/>
          </div>
        </li>
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
