import React from "react";
import iconBrandRecognition from "../images/icon-brand-recognition.svg";
import iconDetailedRecords from "../images/icon-detailed-records.svg";
import iconFullyCustomizable from "../images/icon-fully-customizable.svg";

function StatsSection() {
  return (
    <div className="bg-slate-100 px-6 pb-16 relative" id="stats">
      <div className="max-w-6xl lg:mx-auto  px-3 md:px-5 lg:px-12 flex flex-col justify-center text-center my-3 relative z-10">
        <div className="my-7">
          <h1 className="font-bold pt-5 md:text-xl lg:text-2xl">
            Advanced Statictics
          </h1>
          <p className="text-darkGrayishBlue text-sm  md:text-lg py-6 px-2 max-w-lg lg:mx-auto ">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          <div className="bg-white  p-8 rounded relative ">
            <div className="h-16 w-16 p-4 mx-auto rounded-full bg-darkViolet absolute -top-8  right-0 left-0">
              <img src={iconBrandRecognition} alt="" className="object-cover" />
            </div>
            <div className="font-bold pt-5 text-sm lg:text-xl">
              Brand Recognition
            </div>
            <div className="text-darkGrayishBlue text-sm  md:text-lg py-4 px-2 max-w-lg lg:mx-auto">
              Boost your brand recogniton with each click. Generic links don't
              mean a thing. Branded links help install confidence in your
              content.
            </div>
          </div>
          <div className="bg-white  p-8 rounded relative ">
            <div className="h-16 w-16 p-4 mx-auto rounded-full bg-darkViolet absolute -top-8  right-0 left-0">
              <img src={iconDetailedRecords} alt="" className="object-cover" />
            </div>
            <div className="font-bold pt-5 text-sm lg:text-xl">
              Detailed Records
            </div>
            <div className="text-darkGrayishBlue text-sm  md:text-lg py-4 px-2 max-w-lg lg:mx-auto">
              Gain insights into who is clicking your links. Knowing when and
              where people engaging with your content hepls inform better
              decisions.
            </div>
          </div>
          <div className="bg-white  p-8 rounded relative ">
            <div className="h-16 w-16 p-4 mx-auto rounded-full bg-darkViolet absolute -top-8  right-0 left-0">
              <img
                src={iconFullyCustomizable}
                alt=""
                className="object-cover"
              />
            </div>
            <div className="font-bold pt-5 text-sm lg:text-xl">
              Detailed Records
            </div>
            <div className="text-darkGrayishBlue text-sm  md:text-lg py-4 px-2 max-w-lg lg:mx-auto">
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
