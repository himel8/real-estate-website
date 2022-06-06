import React from "react";
import DesktopFloorPlan from "../../Components/DesktopFloorPlan";
import Title from "../../Components/Title";

const FloorPlan = ({ plans }) => {
  return (
    <div className="w-[95%] mx-auto pt-12  pb-12  md:w-[85%]">
      <div className="text-center">
        <Title title={"floor plan"} />
      </div>
      <div>
        <DesktopFloorPlan plans={plans} />
      </div>
    </div>
  );
};

export default FloorPlan;
