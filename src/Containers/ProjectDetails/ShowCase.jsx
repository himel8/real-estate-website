import React from "react";
import Title from "../../Components/Title";

const ShowCase = ({ gallery }) => {
  console.log(gallery);
  return (
    <div className="w-[95%] mx-auto pt-12  pb-12  md:w-[85%]">
      <div className="text-center">
        <Title title={"SHOWCASE"} />
        <div className="h-full w-full flex justify-left items-center gap-6">
          {gallery.map((data, index) => (
            <div className="h-[60vh] w-[25%]" key={index}>
              <img src={data} alt="img-1" className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
