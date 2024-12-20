import React from "react";
import HeroBanner from "../components/HeroBanner";
import AboutUs from "../components/Aboutus";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-primary">
      <HeroBanner />
      <AboutUs />
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
