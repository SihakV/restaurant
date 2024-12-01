import React from "react";
import Navbar from "./assets/components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import AboutUsPage from "./assets/pages/AboutUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
};

export default App;
