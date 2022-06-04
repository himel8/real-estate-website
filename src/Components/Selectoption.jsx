import React from "react";

const Selectoption = ({ label, options, defaultText }) => {
  return (
    <div className="mb-6 ">
      <label
        className="capitalize block text-gray-600 text-lg font-secondary font-medium mb-3"
        for="username"
      >
        {label}
      </label>
      <select
        className="capitalize form-select block w-[90%]  md:w-full py-5 px-8 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-gray-600 text-xl font-secondary font-medium mb-3 selection:bg-white"
        aria-label="Default select example"
      >
        <option selected value={defaultText}>
          {defaultText}
        </option>
        {options.map((data, index) => (
          <option value={data}>{data}</option>
        ))}
      </select>
    </div>
  );
};

export default Selectoption;
