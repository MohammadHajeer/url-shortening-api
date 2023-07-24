import React from "react";
import brandIcon from "../images/icon-brand-recognition.svg";
import detailIcon from "../images/icon-detailed-records.svg";
import customIcon from "../images/icon-fully-customizable.svg";

function Features({ children }) {
  return (
    <div className=" py-20 bg-slate-100">
      <div className="container max-sm:mt-16 max-md:mt-7 flex flex-col gap-4">
        {children}
      </div>
      <div className="container relative pt-20">
        <div className="text-center">
          <h2 className=" text-mainText text-4xl font-bold">
            Advanced Statistics
          </h2>
          <p className="w-[480px] max-w-[100%] mx-auto text-parText leading-relaxed mt-5">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="relative mt-20 flex justify-between gap-5 max-md:gap-20 h-96 max-lg:flex-col max-lg:h-auto">
          <span className="absolute w-full h-2 top-[40%] bg-primaryCyan
          max-lg:w-2 max-lg:h-full max-lg:top-0 max-lg:left-1/2 max-lg:-translate-x-1/2 shadow-lg shadow-primaryCyan"></span>
          <Feature
            img={brandIcon}
            title="Brand Recognition"
            details="Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content."
          />
          <Feature
            img={detailIcon}
            title="Detailed Records"
            details="Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions."
          />
          <Feature
            img={customIcon}
            title="Fully Customizable"
            details="Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement."
          />
        </div>
      </div>
    </div>
  );
}

export default Features;

function Feature({ img, title, details }) {
  return (
    <div className="w-[390px] xl:w-[490px] max-w-full z-50 bg-white p-10 pt-0 rounded-lg max-lg:last-of-type:self-start
     last-of-type:self-end first-of-type:self-start max-lg:odd:self-end odd:self-center shadow-lg
     max-md:last-of-type:self-center max-md:first-of-type:self-center max-md:odd:self-center">
      <div className=" bg-mainText rounded-full w-fit p-5 -translate-y-1/2 max-md:mx-auto shadow-md shadow-mainText">
        <img src={img} alt="Icon" />
      </div>
      <h3 className="font-bold text-2xl text-mainText mb-5">{title}</h3>
      <p className="text-parText leading-relaxed">{details}</p>
    </div>
  );
}
