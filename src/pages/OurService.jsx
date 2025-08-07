import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Helper Components ---

// A simple Icon for the list items
const DiamondIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-500 mr-3 flex-shrink-0"
    >
        <path d="M12 2L2 12l10 10 10-10L12 2z" />
    </svg>
);


// --- Main Components ---

/**
 * OurService Component
 * This component displays the list of services with animations.
 * A detail card appears on hover.
 */
const OurService = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Updated services array to include descriptions for the hover cards
    const services = [
        { name: "Software Development", description: "Custom software solutions tailored to your unique business needs." },
        { name: "Website Development", description: "Modern, responsive websites that deliver exceptional user experiences." },
        { name: "App Development", description: "High-performance mobile applications for both iOS and Android platforms." },
        { name: "Outsourcing & Consulting", description: "Expert IT consulting to help you scale your operations efficiently." },
        { name: "IT Business Solution", description: "Comprehensive IT solutions to streamline your business processes." },
        { name: "ERP & CRM Solution", description: "Powerful systems to manage your resources and customer relationships." },
    ];

    // Animation variants for the container to stagger children animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger the animation of children by 0.2s
            },
        },
    };

    // Animation variants for each service item
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-gray-50 min-h-screen flex items-center justify-center p-4 sm:p-8"
        >
            <div className="max-w-6xl w-full mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden md:flex">
                {/* Left Side: Image */}
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887&auto=format&fit=crop"
                        alt="Tech team working on a computer"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x800/e2e8f0/4a5568?text=Service+Image'; }}
                    />
                </motion.div>

                {/* Right Side: Content */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                        className="text-gray-600 mb-8 text-lg"
                    >
                        We provide cutting-edge solutions to elevate your business.
                    </motion.p>

                    <motion.ul
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-4"
                    >
                        {services.map((service, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="relative flex items-center text-lg text-gray-700 font-medium cursor-pointer"
                            >
                                <DiamondIcon />
                                <span>{service.name}</span>
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            className="absolute left-8 top-full mt-2 w-72 p-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-xl z-10 border border-gray-200"
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                        >
                                            <p className="text-sm font-normal text-gray-800">{service.description}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </motion.div>
    );
};

export default OurService;
