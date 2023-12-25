import React from "react";
import FooterLogo from "../../assets/food-logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-950">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-4 px-4">
              <h1>
                <img src={FooterLogo} alt="" />
                RESTUARENT
              </h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
