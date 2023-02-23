import React from "react";
import logo2 from "../images/logo2.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

function Footer() {
  return (
    <div
      id="footer"
      className="w-full pb-12 bg-[#1a001a]  text-white flex flex-col items-center pt-5"
    >
      <a href="#" className=" ">
        <img src={logo2} alt="logo" className=" my-4 h-5" />
      </a>
      <ul className="text-center my-4">
        <li className="font-bold text-sm pb-3 ">Features</li>
        <li className="text-grayishViolet pb-2 text-[16px] hover:text-cyan cursor-pointer">
          Link Shortening
        </li>
        <li className="text-grayishViolet pb-2 text-[16px] hover:text-cyan cursor-pointer">
          Branded Links
        </li>
        <li className="text-grayishViolet pb-2 text-[16px] hover:text-cyan cursor-pointer">
          Analytics
        </li>
      </ul>
      <ul className="text-center my-4">
        <li className="font-bold text-sm pb-3 ">Resources</li>
        <li className="text-grayishViolet pb-2 text-[16px] hover:text-cyan cursor-pointer">
          Blog
        </li>
        <li className="text-grayishViolet pb-2 text-[16px] hover:text-cyan cursor-pointer">
          Developers
        </li>
        <li className="text-grayishViolet pb-2 text-[16px] hover:text-cyan cursor-pointer">
          Support
        </li>
      </ul>
      <ul className="text-center my-4">
        <li className="font-bold text-sm pb-3 ">Company</li>
        <li className="text-grayishViolet pb-2 text-[16px] hover:text-cyan cursor-pointer">
          About
        </li>
        <li className="text-grayishViolet pb-2 text-[16px] hover:text-cyan cursor-pointer">
          Our Team
        </li>
        <li className="text-grayishViolet pb-2 text-[16px] hover:text-cyan cursor-pointer">
          Careers
        </li>
        <li className="text-grayishViolet pb-2 text-[16px] hover:text-cyan cursor-pointer">
          Contact
        </li>
      </ul>
      <div className="flex gap-4 ">
        <img
          src={facebook}
          alt=""
          className="w-4 h-4 cursor-pointer hover:bg-cyan "
        />
        <img src={twitter} alt="" className="w-4 h-4 cursor-pointer  " />
        <img src={pinterest} alt="" className="w-4 h-4 cursor-pointer " />
        <img src={instagram} alt="" className="w-4 h-4 cursor-pointer  " />
      </div>
    </div>
  );
}

export default Footer;
