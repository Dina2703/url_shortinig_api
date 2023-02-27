import { useState } from "react";
import ShortenedCard from "./ShortenedCard";
import axios from "axios";
import clsx from "clsx";

function ShortenItSection() {
  const [inputValue, setInputValue] = useState("");
  const [linkArr, setlinkArr] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  // console.log({ link: link });
  // console.log({ linkArr: linkArr });

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  // get input value on enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(e.target.value);
    }
  };

  const URLShortner = async (e) => {
    e.preventDefault();

    const URL = `https://api.shrtco.de/v2/shorten?url=`;

    if (inputValue.length <= 0) {
      setErrMsg("Please add a link");
    } else {
      axios
        .get(URL + inputValue)
        .then(function (response) {
          console.log(response.data);
          const data = response.data.result;
          setlinkArr((prev) => [...prev, data]);
          setInputValue("");
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  return (
    <div id="shorten_window" className="mt-24  2xl:mt-0 bg-slate-100 relative">
      <div className="relative -top-12 z-40 left-0 right-0 flex flex-col gap-4 ">
        <form
          onSubmit={URLShortner}
          id="input_container"
          className="w-3/4 p-4 md:p-8 rounded bg-darkViolet flex flex-col md:flex-row justify-center mx-auto gap-6 md:gap-4 relative max-w-3xl "
        >
          <div className="md:flex-1 h-10">
            <input
              type="text"
              placeholder="Shorten a link here... "
              className={clsx(
                "rounded",
                "h-full",
                "text-[16px]",
                "px-3",
                "outline-none",
                "w-full",
                errMsg && "placeholder:text-red",
                errMsg && "border-2",
                errMsg && "border-red"
              )}
              value={inputValue}
              onMouseDown={() => setErrMsg("")}
              onChange={inputHandler}
              onKeyDown={handleKeyDown}
            />
            <p className="text-red text-[10px] italic mt-1 ">
              {errMsg ? errMsg : ""}
            </p>
          </div>

          <button
            type="submit"
            className="rounded py-1.5 px-3 text-[16px] bg-cyan text-white hover:bg-opacity-70 md:w-28"
          >
            Shorten It!
          </button>
        </form>
        {/*  shortened links */}
        {linkArr.length > 0 &&
          linkArr
            .reverse()
            .map((each, index) => (
              <ShortenedCard
                key={index}
                fullLink={each.original_link}
                shortLink={each.short_link}
              />
            ))}
      </div>
    </div>
  );
}

export default ShortenItSection;
