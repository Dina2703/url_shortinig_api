import React from "react";
import ButtonComponent from "./ButtonComponent";

function GetStarted() {
  return (
    <div id="boost" className="w-full h-48 bg-darkViolet  relative">
      <div className="relative z-50 flex flex-col items-center h-full justify-center">
        <h1 className="text-[24px] font-bold text-white mb-3">
          Boost your links today
        </h1>
        <div>
          <ButtonComponent text="Get Started" />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
