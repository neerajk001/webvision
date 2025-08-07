import React from 'react';
import { motion } from 'framer-motion';

// --- Mock Data for Products ---
// Updated with more specific images.
const products = [
    {
        title: "POS Software Development",
        description: "Increase sales by 20-30% with our efficient POS system. It reduces inventory holding costs, increases space productivity, and maximizes margins with lower investment, encouraging repeat business from loyal customers.",
        features: [
            "User Friendly Interface",
            "Fully Responsive Design",
            "Cross Browser Support",
        ],
        image: "https://images.unsplash.com/photo-1526933996296-1c7c427c5a42?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Modern Point of Sale system in a boutique"
    },
    {
        title: "CRM Software",
        description: "Designed for small, mid-market, and enterprise organizations with a focus on sales and support. Our CRM offers vertical solutions for a wide variety of industry-specific needs.",
        image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1887&auto=format&fit=crop",
        imageAlt: "Team collaborating around a CRM dashboard on a screen"
    },
    {
        title: "Invoice and Billing Software",
        description: "A multi-company system allowing you to create and manage multiple entities under a single license. Easily import & export customer, vendor, and inventory lists from various formats like MS Excel and CSV.",
        image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Person reviewing an invoice on a tablet"
    },
    {
        title: "Jewelry Management Software",
        description: "Specialized software for jewelers to manage complex stock using barcode tags. Enables fast article tracking and provides robust protection against theft of valuable products.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Close-up of a diamond ring being inspected"
    },
    {
        title: "Institute Management Software",
        description: "Comprehensive software for schools to manage student records, fee collections, transport routes, birthday reminders, concessions, dues, defaulter lists, examinations, and library operations.",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Students in a lecture hall using technology"
    }
];

// --- Components ---

/**
 * ProductSection Component
 * Displays a single product with its details and image.
 * The layout alternates for visual variety.
 */
const ProductSection = ({ product, index }) => {
    const isReversed = index % 2 !== 0;

    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <motion.div
            className="w-full"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
        >
            <div className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
                {/* Image Section */}
                <div className="w-full md:w-5/12">
                    <img
                        src={product.image}
                        alt={product.imageAlt}
                        className="rounded-lg shadow-xl object-cover w-full h-auto"
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e2e8f0/4a5568?text=Product+Image'; }}
                    />
                </div>

                {/* Text Content Section */}
                <div className="w-full md:w-6/12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{product.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>
                    {product.features && (
                        <ul className="space-y-2 mb-8">
                            {product.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-700">
                                    <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        Request a Demo
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

/**
 * OurProducts Component
 * The main page component that lays out all the products.
 */
const OurProducts = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-6 py-16 md:py-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                        Our Software Products
                    </h1>
                    <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                        Powerful, reliable, and user-friendly solutions designed to streamline your business operations and drive growth.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="space-y-20 md:space-y-32">
                    {products.map((product, index) => (
                        <ProductSection key={index} product={product} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
 export default OurProducts