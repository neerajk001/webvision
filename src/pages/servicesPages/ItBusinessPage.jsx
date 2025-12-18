import React from "react";
import { motion } from "framer-motion";
import InlineContactForm from "../../components/InlineContactForm";
import { 
    Building, Laptop, Network, Cloud, Settings, Zap, 
    Layers, Database, Shield, Users, Globe, Server,
    Check, Phone, Mail, TrendingUp 
} from "lucide-react"; 

// --- Styling & Config ---
// Accent Color: Deep Blue (#3B82F6)
// Text Color: Deep Blue (#1F2937)

// --- Pricing Card Data ---
const pricingPlans = [
    {
        icon: Settings,
        title: "IT Infrastructure Setup",
        subtitle: "Focus: Basic Business IT Needs",
        features: [
            "Network Setup & Configuration",
            "Hardware Installation & Setup",
            "Basic Security Implementation",
            "Initial Staff Training",
        ],
        accent: "text-gray-500",
        shadow: "shadow-gray-300"
    },
    {
        icon: Zap,
        title: "Complete IT Solutions (Recommended)",
        subtitle: "Focus: Comprehensive Business Technology",
        features: [
            "All Infrastructure services included",
            "Cloud Migration & Management",
            "Advanced Security & Monitoring",
            "24/7 Technical Support",
        ],
        accent: "text-[#3B82F6]",
        shadow: "shadow-[#3B82F6]/50" 
    },
    {
        icon: Cloud,
        title: "Enterprise IT Management",
        subtitle: "Focus: Large-Scale Business Operations",
        features: [
            "All Complete IT features included",
            "Multi-location IT Management",
            "Disaster Recovery Planning",
            "Strategic IT Consulting",
        ],
        accent: "text-gray-500",
        shadow: "shadow-gray-300"
    }
];

// --- Framer Motion Variants ---
const containerVariants = {
    visible: { 
        transition: { staggerChildren: 0.1 }
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

// ----------------------------------------------------------------------
// 1. Hero Content/Image Split Section (Left Text, Right Image)
// ----------------------------------------------------------------------
const HeroSection = () => (
    <motion.section 
        className="py-20 px-4 sm:px-10 bg-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
    >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Part: Text and Heading (IT Business Focus) */}
            <motion.div 
                className="space-y-4"
                variants={itemVariants}
            >
                <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    Complete IT Business Solutions
                </h2>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1F2937]">
                    IT Business Services: From <span className="text-[#3B82F6]">Setup to Management</span>
                </h1>
                <p className="text-lg text-gray-600">
                    We provide comprehensive IT business solutions to help companies establish, manage, and optimize their technology infrastructure for maximum productivity and growth.
                </p>
                <motion.a 
                    href="#core-services"
                    className="inline-block mt-4 px-6 py-3 bg-[#3B82F6] text-white font-semibold rounded-lg shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    Explore Our Solutions
                </motion.a>
            </motion.div>

            {/* Right Part: Image  */}
            <motion.div 
                className="flex justify-center"
                variants={itemVariants}
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="w-full max-w-lg h-full flex items-center justify-center">
                    <img 
                        src="/images/techstack.png" 
                        alt="IT business infrastructure and solutions"
                        className="w-full h-full rounded-xl shadow-2xl border-4 border-[#3B82F6]"
                    /> 
                </div>
            </motion.div>

        </div>
    </motion.section>
);


// ----------------------------------------------------------------------
// 2. Content/Image Split Section (Left Image, Right Content)
// ----------------------------------------------------------------------
const MethodologySection = () => (
    <motion.section 
        className="py-20 px-4 sm:px-10 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
    >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Part: Image  */}
            <motion.div 
                className="flex justify-center order-2 md:order-1"
                variants={itemVariants}
                whileHover={{ scale: 1.02, rotate: -0.5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img 
                    src="/images/app_analytics_dashboard.jpg" 
                    alt="IT business management and monitoring"
                    className="w-full max-w-md rounded-xl shadow-2xl border-4 border-[#1F2937]"
                />
            </motion.div>

            {/* Right Part: Related IT Business Information */}
            <motion.div 
                className="space-y-4 order-1 md:order-2"
                variants={itemVariants}
            >
                <h3 className="text-4xl font-extrabold text-[#1F2937]">
                    Strategic IT Management & <span className="text-[#3B82F6]">Business Growth</span>
                </h3>
                <p className="text-lg text-gray-600">
                    Our IT business services focus on aligning technology with your business objectives. We provide strategic planning, implementation, and ongoing management to ensure your IT infrastructure supports growth.
                </p>
                <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 pl-4">
                    <li>**Business Alignment:** IT solutions designed to support your business goals.</li>
                    <li>**Scalable Infrastructure:** Technology that grows with your business needs.</li>
                    <li>**Cost Efficiency:** Optimized IT spending with maximum return on investment.</li>
                </ul>
            </motion.div>

        </div>
    </motion.section>
);


// ----------------------------------------------------------------------
// 4. Digital Pillars Card Grid (8 Cards, 2 Rows)
// ----------------------------------------------------------------------
const PillarCard = ({ icon: Icon, title, description }) => (
    <motion.div
        className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
        variants={itemVariants}
        whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <Icon className="w-10 h-10 mb-3 text-[#3B82F6]" />
        <h4 className="text-xl font-bold mb-2 text-[#1F2937]">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
    </motion.div>
);

const CardGridSection = () => {
    const coreServices = [
        { icon: Building, title: "IT Infrastructure Planning", description: "Strategic planning and design of complete IT infrastructure for businesses." },
        { icon: Network, title: "Network Setup & Management", description: "Complete network installation, configuration, and ongoing management." },
        { icon: Server, title: "Server Solutions", description: "Server setup, maintenance, and optimization for business operations." },
        { icon: Database, title: "Data Management", description: "Database design, implementation, and backup solutions for business data." },
        { icon: Cloud, title: "Cloud Integration", description: "Seamless integration with cloud services for scalability and flexibility." },
        { icon: Shield, title: "Cybersecurity Solutions", description: "Comprehensive security measures to protect business data and systems." },
        { icon: Users, title: "IT Training & Support", description: "Staff training and ongoing technical support for all IT systems." },
        { icon: TrendingUp, title: "Performance Monitoring", description: "Continuous monitoring and optimization of IT systems and performance." },
    ];

    return (
        <motion.section 
            className="py-20 px-4 sm:px-10 bg-gray-50"
            id="core-services"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                <motion.h2 className="text-4xl font-extrabold text-[#1F2937] mb-12 text-center" variants={itemVariants}>
                    Our <span className="text-[#3B82F6]">IT Business Solutions</span>
                </motion.h2>
                
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants}>
                    {coreServices.map((pillar, index) => (
                        <PillarCard key={index} {...pillar} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

// ----------------------------------------------------------------------
// 5. Three-Card Pricing Section
// ----------------------------------------------------------------------
const PricingSection = () => (
    <motion.section 
        className="py-24 px-4 sm:px-10 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
    >
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] mb-16 text-center">
                IT Business <span className="text-[#3B82F6]">Service Packages</span>
            </h2>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={containerVariants}
            >
                {pricingPlans.map((plan, index) => (
                    <motion.div 
                        key={index}
                        className={`p-8 bg-white rounded-xl shadow-xl transition duration-300 border-t-8 border-b-8 ${plan.accent.replace('text', 'border')} ${plan.shadow} flex flex-col`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -8, boxShadow: `0px 15px 30px ${plan.shadow.split('/')[0].split('-')[1]}/80` }}
                    >
                        {/* Header */}
                        <div className="text-center mb-6">
                            <plan.icon className={`w-12 h-12 mx-auto mb-3 ${plan.accent}`} />
                            <h3 className="text-3xl font-bold text-[#1F2937]">{plan.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{plan.subtitle}</p>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-3 flex-grow">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-gray-700">
                                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 text-[#3B82F6]`} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <div className="mt-8">
                            <a 
                                href="#contact-form" 
                                className={`block w-full text-center py-3 rounded-lg font-semibold transition duration-300 
                                            bg-[#3B82F6] text-white hover:bg-blue-600 shadow-md`}
                            >
                                Get IT Solutions
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </motion.section>
);

// ----------------------------------------------------------------------
// 6. Contact Form Section (CTA)
// ----------------------------------------------------------------------
const ContactSection = () => (
    <section className="py-20 px-4 sm:px-10 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto p-10 bg-white rounded-xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1F2937]">Ready to Transform Your IT?</h2>
            <p className="text-lg text-gray-600 mb-6">
                Let's build a robust IT infrastructure that supports your business growth. Contact us for a comprehensive IT assessment.
            </p>
              <InlineContactForm targetEmail="webvisionsoftech@gmail.com" />
        </div>
    </section>
);


// ----------------------------------------------------------------------
// MAIN COMPONENT: ITBusinessPage
// ----------------------------------------------------------------------

const ITBusinessPage = () => {
    return (
        <div className="min-h-screen bg-white text-[#1F2937] font-sans">
            
            {/* 1. Hero Content/Image Section */}
            <HeroSection />
            
            {/* 2. Content/Image Detail Section */}
            <MethodologySection />
            
            {/* 3. Card Grid Section (Core Services) */}
            <CardGridSection />

            {/* 4. Pricing Section */}
            <PricingSection />

            {/* 5. Contact Form Section (CTA) */}
            <ContactSection />
            
        </div>
    );
};

export default ITBusinessPage;