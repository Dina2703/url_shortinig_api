import { useState, useEffect } from "react";
import ShortenedCard from "./ShortenedCard";
import axios from "axios";
import clsx from "clsx";

function ShortenItSection() {
  const [inputValue, setInputValue] = useState("");
  const [link, setLink] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // console.log(link);
  useEffect(() => {
    const options = {
      method: "POST",
      url: "https://url-shortner6.p.rapidapi.com/shorten",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "195864ad65msh969ab9f081566ebp130455jsnbf226eb5209a",
        "X-RapidAPI-Host": "url-shortner6.p.rapidapi.com",
      },
      data: `{"fullUrl":${JSON.stringify(link)}}`,
    };

    axios
      .request(options)
      .then(function (response) {
        // setShortLink(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [link]);

  const handleSubmit = () => {
    if (inputValue.length <= 0) {
      setErrMsg("Please add a link");
    } else {
      setLink(inputValue);
      console.log(inputValue);
    }
  };

  return (
    <div id="shorten_window" className="mt-24  md:mt-0 bg-slate-100 relative">
      <div className="relative -top-12 z-40 left-0 right-0 flex flex-col gap-4 ">
        <div
          id="input_container"
          className="w-3/4 p-4 md:p-8 rounded bg-darkViolet flex flex-col md:flex-row justify-center mx-auto gap-4 relative max-w-3xl "
        >
          <div className="md:flex-1 h-10">
            <input
              type="text"
              placeholder="Shorten a link here... "
              //   className="rounded  h-full text-[16px]  px-3 placeholder:text-red
              // outline-none  w-full"
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
              onChange={(e) => setInputValue(e.target.value)}
            />
            <p className="text-red text-[10px] italic mt-1">
              {errMsg ? errMsg : ""}
            </p>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="rounded py-1.5 px-3 text-[16px] bg-cyan text-white hover:bg-opacity-70 md:w-28"
          >
            Shorten It!
          </button>
        </div>

        {/* shortened links */}
        {link && shortLink && (
          <ShortenedCard link={link} shortLink={shortLink} />
        )}
      </div>
    </div>
  );
}

export default ShortenItSection;
