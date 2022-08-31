import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../images/logo.svg";
export default function Nav() {
  return (
    <>
      <nav className="w-screen text-white absolute z-30">
        <div className="flex items-center justify-between container mx-auto p-8">
          {/* <div className=" uppercase">AA Consultants</div> */}
          <div className="flex items-center">
            <img src={logo} className=" w-10" />
            <p className="text-xl uppercase ml-4">Consultants</p>
          </div>
          <div className="flex md:hidden flex-col">
            <div className="w-8 mb-1 border-b border-white"></div>
            <div className="w-8 mb-1 border-b border-white"></div>
            <div className="w-8 mb-1 border-b border-white"></div>
          </div>
          <div className="flex items-center font-extralight justify-between">
            <Link to="/" className="mx-8">
              Home
            </Link>
            <Link to="/services" className="mx-8">
              Services
            </Link>
            <Link to="/industries" className="mx-8">
              Industries
            </Link>
            <Link to="/about-us" className="mx-8">
              About Us
            </Link>
            <Link to="/contact" className="mx-8">
              Contact
            </Link>
            <Link className="mx-8 p-4 rounded-xl cursor-pointer transition-all duration-400 hover:bg-white hover:text-blue-800 border-2">
              Schedule a Free Call
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
