import React from "react";
import { Link } from "react-router-dom";
import SubTitle from "../../Components/SubTitle";
import Title from "../../Components/Title";

const directorData = [
  { name: "rashed mahmud", title: "chairman" },
  { name: "Md. Shahed Mahmud", title: "Managing Director" },
  { name: "Hasan Mahmud", title: "Director" },
];

const Directors = () => {
  return (
    <div className="w-[95%] md:w-[85%] mx-auto py-6 md:py-24">
      <div className="text-center pb-6">
        <Title title={"BOARD OF DIRECTORS"} />
      </div>
      <div className="flex md:justify-center md:items-center flex-wrap md:flex-nowrap flex-col md:flex-row">
        {directorData.map((data, index) => (
          <Link key={index} to="#!">
            <div
              className={`mx-0 md:mx-8 rounded-xl  shadow-custom	text-center ${
                index % 2 === 0 ? "px-20" : "px-12"
              } py-16 mx-auto my-6 md:my-0`}
            >
              <SubTitle subtitle={data.name} />
              <h6 className="text-2xl font-primary capitalize mt-6">
                {data.title}
              </h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Directors;
