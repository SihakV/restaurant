import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MyRestaurant Logo" width={100} />
        </Link>
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-secondary hover:text-gray-500 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="text-secondary hover:text-gray-500 transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="text-secondary hover:text-gray-500 transition duration-300"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/reservations"
              className="text-secondary hover:text-gray-500 transition duration-300"
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-secondary hover:text-gray-500 transition duration-300"
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
