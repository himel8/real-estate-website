import React from "react";
import Button from "../../Components/Button";
import NormalText from "../../Components/NormalText";
import Title from "../../Components/Title";

const AboutSection = () => {
  return (
    <div className="w-[95%] mx-auto py-24 md:pr-[32%] md:w-[85%]">
      <div className="md:mr-[25%]">
        <Title title={"ITS PRECIOUSLY WONDERFUL LIVING SPACE"} />
      </div>
      <NormalText>
        Nandan Kanon Housing Ltd. – an active member of Real Estate & Housing
        Association of Bangladesh (REHAB) is born in. Nandan Kanon is a
        promising name in Real Estate Business. We are capable of contributing
        to the emerging shape of Dhaka’s urban outlooks and life style and
        importantly meeting the basic needs and requirements of our valued
        clients. We always welcome and provide your ideas in the dreams of your
        sweet home. We bring all into a reality by making a timely and completed
        gift.
      </NormalText>
      <Button name={"about us"} link={"#!"} />
    </div>
  );
};

export default AboutSection;
