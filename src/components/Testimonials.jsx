import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

// Updated testimonials data with more variety and placeholder avatars
const testimonials = [
  {
    name: 'James Doe',
    role: 'Business Man | Seller',
    text: "I went to WebVision, and it's completely boomed my sales through the service they provide. I have doubled my income—highly recommended!",
    avatar: 'https://placehold.co/100x100/E0E7FF/4F46E5?text=JD',
  },
  {
    name: 'Sarah Lynn',
    role: 'Startup Founder',
    text: 'The team delivered a stunning website that perfectly captures our brand. The process was smooth, and the results exceeded our expectations.',
    avatar: 'https://placehold.co/100x100/FEF2F2/B91C1C?text=SL',
  },
  {
    name: 'Michael Chen',
    role: 'E-commerce Manager',
    text: 'Our online store has never performed better. The new design is not only beautiful but also incredibly user-friendly, leading to a significant increase in conversions.',
    avatar: 'https://placehold.co/100x100/D1FAE5/059669?text=MC',
  },
   {
    name: 'Emily Carter',
    role: 'Marketing Director',
    text: 'A truly professional and talented team. They understood our vision from day one and brought it to life with creativity and precision.',
    avatar: 'https://placehold.co/100x100/FFFBEB/B45309?text=EC',
  },
];

// To create a seamless loop, we duplicate the testimonials array.
const duplicatedTestimonials = [...testimonials, ...testimonials];

// Main Testimonials Component
const Testimonials = () => {
    
  // Animation for the scrolling container
  const marqueeVariants = {
    animate: {
      x: [0, -1096], // Adjust this value based on the width of your cards
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20, // Controls the speed of the scroll
          ease: 'linear',
        },
      },
    },
  };

  return (
    <section className="bg-gray-50 font-sans py-20 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="flex justify-center mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-current" size={24} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Auto-scrolling Testimonials */}
      <motion.div 
        className="flex gap-8"
        variants={marqueeVariants}
        animate="animate"
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-8 w-80" // Fixed width for each card
          >
            <Quote className="text-blue-500 mb-4" size={32} />
            <p className="text-gray-600 mb-6 h-32">{testimonial.text}</p>
            <div className="flex items-center mt-auto">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name}'s avatar`}
                className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gray-200"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/cccccc/ffffff?text=Error'; }}
              />
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Call to Action Section */}
      <div className="text-center mt-20">
         <p className="text-lg text-gray-700 font-medium">Want to see what we can do for you?</p>
         <motion.button 
            className="mt-6 bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center shadow-lg transition-transform"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
         >
            Get Started <ArrowRight className="ml-2" size={20}/>
         </motion.button>
      </div>
    </section>
  );
};

export default Testimonials;
