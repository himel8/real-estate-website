import React from "react";
import From from "../../Components/From";
import InformationForm from "../../Components/InformationForm";
import SubTitle from "../../Components/SubTitle";

const CareerForm = () => {
  return (
    <div className="w-[100%] md:w-[60%] mx-4 md:mx-auto py-16">
      <InformationForm name={"LAND INFORMATION"} isLand={true} />
      <div className="text-center mb-16">
        <SubTitle subtitle={"contacts"} />
      </div>
      <From isCareer={false} />
    </div>
  );
};

export default CareerForm;
