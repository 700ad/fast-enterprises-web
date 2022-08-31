import React from "react";
import Nav from "./Nav";
import GradImg from "../images/grad.svg";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <div className="w-screen py-52 z-10 flex items-center justify-center">
        <div className="container text-xl opacity-70 mx-auto text-white">
          <p>Legal - RSM Avais Hyder Liaquat Nauman</p>
          <p className="mt-8">
            RSM Avais Hyder Liaquat Nauman is a member of the RSM network and
            trades as RSM. RSM is the trading name used by the members of the
            RSM network.
          </p>
          <p className="mt-8">
            Each member of the RSM network is an independent accounting and
            advisory firm each of which practices in its own right. The RSM
            network is not itself a separate legal entity of any description in
            any jurisdiction. The RSM network is administered by RSM
            International Limited, a company registered in England and Wales
            (company number 4040598) whose registered office is at 50 Cannon
            Street, London, EC4N 6JJ.
          </p>
          <p className="mt-8">
            The brand and trademark RSM and other intellectual property rights
            used by members of the network are owned by RSM International
            Association, an association governed by article 60 et seq of the
            Civil Code of Switzerland whose seat is in Zug. Any articles or
            publications contained within this website are not intended to
            provide specific business or investment advice. No responsibility
            for any errors or omissions nor loss occasioned to any person or
            organisation acting or refraining from acting as a result of any
            material in this website can, however, be accepted by the author(s)
            or RSM International. You should take specific independent advice
            before making any business or investment decision.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
