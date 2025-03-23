import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import passengerImg from "../assets/Passenger Alpha 1.png";
import commercial from "../assets/Commercial 3.png";
import passengerImg1 from "../assets/Cabin.png";
import passengerImg2 from "../assets/Exterior.png";
import passengerImg3 from "../assets/Front.png";
import passengerImg4 from "../assets/Trunk.png";

interface vehicleDataType {
  passenger: dataType;
  commercial: dataType;
}

interface dataType {
  title: string;
  description: string;
  image: string;
}

const VehicleSelector = () => {
  const [selected, setSelected] = useState("passenger");
  const [passengerImageIndex, setPassengerImageIndex] = useState(0);

  const passengerImages = [
    passengerImg,
    passengerImg1,
    passengerImg2,
    passengerImg3,
    passengerImg4,
  ];

  const vehicleData: vehicleDataType = {
    passenger: {
      title: "Passenger vehicles",
      description: "Revving up innovation from interior to exterior.",
      image: passengerImages[passengerImageIndex],
    },
    commercial: {
      title: "Commercial vehicles",
      description: "Advancing engineering for heavy-duty vehicles.",
      image: commercial,
    },
  };

  useEffect(() => {
    let interval: any;

    if (selected === "passenger") {
      interval = setInterval(() => {
        setPassengerImageIndex((prevIndex) =>
          prevIndex === passengerImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [selected]);

  return (
    <div className="flex items-center justify-center bg-black text-white h-[400px] w-6xl">
      {/* Left Side (Text + Buttons) */}
      <div className="w-1/3 relative">
        {/* Sliding Bar Indicator */}
        <div className="absolute left-0 w-[2px] h-64 bg-gray-400 transition-all">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: selected === "commercial" ? 110 : 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              duration: 2,
              ease: "easeInOut",
            }}
            className="absolute left-0 w-[2px] h-36 bg-white transition-all"
          />
        </div>

        {/* Buttons */}
        <button
          className={`block text-left p-4 ${selected === "passenger" ? "text-white" : "text-gray-600"}`}
          onClick={() => setSelected("passenger")}
        >
          <h2 className="text-3xl font-bold">Passenger vehicles</h2>
          <p className="text-lg">
            Revving up innovation from interior to exterior.
          </p>
        </button>

        <button
          className={`block text-left p-4 mt-4 ${selected === "commercial" ? "text-white" : "text-gray-600"}`}
          onClick={() => setSelected("commercial")}
        >
          <h2 className="text-3xl font-bold">Commercial vehicles</h2>
          <p className="text-lg">
            Advancing engineering for heavy-duty vehicles.
          </p>
        </button>
      </div>

      {/* Right Side (Image) */}
      <div className="w-2/3 flex justify-center">
        <motion.img
          key={
            selected === "passenger"
              ? passengerImages[passengerImageIndex]
              : vehicleData.commercial.image
          }
          src={
            selected === "passenger"
              ? passengerImages[passengerImageIndex]
              : vehicleData.commercial.image
          }
          alt={vehicleData[selected].title}
          className="w-[600px] h-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  );
};

export default VehicleSelector;
