import React from "react";
import NormalText from "./NormalText";

const ShortDescription = ({ title, normalText, image }) => {
  return (
    <div className="bg-[#ECECEC]">
      <div className="w-[95%] md:w-[85%] mx-auto py-24 flex md:justify-center md:items-start flex-col md:flex-row flex-wrap-reverse md:flex-nowrap">
        <div className="w-[100%] md:w-[60%] md:mr-20 mr-0 p-6 md:p-0">
          <h3 className="font-secondary text-4xl font-medium text-black mt-6 mb-12 text-center leading-[50px] md:text-left">
            {title}
          </h3>
          <NormalText>{normalText}</NormalText>
        </div>
        <div className="w-[100%] md:w-[40%]">
          <img src={image} alt="career-img" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ShortDescription;
