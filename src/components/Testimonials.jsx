import React from 'react';

const testimonials = [
  {
    name: 'james doe',
    role: 'business man | seller',
    text: `i went to webvison and its completely boom my sale through the service they provide and i have doubled my income higly recommended`,
  },
  {
    name: 'james doe',
    role: 'business man | seller',
    text: `i went to webvison and its completely boom my sale through the service they provide and i have doubled my income higly recommended`,
  },
  {
    name: 'james doe',
    role: 'business man | seller',
    text: `i went to webvison and its completely boom my sale through the service they provide and i have doubled my income higly recommended`,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-16 text-center">
      <h2 className="text-4xl font-bold mb-4">what our client says</h2>

      {/* Stars */}
      <div className="flex justify-center mb-10">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-2xl mx-1">★</span>
        ))}
        <span className="text-gray-400 text-2xl mx-1">★</span>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-md shadow-md p-6 text-left flex flex-col justify-between"
          >
            <p className="mb-6 text-sm text-gray-800">{t.text}</p>
            <div className="flex items-center mt-auto">
              {/* Placeholder Avatar */}
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3">
                <img
            src={"/test.png"}
            alt="WebVision Illustration"
           className="max-h-40 w-full object-contain mb-4"
          />
              </div>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-gray-600">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <p className="mt-12 text-gray-700 font-medium">want to see what we can do for you</p>
      <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 transition px-6 py-2 rounded text-black font-semibold">
        get started →
      </button>
    </section>
  );
};

export default Testimonials;
