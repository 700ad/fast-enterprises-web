import React from "react";
import logo from "../images/llogo.png";
// import logo from "../images/icon vertical.svg";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <div className="relative z-20 h-half-vh w-screen grid grid-cols-12">
      <div className="col-span-4 flex items-center justify-center">
        <img src={logo} className="w-5/12" />
      </div>
      <div className="bg-gradient-to-tl p-10 from-gray-100 to-white  flex flex-col items-start justify-between col-span-8">
        <div className="grid grid-cols-3">
          <div className="col-span-1 flex items-start justify-center">
            <div className=" w-9/12 flex flex-col text-xl items-start">
              <Link className="my-2">Home</Link>
              <Link to="/services" className="my-2">
                Services
              </Link>
              <Link to="/industries" className="my-2">
                Industries
              </Link>
              <Link to="/about-us" className="my-2">
                About Us
              </Link>
              <Link to="/contact" className="my-2">
                Contact
              </Link>
            </div>
          </div>
          <div className="col-span-1 flex items-start justify-center">
            <div className=" w-9/12 flex flex-col text-xl items-start">
              <Link className="my-2">
                P-45 Khana House, Susan Rd. Madina Town Faisalabad, Punjab
                Pakistan
              </Link>
              <p className="mt-2">+92 300 795 4444</p>
              <p className="mt-2 underline">hello@aaconsultants.info</p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-start">
            <div className=" w-9/12 flex flex-col text-xl items-start">
              Follow Us
            </div>
            <div className="flex mt-8 w-9/12 items-start justify-start">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.598z" />
                </svg>
              </div>
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                </svg>
              </div>
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-1 flex items-start justify-center">
            <div className=" w-9/12 flex flex-col items-start">
              <p className="mt-2">
                © 2022 FAST ENTERPRISES.
                <br /> ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex items-start justify-center">
            <div className=" w-9/12 flex flex-col items-start">
              <Link>TERMS OF SERVICES</Link>
              <Link>PRIVACY POLICY</Link>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-start">
            <div className=" w-9/12 flex flex-col items-start">
              <p className="mt-2">
                DESIGNED AND DEVELOPED by{" "}
                <i className=" underline">Theorem Studios</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
