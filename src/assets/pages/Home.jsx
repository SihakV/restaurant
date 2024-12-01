import React from "react";
import HeroBanner from "../components/HeroBanner";
import AboutUs from "../components/Aboutus";

const Home = () => {
  return (
    <div className="bg-primary">
      <HeroBanner />
      <AboutUs />
    </div>
  );
};

export default Home;
