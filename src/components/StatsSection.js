import React from "react";
import iconBrandRecognition from "../images/icon-brand-recognition.svg";
import iconDetailedRecords from "../images/icon-detailed-records.svg";
import iconFullyCustomizable from "../images/icon-fully-customizable.svg";

function StatsSection() {
  return (
    <div className="bg-slate-100 px-6 pb-16 relative" id="stats">
      <div className="max-w-6xl lg:mx-auto  px-3 md:px-5 lg:px-12 flex flex-col justify-center text-center mb-3 relative z-10">
        <div className="mt-7 mb-14">
          <h1 className="font-bold pt-5 md:text-xl text-[22px] lg:text-2xl">
            Advanced Statistics
          </h1>
          <p className="text-darkGrayishBlue text-[14px]  md:text-lg py-3  max-w-lg lg:mx-auto ">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:relative md:gap-8 md:mt-6">
          <div className="bg-white  p-8 md:p-[2.5%] rounded relative md:bottom-10">
            <div className="h-14 w-14 p-4 mx-auto rounded-full bg-darkViolet absolute -top-8  md:right-[60%] right-0 left-0 ">
              <img src={iconBrandRecognition} alt="" className="object-cover" />
            </div>
            <div className="font-bold pt-5 text-[18px] md:text-[20px] md:text-start ">
              Brand Recognition
            </div>
            <div className="text-darkGrayishBlue text-[14px] md:text-[16px] pt-4 max-w-lg lg:mx-auto md:text-start">
              Boost your brand recogniton with each click. Generic links don't
              mean a thing. Branded links help install confidence in your
              content.
            </div>
          </div>
          <div className="bg-white  p-8 md:p-[2.5%] rounded relative md:top-0">
            <div className="h-14 w-14 p-4 mx-auto rounded-full bg-darkViolet absolute -top-8  md:right-[60%] right-0  left-0">
              <img src={iconDetailedRecords} alt="" className="object-cover" />
            </div>
            <div className="font-bold pt-5 text-[18px] md:text-[20px] md:text-start ">
              Detailed Records
            </div>
            <div className="text-darkGrayishBlue text-[14px] md:text-[16px] pt-4 max-w-lg lg:mx-auto md:text-start">
              Gain insights into who is clicking your links. Knowing when and
              where people engaging with your content hepls inform better
              decisions.
            </div>
          </div>
          <div className="bg-white p-8 md:p-[2.5%] rounded relative md:top-10">
            <div className="h-14 w-14 p-4 mx-auto rounded-full bg-darkViolet absolute -top-8  md:right-[60%] right-0 left-0">
              <img
                src={iconFullyCustomizable}
                alt=""
                className="object-cover"
              />
            </div>
            <div className="font-bold pt-5 text-[18px] md:text-[20px] md:text-start">
              Fully Customizable
            </div>
            <div className="text-darkGrayishBlue text-[14px] md:text-[16px] pt-4 max-w-lg lg:mx-auto md:text-start">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
