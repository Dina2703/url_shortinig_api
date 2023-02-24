import { useState, useRef, useEffect } from "react";
import logo from "../images/logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  //Closing the dropdown menu when clicked outside

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <section
      id="navbar_section "
      className="px-3 md:px-5 lg:px-12 max-w-6xl lg:mx-auto"
    >
      <nav
        className=" h-20 mx-auto flex items-center  justify-between "
        ref={ref}
      >
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
        <div className="md:flex  hidden space-x-2  pl-3">
          <button className="w-[5rem] bottom-5 bg-white p-1.5 rounded-full  font-[700] text-sm hover:text-veryDarkViolet ease-in-out duration-150 text-grayishViolet ">
            Login
          </button>
          <button className="w-[5rem] bottom-5  p-1.5 hover:bg-cyan-300 ease-in-out duration-150 rounded-full  font-[700] text-sm bg-cyan text-white">
            Sign Up
          </button>
        </div>
        <div
          className="flex flex-col md:hidden w-6  gap-1.5 cursor-pointer relative"
          onClick={toggleMenu}
        >
          <span className="border-b-[4px] rounded-lg border-grayishViolet" />
          <span className="border-b-[4px] rounded-lg border-grayishViolet" />
          <span className="border-b-[4px] rounded-lg border-grayishViolet" />
        </div>
      </nav>
      {/* module */}
      {isMenuOpen && (
        <div className="w-3/4 bg-darkViolet mx-auto text-white rounded-lg p-6 absolute z-50 right-0 left-0">
          <ul className="w-full flex flex-col justify-center items-center gap-2 font-bold text-sm ">
            <li className="cursor-pointer hover:text-cyan">Features</li>
            <li className="cursor-pointer hover:text-cyan">Pricing</li>
            <li className="cursor-pointer hover:text-cyan">Resources</li>
            <li className="cursor-pointer hover:text-cyan">Features</li>

            <li className="border-t-[.5px] border-grayishViolet  w-full text-center pt-[16px] mt-[16px] cursor-pointer hover:text-cyan">
              Login
            </li>
            <button className=" p-1.5 w-full   rounded-full  font-bold text-sm bg-cyan hover:bg-opacity-70 my-2">
              Sign Up
            </button>
          </ul>
        </div>
      )}
    </section>
  );
}

export default Navbar;
