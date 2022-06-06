import React from "react";

const NormalText = ({ children, isWhite = false }) => {
  return (
    <p
      className={`text-lg ${
        isWhite ? "text-white" : "text-black"
      } font-secondary] tracking-wide leading-[38px] pb-6 text-center md:text-left`}
    >
      {children}
    </p>
  );
};

export default NormalText;
