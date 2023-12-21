// This is App.jsx file
// This importing section
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/Home/HomePage";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        {/* This is default bg color set */}
        <NavBar />
        {/* This is navbar page call */}
        <HomePage />
        {/* This is Homepage */}
        <Services />
        {/* This is service page  */}
      </div>
    </>
  );
};

export default App;
