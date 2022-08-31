import React from "react";
import Layout from "../components/Layout";
import GradImg from "../images/grad.svg";

const Hero = () => {
  return (
    <>
      <div className=" z-10 absolute w-screen h-screen inset-0 bottom-0 text-white ">
        <div className="container h-screen flex flex-col items-start justify-end p-8 md:pb-32 mx-auto">
          <p className="uppercase text-sm mb-8 text-blue-500">industries</p>
          <h1 className="text-4xl md:text-6xl font-extralight">
            Industries we've worked in
            <br className="hidden md:block" />
            {/* your businees needs. */}
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

export default function industries() {
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
              <div className=" w-7/12 flex flex-col items-start justify-start">
                <p className=" text-blue-800 text-xl">
                  Empowering finance to move forward
                </p>
                <h2 className="text-3xl mt-8">
                  We support money managers, traders and banks in developing
                  artificial intelligence
                </h2>
                <p className="mt-8 text-xl opacity-80">
                  Whether serving public sector organisations, owner managed
                  businesses, private individuals or listed companies with
                  overseas operations, our goal is to help our clients achieve
                  their ambitions.
                </p>
                <p className="mt-8">
                  We not only offer services, but also the guidance and
                  expertise needed to succeed.
                </p>
              </div>
            </div>
            <div className="col-span-4"></div>
          </div>
        </div>
        <div className="reative">
          <div className="grid grid-cols-12">
            <div className="col-span-2 text-4xl font-extralight p-4 text-center flex items-center justify-center col-start-9 aspect-square bg-white">
              Energy
            </div>
            <div className="col-span-2 text-4xl font-extralight p-4 text-center flex items-center justify-center row-start-2 col-start-11  aspect-square bg-white">
              Private Equity{" "}
            </div>
            <div className="col-span-2 text-4xl font-extralight p-4 text-center flex items-center justify-center row-start-2 col-start-7 aspect-square bg-white">
              Financial Services
            </div>
            <div className="col-span-2 text-4xl font-extralight p-4 text-center flex items-center justify-center row-start-3 col-start-9 aspect-square bg-white">
              Real Estate & Construction
            </div>
            <div className="col-span-2 text-4xl font-extralight p-4 text-center flex items-center justify-center row-start-4 col-start-7 aspect-square bg-white">
              Manufacturing
            </div>
            <div className="col-span-2 text-4xl font-extralight p-4 text-center flex items-center justify-center row-start-4 col-start-11 aspect-square bg-white">
              Consumer Products
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
