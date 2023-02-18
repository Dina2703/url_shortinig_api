import React from "react";

import ButtonComponent from "./ButtonComponent";

function HeroSection() {
  return (
    <section id="hero" className="h-[70svh] mb-20">
      <div className="container pl-6 md:pl-24   h-full flex  items-center justify-between gap-x-2  flex-row-reverse">
        <div className="md:w-1/2 h-full " id="heroImg" />
        <div className=" w-2/3">
          <div className="w-[90%]">
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
