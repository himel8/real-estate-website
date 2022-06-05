import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import AboutSection from "../../Containers/Home/AboutSection";
import Features from "../../Containers/Home/Features";
import FootPrint from "../../Containers/Home/FontPrint";
import FullImageSection from "../../Containers/Home/FullImageSection";
import Slider from "../../Containers/Home/Slider";
import Social from "../../Containers/Home/Social";
import WhyUs from "../../Containers/Home/WhyUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Features />
      <AboutSection />
      <FullImageSection />
      <FootPrint />
      <WhyUs />
      <Social />
      <Footer />
    </div>
  );
};

export default Home;
