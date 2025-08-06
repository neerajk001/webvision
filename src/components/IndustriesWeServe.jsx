import React from 'react';

const industries = [
  'REAL ESTATE',
  'MARKETPLACE',
  'ON DEMAND',
  'ECOMMERCE',
  'HEALTHCARE',
  'EDUCATION',
  'JOB & RECRUITERS',
  'NEWS/ BLOGS',
  'TRAVEL',
  'FINANCIAL',
  'HOTELS',
  'MATRIMONIAL',
];

const IndustriesWeServe = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Industries We Serve
        </h2>

        {/* Blue dot divider */}
        <div className="flex justify-center items-center mb-12">
          <div className="w-24 h-px bg-gray-300"></div>
          <div className="w-3 h-3 mx-2 bg-blue-600 rounded-full"></div>
          <div className="w-24 h-px bg-gray-300"></div>
        </div>

        {/* Grid of industries */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 font-semibold text-sm md:text-base rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
