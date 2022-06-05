import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import SectionBanner from "../../Components/SectionBanner";
import { projectList } from "../../Data/ProjectsList";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <SectionBanner name={"Projects"} image={"bg-aboutBg"} />
      <div className="w-[95%] mx-auto pt-24  pb-12  md:w-[85%]">
        <div className="flex justify-start items-center flex-wrap gap-8">
          {projectList.map((data, index) => (
            <div className="w-[30%] h-full">
              <Link to={`/project/${data.id}`}>
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-full h-[400px] cursor-pointer"
                />
              </Link>

              <div key={index} className="mt-4">
                <h3 className="text-2xl text-primary ">{data.name} </h3>
                <p>
                  <span>{data.area}</span> | <span>{data.city}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
