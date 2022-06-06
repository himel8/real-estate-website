import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t-[1px] border-[#CCCCCC]">
      <div className="w-[95%] mx-auto py-4 md:w-[85%] flex md:justify-between justify-center items-center flex-wrap md:flex-nowrap">
        <p className="text-center md:text-left text-sm md:text-lg text-black font-secondary] tracking-wider md:leading-[38px] py-2 md:py-6 font-medium">
          Nandan Kanon Housing Ltd.©copyright 2020
        </p>
        <p className="text-center md:text-left text-sm md:text-lg text-black font-secondary] tracking-wider md:leading-[38px] py-2 md:py-6 font-medium">
          <Link to="#!">Designed and Developed by Dcastalia Limited.</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
