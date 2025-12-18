import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Layout, Cpu, ShoppingBag, Smartphone, Search, Monitor } from 'lucide-react';

const portfolioItems = [
    { title: "Wood Oven Pizza", category: "Website", icon: <Globe size={18} />, description: "Premium digital experience for a traditional pizzeria with custom reservations.", techStack: ["React", "Firebase"], link: "#", image: "/portfolio/wood-oven.png" },
    { title: "Next Packaging", category: "Branding", icon: <Cpu size={18} />, description: "Industrial corporate identity and portal for global logistics.", techStack: ["Next.js", "Figma"], link: "#", image: "/portfolio/nextpack.png" },
    { title: "Fast Quotation", category: "SaaS", icon: <Layout size={18} />, description: "B2B dashboard for instantaneous quotation and invoice generation.", techStack: ["Node.js", "MongoDB"], link: "#", image: "/portfolio/fast-qoutation.png" },
    { title: "Sun Shine Elevators", category: "Website", icon: <Monitor size={18} />, description: "Corporate showcase for industrial elevator products and lead gen.", techStack: ["HTML5", "JS"], link: "#", image: "/portfolio/sunshine.png" },
    { title: "ONXT Learning", category: "SaaS", icon: <Smartphone size={18} />, description: "Comprehensive e-learning ecosystem for students and tutors.", techStack: ["Vue.js", "Django"], link: "#", image: "/portfolio/onxt.png" },
    { title: "Shubham Enterprises", category: "E-Commerce", icon: <ShoppingBag size={18} />, description: "Massive scale store with custom backend and payment gateways.", techStack: ["Shopify", "GraphQL"], link: "#", image: "/portfolio/shubham.png" },
    { title: "Weblord", category: "Website", icon: <Globe size={18} />, description: "Modern, animated portfolio designed for high-end web showcases.", techStack: ["Framer Motion"], link: "#", image: "/portfolio/weblord.png" },
    { title: "Preeti Plastic", category: "Branding", icon: <Search size={18} />, description: "Corporate identity for a major manufacturing firm.", techStack: ["WordPress", "PHP"], link: "#", image: "/portfolio/preeti-plastic.png" }
];

const categories = ["All", "Website", "Branding", "SaaS", "E-Commerce"];

const PortfolioCard = ({ item, index }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: index * 0.05 }}
            className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
        >
            {/* Image Preview with Auto-Scroll on Hover */}
            <div className="relative h-60 overflow-hidden bg-slate-50">
                <motion.img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-auto object-cover object-top transition-transform duration-[7000ms] ease-in-out group-hover:-translate-y-[calc(100%-15rem)]"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x800/6366f1/ffffff?text=Project+Preview'; }}
                />
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase text-slate-800 shadow-sm">
                        {item.icon} {item.category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.techStack.map(tech => (
                        <span key={tech} className="px-2 py-0.5 bg-slate-50 text-slate-400 text-[9px] font-bold uppercase rounded border border-slate-100">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Project Link */}
                <motion.a 
                    href={item.link}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-tight"
                >
                    View Project <ExternalLink size={14} />
                </motion.a>
            </div>
        </motion.div>
    );
};

const Portfolio = () => {
    const [filter, setFilter] = useState("All");
    const filteredItems = filter === "All" ? portfolioItems : portfolioItems.filter(i => i.category === filter);

    return (
        <section className="bg-[#F8FAFC] py-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                
                {/* --- Animated Header --- */}
                <div className="text-center mb-16">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 mb-4"
                    >
                        Our Recent <span className="text-blue-600">Work</span>
                    </motion.h1>
                    <p className="text-slate-500 max-w-xl mx-auto text-lg">
                        Innovative solutions delivered across 8+ specialized industries.
                    </p>
                </div>

                {/* --- Filter Bar --- */}
                <div className="flex justify-center flex-wrap gap-2 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                                filter === cat 
                                ? 'bg-blue-600 text-white shadow-lg' 
                                : 'bg-white text-slate-500 hover:bg-slate-50'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* --- Multi-Card Grid --- */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <PortfolioCard key={item.title} item={item} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;