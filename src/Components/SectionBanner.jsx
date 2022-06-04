import React from "react";
import Title from "./Title";

const SectionBanner = ({ name, image }) => {
  return (
    <div
      className={`${image} bg-cover pt-[400px] pb-8 bg-no-repeat	bg-left-top 			`}
    >
      <div className="w-[95%] md:w-[85%] mx-auto ">
        <Title title={name} isWhiteText={true} />
      </div>
    </div>
  );
};

export default SectionBanner;
