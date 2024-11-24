import React from "react";
import Navbar from "./assets/components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
