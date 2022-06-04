import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import SectionBanner from "../../Components/SectionBanner";
import Afflications from "../../Containers/About/Afflications";
import ChairmanMsg from "../../Containers/About/ChairmanMsg";
import Concern from "../../Containers/About/Concern";
import Description from "../../Containers/About/Description";
import Directors from "../../Containers/About/Directors";
import Mission from "../../Containers/About/Mission";
import Vision from "../../Containers/About/Vision";

const About = () => {
  return (
    <>
      <Navbar />
      <SectionBanner name={"ABOUT US"} image={"bg-aboutBg"} />
      <div className="py-24">
        <Description />
        <Mission />
        <Vision />
        <ChairmanMsg />
        <Directors />
        <Afflications />
        <Concern />
      </div>
      <Footer />
    </>
  );
};

export default About;
