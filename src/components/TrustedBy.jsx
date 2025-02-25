import React from "react";

const companies = [
  { name: "Myntra", logo: "path_to_myntra_logo" },
  { name: "OYO", logo: "src/assets/image.png" },
  { name: "Amazon", logo: "src/assets/amazon.png" },
  { name: "Flipkart", logo: "path_to_flipkart_logo" },
  { name: "Boat", logo: "path_to_boat_logo" },
  { name: "Entrepreneurs India", logo: "path_to_entrepreneurs_logo" }
];

const TrustedBy = () => {
  return (
    <section className="bg-black text-white py-10 ">
      <h2 className="text-center text-lg font-semibold mb-6 ">
        Used by the world's leading companies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-6 max-w-6xl mx-auto mt-5">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-lg py-4 px-6 shadow-md gray-shade"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-8 opacity-100 "
            />
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
