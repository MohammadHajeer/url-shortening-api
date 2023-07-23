import React from "react";
import heroImage from "../images/illustration-working.svg";

function Hero({ children }) {
  return (
    <div
      className="container"
    >
      <div className="relative flex justify-between items-center pt-20 max-lg:pt-0
    max-lg:flex-col-reverse max-md:text-center">
        <div className="lg:w-6/12 max-md:mt-10">
          <h1 className="max-md:text-4xl text-7xl font-bold text-mainText leading-tight">
            More than just shorter link
          </h1>
          <p className="lg:w-9/12 mb-8 text-parText text-lg">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="button-style rounded-full">Get Started</button>
        </div>
        <div className="-mr-64">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
      <div
        className="rounded-lg
        p-10  translate-y-1/2 bg-shorten-desktop max-sm:bg-shorten-mobile max-sm:bg-contain 
        bg-cover bg-right bg-mainText bg-no-repeat shadow-md shadow-mainText"
      >
        {children}
      </div>
    </div>
  );
}

export default Hero;
