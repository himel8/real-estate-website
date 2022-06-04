import React from "react";

const NormalText = ({ children, isWhite = false }) => {
  return (
    <p
      className={`text-xl ${
        isWhite ? "text-white" : "text-black"
      } font-secondary] tracking-wide leading-[38px] pb-6`}
    >
      {children}
    </p>
  );
};

export default NormalText;
