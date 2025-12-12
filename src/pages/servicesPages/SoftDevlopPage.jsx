import React from "react";
import { motion } from "framer-motion";
import { 
    Code, Monitor, DollarSign, Cloud, Settings, Zap, 
    Layers, Database, Shield, Users, Globe, Smartphone,
    Check, Phone, Mail, TrendingUp 
} from "lucide-react"; 

// --- Styling & Config ---
// Accent Color: Deep Blue (#3B82F6)
// Text Color: Deep Blue (#1F2937)

// --- Pricing Card Data ---
const pricingPlans = [
    {
        icon: Settings,
        title: "Proof of Concept (POC)",
        subtitle: "Focus: Idea Validation & Core Logic Testing",
        price: "₹1,80,000", 
        features: [
            "Detailed Requirement Elicitation",
            "Functional Wireframes & Prototypes",
            "Single Core Feature Implementation",
            "2-Week Iteration Cycle",
        ],
        accent: "text-gray-500",
        shadow: "shadow-gray-300"
    },
    {
        icon: Zap,
        title: "Agile Development (Recommended)",
        subtitle: "Focus: Feature Development & Scalability",
        price: "₹4,00,000+", // Example Price
        features: [
            "All POC features included",
            "Dedicated Full-Stack Team (3 members)",
            "Continuous Integration/Deployment (CI/CD)",
            "Comprehensive QA & Automated Testing",
        ],
        accent: "text-[#3B82F6]",
        shadow: "shadow-[#3B82F6]/50" 
    },
    {
        icon: Cloud,
        title: "Enterprise Platform",
        subtitle: "Focus: High Availability & Digital Transformation",
        price: "Custom Quote",
        features: [
            "All Agile features included",
            "Managed DevOps & Cloud Infrastructure",
            "Advanced Security & Compliance Audit",
            "Dedicated Technical Account Manager",
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
            
            {/* Left Part: Text and Heading (Software Dev Focus) */}
            <motion.div 
                className="space-y-4"
                variants={itemVariants}
            >
                <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    Bespoke Digital Solutions
                </h2>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1F2937]">
                    Custom Software: From <span className="text-[#3B82F6]">Strategy to Deployment</span>
                </h1>
                <p className="text-lg text-gray-600">
                    We engineer high-performance, scalable, and secure software solutions tailored precisely to your unique business logic and operational needs, utilizing modern full-stack technologies.
                </p>
                <motion.a 
                    href="#core-services"
                    className="inline-block mt-4 px-6 py-3 bg-[#3B82F6] text-white font-semibold rounded-lg shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    Explore Our Methodology
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
                        src="/images/app_development_code.jpg" 
                        alt="Software architecture diagram on a screen"
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
                    alt="DevOps Continuous Integration and Deployment pipeline"
                    className="w-full max-w-md rounded-xl shadow-2xl border-4 border-[#1F2937]"
                />
            </motion.div>

            {/* Right Part: Related Software Dev Information (Agile/DevOps) */}
            <motion.div 
                className="space-y-4 order-1 md:order-2"
                variants={itemVariants}
            >
                <h3 className="text-4xl font-extrabold text-[#1F2937]">
                    Agile Delivery & <span className="text-[#3B82F6]">Modern DevOps</span>
                </h3>
                <p className="text-lg text-gray-600">
                    We adhere strictly to **Agile methodology**, ensuring transparency, flexibility, and continuous delivery. Our integrated **DevOps practices** guarantee rapid, reliable, and secure deployment of every feature.
                </p>
                <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 pl-4">
                    <li>**Sprint Cycles:** Deliberate, predictable feature releases every 2-4 weeks.</li>
                    <li>**CI/CD:** Automated testing and deployment to eliminate manual errors.</li>
                    <li>**Feedback Loop:** You are involved at every stage for constant alignment.</li>
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
        { icon: Monitor, title: "Web Application Development", description: "Building robust, scalable, and responsive custom web portals and applications." },
        { icon: Smartphone, title: "Mobile & Hybrid Solutions", description: "Seamless development for iOS, Android, and cross-platform needs." },
        { icon: Layers, title: "Legacy System Modernization", description: "Updating outdated systems to modern, maintainable technology stacks." },
        { icon: Database, title: "Database Architecture", description: "Designing optimal data structures for speed, integrity, and regulatory compliance." },
        { icon: Cloud, title: "Cloud Migration & Setup", description: "Expert setup and management on AWS, Azure, and Google Cloud Platform." },
        { icon: Shield, title: "Security & Penetration Testing", description: "Proactive vulnerability assessment and hardening of the application layer." },
        { icon: Users, title: "System Integration (APIs)", description: "Connecting your new software seamlessly with existing internal and external systems." },
        { icon: TrendingUp, title: "Performance Optimization", description: "Tuning applications and infrastructure for maximum speed and efficiency under load." },
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
                    Our <span className="text-[#3B82F6]">End-to-End Development Pillars</span>
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] mb-4 text-center">
                Software Development <span className="text-[#3B82F6]">Engagement Models</span>
            </h2>
            <p className="text-xl text-gray-500 mb-16 text-center max-w-3xl mx-auto">
                We offer flexible, clear models based on project scope, team size, and the required level of infrastructure management.
            </p>

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

                        {/* Price */}
                        <div className="text-center mb-8 border-b pb-4">
                            <p className="text-5xl font-extrabold text-[#1F2937]">{plan.price}</p>
                            <p className="text-sm text-gray-500">starting investment (Fixed Cost/Monthly Retainer)</p>
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
                                Schedule Strategy Session
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
            <h2 className="text-3xl font-bold mb-4 text-[#1F2937]">Ready for Innovation?</h2>
            <p className="text-lg text-gray-600 mb-6">
                Let’s build the next generation of software for your business. Start with a free consultation on architecture and feasibility.
            </p>
            <motion.a 
                href="mailto:webvisionsoftech@gmail.com?subject=Software%20Development%20Inquiry%20from%20Website&body=Hello%2C%20I%20am%20interested%20in%20your%20Custom%20Software%20Development%20services.%20My%20project%20is%20..." 
                id="contact-form"
                className="inline-block px-8 py-4 text-xl font-bold rounded-full text-white bg-[#3B82F6] 
                            transition duration-300 hover:bg-blue-600 shadow-lg"
                
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                START YOUR PROJECT
            </motion.a> 
        </div>
    </section>
);


// ----------------------------------------------------------------------
// MAIN COMPONENT: SoftDevPage
// ----------------------------------------------------------------------

const SoftDevPage = () => {
    return (
        <div className="min-h-screen bg-white text-[#1F2937] font-sans">
            
            {/* 1. Hero Content/Image Section */}
            <HeroSection />
            
            {/* 2. Content/Image Detail Section (Agile/DevOps Focus) */}
            <MethodologySection />
            
            
            {/* 4. Card Grid Section (Core Services) */}
            <CardGridSection />

            {/* 5. Pricing Section */}
            <PricingSection />

            {/* 6. Contact Form Section (CTA) */}
            <ContactSection />
            
        </div>
    );
};

export default SoftDevPage;