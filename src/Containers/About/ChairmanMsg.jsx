import React from "react";
import { Link } from "react-router-dom";
import NormalText from "../../Components/NormalText";
import Title from "../../Components/Title";

const ChairmanMsg = () => {
  return (
    <div className="w-[95%] md:w-[85%] mx-auto py-6 md:py-24">
      <div className="md:pr-[37%] px-4 pr-0">
        <Title title={"CHAIRMAN MESSAGE"} />

        <h3 className="pt-8 pb-12 font-secondary capitalize text-3xl font-medium text-gray-700 text-center md:text-left">
          Rashed Mahmud
        </h3>

        <NormalText>
          Welcome to Nandan Kanon Housing Limited website.
        </NormalText>
        <NormalText>
          Your visit to our website is highly appreciated as your first step to
          explore all needed information about our company; during your visit
          you will touch the base of our company’s main projects and our future
          vision of development in the real estate market.
        </NormalText>
        <NormalText>
          Your visit to our site will provide you with more information about
          our business opportunities and our edge, we had learned through the
          years that our investment in people is the most feasible investment
          that we had ever done, and can open us more and more opportunities to
          enrich our know how and experience.
        </NormalText>
        <Link to="#!">
          <p className="capitalize font-secondary font-bold text-lg text-center md:text-left">
            explore
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ChairmanMsg;
