import React from "react";
import Selectoption from "./Selectoption";

const InformationForm = ({ name, isLand }) => {
  return (
    <div className="mb-32">
      <div className="text-center mb-16">
        <h2 className="font-primary text-5xl font-medium">
          PLEASE FILL UP THE FORM
        </h2>
        <h6 className="font-secondary text-3xl font-normal my-6">{name}</h6>
      </div>
      <from>
        <Selectoption
          label={"Area"}
          defaultText={"Area"}
          options={["Gulshan", "Baridhara", "Dhanmondi", "Uttara", "banani"]}
        />
        <Selectoption
          label={"flat size"}
          defaultText={"2000"}
          options={["1200", "1600", "2400"]}
        />
        {isLand && (
          <div className="mb-6">
            <label
              className="block text-gray-600 text-lg font-secondary font-medium mb-3"
              for="username"
            >
              Land Area
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-5 px-8 text-xl font-secondary text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="In katha"
            />
          </div>
        )}
      </from>
    </div>
  );
};

export default InformationForm;
