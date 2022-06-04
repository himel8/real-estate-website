import React from "react";
import KualityImg from "../../assets/images/kuality.jpg";
import NandanImg from "../../assets/images/nandan.jpg";
import TakImg from "../../assets/images/tak.jpg";
import VinnoImg from "../../assets/images/vinnoJogot.jpg";
import Title from "../../Components/Title";

const concernData = [
  { image: KualityImg, name: "kwality melamine" },
  { image: VinnoImg, name: "Vinnya Jagat" },
  { image: NandanImg, name: "nandan properties" },
  { image: TakImg, name: "TAK manufacture" },
];

const Concern = () => {
  return (
    <div className="mt-16 mb-12 w-[95%] md:w-[85%] mx-auto py-24">
      <Title title={"concern"} />
      <div className="flex justify-between item-center pt-8 flex-wrap md:flex-nowrap">
        {concernData.map((data, index) => (
          <div
            key={index}
            className="text-center py-6 mx-4 border-2 border-gray-200 rounded-md"
          >
            <img src={data.image} alt={data.name} />
            <p className="capitalize font-secondary font-normal text-2xl pt-6">
              {data.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concern;
