import React from "react";
import { Link } from "react-router-dom";
const Button = ({ name, link }) => {
  return (
    <div className="my-6">
      <Link to={link}>
        <button className="uppercase w-[300px] h-[80px] border-2 border-[#555555] ease-out duration-300 font-secondary font-normal text-xl shadow-btn cursor-pointer hover:shadow-hoverBtn hover:border-0 hover:text-white">
          {name}
        </button>
      </Link>
    </div>
  );
};

export default Button;
