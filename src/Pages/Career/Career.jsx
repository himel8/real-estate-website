import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import SectionBanner from "../../Components/SectionBanner";
import CareerForm from "../../Containers/Career/CareerForm";
import Description from "../../Containers/Career/Description";

const Career = () => {
  return (
    <>
      <Navbar />
      <SectionBanner name={"career"} image={"bg-aboutBg"} />
      <Description />
      <CareerForm />
      <Footer />
    </>
  );
};

export default Career;
