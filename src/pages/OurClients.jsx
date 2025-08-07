import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Mock Data for Clients ---
// In a real app, you'd fetch this from a CMS or API.
// Using placeholder logos for demonstration.
const clients = [
    { name: "RAHY", info: "Leading logistics and transport solutions.", logo: "https://placehold.co/200x100/000000/FFFFFF?text=RAHY" },
    { name: "GV WALA TEH", info: "Premium organic tea and beverage supplier.", logo: "https://placehold.co/200x100/4ade80/000000?text=GV+WALA+TEH" },
    { name: "Bob's Banter Academy", info: "Building the next generation of public speakers.", logo: "https://placehold.co/200x100/3b82f6/FFFFFF?text=BBA" },
    { name: "Tata Speed", info: "Automotive performance and parts specialist.", logo: "https://placehold.co/200x100/ef4444/FFFFFF?text=TATA+SPEED" },
    { name: "Yarave", info: "Innovative fashion and apparel brand.", logo: "https://placehold.co/200x100/8b5cf6/FFFFFF?text=YARAVE" },
    { name: "S.S. Lubricants", info: "High-performance industrial lubricants.", logo: "https://placehold.co/200x100/0ea5e9/FFFFFF?text=S.S.L" },
    { name: "We Can Services", info: "Comprehensive home and business maintenance.", logo: "https://placehold.co/200x100/14b8a6/FFFFFF?text=We+Can" },
    { name: "Airo-tech Enterprises", info: "Cutting-edge aerospace technology.", logo: "https://placehold.co/200x100/f97316/FFFFFF?text=Airo-tech" },
    { name: "Glisten Group", info: "Financial consulting and investment services.", logo: "https://placehold.co/200x100/facc15/000000?text=Glisten" },
    { name: "Giriji Tech", info: "Engineering and technology solutions provider.", logo: "https://placehold.co/200x100/64748b/FFFFFF?text=GIRIJI" },
    { name: "Vruddhi Financial", info: "Personal and business financial planning.", logo: "https://placehold.co/200x100/22c55e/FFFFFF?text=VRUDDHI" },
    { name: "Naturez Fresh", info: "Farm-to-table organic produce delivery.", logo: "https://placehold.co/200x100/84cc16/000000?text=Naturez+Fresh" },
];

// --- Components ---

/**
 * ClientCard Component
 * Displays a single client logo and shows info on hover.
 */
const ClientCard = ({ client }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative flex items-center justify-center p-6 bg-white rounded-lg shadow-md h-32"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
        >
            <img src={client.logo} alt={`${client.name} logo`} className="max-h-16 w-auto" />

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-lg flex items-center justify-center p-4"
                    >
                        <p className="text-white text-center font-semibold">{client.info}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

/**
 * ClientCallToAction Component
 * A footer-like section to encourage user interaction.
 */
const ClientCallToAction = () => {
    return (
        <motion.div
            className="mt-24 md:mt-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Become Our Next Success Story
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-6">
                    Ready to elevate your brand and achieve your goals? Let's collaborate and create something amazing together.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
                >
                    Get In Touch
                </motion.button>
            </div>
        </motion.div>
    );
};


/**
 * OurClients Component
 * The main component to display the grid of client logos.
 */
const OurClients = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <div className="bg-gray-100 min-h-screen py-16 md:py-24">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                        Our Valued Clients
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        We are proud to have collaborated with a diverse range of businesses and organizations.
                    </p>
                </motion.div>

                {/* Client Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {clients.map((client) => (
                        <ClientCard key={client.name} client={client} />
                    ))}
                </motion.div>

                {/* Call to Action Section */}
                <ClientCallToAction />
            </div>
        </div>
    );
};

export default OurClients