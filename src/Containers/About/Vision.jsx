import React from "react";
import VissionImg from "../../assets/images/mission.jpg";
import Image from "../../Components/Image";
import NormalText from "../../Components/NormalText";
import Title from "../../Components/Title";

const Vision = () => {
  return (
    <div className="my-6 md:my-0 flex justify-between  flex-warp md:flex-nowrap flex-col md:flex-row">
      <div className="w-[100%] md:w-1/2">
        <Image source={VissionImg} />
      </div>
      <div className="w-[100%] px-4  py-8 md:w-1/2 md:py-16 md:px-[7.5%] bg-[#484644]">
        <Title title={"THE VISION"} isWhiteText={true} />
        <div className="pt-6">
          <NormalText isWhite={true}>
            To become the leading real estate company in Dhaka, Bangladesh.
            Hence the global warming is the rising concern we take initiatives
            to build sustainable architecture. Our green engineering approach
            helps our civilization accommodate into the nature. Our prime vision
            is to providing world class real estate services that meet our
            clients needs at all times.
          </NormalText>
        </div>
      </div>
    </div>
  );
};

export default Vision;
