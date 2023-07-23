import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GetAPI from "./components/GetAPI";
import Features from "./components/Features";
import ShortLink from "./components/ShortLink";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  const [links, setLinks] = useState(
    localStorage.shortLinks ? JSON.parse(localStorage.shortLinks) : []
  );

  function setLinksHanlder(links) {
    setLinks(links);
    localStorage.shortLinks = JSON.stringify(links);
  }
  return (
    <div className="overflow-hidden selection:bg-mainText selection:text-white">
      <Header />
      <Hero>
        <GetAPI getLinks={setLinksHanlder} />
      </Hero>
      <Features>
        {links.map((link, index) => (
          <ShortLink key={index} link={link} />
        ))}
      </Features>
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
