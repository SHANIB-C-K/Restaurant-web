import React from "react";
import Img2 from "../../assets/biryani2.png";

const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Biryani",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum totam vitae laudantium reprehenderit tenetur voluptatibus iste eligendi at vero quae!"
    },
    {
        id: 2,
        img: Img2,
        name: "Chiken kari",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum totam vitae laudantium reprehenderit tenetur voluptatibus iste eligendi at vero quae!"
    },
    {
        id: 1,
        img: Img2,
        name: "Cold Cofee",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum totam vitae laudantium reprehenderit tenetur voluptatibus iste eligendi at vero quae!"
    },
]

const Services = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolor
              nam porro? Dolorem impedit porro magnam architecto, consequatur
              pariatur omnis?
            </p>
          </div>
          {/* Card section */}
        </div>
      </div>
    </>
  );
};

export default Services;
