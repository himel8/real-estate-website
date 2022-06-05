import React from "react";
import Title from "./Title";
const ProjectBanner = ({ name, image }) => {
  return (
    <div
      className={` ${image} pt-[400px] bg-cover object-cover pb-8 bg-no-repeat	bg-center`}
    >
      <div className="w-[95%] md:w-[85%] mx-auto ">
        <Title title={name} isWhiteText={true} />
      </div>
    </div>
  );
};

export default ProjectBanner;
