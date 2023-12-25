import React from "react";
import Status from "../../assets/giphy.gif";

const Footer = () => {
  return (
    <>
      <div className="pt-12">
        <div className="bg-primary/10 dark:bg-gray-900 pt-10">
          <div data-aos="zoom-in" data-aos-duration="300">
            <img
              src={Status}
              alt="Working progress image"
              className="w-[300px] h-[300px] sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
