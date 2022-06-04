import React from "react";
import SideImg from "../../assets/images/why_us.jpg";
import Button from "../../Components/Button";
import NormalText from "../../Components/NormalText";
import Title from "../../Components/Title";

const WhyUs = () => {
  return (
    <div className="bg-[#EEEEEE]">
      <div className=" flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="w-[100%] md:w-1/2 md:mx-[8%]">
          <Title title={"WHY NANDAN KANON"} />
          <NormalText>
            Nandan Kanon Housing Ltd. has an excellent reputation in the market
            and in the communities we serve. We are active, involved and
            connected.
          </NormalText>
          <NormalText>
            We are a valued firm in the country with thousands of high profile
            apartments and land developments.
          </NormalText>
          <Button name={"why us"} link={"#!"} />
        </div>
        <div className="w-[100%] md:w-1/2">
          <img className="w-full" src={SideImg} alt="why_us_image" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
