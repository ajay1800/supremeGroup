import React from "react";
import logo from "../assets/Supreme_logos (3).png";

const Footer: React.FC = () => {
  return (
    <div className="w-full background-img">
      <div className="max-w-6xl mx-auto text-center h-[550px] flex flex-col justify-center items-center ">
        {/* Logo Section */}
        <div className="w-full h-20">
          <img src={logo} alt="Supreme Group" />
        </div>

        {/* Links Section */}
        <div className="w-full flex flex-row h-64 justify-between items-center">
          <div className="flex flex-col items-start justify-between h-44">
            <h4 className="font-bold text-gray-700">APPLICATIONS</h4>
            <p className="text-gray-600">Apparel</p>
            <p className="text-gray-600">Automotive</p>
            <p className="text-gray-600">Filtration</p>
            <p className="text-gray-600">Customized Solutions</p>
          </div>

          <div className="flex flex-col items-start justify-between h-44">
            <h4 className="font-bold text-gray-700">COMPANY</h4>
            <p className="text-gray-600">Innovation</p>
            <p className="text-gray-600">Global Competency</p>
            <p className="text-gray-600">About Us</p>
            <p className="text-gray-600">Contact Us</p>
          </div>

          <div className="flex flex-col items-start justify-between h-44">
            <h4 className="font-bold text-gray-700">more</h4>
            <p className="text-gray-600">Careers</p>
            <p className="text-gray-600">Privacy Policy</p>
            <p className="text-gray-600">Terms and Conditions</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start justify-between h-44">
            <h4 className="font-bold text-gray-700">FOLLOW US</h4>
            <p className="text-gray-600">Twitter</p>
            <p className="text-gray-600">LinkedIn</p>
            <p className="text-gray-600">Instagram</p>
            <p className="text-gray-600">Medium</p>
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-center h-20">
          <p className="text-gray-500 text-sm">©2023 All Rights Reserved.</p>
          <p>Supreme house: 110, 16th Road,Chembur, Mumbai – 400071.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
