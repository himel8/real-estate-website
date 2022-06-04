import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import SectionBanner from "../../Components/SectionBanner";
import Description from "../../Containers/LandWanted/Description";
import LandFrom from "../../Containers/LandWanted/LandForm";

const LandWanted = () => {
  return (
    <>
      <Navbar />
      <SectionBanner name={"land wanted"} image={"bg-aboutBg"} />
      <Description />
      <LandFrom />
      <Footer />
    </>
  );
};

export default LandWanted;
