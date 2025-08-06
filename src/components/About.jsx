import React from 'react';

const AboutUs = () => {
  const cardText =
    'We provide our clients with the exact tailor-made software solutions that will meet their specific business requirements. Our team of experienced and technical software developers will integrate application development with your line of business.';

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Image Placeholder */}
        <div className="flex-1 bg-gray-300 h-64 w-full rounded-lg flex items-center justify-center text-gray-600 text-sm">
           <img
            src={"/hero.png"}
            alt="WebVision Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-black">About Us</h2>

          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow border border-gray-300 text-gray-800"
              >
                {cardText}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded shadow">
              Read More
            </button>
            <button className="border border-black text-black font-semibold px-6 py-2 rounded shadow hover:bg-gray-200">
              portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
