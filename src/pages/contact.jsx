import React from "react";
import Layout from "../components/Layout";
import GradImg from "../images/grad.svg";

const Hero = () => {
  return (
    <>
      <div className=" z-10 absolute w-screen h-screen inset-0 bottom-0 text-white ">
        <div className="container h-screen flex flex-col items-start justify-end p-8 md:pb-32 mx-auto">
          <p className="uppercase text-sm mb-8 text-blue-500">Contact Us</p>
          <h1 className="text-4xl md:text-6xl font-extralight">
            We love meeting new people
            <br className="hidden md:block" />
            your businees needs.
          </h1>
          <div className="flex mt-20 items-center justify-start opacity-50">
            <div className=" w-32 border-b border-white"></div>
            <p className="text-sm italic ml-4">Begin Scrolling</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default function contact() {
  return (
    <Layout>
      <div className="fixed inset-0 w-screen h-screen overflow-hidden">
        <img
          className="w-screen filter grayscale h-screen object-cover"
          alt=""
          src="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
        <img
          className="absolute w-screen h-screen inset-0 object-cover opacity-90"
          src={GradImg}
        />
      </div>
      <div className="relative min-h-screen">
        <Hero />
        <div className="w-screen h-screen"></div>
        <div className="w-screen h-screen">
          <div className="grid grid-cols-12">
            <div className="col-span-8 flex items-center justify-center bg-white h-screen">
              <div className=" w-7/12  grid grid-cols-2 gap-16 flex-col items-start justify-start">
                <div className="flex col-span-1 flex-col">
                  <label htmlFor="name">Full Name</label>
                  <input
                    name="name"
                    id="name"
                    className="border focus:border-black hover:border-black transition-all duration-300 rounded-xl w-full py-2 px-4 mt-2 hover:bg-transparent"
                  />
                </div>
                <div className="flex col-span-1 flex-col">
                  <label htmlFor="email">Emaill</label>
                  <input
                    name="email"
                    id="email"
                    className="border focus:border-black hover:border-black transition-all duration-300 rounded-xl w-full py-2 px-4 mt-2 hover:bg-transparent"
                  />
                </div>
                <div className="flex col-span-1 flex-col">
                  <label htmlFor="company">Company</label>
                  <input
                    name="company"
                    id="company"
                    className="border focus:border-black hover:border-black transition-all duration-300 rounded-xl w-full py-2 px-4 mt-2 hover:bg-transparent"
                  />
                </div>
                <div className="flex col-span-1 flex-col">
                  <label htmlFor="industry">Industry</label>
                  <input
                    name="industry"
                    id="industry"
                    className="border focus:border-black hover:border-black transition-all duration-300 rounded-xl w-full py-2 px-4 mt-2 hover:bg-transparent"
                  />
                </div>
                <div className="flex col-span-2 flex-col">
                  <label htmlFor="message">Message</label>
                  <textarea
                    rows="9"
                    name="message"
                    id="message"
                    className="border focus:border-black hover:border-black transition-all duration-300 rounded-xl w-full py-2 px-4 mt-2 hover:bg-transparent"
                  ></textarea>
                </div>
                <button className="w-fit p-4 rounded-xl cursor-pointer transition-all duration-400 hover:bg-white bg-blue-900 hover:text-blue-900  text-white border-2 border-blue-900">
                  Send Message
                </button>
              </div>
            </div>
            <div className="col-span-4"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
