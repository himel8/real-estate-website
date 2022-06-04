import React from "react";
import BuyerImg from "../../assets/images/buyer.jpg";
import ShortDescription from "../../Components/ShortDescription";

const Description = () => {
  return (
    <ShortDescription
      title={"DEAR PROSPECT"}
      image={BuyerImg}
      normalText={
        "It can be extremely tempting to get into a searching war over your potential dream home, but it’s a tendency you’ll need to work to overcome if you don’t want a home with an overly inflated price that will be difficult to revalued at a profit in the future. It’s okay to pay a high price on a home you like that you plan on living in for a long time, but it’s important to set a price limit for yourself before engaging in the selling process."
      }
    />
  );
};

export default Description;
