import Image from "next/image";
import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-primary py-5">
      <div className="container mx-auto grid grid-cols-1 justify-items-center py-5">
        <div>
          <Image src="logo.svg" alt="logo" width={150} height={100} />
        </div>
      </div>
      <div className="container mx-auto grid md:grid-cols-12 justify-items-between text-white py-5 capitalize">
        <div className="col-span-4">
          <h3 className="text-2xl uppercase py-2">useful links</h3>
          <ul>
            <li>customer support</li>
            <li>F.A.Qs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="col-span-4">
          <h3 className="text-2xl uppercase py-2">company</h3>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>Refund and Returns Policy</li>
          </ul>
        </div>
        <div className="col-span-4">
          <h3 className="text-2xl uppercase py-2">join our community</h3>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 justify-items-center py-5">
        <hr className="w-full py-5"/>
        <div className="w-full mxa-auto md:flex md:item-center  md:justify-between">
          <p className="text-white">RelaxBazar. All rights reserved.</p>
          <div className="flex gap-3">
            <div className="bg-white p-2 rounded-full">
              <FaFacebook />
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaYoutube />
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
