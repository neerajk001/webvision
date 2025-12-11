import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, AppWindow, Users, Briefcase, Database , Share2} from 'lucide-react';

// Service data with corresponding icons for better visual representation
const services = [
  { 
    name: "Software Development", 
    description: "Custom software solutions tailored to your unique business needs, from concept to deployment.",
    icon: <Code size={32} /> 
  },
  { 
    name: "Website Development", 
    description: "Modern, responsive websites that deliver exceptional user experiences and drive engagement.",
    icon: <Layers size={32} /> 
  },
  { 
    name: "App Development", 
    description: "High-performance mobile applications for both iOS and Android platforms, built with the latest technologies.",
    icon: <AppWindow size={32} /> 
  },
  { 
    name: "Outsourcing & Consulting", 
    description: "Expert IT consulting and outsourcing services to help you scale your operations efficiently.",
    icon: <Users size={32} /> 
  },
  { 
    name: "IT Business Solution", 
    description: "Comprehensive IT solutions designed to streamline your business processes and boost productivity.",
    icon: <Briefcase size={32} /> 
  },
  { 
    name: "ERP & CRM Solution", 
    description: "Powerful and scalable ERP & CRM systems to manage your resources and customer relationships effectively.",
    icon: <Database size={32} /> 
  }, {
    name: "SEO Optimization", 
    description: " Boost your website’s visibility and rank higher on search engines with our advanced SEO strategies.",
    icon: <Briefcase size={32} /> 
  },
{
  name: "Social Media Marketing",
  description: "Grow your brand presence and engage your audience across all major social media platforms.",
  icon: <Share2 size={32} />
},
];

/**
 * OurService Component
 * Displays a grid of service cards with minimal, clean animations.
 */
const OurService = () => {
  // Animation for the container to stagger the appearance of children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animation for each individual service card
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="bg-gray-50 font-sans py-20 sm:py-24">
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
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We provide cutting-edge solutions to elevate your business and drive success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex-grow">
                <div className="inline-block bg-blue-100 text-blue-600 rounded-full p-4 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurService;
