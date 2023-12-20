import React from "react";
import bgImg from "../../assets/vector3.png";
import Food1 from "../../assets/biriyani2.png";
import Food2 from "../../assets/biriyani3.png";
import Food3 from "../../assets/biriyani5.png";

const ImageList = [
  {
    id: 1,
    img: Food1,
  },
  {
    id: 2,
    img: Food2,
  },
  {
    id: 3,
    img: Food3,
  },
];

const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%"
}

const HomePage = () => {
  return <div></div>;
};

export default HomePage;
