import React from "react";
import Popular from "../Popular/Popular.jsx";
import HomePage from "../HomePage/HomePage.jsx";
import Offers from "../Offers/Offers.jsx";
import About from "../About/About.jsx";

const Home = () => {
  return (
    <>
      <HomePage />
      <Popular />
      <Offers />
      <About />
    </>
  );
};

export default Home;
