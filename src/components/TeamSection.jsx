import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Award } from 'lucide-react';

// Updated team member data with more variety
const teamMembers = [
  {
    name: 'Dheeraj Prajapati',
    role: 'React Developer',
    experience: '1+ Year Experience',
    avatar: 'https://placehold.co/128x128/E0E7FF/4F46E5?text=DP',
  },
  {
    name: 'Jane Doe',
    role: 'UI/UX Designer',
    experience: '3+ Years Experience',
    avatar: 'https://placehold.co/128x128/DBEAFE/1D4ED8?text=JD',
  },
  {
    name: 'John Smith',
    role: 'Project Manager',
    experience: '5+ Years Experience',
    avatar: 'https://placehold.co/128x128/D1FAE5/059669?text=JS',
  },
];

// Main Team Section Component
const TeamSection = () => {
  // Animation variants for the main container to stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
      },
    },
  };

  // Animation variants for each team member card
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
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
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Awesome Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            The creative minds behind our success.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Animate when the container comes into view
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden text-center p-8 transition-shadow duration-300 hover:shadow-2xl"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }} // Card lifts up and scales on hover
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Avatar */}
              <div className="relative inline-block mb-6">
                <img
                  src={member.avatar}
                  alt={`${member.name}'s avatar`}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/128x128/cccccc/ffffff?text=Error'; }}
                />
                 <span className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></span>
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <div className="flex items-center justify-center mt-2 text-blue-600 font-semibold">
                <Briefcase size={16} className="mr-2" />
                <p>{member.role}</p>
              </div>
              <div className="flex items-center justify-center mt-2 text-gray-500 text-sm">
                <Award size={16} className="mr-2" />
                <p>{member.experience}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
