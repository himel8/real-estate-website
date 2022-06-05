import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ProjectBanner from "../../Components/ProjectBanner";
import Details from "../../Containers/ProjectDetails/Details";
import FloorPlan from "../../Containers/ProjectDetails/FloorPlan";
import ProjectLocation from "../../Containers/ProjectDetails/ProjectLocation";
import ShowCase from "../../Containers/ProjectDetails/ShowCase";
import { projectList } from "../../Data/ProjectsList";

const ProjectDetail = () => {
  const [project, setProject] = useState([]);
  const { projectId } = useParams();
  console.log(projectList, projectId);

  useEffect(() => {
    const filterData = projectList.filter((data) => data.id === projectId);
    console.log(filterData);
    setProject(filterData);
  }, []);

  console.log(project, projectId);
  return (
    <>
      <Navbar />
      {project.map((data, index) => (
        <div key={index}>
          <ProjectBanner name={data.name} image={data.background} />
          <Details text={data.details} />
          <FloorPlan />
          <ProjectLocation address={data.address} />
          <ShowCase gallery={data.gallery} />
        </div>
      ))}

      <Footer />
    </>
  );
};

export default ProjectDetail;
