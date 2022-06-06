import React, { useEffect, useState } from "react";
const DesktopFloorPlan = ({ plans }) => {
  const [imgIndex, setImgIndex] = useState(1);
  const [showImg, setShowImg] = useState(null);

  useEffect(() => {
    const clickedImg = plans.filter((data) => data.id === imgIndex);
    setShowImg(clickedImg);
  }, [imgIndex]);

  //   setShowImg(clickedImg)
  return (
    <div className="flex items-start justify-between">
      <div className="w-[30%] mr-[20%]">
        {plans.map((data, index) => {
          return (
            <div
              onClick={() => {
                setImgIndex(data.id);
              }}
              key={index}
              className="flex justify-start items-center mb-12 border-b-[1px] border-gray-200 cursor-pointer py-2"
            >
              <h3 className="uppercase mr-8 text-lg text-black">level</h3>
              <h3 className="uppercase ml-8 text-lg text-[#555555]">
                {data.name}
              </h3>
            </div>
          );
        })}
      </div>
      <div className="bg-[#E9E9E9] w-[70%] h-[70vh] flex justify-center items-center">
        {" "}
        {showImg?.map((data, index) => (
          <img
            key={index}
            src={data.img}
            alt=""
            className="w-[300px] h-[350px] object-cover transition-all delay-1000 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopFloorPlan;
// ${
//       border && "border-b-0 border-red-600"
//     }
