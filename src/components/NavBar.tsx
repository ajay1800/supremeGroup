import React from "react";
import logo from "../assets/Supreme_logos (3).png";
import linedInIco from "../assets/bxl-linkedin.svg.png";
import languageIco from "../assets/Frame 493.png";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white shadow-md fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-4 z-50">
      {/* Left: Logo */}
      <div className="text-xl font-bold text-blue-600">
        <img alt="Supreme Group" src={logo} />
      </div>

      {/* Right: Social Icons + Contact Button */}
      <div className="flex items-center space-x-6">
        {/* Social Icons */}
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fa-brands fa-linkedin text-xl"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fa-solid fa-language text-xl"></i>
        </a>

        {/* Contact Us Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Contact Us
        </button>
        <img src={linedInIco} alt="LinkedIn" />
        <img src={languageIco} alt="Language" />
      </div>
    </div>
  );
};

export default Navbar;
