import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          🍽️ MyRestaurant
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:underline hover:text-secondary transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="text-white hover:underline hover:text-secondary transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="text-white hover:underline hover:text-secondary transition duration-300"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/reservations"
              className="text-white hover:underline hover:text-secondary transition duration-300"
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:underline hover:text-secondary transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
