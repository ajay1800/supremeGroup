import React from "react";
import VehicleSelector from "./vehicleSelector";

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-black text-white text-center h-screen flex justify-center items-center flex-col">
      <h2 className="text-3xl font-light">
        Evolving the drive with <span className="font-bold">360-degree</span>{" "}
        <br /> nonwoven solutions
      </h2>
      <VehicleSelector />
      <p className="text-gray-500 text-sm mt-4">
        Click anywhere for next slide <br /> (Only written for prototype)
      </p>
    </section>
  );
};

export default FeaturesSection;
