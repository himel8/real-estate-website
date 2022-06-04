import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import AboutSection from "../../Containers/Home/AboutSection";
import FootPrint from "../../Containers/Home/FontPrint";
import Social from "../../Containers/Home/Social";
import WhyUs from "../../Containers/Home/WhyUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <FootPrint />
      <WhyUs />
      <Social />
      <Footer />
    </div>
  );
};

export default Home;
