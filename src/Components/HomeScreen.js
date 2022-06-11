import React from "react";
import Catalogue from "./Catalogue";
import Footer from "./Footer";
import Hero from "./Hero";
import Intergrity from "./Intergrity";
import Training from "./Training";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Catalogue />
      <Intergrity />
      <Training />
      <Footer />
    </div>
  );
};

export default HomeScreen;
