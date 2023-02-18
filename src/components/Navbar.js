import React from "react";
import logo from "../images/logo.svg";

function Navbar() {
  return (
    <section id="navbar_section">
      <nav className=" h-20 mx-auto flex items-center  justify-between">
        <a href="#" className="mr-8">
          <img src={logo} alt="logo" />
        </a>
        <ul className=" flex-1 hidden md:flex space-x-6 ">
          <li className="cursor-pointer hover:text-veryDarkViolet ease-in-out duration-150 text-grayishViolet text-sm  font-[700] ">
            Features
          </li>
          <li className="cursor-pointer hover:text-veryDarkViolet ease-in-out duration-150 text-grayishViolet text-sm  font-[700] ">
            Pricing
          </li>
          <li className="cursor-pointer hover:text-veryDarkViolet ease-in-out duration-150 text-grayishViolet text-sm  font-[700] ">
            Resources
          </li>
        </ul>
        <div className="flex space-x-2">
          <button className="w-[5rem] bottom-5 bg-white p-1.5 rounded-full  font-[700] text-sm hover:text-veryDarkViolet ease-in-out duration-150 text-grayishViolet ">
            Login
          </button>
          <button className="w-[5rem] bottom-5  p-1.5 hover:bg-cyan-300 ease-in-out duration-150 rounded-full  font-[700] text-sm bg-cyan text-white">
            Sign Up
          </button>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
