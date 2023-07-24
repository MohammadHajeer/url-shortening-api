import React, { useRef, useState, useEffect } from "react";
import trashIcon from "../images/trash-icon.svg";

function GetAPI({ getLinks }) {
  const [loader, setLoader] = useState(false);
  const [validation, setValidation] = useState(true);
  const [shortLinks, setShorkLinks] = useState(
    localStorage.shortLinks ? JSON.parse(localStorage.shortLinks) : []
  );
  const inputRef = useRef();
  function shortenLink() {
    setLoader(true);
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputRef.current.value}`)
      .then((r) => r.json())
      .then((data) => {
        setShorkLinks([...shortLinks, data.result].filter((e) => e));
      });
  }

  function validateURL() {
    const regex = /https:\/\//gi;
    if (regex.test(inputRef.current.value)) {
      setValidation(true);
      shortenLink();
    } else {
      setValidation(false);
    }
  }

  useEffect(() => {
    setLoader(false);
    getLinks(shortLinks);
    inputRef.current.value = "";
  }, [shortLinks, getLinks]);

  return (
    <div className="flex gap-8 max-md:flex-col">
      <div className="flex-1 flex relative flex-col">
        <input
          ref={inputRef}
          className={
            "flex-1 p-3 pr-16 md:pl-8 rounded-lg outline-none focus:outline-cyan-400 focus:ring-2 max-w-full" +
            (!validation &&
              "outline-2 outline-[#f46262] placeholder:text-[#f46262]")
          }
          type="text"
          placeholder="Shorten a link here..."
        />
        {loader && <Loader />}
        {!validation && (
          <p className="text-[#f46262] absolute -bottom-1 translate-y-full">
            Please add a link
          </p>
        )}
      </div>
      <div className="flex gap-4 max-sm:flex-col">
        <button
          onClick={() => validateURL()}
          className="button-style rounded-lg flex-1"
        >
          Shorten It!
        </button>
        <button
          onClick={() => setShorkLinks([])}
          className="button-style rounded-lg"
        >
          <img src={trashIcon} alt="trash-icon" />
        </button>
      </div>
    </div>
  );
}

export default GetAPI;

function Loader() {
  return (
    <div
      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10
     border-8 border-mainText border-t-transparent
      border-b-transparent rounded-full animate-loading"
    ></div>
  );
}
