import React from "react";
import { Link } from "react-router-dom";
import { A11y, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../Components/Title";
import { projectList } from "../../Data/ProjectsList";

const Features = () => {
  return (
    <div className="w-[95%] mx-auto pt-24  pb-12  md:w-[85%]">
      <Title title={"Feature projects"} />
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={window.innerWidth > 768 ? 50 : 10}
        slidesPerView={window.innerWidth > 768 ? 4 : 2}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="w-full h-full"
      >
        {projectList.map((data, index) => (
          <SwiperSlide key={index} className="w-[100%] h-full mb-12">
            <div className="w-full h-full">
              <Link to={`project/${data.id}`}>
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-full h-[400px] cursor-pointer"
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-2xl text-primary ">{data.name} </h3>
                <p>
                  <span>{data.area}</span> | <span>{data.city}</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Features;
