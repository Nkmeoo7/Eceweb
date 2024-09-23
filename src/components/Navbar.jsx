import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import logo from "./public/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detects scroll position and updates the navbar's background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Change to solid background when scrolled
      } else {
        setIsScrolled(false); // Transparent background at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full  ${
        isScrolled
          ? "fixed bg-blue-950 text-center top-0 h-20 mr-72 py-4"
          : "absolute bg-transparent mt-36 h-20  "
      } transition-colors duration-600 ease-in-out z-20`}
    >
      <nav className="  ">
        {/* Logo */}
        <div
          className={`flex absolute p-3 rounded-full ml-[100px] ${
            isScrolled
              ? "bg-blue-950 opacity-100 transition-opacity duration-600 ease-in-out"
              : "bg-transparent opacity-0"
          }`}
        >
          <img
            src="./logo.png"
            alt="Logo"
            className="  object-contain rounded-full mt-1"
          />
        </div>

        {/* Navigation Links */}
        <div className="container flex justify-center ">
          <div
            className={`flex items-center gap-8 px-8 py-2  rounded-full ${
              isScrolled
                ? "opacity-100 transition-opacity duration-500 ease-out"
                : "bg-blue-950 opacity-100 transition-opacity duration-500 ease-in-out"
            }`}
          >
            <ul className="flex items-center  gap-8">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-yellow-300 font-custom transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/submitpaper"
                  className="text-white hover:text-yellow-300 font-custom transition duration-300"
                >
                  Submit Paper
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-yellow-300 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-yellow-300 transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
