import React from "react";

function ShortenedCard({ link, shortLink }) {
  return (
    <div>
      <div className="w-3/4 rounded   bg-white  mx-auto  max-w-3xl flex flex-col md:flex-row ">
        <div className="rounded-t-lg py-2 px-3 text-[15px]  border-b-2 border-slate-100 md:flex-1 md:flex md:justify-between md:items-center">
          {link}
        </div>
        <div className=" py-2 px-3 md:my-auto text-[15px] text-cyan   ">
          {shortLink}
        </div>
        <button className="rounded py-1.5 px-6  text-[15px]  bg-cyan text-white hover:bg-opacity-70 m-3  text-center cursor-pointer">
          Copy
        </button>
      </div>
    </div>
  );
}

export default ShortenedCard;
