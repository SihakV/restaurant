import React from "react";
import restaurantBanner from "../images/restaurant-banner.jpg";

const HeroBanner = () => {
  return (
    <div className="relative h-[500px] font-sans">
      {/* Background Image */}
      <img
        src={restaurantBanner}
        alt="Restaurant Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyRestaurant</h1>
        <p className="text-lg mb-6">Savor the flavors of excellence</p>
        <a
          href="/menu"
          className="px-6 py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-lg transition duration-300"
        >
          View Our Menu
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
