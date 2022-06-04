import React from "react";

const adreessData = [
  {
    name: "Nandan Kanon Housing Ltd.",
    details: [
      "Nandan Rosemont",
      "House # 148 (2nd & 3rd Floor), Road # 13B",
      "Phone : 8833869-71",
      "Email : contact@nandankanon.com",
    ],
  },
  {
    name: "Marketing & Sales",
    details: [
      "Zia Ansari",
      "Phone:01713-038492, 01713-038493, 01713-038495,",
      "01912134061, 01912134063, 01912134052",
      "Email: sales@nandankanon.com",
    ],
  },
  {
    name: "Site Visit",
    details: [
      "Phone: +88-02-58953674",
      "Email: visit@nandankanon.com",
      "Address: Project Location / office location",
    ],
  },
];

const Address = () => {
  return (
    <div className="w-1/2 mx-auto">
      {adreessData.map((data, index) => (
        <div key={index} className="bg-[#F5F5F5] p-8 mb-12 rounded-md">
          <h2 className="text-left font-secondary font-medium text-2xl text-black mb-4">
            {data.name}
          </h2>

          {data.details.map((data, index) => (
            <p key={index} className="font-secondary text-xl text-gray-500">
              {data}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Address;
