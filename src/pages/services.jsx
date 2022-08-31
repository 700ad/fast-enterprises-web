import React from "react";
import Layout from "../components/Layout";
import GradImg from "../images/grad.svg";
import taxImg from "../images/tax.svg";
import auditImg from "../images/audit.svg";
import consultImg from "../images/coonsullt.svg";

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

export default function services() {
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
            <div className="col-span-8 flex items-center justify-center text-white sticky top-0 h-screen">
              <div className=" w-7/12 flex flex-col items-start justify-start">
                <p className=" text-blue-800 text-xl">Where finance meets AI</p>
                <h2 className="text-3xl mt-8">
                  Building relationships through AI and growth
                </h2>
                <p className="mt-8 text-xl opacity-80">
                  Our team have been in the industry for decades and through
                  shared knowledge can support you moving forward.
                </p>
                <p className="mt-8">Use our expertise to your advantage.</p>
              </div>
            </div>
            <div className="col-span-4">
              <div className="h-screen pt-32 flex flex-col items-center justify-start bg-gradient-to-b from-white to-gray-50">
                <img src={auditImg} className=" w-3/12" />
                <div className=" flex flex-col w-9/12 mt-8">
                  <p className="mt-8 text-5xl text-center font-extralight text-blue-900">
                    Audit Services
                  </p>
                  <p className="mt-4 text-xl opacity-50">
                    Our high-quality audit services provide businesses and
                    organizations with key information along with the assurance
                    that their financial statements are fairly presented.
                  </p>
                  <div className="mt-4 flex flex-wrap">
                    <div className="px-4 py-2 my-2 border rounded-xl border-blue-900 text-blue-900">
                      Statuory Audit
                    </div>
                    <div className="px-4 py-2 my-2 ml-4 border rounded-xl border-blue-900 text-blue-900">
                      Financial Due Diligence
                    </div>
                    <div className="px-4 py-2 my-2 border rounded-xl border-blue-900 text-blue-900">
                      Forensic Audit
                    </div>
                    <div className="px-4 py-2 my-2 ml-4 border rounded-xl border-blue-900 text-blue-900">
                      Cost Audit
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-screen pt-32 flex flex-col items-center justify-start bg-gradient-to-b from-white to-gray-50">
                <img src={taxImg} className=" w-3/12" />
                <div className=" flex flex-col w-9/12 mt-8">
                  <p className="mt-8 text-5xl text-center font-extralight text-blue-900">
                    Tax Services
                  </p>
                  <p className="mt-4 text-xl opacity-50">
                    Whether you’re a small organization, a private individual or
                    a global business juggling the diverse rules of multiple
                    markets, it can be hard to stay on top of tax law.
                  </p>
                  <div className="mt-4 flex flex-wrap">
                    <div className="px-4 py-2 my-2 mx-2 border rounded-xl border-blue-900 text-blue-900">
                      Tax Audit
                    </div>
                    <div className="px-4 py-2 my-2 mx-2 border rounded-xl border-blue-900 text-blue-900">
                      Tax Due Diligence
                    </div>
                    <div className="px-4 py-2 my-2 mx-2 border rounded-xl border-blue-900 text-blue-900">
                      General Sales Tax
                    </div>
                    <div className="px-4 py-2 my-2 mx-2 border rounded-xl border-blue-900 text-blue-900">
                      Assessment and Appellate Advisory
                    </div>
                    <div className="px-4 py-2 my-2 mx-2 border rounded-xl border-blue-900 text-blue-900">
                      Corporate Secretarial Services
                    </div>
                    <div className="px-4 py-2 my-2 mx-2 border rounded-xl border-blue-900 text-blue-900">
                      International Tax Advisory
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-screen pt-32 flex flex-col items-center justify-start bg-gradient-to-b from-white to-gray-50">
                <img src={consultImg} className=" w-3/12" />
                <div className=" flex flex-col w-9/12 mt-8">
                  <p className="mt-8 text-5xl text-center font-extralight text-blue-900">
                    Consulting Services
                  </p>
                  <p className="mt-4 text-xl opacity-50">
                    At RSM Pakistan, we deliver specialist business strategy
                    consulting services that are designed to support your
                    organization in all areas
                  </p>
                  <div className="mt-4 flex flex-wrap">
                    <div className="px-4 py-2 my-2 mx-2 border rounded-xl border-blue-900 text-blue-900">
                      Performance Management Services
                    </div>
                    <div className="px-4 py-2 my-2 mx-2 border rounded-xl border-blue-900 text-blue-900">
                      Business Advisory Services
                    </div>

                    <div className="px-4 py-2 my-2 mx-2 border rounded-xl border-blue-900 text-blue-900">
                      Corporate Finance Advisory
                    </div>
                    <div className="px-4 py-2 my-2 mx-2 border rounded-xl border-blue-900 text-blue-900">
                      Risk Advisory
                    </div>
                    <div className="px-4 py-2 my-2 mx-2 border rounded-xl border-blue-900 text-blue-900">
                      Specialist Services
                    </div>

                    <div className="px-4 py-2 my-2 mx-2 border rounded-xl border-blue-900 text-blue-900">
                      Human Resource Consulting
                    </div>
                    <div className="px-4 py-2 my-2 mx-2 border rounded-xl border-blue-900 text-blue-900">
                      Outsourcing
                    </div>
                    <div className="px-4 py-2 my-2 mx-2 border rounded-xl border-blue-900 text-blue-900">
                      Family business Planning
                    </div>

                    <div className="px-4 py-2 my-2 mx-2 border rounded-xl border-blue-900 text-blue-900">
                      Technology and Management Consulting
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
