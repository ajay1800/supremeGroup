import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray text-white text-center flex flex-col justify-center items-center h-screen">
      <h3 className="text-md uppercase tracking-wide text-gray-300 mb-6">
        Performance in motion
      </h3>
      <h1 className="text-5xl font-normal mt-2">
        Soft Trims and NVH Solutions
      </h1>
      <p className="text-5xl font-light text-gray-200 mt-2">
        for seamless rides
      </p>
    </div>
  );
};

export default HeroSection;
