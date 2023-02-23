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
      className="w-full py-12 md:pt-0 md:pb-12 bg-[#1a001a]  text-white  "
    >
      <div className="flex flex-col gap-7 md:gap-0 md:flex-row items-center md:items-start md:justify-between md:pt-14 md:px-10 max-w-3xl lg:mx-auto ">
        <a href="#">
          <img src={logo2} alt="logo" className="  h-5" />
        </a>
        <ul className="text-center">
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
        <ul className="text-center">
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
        <ul className="text-center ">
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
    </div>
  );
}

export default Footer;
