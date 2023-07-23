import React, { useRef } from "react";

function ShortLink({ link }) {
  const shortLinkRef = useRef();
  function copyLink() {
    const copyText = shortLinkRef.current;
    navigator.clipboard.writeText(copyText.innerHTML);
  }
  return (
    <div
      className="flex justify-between items-center gap-4 bg-white md:p-8
    rounded-lg max-md:flex-col max-md:items-start shadow-lg"
    >
      <span
        className="max-md:p-8 max-md:pb-2 
        max-md:border-b border-b-parText max-md:w-full text-ellipsis whitespace-nowrap overflow-hidden"
      >
        {link.original_link}
      </span>
      <div className="max-md:p-8 max-md:pt-2 flex gap-5 items-center max-md:flex-col max-md:items-start max-md:w-full">
        <a
          ref={shortLinkRef}
          href={link.full_short_link}
          target="_blank"
          rel="noreferrer"
          className=" text-primaryCyan"
        >
          {link.full_short_link}
        </a>
        <button
          onClick={copyLink}
          className="button-style rounded-lg max-md:w-full"
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default ShortLink;
