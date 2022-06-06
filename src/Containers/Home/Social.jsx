import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import NormalText from "../../Components/NormalText";
import SocialLink from "../../Components/SocialLink";
import SubTitle from "../../Components/SubTitle";

const Social = () => {
  return (
    <div className=" w-[95%] mx-auto pt-24 md:w-[85%] flex justify-between items-start flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/2 ">
        <div className="py-8">
          <SubTitle subtitle={"NANDAN KANON HOUSING LTD"} />
        </div>
        <div className="border-r-[1px] border-[#CCCCCC]">
          <div className="pb-24">
            <div>
              <SocialLink
                name={"address"}
                details={["House 148 Rd No 13B,Banani, Dhaka 1213"]}
              />
              <SocialLink
                name={"phone"}
                details={[
                  " 01713-038492",
                  "01713-038493",
                  "01713-038495",
                  "01912134061",
                  "01912134063",
                  "01912134052",
                ]}
              />
              <SocialLink
                name={"email"}
                details={["contact@nandankanon.com"]}
              />
            </div>
            <div className="pt-6">
              <Button name={"contact us"} link={"#!"} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2  md:px-28">
        <div className="py-8">
          <SubTitle subtitle={"CONNECT SOCIALLY"} />
        </div>
        <div className="flex items-center justify-center md:justify-start py-4">
          <Link to="#!">
            <FaFacebookF className="mr-6 text-4xl" />
          </Link>
          <Link to="#!">
            <FaInstagram className="mr-8 text-4xl" />
          </Link>
          <Link to="#!">
            <BsYoutube className=" text-4xl" />
          </Link>
        </div>
        <div className="pb-24 ">
          <NormalText>
            Book your apartment now. Quick, Easy Booking. A member of customer
            service will join you as soon as possible and we speak your
            language.
          </NormalText>
          <Button name={"visit us"} link={"#!"} />
        </div>
      </div>
    </div>
  );
};

export default Social;
