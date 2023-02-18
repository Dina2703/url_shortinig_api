import React from "react";

import ButtonComponent from "./ButtonComponent";

function HeroSection() {
  return (
    <section id="hero" className="h-[70svh] mb-20 ">
      <div className="  h-full flex  items-center justify-between   flex-row-reverse">
        <div className="md:w-1/2 h-full relative" id="heroImg" />
        <div className="md:w-1/2">
          <div className=" ">
            <h1 className="text-6xl font-[900] text-veryDarkViolet font-customBold  mb-4 font-poppins leading-[85px]">
              More than just shorter links
            </h1>
            <p className="text-darkGrayishBlue text-lg ">
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>
            <div className="mt-8">
              <ButtonComponent text="Get Started " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
