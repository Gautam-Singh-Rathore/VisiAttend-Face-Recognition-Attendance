import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full bg-[#F0F0F5] text-[#616673]">
      <div className="w-full flex flex-col md:flex-row justify-between px-10 md:px-52 py-10 gap-6 md:gap-0">
        
        <div>
          <h2 className="text-4xl italic font-semibold">VisiAttend</h2>
          <p>Step into the world of innovation</p>
        </div>
        <div className="space-y-2">
          <p className="text-black font-semibold text-lg cursor-pointer" onClick={()=> navigate('/contact')}>Contact Us</p>
          <p className="text-black font-semibold text-lg cursor-pointer" onClick={()=> navigate("/about")}>About Us</p>
        </div>
      </div>
      <div className="bg-[#E6E6EB] py-4 text-center">
        <p className="text-sm">&copy; 2024 VisiAttend. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
