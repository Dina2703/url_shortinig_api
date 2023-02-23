import React from "react";

function ShortenItSection() {
  return (
    <div id="shorten_window" className="mt-20 pb-10 bg-slate-100 relative">
      <div className="w-3/4 p-4 rounded bg-darkViolet flex flex-col absolute justify-center mx-auto gap-2 -top-14 z-40 left-0 right-0">
        <input
          type="text"
          placeholder="Shorten a link here... "
          className="rounded py-1.5 px-3 text-[16px]  outline-none"
        />
        <button className="rounded py-1.5 px-3 text-[16px] bg-cyan text-white hover:bg-opacity-70">
          Shorten It!
        </button>
      </div>
    </div>
  );
}

export default ShortenItSection;
