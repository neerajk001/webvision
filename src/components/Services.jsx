import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

// --- Helper Components ---

// Icon for the "Read More" link
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
);


// --- Service Data ---
// I've created a more detailed list of services and found relevant images.
const servicesList = [
    {
        title: 'Web & App Development',
        description: 'Crafting responsive, high-performance websites and mobile applications tailored to your business needs.',
        imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
        link: "/servicesPages/WebDevPage",
    },
    {
        title: 'UI/UX Design',
        description: 'Designing intuitive, engaging, and user-centric interfaces that deliver a seamless user experience.',
        imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop',
        link: "/servicesPages/SoftDevPage",
    },
    {
        title: 'Cloud Solutions',
        description: 'Leveraging cloud infrastructure to provide scalable, secure, and cost-effective solutions for your business.',
        imageUrl: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop',
        link: "/servicesPages/ERPCrmPage",
    },
    {
        title: 'Digital Marketing',
        description: 'Boosting your online presence with data-driven marketing strategies, from SEO to social media campaigns.',
        imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop',
        link: "/servicesPages/SeoPage",
    },
    {
        title: 'Software Maintenance',
        description: 'Ensuring your applications run smoothly with proactive maintenance, updates, and dedicated support.',
        imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop',
        link: "/servicesPages/SoftDevPage",
    },
    {
        title: 'Branding & Identity',
        description: 'Building a strong brand identity with memorable logos, style guides, and compelling brand narratives.',
        imageUrl: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop',
        link: "/servicesPages/SmmPage",
    },
];

// --- Animation Variants for Framer Motion ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Stagger the animation of children
        },
    },
};

const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 10,
        },
    },
};


/**
 * Services Component
 * A sleek, modern section to showcase business services.
 */
const Services = () => {
    return (
        <section className="bg-gray-50 py-16 sm:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        We offer a wide range of services to help your business grow and succeed in the digital world.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {servicesList.map((service, index) => (
                                 <Link
                      to={service.link}
                      key={index}
                      className="
                        no-underline
                      "
                    >
                        <motion.div
                            key={index}
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
                            variants={cardVariants}
                        >
                            {/* Image Container */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={service.imageUrl}
                                    alt={`${service.title} illustration`}
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e5e7eb/4b5563?text=Image'; }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 flex-grow">
                                    {service.description}
                                </p>
                                <span
                                    href="#"
                                    className="text-blue-600 hover:text-blue-700 text-sm font-semibold mt-auto inline-flex items-center group"
                                >
                                    Read More
                                    <ArrowRightIcon />
                                </span>
                            </div>
                        </motion.div></Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;