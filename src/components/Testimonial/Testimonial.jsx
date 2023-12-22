import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolor
              nam porro? Dolorem impedit porro magnam architecto, consequatur
              pariatur omnis?
            </p>
          </div>
          {/* Testimonial section */}
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...settings}></Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
