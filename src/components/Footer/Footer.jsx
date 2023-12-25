import React from "react";
import FooterLogo from "../../assets/food-logo.png";
import { FaLocationArrow } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-950">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img
                  src={FooterLogo}
                  alt="Footer logo"
                  className="max-w-[50px]"
                />
                RESTUARENT
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit id expedita accusantium sunt animi beatae dolorem
                nulla aperiam optio assumenda.
              </p>
              <br />
              <div>
                <FaLocationArrow />
                <p>Kerala, Malappuram</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
