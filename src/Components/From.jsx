import React from "react";

const From = ({ isCareer }) => {
  return (
    <from>
      <div className="mb-6">
        <label
          className="block text-gray-600 text-lg font-secondary font-medium mb-3"
          for="username"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded  w-[90%] mx-auto md:w-full py-5 px-8 text-xl font-secondary text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter your name"
        />
      </div>

      {isCareer ? (
        <div className="mb-6">
          <label
            className="block text-gray-600 text-lg font-secondary font-medium mb-3"
            for="profession"
          >
            Profession
          </label>
          <input
            className="shadow appearance-none border rounded w-[90%] mx-auto md:w-full py-5 px-8 text-xl font-secondary text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="profession"
            type="text"
            placeholder="Enter your required post"
          />
        </div>
      ) : (
        <div className="mb-6">
          <label
            className="block text-gray-600 text-lg font-secondary font-medium mb-3"
            for="profession"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-[90%] mx-auto md:w-full py-5 px-8 text-xl font-secondary text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="profession"
            type="text"
            placeholder="Full address of the land"
          />
        </div>
      )}

      <div className="mb-8">
        <label
          className="block text-gray-600 text-lg font-secondary font-medium mb-3"
          for="number"
        >
          Phone
        </label>
        <input
          className="shadow appearance-none border rounded w-[90%] mx-auto md:w-full py-5 px-8 text-xl font-secondary text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="number"
          type="text"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="mb-8">
        <label
          className="block text-gray-600 text-lg font-secondary font-medium mb-3"
          for="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-[90%] mx-auto md:w-full py-5 px-8 text-xl font-secondary text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email address"
        />
      </div>

      {isCareer && (
        <div className="mb-8">
          <label
            className="block text-gray-600 text-lg font-secondary font-medium mb-3"
            for="file_input"
          >
            Submit your cv
          </label>
          <input
            className="block w-full bg-gray-50 rounded-lg cursor-pointer text-xl font-secondary text-gray-700 leading-tight py-5 file:py-6 file:px-16 file:bg-[#30373F] file:text-white file:border-0"
            id="file_input"
            type="file"
          />
        </div>
      )}
      <div className="text-center mt-8">
        <button className="uppercase w-[300px] h-[80px] border-2 border-[#555555] ease-out duration-300 font-secondary font-normal text-xl shadow-btn cursor-pointer hover:shadow-hoverBtn hover:border-0 hover:text-white">
          Submit
        </button>
      </div>
    </from>
  );
};

export default From;
