import React from "react";
import Footer from "../../Components/Footer";
import SectionBanner from "../../Components/SectionBanner";
import Title from "../../Components/Title";
import Address from "../../Containers/Contact/Address";
import GoogleMap from "../../Containers/Contact/GoogleMap";

const Contact = () => {
  return (
    <>
      <SectionBanner name={"contact US"} image={"bg-aboutBg"} />
      <div className="text-center">
        <Title title={"Contact us"} />
      </div>
      <div className="w-[95%] md:w-[85%] mx-auto py-24 flex md:justify-center md:items-start flex-col md:flex-row flex-wrap md:flex-nowrap text-left capitalize">
        <Address />
        <GoogleMap />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
