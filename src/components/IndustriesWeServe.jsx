import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  ShoppingCart,
  Zap,
  Store,
  HeartPulse,
  GraduationCap,
  Users,
  Newspaper,
  Plane,
  Landmark,
  BedDouble,
  Heart,
} from 'lucide-react';

// Data for the industries we serve, including icons
const industries = [
  { name: 'REAL ESTATE', icon: <Home size={32} /> },
  { name: 'MARKETPLACE', icon: <ShoppingCart size={32} /> },
  { name: 'ON DEMAND', icon: <Zap size={32} /> },
  { name: 'ECOMMERCE', icon: <Store size={32} /> },
  { name: 'HEALTHCARE', icon: <HeartPulse size={32} /> },
  { name: 'EDUCATION', icon: <GraduationCap size={32} /> },
  { name: 'JOB & RECRUITERS', icon: <Users size={32} /> },
  { name: 'NEWS / BLOGS', icon: <Newspaper size={32} /> },
  { name: 'TRAVEL', icon: <Plane size={32} /> },
  { name: 'FINANCIAL', icon: <Landmark size={32} /> },
  { name: 'HOTELS', icon: <BedDouble size={32} /> },
  { name: 'MATRIMONIAL', icon: <Heart size={32} /> },
];

// Main Industries Section Component
const IndustriesWeServe = () => {
  // Animation variants for the container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for each industry card
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <section className="bg-white font-sans py-20 sm:py-24">
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
            Industries We Serve
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Providing cutting-edge solutions across a wide range of sectors.
          </p>
           {/* Elegant Divider */}
          <div className="flex justify-center items-center mt-6">
            <div className="w-20 h-px bg-gray-200"></div>
            <div className="w-4 h-4 mx-4 bg-blue-600 rounded-full shadow-md"></div>
            <div className="w-20 h-px bg-gray-200"></div>
          </div>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="group bg-gray-50 rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:scale-105"
              variants={itemVariants}
            >
              <div className="text-blue-600 mb-4 transition-colors duration-300 group-hover:text-white">
                {industry.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-sm md:text-base transition-colors duration-300 group-hover:text-white">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
