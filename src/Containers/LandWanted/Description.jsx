import React from "react";
import LandImg from "../../assets/images/land.jpg";
import ShortDescription from "../../Components/ShortDescription";

const Description = () => {
  return (
    <ShortDescription
      title={"LET'S WORK TOGETHER"}
      image={LandImg}
      normalText={
        "When everyone in your office is working toward a common goal—whetherthat’s a certain number of home sales or becoming the top-rankingbrokerage in town—you’ll feel compelled to put forth the extraeffort to achieve that goal. Seeking out a brokerage with a team spirit, where goals are clearly communicated, can certainly impact your success."
      }
    />
  );
};

export default Description;
