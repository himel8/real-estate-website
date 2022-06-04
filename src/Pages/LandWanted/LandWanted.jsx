import React from "react";
import Footer from "../../Components/Footer";
import SectionBanner from "../../Components/SectionBanner";
import Description from "../../Containers/LandWanted/Description";
import LandFrom from "../../Containers/LandWanted/LandForm";

const LandWanted = () => {
  return (
    <>
      <SectionBanner name={"land wanted"} image={"bg-aboutBg"} />
      <Description />
      <LandFrom />
      <Footer />
    </>
  );
};

export default LandWanted;
