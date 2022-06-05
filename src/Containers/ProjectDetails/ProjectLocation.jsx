import React from "react";
import Title from "../../Components/Title";

const ProjectLocation = ({ address }) => {
  return (
    <div className="w-[95%] mx-auto pt-12  pb-12  md:w-[85%]">
      <div className="text-center">
        <Title title={"PROJECT LOCATION"} />
        <p className="text-md md:text-lg font-secondary text-black">
          {address}
        </p>
      </div>
    </div>
  );
};

export default ProjectLocation;
