import React from 'react';

const Services = () => {
  const services = Array(6).fill({
    title: 'software maintaince',
    description: 'this is the figma design of the website this is made solely for showcase',
  });

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
        our services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-xl shadow hover:shadow-lg transition duration-300 p-4 flex flex-col items-center text-center"
          >
            {/* Image Placeholder */}
            <div className="bg-gray-300 w-full h-40 rounded-md mb-4 flex items-center justify-center text-gray-600 text-sm">
                <img
            src={"/serv.png"}
            alt="WebVision Illustration"
           className="max-h-40 w-full object-contain mb-4"
          />
            </div>

            <h3 className="text-lg font-semibold mb-2 capitalize">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">{service.description}</p>
            <a
              href="#"
              className="text-blue-700 text-sm font-semibold hover:underline"
            >
              read more ---&gt;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
