import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  // State to handle the "Read More" toggle
  const [isExpanded, setIsExpanded] = useState(false);

  const cardText =
    'We provide our clients with the exact tailor-made software solutions that will meet their specific business requirements. Our team of experienced and technical software developers will integrate application development with your line of business.';

  const extraInfo = 
    'Beyond development, we focus on scalability and security, ensuring your digital assets grow alongside your business. Our methodology involves deep technical audits and performance optimization to guarantee search engine visibility and user retention.';

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Image */}
        <div className="flex-1 w-full rounded-lg overflow-hidden shadow-lg">
          <img
            src={"/hero.png"}
            alt="WebVision Illustration"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-black">About Us</h2>

          <div className="space-y-4">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow border border-gray-300 text-gray-800"
              >
                {cardText}
              </div>
            ))}

            {/* Expanded Content with Animation */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-blue-50 p-4 rounded-lg shadow border border-blue-200 text-gray-800 italic"
                >
                  {extraInfo}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-[#8BC4EC] hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded shadow transition-colors"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
            <Link to="/portfolio"  className="border border-black text-black font-semibold px-6 py-2 rounded shadow hover:bg-gray-200 transition-colors">
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
