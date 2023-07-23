import React from "react";
import logo from "../images/logo-white.svg";
import twitterIcon from "../images/icon-twitter.svg";
import pintresetIcon from "../images/icon-pinterest.svg";
import instagramIcon from "../images/icon-instagram.svg";
import facebookIcon from "../images/icon-facebook.svg";

function Footer() {
  return (
    <div className="bg-[#232127] p-20">
      <div className="container flex justify-between items-center max-xl:flex-col">
        <div className="self-start max-xl:self-center mb-10">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-24 max-lg:flex-col max-lg:text-center">
          <Links
            title={"Features"}
            links={["Link Shortening", "Branded Links", "Analytics"]}
          />
          <Links
            title={"Resources"}
            links={["Blog", "Developers", "Support"]}
          />
          <Links
            title={"Company"}
            links={["About", "Our Team", "Careers", "Contact"]}
          />
          <div className="flex gap-6">
            <a href="#facebook">
              <img className=" min-w-fit" src={facebookIcon} alt="Facebook Icon" />
            </a>
            <a href="#twitter">
              <img className=" min-w-fit" src={twitterIcon} alt="Twitter Icon" />
            </a>
            <a href="#pintreset">
              <img className=" min-w-fit" src={pintresetIcon} alt="Pintreset Icon" />
            </a>
            <a href="#instagram">
              <img className=" min-w-fit" src={instagramIcon} alt="Instagram Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

function Links({ title, links }) {
  return (
    <div>
      <h4 className="text-white mb-5 font-bold">{title}</h4>
      <ul className="text-parText leading-loose">
        {links.map((link, index) => (
          <li key={index}>
            <a href={"#" + link}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
