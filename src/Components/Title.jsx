import React from "react";

const Title = ({ title, isWhiteText }) => {
  return (
    <h2
      className={`text-6xl leading-[80px] ${
        isWhiteText ? "text-[#fff]" : "text-[#1f1e1e]"
      } font-primary uppercase my-6`}
    >
      {title}
    </h2>
  );
};

export default Title;
