import React from "react";
import Layout from "../components/Layout";
import GradImg from "../images/grad.svg";

const Hero = () => {
  return (
    <>
      <div className=" z-10 absolute w-screen h-screen inset-0 bottom-0 text-white ">
        <div className="container h-screen flex flex-col items-start justify-end p-8 md:pb-32 mx-auto">
          <p className="uppercase text-sm mb-8 text-blue-500">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-extralight">
            Premium Services for all
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

export default function about() {
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
        <div className="grid grid-cols-12">
          <div className="col-span-4 aspect-square p-20 bg-white">
            <div className=" w-full flex flex-col">
              <p className="mt-8 text-5xl font-extralight text-blue-900">
                Our Mission
              </p>
            </div>
          </div>
          <div className="col-span-4 row-start-2 p-20 col-start-5 aspect-square bg-white">
            <p className="mt-8 text-5xl font-extralight text-blue-900">
              Our Vision
            </p>
          </div>
          <div className="col-span-4 row-start-3 p-20 col-start-9 aspect-square bg-white">
            <p className="mt-8 text-5xl font-extralight text-blue-900">
              Our Values
            </p>
          </div>
        </div>
        <div className="w-screen h-screen">
          <div className="grid grid-cols-12">
            <div className="col-span-8 flex flex-col items-center justify-center bg-white h-screen">
              <p className="mt-8 text-5xl text-left w-8/12 my-8 font-extralight text-blue-900">
                Our People
              </p>

              <div className=" w-8/12 grid grid-cols-3 gap-8">
                <div className="col-span-1 h-96 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  />
                </div>
                <div className="col-span-1 h-96 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  />
                </div>

                <div className="col-span-1 h-96 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
