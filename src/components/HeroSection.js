import React from "react";

import ButtonComponent from "./ButtonComponent";

function HeroSection() {
  return (
    <section
      id="hero"
      className="h-fit md:h-[75svh]  px-3 md:px-5 lg:px-12 max-w-6xl lg:mx-auto "
    >
      <div className="h-full flex flex-col items-start md:justify-between  md:flex-row-reverse ">
        <div
          className=" w-full md:w-1/2 h-[300px] md:h-full relative mb-3 md:mb-0 "
          id="heroImg"
        />
        <div className="w-full md:w-1/2  md:h-4/5 h-2/5 flex md:items-center items-start">
          <div className="text-center md:text-left ">
            <h1 className="text-3xl lg:text-5xl 2xl:text-6xl   font-[900] text-veryDarkViolet font-customBold  mb-4 font-poppins  py-4 ">
              More than just shorter links
            </h1>
            <p className="text-darkGrayishBlue md:text-lg ">
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>
            <div className="mt-8  flex justify-center md:justify-start">
              <ButtonComponent text="Get Started " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
