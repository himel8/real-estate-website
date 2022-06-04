import React from "react";
import MissionImg from "../../assets/images/mission.jpg";
import Image from "../../Components/Image";
import Title from "../../Components/Title";

const missionData = [
  {
    boldText: "Knowledgeable",
    normalText: "We strive to understand our markets and our clients’ needs",
  },
  {
    boldText: "Connected",
    normalText:
      "Relationships are everything to us; we connect people to their homes and to their communities",
  },
  {
    boldText: "Passionate",
    normalText: "We believe that working with “all heart” can change the world",
  },
  {
    boldText: "Playful",
    normalText: "We love what we do and it shows",
  },
  {
    boldText: "Upstanding",
    normalText:
      "Our clients’ needs and best interests are at the heart of everything we do",
  },
  {
    boldText: "Effective",
    normalText: "We set a high bar and move mountains to exceed expectations",
  },
];

const Mission = () => {
  return (
    <div className="my-6 md:my-0 flex justify-between flex-wrap-reverse md:flex-nowrap flex-col md:flex-row">
      <div className="w-[100%] px-4 py-8 md:w-1/2 md:py-16 md:px-[7.5%] bg-[#F3F3F3]">
        <Title title={"the mission"} />
        <div>
          {missionData.map((data, index) => (
            <p key={index} className="font-normal text-[21px] py-4">
              <span className="font-bold">{data.boldText}.</span>{" "}
              {data.normalText}.
            </p>
          ))}
        </div>
      </div>
      <div className="w-[100%] md:w-1/2">
        <Image source={MissionImg} />
      </div>
    </div>
  );
};

export default Mission;
