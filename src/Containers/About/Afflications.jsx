import React from "react";
import RajukImg from "../../assets/images/rajuk.png";
import RehabImg from "../../assets/images/rehab.png";
import Title from "../../Components/Title";

const Afflications = () => {
  return (
    <div className="w-[95%] md:w-[85%] mx-auto py-24">
      <Title title={"AFFILIATIONS"} />
      <div className="flex justify-between items-center px-12 my-12 flex-wrap md:flex-nowrap flex-col md:flex-row">
        <img
          src={RajukImg}
          alt="rajuk-img"
          className="w-[100%] mb-16 md:mb-0 md:w-[45%]"
        />
        <img
          src={RehabImg}
          alt="rehab-img"
          className="w-[100%] mb-16 md:mb-0 md:w-[45%]"
        />
      </div>
    </div>
  );
};

export default Afflications;
