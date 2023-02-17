import React from "react";
import logo from "../images/logo.svg";

function Navbar() {
  return (
    <div id="navbar_section">
      <nav className="container h-20 mx-auto flex items-center px-6">
        <a href="#" className="mr-8">
          <img src={logo} alt="logo" />
        </a>
        <ul className="flex flex-1 gap-4 text-sm text-gray-400 font-[700] ">
          <li className="cursor-pointer hover:text-gray-500 ease-in-out duration-150">
            Features
          </li>
          <li className="cursor-pointer hover:text-gray-500 ease-in-out duration-150">
            Pricing
          </li>
          <li className="cursor-pointer hover:text-gray-500 ease-in-out duration-150">
            Resources
          </li>
        </ul>
        <div className="flex gap-5">
          <button className="w-[5rem] bottom-5 bg-white p-1.5 rounded-full text-gray-400 font-[700] text-sm hover:text-gray-500 ease-in-out duration-150">
            Login
          </button>
          <button className="w-[5rem] bottom-5  p-1.5 hover:bg-cyan-300 ease-in-out duration-150 rounded-full  font-[700] text-sm bg-cyan-400 text-white">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
