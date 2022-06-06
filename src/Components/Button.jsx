import React from "react";
import { Link } from "react-router-dom";
const Button = ({ name, link }) => {
  return (
    <div className="my-6 text-center md:text-left">
      <Link to={link}>
        <button className="uppercase w-[200px] h-[60px] md:w-[250px] md:h-[70px] border-2 border-[#555555] ease-out duration-300 font-secondary font-normal text-base md:text-lg shadow-btn cursor-pointer hover:shadow-hoverBtn hover:border-0 hover:text-white tracking-wide">
          {name}
        </button>
      </Link>
    </div>
  );
};

export default Button;
