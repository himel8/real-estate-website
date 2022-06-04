import React from "react";
import Google from "../../Components/Map";
import Title from "../../Components/Title";

const footPrintList = [
  "15 projects within prominent place includes Banani",
  "13 Handover Projects, 02 Ongoing Projects",
  "Build the value of location, premium amenities, and other essential features benefits installed",
];

const FontPrint = () => {
  return (
    <div className="md:h-screen   flex justify-between items-start flex-wrap md:flex-nowrap">
      <div className="w-full h-full md:w-[32%] bg-gray-600 pl-[5%] md:pl[15%] pr-[5%] pt-24">
        <Title title={"FOOTPRINT"} isWhiteText={true} />
        <div className="md:mr-6">
          {footPrintList.map((data, index) => (
            <p
              key={index}
              className="mb-6 py-3  text-xl font-secondary text-white border-b-2 border-white"
            >
              {data}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[68%] ">
        <Google />
      </div>
    </div>
  );
};

export default FontPrint;
