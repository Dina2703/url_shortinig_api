import React from "react";

function StatsSection() {
  return (
    <div className="bg-slate-100 h-64 px-6">
      <div className="max-w-6xl lg:mx-auto  px-3 md:px-5 lg:px-12 flex flex-col justify-center text-center my-3">
        <h1 className="font-bold pt-5 md:text-xl lg:text-2xl">
          Advanced Statictics
        </h1>
        <p className="text-darkGrayishBlue text-sm  md:text-lg py-4 px-2 max-w-lg lg:mx-auto ">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="flex">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
