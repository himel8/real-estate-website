import React from "react";
// import required modules
import { Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../Components/Title";

const sliderData = [
  {
    title: "Build your dream with us",
    subtitle:
      "Location, Community, Quality Living. /n It Starts Here! lets find why we are the best for your service",
    image: "bg-firstSlider",
  },
  {
    title: "",
    subtitle: "",
    image: "bg-secondSlider",
  },
  {
    title: "Build your dream with us",
    subtitle:
      "Location, Community, Quality Living.\nIt Starts Here! lets find why we are the best for your service",
    image: "bg-thirdSlider",
  },
  {
    title: "",
    subtitle: "",
    image: "bg-forthSlider",
  },
];

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="w-full h-screen"
      >
        {sliderData.map((data, index) => (
          <SwiperSlide key={index} className="text-center text-xl bg-white ">
            <div
              className={`${data.image} bg-cover bg-center bg-no-repeat w-full h-full flex flex-col items-center justify-center md:items-start md:justify-end pb-[15%] pl-[12%]`}
            >
              <Title title={data.title} isWhiteText={true} />
              <p className="text-white text-xl font-secondary">
                {data.subtitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
// ${data.image}
