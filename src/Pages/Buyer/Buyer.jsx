import React from "react";
import Footer from "../../Components/Footer";
import SectionBanner from "../../Components/SectionBanner";
import BuyerForm from "../../Containers/Buyer/BuyerForm";
import Description from "../../Containers/Buyer/Description";

const Buyer = () => {
  return (
    <>
      <SectionBanner name={"Interested Buyers"} image={"bg-aboutBg"} />
      <Description />
      <BuyerForm />
      <Footer />
    </>
  );
};

export default Buyer;
