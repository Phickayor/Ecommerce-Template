import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <div className="text-center bg-purple-700 text-white p-8 md:py-16 space-y-8">
      <ul className="flex flex-wrap font-poppins-light footer-lists [&>*]:cursor-pointer md:text-[18px] justify-center gap-5">
        <li>Service</li>
        <li>Support</li>
        <li>Company</li>
        <li>Legal</li>
        <li>Join Us</li>
      </ul>
      <ul className="flex justify-center [&>*]:text-2xl hover:[&>*]:scale-110 [&>*]:cursor-pointer gap-5 md:gap-10 flex-wrap">
        <AiOutlineMail />
        <AiOutlineInstagram />
        <FaFacebookF />
        <AiOutlineWhatsApp />
      </ul>
      <span className="block text-[#92989F] text-[12px]">
        All rights reserved
      </span>
    </div>
  );
}

export default Footer;
