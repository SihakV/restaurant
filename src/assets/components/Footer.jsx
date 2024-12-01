import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Our Venues</h2>
            <p className="mb-2">123 Main Street, City, Country</p>
            <p>456 Another St, City, Country</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@myrestaurant.com</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
