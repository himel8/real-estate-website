import React from "react";
import From from "../../Components/From";
import SubTitle from "../../Components/SubTitle";

const CareerForm = () => {
  return (
    <div className="w-[100%] md:w-[60%] mx-4 md:mx-auto py-16">
      <div className="text-center">
        <SubTitle subtitle={"contacts"} />
      </div>
      <From isCareer={true} />
    </div>
  );
};

export default CareerForm;
