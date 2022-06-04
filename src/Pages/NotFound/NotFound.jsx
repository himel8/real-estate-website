import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center bg-gray-400 h-screen">
        <h3 className="text-white font-roboto font-bold text-5xl ">
          Not Found #404
        </h3>
        <p className="text-white font-roboto font-normal text-2xl my-4">
          page not found
        </p>
        <p className="text-white font-roboto font-medium text-4xl underline">
          <Link to="/">Back to Home</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
