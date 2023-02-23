import React from "react";

function ButtonComponent({ text }) {
  return (
    <button className=" px-8 py-[10px] text-white rounded-full  font-[600] text-md bg-cyan tracking-wide hover:bg-opacity-70">
      {text}
    </button>
  );
}

export default ButtonComponent;
