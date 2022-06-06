import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const menuData = [
  { name: "about us", link: "/about-us" },
  { name: "projects", link: "/projects" },
  { name: "career", link: "/career" },
  { name: "land wanted", link: "/land-wanted" },
  { name: "interested buyers", link: "/interested-buyers" },
  { name: "contact us", link: "/contact-us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 bg-white shadow-xl">
      <div className="w-[95%] md:w-[85%] mx-auto ">
        <header className="flex justify-between items-center  drop-shadow-sm py-4 px-4">
          {/* logo  */}
          <Link to="/" className="text-lg font-bold font font-secondary">
            Logo
          </Link>

          {/* mobile menu toggle  */}
          <IoMenuOutline className="text-4xl" onClick={() => setOpen(!open)} />
        </header>
      </div>
      <nav
        className={`${
          open ? "right-0" : "right-[-400px] md:right-[-500px]"
        } absolute top-0 transition-all ease-in duration-500 h-screen bg-gray-700 w-[86%] md:w-[400px] px-10 md:px-20 pt-12`}
      >
        {/* <FaTimes className="text-6xl" onClick={() => setOpen(!open)} /> */}
        <p
          className="text-4xl cursor-pointer text-right mb-12 text-white"
          onClick={() => setOpen(!open)}
        >
          ×
        </p>
        <ul className="flex flex-col gap-2 justify-end items-end text-white capitalize ">
          {menuData.map((data, index) => (
            <li
              key={index}
              className="border-b-2 border-white w-full text-right"
            >
              <Link
                to={data.link}
                className="inline-flex py-4 px-3 font-secondary text-xl md:text-2xl"
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
