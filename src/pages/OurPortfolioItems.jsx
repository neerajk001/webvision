import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Helper Components ---

// Icon for the "View Project" link
const ArrowUpRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-200">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);

// --- Mock Data for Portfolio ---
const portfolioItems = [
    {
        title: "Wood Oven Pizza",
        category: "Website",
        description: "A delicious-looking website for a local pizzeria, focusing on online ordering and table reservations.",
        techStack: ["React", "TailwindCSS", "Firebase"],
        link: "#",
        images: [
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2070&auto=format&fit=crop",
        ],
        color: "blue"
    },
    {
        title: "Next Packaging",
        category: "Branding",
        description: "A complete branding and web solution for an industrial packaging company, enhancing their market presence.",
        techStack: ["Figma", "Next.js", "Vercel"],
        link: "#",
        images: [
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
        ],
        color: "purple"
    },
    {
        title: "Fast Quotation",
        category: "SaaS",
        description: "A robust SaaS platform for businesses to quickly generate and manage quotations and invoices.",
        techStack: ["React", "Node.js", "MongoDB"],
        link: "#",
        images: [
            "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1611095562057-2e70193d9d1f?q=80&w=2070&auto=format&fit=crop",
        ],
        color: "green"
    },
    {
        title: "Sun Shine Elevators",
        category: "Website",
        description: "A professional corporate website to showcase elevator products and generate business leads.",
        techStack: ["HTML5", "CSS3", "JavaScript"],
        link: "#",
        images: [
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559523161-0d0b0903a03b?q=80&w=1974&auto=format&fit=crop",
        ],
        color: "blue"
    },
    {
        title: "ONXT Learning",
        category: "SaaS",
        description: "A comprehensive e-learning platform connecting students with courses and educational resources.",
        techStack: ["Vue.js", "Django", "PostgreSQL"],
        link: "#",
        images: [
            "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
        ],
        color: "green"
    },
    {
        title: "Shubham Enterprises",
        category: "E-Commerce",
        description: "A full-featured e-commerce store for a growing enterprise, with a custom backend and payment integration.",
        techStack: ["Shopify", "Liquid", "GraphQL"],
        link: "#",
        images: [
            "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop",
        ],
        color: "pink"
    },
];

const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];
const categoryColors = {
    "Website": "blue",
    "Branding": "purple",
    "SaaS": "green",
    "E-Commerce": "pink",
};


// --- Components ---

/**
 * PortfolioCard Component
 * Displays a single portfolio item with an enhanced, modern look.
 */
const PortfolioCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (isHovered) {
            const interval = setInterval(() => {
                setCurrentImageIndex(prev => (prev + 1) % item.images.length);
            }, 1500);
            return () => clearInterval(interval);
        } else {
            setCurrentImageIndex(0);
        }
    }, [isHovered, item.images.length]);

    const accentColor = categoryColors[item.category] || 'gray';

    return (
        <motion.div
            className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border-b-4 border-${accentColor}-500`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="relative h-56">
                <AnimatePresence>
                    <motion.img
                        key={currentImageIndex}
                        src={item.images[currentImageIndex]}
                        alt={`${item.title} screenshot`}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e5e7eb/4b5563?text=Project+Image'; }}
                    />
                </AnimatePresence>
                <motion.div 
                    className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent`}
                    initial={{opacity: 0}}
                    animate={{opacity: isHovered ? 1 : 0}}
                    transition={{duration: 0.3}}
                />
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <p className={`text-sm text-${accentColor}-600 font-semibold mb-1`}>{item.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {item.techStack.map(tech => (
                        <span key={tech} className={`bg-${accentColor}-100 text-${accentColor}-800 text-xs font-medium px-2.5 py-1 rounded-full`}>{tech}</span>
                    ))}
                </div>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className={`text-${accentColor}-600 hover:text-${accentColor}-700 text-sm font-semibold mt-auto inline-flex items-center group`}>
                    View Project
                    <ArrowUpRightIcon />
                </a>
            </div>
        </motion.div>
    );
};

/**
 * Portfolio Component
 * The main container for showcasing all portfolio projects with filters.
 */
const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredItems = activeFilter === "All"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen p-4 sm:p-8 md:p-12" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dbeafe' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">Our Portfolio</h1>
                    <p className="text-lg text-gray-500">Explore a curated selection of our finest work.</p>
                </motion.div>

                <div className="flex justify-center flex-wrap gap-3 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                                activeFilter === category
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 shadow-md hover:bg-gray-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <PortfolioCard key={item.title} item={item} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Portfolio


