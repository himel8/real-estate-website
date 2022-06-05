import React from "react";
import Title from "../../Components/Title";

const Details = ({ text }) => {
  return (
    <div className="w-[95%] mx-auto pt-12  pb-12  md:w-[85%]">
      <div className="text-center">
        <Title title={"overview"} />
        <p className="text-lg font-secondary text-black">{text}</p>
      </div>
    </div>
  );
};

export default Details;
