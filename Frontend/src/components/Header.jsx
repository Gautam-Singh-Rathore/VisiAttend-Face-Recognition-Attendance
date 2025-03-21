import React, { useContext, useState } from "react";
import logo from "../../public/assets/logo.png";
import { useNavigate } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io"; // Close icon
import { UserContext } from "../context/UserContext";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false); // State to toggle menu visibility
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  // handle Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
    toast.success("User Logged Out");
  };

  // Toggle the visibility of the mobile menu
  const toggleMenu = () => setIsVisible(!isVisible);

  return (
    <div className="bg-transparent w-full h-[12vh] px-10 py-4 flex justify-between items-center absolute ">
      {/* Logo */}
      <div className="h-full cursor-pointer hover:scale-105 border-2 rounded-full">
        <div
          className="h-full rounded-full cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} className="h-full rounded-full" alt="Logo" />
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="h-full bg-white px-16 rounded-full border-2 hidden md:flex">
        <ul className="flex gap-12 items-center justify-center h-full text-[16px] font-bold text-gray-700">
          <li
            className="cursor-pointer hover:scale-105 hover:text-[#0843A3]"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:scale-105 hover:text-[#0843A3]"
            onClick={() => navigate("/future-scope")}
          >
            Future Scope
          </li>
          <li
            className="cursor-pointer hover:scale-105 hover:text-[#0843A3]"
            onClick={() => navigate("/about")}
          >
            About Us
          </li>
          <li
            className="cursor-pointer hover:scale-105 hover:text-[#0843A3]"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </li>
        </ul>
      </div>

      {/* Desktop Buttons */}
      {isLoggedIn ? (
        <div className="h-full gap-10 text-[16px] font-bold hidden md:flex">
          <div
            className="h-full bg-white px-7 rounded-full flex justify-center items-center gap-5 cursor-pointer hover:scale-105 hover:text-[#0843A3] border-2 hover:border-[#0843A3] my-1"
            onClick={() => handleLogout()}
          >
            <li className="list-none">Log out</li>
          </div>
          <div
            className="h-full bg-white px-2 rounded-full flex justify-center items-center gap-5 cursor-pointer hover:scale-105 hover:text-[#0843A3] border-2 hover:border-[#0843A3] my-1"
            onClick={() => navigate("/profile")}
          >
            <FaUserCircle size={40} />
          </div>
        </div>
      ) : (
        <div className="h-full gap-10 text-[16px] font-bold hidden md:flex">
          <div
            className="h-full bg-white px-7 rounded-full flex justify-center items-center gap-5 cursor-pointer hover:scale-105 hover:text-[#0843A3] border-2 hover:border-[#0843A3] my-1"
            onClick={() => navigate("/login")}
          >
            <li className="list-none">Log in</li>
          </div>
          <div
            className="h-full bg-white px-6 rounded-full flex justify-center items-center gap-5 cursor-pointer hover:scale-105 hover:text-[#0843A3] border-2 hover:border-[#0843A3] my-1"
            onClick={() => navigate("/signup")}
          >
            <li className="list-none">Sign up</li>
          </div>
        </div>
      )}

      {/* Hamburger Icon (Mobile) */}
      <div
        className="h-full cursor-pointer md:hidden flex justify-center items-center bg-white border-2 rounded-full w-[50px]"
        onClick={toggleMenu} // Toggle the mobile menu
      >
        <GiHamburgerMenu size={20} />
      </div>

      {/* Mobile Menu */}
      {isVisible && (
        <div className="fixed top-0 right-0 w-full bg-white  z-10 shadow-lg pb-5 rounded-bl-[150px]">
          {/* Close Button */}
          <div
            className="flex justify-end p-4 cursor-pointer"
            onClick={toggleMenu}
          >
            <IoIosClose size={30} className="text-[#0843A3]" />
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col items-center py-4">
            <li
              className="cursor-pointer py-2 hover:scale-105 hover:text-[#0843A3]"
              onClick={() => {
                navigate("/");
                setIsVisible(false); // Close the menu after navigation
              }}
            >
              Home
            </li>
            <li
              className="cursor-pointer py-2 hover:scale-105 hover:text-[#0843A3]"
              onClick={() => {
                navigate("/future-scope");
                setIsVisible(false);
              }}
            >
              Future Scope
            </li>
            <li
              className="cursor-pointer py-2 hover:scale-105 hover:text-[#0843A3]"
              onClick={() => {
                navigate("/about");
                setIsVisible(false);
              }}
            >
              About Us
            </li>
            <li
              className="cursor-pointer py-2 hover:scale-105 hover:text-[#0843A3]"
              onClick={() => {
                navigate("/contact");
                setIsVisible(false);
              }}
            >
              Contact Us
            </li>
          </ul>

          {/* Buttons for mobile */}
          {isLoggedIn ? (
            <div className="flex flex-col items-center gap-4 py-4">
              <div
                className="bg-white px-7 rounded-full flex justify-center items-center gap-5 cursor-pointer hover:scale-105 hover:text-[#0843A3] border-2 hover:border-[#0843A3]"
                onClick={() => {
                  handleLogout();
                  setIsVisible(false);
                }} // Close the menu when clicking "Log in"
              >
                <li className="list-none">Log Out</li>
              </div>
              <div
                className="bg-white px-6 rounded-full flex justify-center items-center gap-5 cursor-pointer hover:scale-105 hover:text-[#0843A3] border-2 hover:border-[#0843A3]"
                onClick={() => {
                  navigate("/profile");
                  setIsVisible(false);
                }} // Close the menu when clicking "Sign up"
              >
                <li className="list-none">Profile</li>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-4">
              <div
                className="bg-white px-7 rounded-full flex justify-center items-center gap-5 cursor-pointer hover:scale-105 hover:text-[#0843A3] border-2 hover:border-[#0843A3]"
                onClick={() => {
                  navigate("/login");
                  setIsVisible(false);
                }} // Close the menu when clicking "Log in"
              >
                <li className="list-none">Log in</li>
              </div>
              <div
                className="bg-white px-6 rounded-full flex justify-center items-center gap-5 cursor-pointer hover:scale-105 hover:text-[#0843A3] border-2 hover:border-[#0843A3]"
                onClick={() => {
                  navigate("/signup");
                  setIsVisible(false);
                }} // Close the menu when clicking "Sign up"
              >
                <li className="list-none">Sign up</li>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
