import React from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineMenu
} from "react-icons/ai";
function NavBar() {
  return (
    <div className="mx-3 sm:mx-5 border-b-2 p-4 grid grid-cols-2">
      <div className="self-center flex md:gap-2 gap-4">
        <AiOutlineMenu className="md:hidden text-2xl cursor-pointer self-center" />
        <h1 className="md:text-xl font-semibold self-center">
          Jet Collections
        </h1>
      </div>
      <div className="flex w-full gap-6 justify-end [&>*]:self-center">
        <div className="hidden md:flex w-full [&>*]:self-center border-purple-500 rounded-lg border-2">
          <input
            type="search"
            placeholder="Find items..."
            className="w-full rounded-lg text-sm md:text-md focus:outline-none px-3"
          />
          <div className="bg-purple-500 h-full p-2 ">
            <AiOutlineSearch className="text-xl text-white self-center" />
          </div>
        </div>
        <div className="flex gap-4 [&>*]:self-center ">
          <AiOutlineUser className="text-2xl cursor-pointer" />
          <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
          <AiOutlineHeart className="text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
