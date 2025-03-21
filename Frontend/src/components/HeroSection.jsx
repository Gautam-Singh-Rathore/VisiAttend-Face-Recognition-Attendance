import React from "react";
import banner from "../../public/assets/banner.png";
import { useNavigate } from "react-router";

const HeroSection = () => {

  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="h-[65vh] bg-cover bg-center pt-16"
    >
      <div className="text-white w-full h-full flex justify-center items-center">
        <div className="text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold italic">
            VisiAttend
          </h1>
          <h1 className="text-lg sm:text-2xl md:text-3xl">
          Revolutionizing Attendance with Facial Recognition
          </h1>
          <br />
          <button className="bg-transparent border-[3px] px-6 py-3 text-sm sm:text-lg md:text-xl rounded-full font-semibold hover:scale-105 hover:text-[#0843A3] hover:border-[#0843A3] cursor-pointer" onClick={()=> navigate("/about")}>
           Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
