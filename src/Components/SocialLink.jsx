import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { MdCall, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const SocialLink = ({ name, details }) => {
  return (
    <div className="flex my-5 items-center  md:items-start justify-start ">
      {name === "address" && <MdLocationOn className="text-2xl mr-3" />}
      {name === "phone" && <MdCall className="text-4xl mr-3" />}
      {name === "email" && (
        <BsEnvelope className="text-base md:text-2xl mr-3" />
      )}

      <div className="text-base leading-[28px] md:text-xl font-secondary tracking-wide">
        {name === "address" && (
          <p className="capitalize">
            {name}:{" "}
            {details.map((data, index) => {
              return <span key={index}>{data}</span>;
            })}
          </p>
        )}
        {name === "email" && (
          <p className="capitalize">
            {name}:{" "}
            {details.map((data, index) => {
              return (
                <Link className="lowercase" to={`mailto:${data}`} key={index}>
                  {data}
                </Link>
              );
            })}
          </p>
        )}
        {name === "phone" && (
          <p className="capitalize ">
            {name}:{" "}
            {details.map((data, index) => {
              return (
                <Link to={`tel:${data}`} key={index}>
                  {data},{" "}
                </Link>
              );
            })}
          </p>
        )}
      </div>
    </div>
  );
};

export default SocialLink;
