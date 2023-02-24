import React from "react";

function ShortenItSection() {
  return (
    <div id="shorten_window" className="mt-24  bg-slate-100 relative">
      <div className="relative -top-12 z-40 left-0 right-0 flex flex-col gap-4 ">
        <div
          id="input_container"
          className="w-3/4 p-4 md:p-6 rounded bg-darkViolet flex flex-col md:flex-row justify-center mx-auto gap-2 relative max-w-3xl"
        >
          <input
            type="text"
            placeholder="Shorten a link here... "
            className="rounded py-1.5 px-3  text-[16px]  outline-none placeholder:text-grayishViolet md:flex-1"
          />
          <button className="rounded py-1.5 px-3 text-[16px] bg-cyan text-white hover:bg-opacity-70 md:w-28">
            Shorten It!
          </button>
        </div>
        {/* shortened links */}
        <div className="w-3/4 rounded   bg-white  mx-auto  max-w-3xl flex flex-col md:flex-row ">
          <div className="rounded-t-lg py-2 px-3 text-[15px]  border-b-2 border-slate-100 md:flex-1 md:flex md:justify-between md:items-center">
            https://www.frontendmentor.io
          </div>
          <div className=" py-2 px-3 md:my-auto text-[15px] text-cyan   ">
            https://rel.ink/k4lkykk4lkyk
          </div>
          <button className="rounded py-1.5 px-6  text-[15px]  bg-cyan text-white hover:bg-opacity-70 m-3  text-center cursor-pointer">
            Copy
          </button>
        </div>
        {/* <div className="w-3/4 rounded   bg-white  mx-auto  ">
          <div className="rounded-t-lg py-2 px-3 text-[15px]  border-b-2 border-slate-100">
            <span>https://www.frontendmentor.io</span>
          </div>
          <div className="rounded py-2 px-3 text-[15px] text-cyan ">
            <span>https://rel.ink/k4lkyk</span>
          </div>
          <div className="rounded py-1.5 px-3  text-[15px]  bg-cyan text-white hover:bg-opacity-70 m-3 mt-0  text-center cursor-pointer">
            Copy
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ShortenItSection;
