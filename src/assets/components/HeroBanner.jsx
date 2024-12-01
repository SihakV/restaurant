import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import restaurantBanner1 from "../images/restaurant-banner.jpg";
import restaurantBanner2 from "../images/restaurant-banner.jpg";
import restaurantBanner3 from "../images/restaurant-banner.jpg";

const HeroBanner = () => {
  return (
    <div className="relative h-[400px] font-sans">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
      >
        <div>
          <img
            src={restaurantBanner1}
            alt="Restaurant Banner 1"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to Napoli</h1>
            <p className="text-lg mb-6">Savor the flavors of excellence</p>
          </div>
        </div>
        <div>
          <img
            src={restaurantBanner2}
            alt="Restaurant Banner 2"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Experience the Best</h1>
            <p className="text-lg mb-6">Delicious and delightful</p>
          </div>
        </div>
        <div>
          <img
            src={restaurantBanner3}
            alt="Restaurant Banner 3"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Taste the Tradition</h1>
            <p className="text-lg mb-6">Authentic and flavorful</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
