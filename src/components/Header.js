import React, { useState } from "react";
import logo from "../images/logo.svg";

function Header() {
  const [navigation, setNavigation] = useState(false);
  return (
    <header className="container relative z-50 justify-between flex items-center h-28 gap-12">
      <div>
        <img className="w-full" src={logo} alt="logo" />
      </div>
      <div className={"navigation-style " + (navigation && "active")}>
        <ul
          className="flex items-center gap-10 max-md:text-white 
        max-md:flex-col max-md:border border-b-1 border-transparent
         border-b-parText max-md:pb-5"
        >
          <li className="hover:text-mainText cursor-pointer">Features</li>
          <li className="hover:text-mainText cursor-pointer">pricing</li>
          <li className="hover:text-mainText cursor-pointer">resources</li>
        </ul>
        <div className="flex max-md:gap-5 gap-10 max-md:flex-col max-md:pt-5">
          <button className="max-md:text-white">login</button>
          <button className="button-style rounded-full">SignUp</button>
        </div>
      </div>
      <div
        onClick={() => setNavigation((p) => !p)}
        className="md:hidden cursor-pointer flex flex-col gap-1 border border-1 p-2 border-parText"
      >
        {Array(3)
          .fill(" ")
          .map((e, i) => {
            return <span key={i} className="w-8 h-1 bg-parText"></span>;
          })}
      </div>
    </header>
  );
}

export default Header;
