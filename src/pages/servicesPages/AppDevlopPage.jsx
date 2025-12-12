import React from "react";
import { motion } from "framer-motion";
import { 
    Smartphone, Zap, TrendingUp, Code, DollarSign, Shield,
    Monitor, Users, Cloud, Aperture, Settings, Database,
    Check, Phone, Mail, Globe 
} from "lucide-react"; 

// --- Styling & Config ---
// Accent Color: Deep Blue (#3B82F6)
// Text Color: Deep Blue (#1F2937)

// --- Pricing Card Data ---
const pricingPlans = [
    {
        icon: Smartphone,
        title: "MVP Launchpad",
        subtitle: "Focus: Core Functionality & Rapid Deployment",
        price: "₹50,000", // Example Price
        features: [
            "Cross-Platform Flutter/React Native",
            "Core Feature Development (up to 5 screens)",
            "Basic Backend (Firebase/Supabase setup)",
            "3rd Party Integration (e.g., Auth)",
        ],
        accent: "text-gray-500",
        shadow: "shadow-gray-300"
    },
    {
        icon: Zap,
        title: "Growth Scale (Recommended)",
        subtitle: "Focus: Feature Richness & User Experience",
        price: "₹85,000+", // Example Price
        features: [
            "All Launchpad features included",
            "Advanced UI/UX Customization",
            "Custom API Development & Integration",
            "App Store/Play Store Optimization (ASO)",
        ],
        accent: "text-[#3B82F6]", // Primary Blue
        shadow: "shadow-[#3B82F6]/50" 
    },
    {
        icon: DollarSign,
        title: "Enterprise Ecosystem",
        subtitle: "Focus: High Traffic & Complex Systems",
        price: "₹1,20,000+", 
        features: [
            "All Growth features included",
            "Dedicated Cloud Infrastructure (AWS/Azure)",
            "Comprehensive Security Audit & Testing",
            "SLA and Dedicated DevOps Support",
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
// 3. NEW: Image Mosaic Section (4 Images, Custom Widths)
// ----------------------------------------------------------------------
const ImageMosaicSection = () => (
    <motion.section
        className="py-16 px-4 sm:px-10 bg-white flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
    >
        {/* Outer Container: 90% width */}
        <div className="w-[60%] max-w-5xl mx-auto">
            <motion.h2 
                className="text-3xl font-extrabold text-[#1F2937] mb-8 text-center" 
                variants={itemVariants}
            >
                Our Apps <span className="text-[#3B82F6]">Developments</span>
            </motion.h2>

            <motion.div className="space-y-4" variants={containerVariants}>
                
                {/* Row 1: Left 40%, Right 60% */}
                <div className="flex gap-4">
                    <motion.div className="w-[40%]" variants={itemVariants} whileHover={{ scale: 1.03 }}>
                        <img 
                            src="/images/app_design_small.jpg" // Placeholder 1
                            alt="Mobile UI Design Mockup"
                            className="w-full h-full object-cover rounded-xl shadow-lg aspect-[16/9]"
                        />
                    </motion.div>
                    <motion.div className="w-[60%]" variants={itemVariants} whileHover={{ scale: 1.03 }}>
                        <img 
                            src="/images/app_development_code.jpg" // Placeholder 2
                            alt="Code on screen for app development"
                            className="w-full h-full object-cover rounded-xl shadow-lg aspect-[16/9]"
                        />
                    </motion.div>
                </div>

                {/* Row 2: Left 60%, Right 40% */}
                <div className="flex gap-4">
                    <motion.div className="w-[60%]" variants={itemVariants} whileHover={{ scale: 1.03 }}>
                        <img 
                            src="/images/app_analytics_dashboard.jpg" // Placeholder 3
                            alt="App performance analytics dashboard"
                            className="w-full h-full object-cover rounded-xl shadow-lg aspect-[16/9]"
                        />
                    </motion.div>
                    <motion.div className="w-[40%]" variants={itemVariants} whileHover={{ scale: 1.03 }}>
                        <img 
                            src="/images/app_launch_phone.jpg" // Placeholder 4
                            alt="Hand holding phone with a launched app"
                            className="w-full h-full object-cover rounded-xl shadow-lg aspect-[16/9]"
                        />
                    </motion.div>
                </div>

            </motion.div>
        </div>
    </motion.section>
);

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
            
            {/* Left Part: Text and Heading (App Dev Focus) */}
            <motion.div 
                className="space-y-4"
                variants={itemVariants}
            >
                <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    Your Digital Product Vision
                </h2>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1F2937]">
                    Building Mobile Apps: From <span className="text-[#3B82F6]">Idea to App Store</span>
                </h1>
                <p className="text-lg text-gray-600">
                    We specialize in high-performance cross-platform mobile development using Flutter and React Native, ensuring native-like speed and a unified experience across iOS and Android.
                </p>
                <motion.a 
                    href="#core-services"
                    className="inline-block mt-4 px-6 py-3 bg-[#3B82F6] text-white font-semibold rounded-lg shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    View Core Services
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
                        src="/images/appdevelopment.png" 
                        alt="Mobile app development illustration showing iOS and Android screens"
                        className="w-full h-full rounded-xl shadow-2xl border-0 border-[#3B82F6]"
                    /> 
                </div>
            </motion.div>

        </div>
    </motion.section>
);


// ----------------------------------------------------------------------
// 2. Content/Image Split Section (Left Image, Right Content)
// ----------------------------------------------------------------------
const TechStackSection = () => (
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
                whileHover={{ scale: 1.02, rotate: -0.8 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img 
                    src="/images/techstack.png" // Placeholder image for Tech Stack
                    alt="Flutter and React Native frameworks"
                    className="w-full  rounded-xl shadow-2xl border-0 border-[]"
                />
            </motion.div>

            {/* Right Part: Related App Dev Information */}
            <motion.div 
                className="space-y-4 order-1 md:order-2"
                variants={itemVariants}
            >
                <h3 className="text-4xl font-extrabold text-[#1F2937]">
                    Cross-Platform Mastery: <span className="text-[#3B82F6]">Flutter & React Native</span>
                </h3>
                <p className="text-lg text-gray-600">
                    Choosing the right technology is crucial. We leverage **React Native** and **Flutter** to build powerful, single-codebase applications, cutting development time and costs by up to 40%.
                </p>
                <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 pl-4">
                    <li>**Speed:** Faster time-to-market with code reusability.</li>
                    <li>**Performance:** Near-native performance and seamless UX.</li>
                    <li>**Maintenance:** Simplified updates and bug fixes across platforms.</li>
                </ul>
            </motion.div>

        </div>
    </motion.section>
);

// ----------------------------------------------------------------------
// 3. Digital Pillars Card Grid (8 Cards, 2 Rows)
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
        { icon: Code, title: "Custom UI/UX Design", description: "Intuitive, clean interfaces built for maximum user engagement and retention." },
        { icon: Settings, title: "Backend API Integration", description: "Robust and scalable API development for secure data handling and high traffic." },
        { icon: Database, title: "Database Architecture", description: "Designing efficient database structures (SQL/NoSQL) tailored to application needs." },
        { icon: Cloud, title: "Cloud Deployment", description: "Optimizing hosting and scaling on AWS, Azure, or Google Cloud Platform." },
        { icon: Aperture, title: "Quality Assurance (QA)", description: "Rigorous testing protocols for stability, security, and bug-free performance." },
        { icon: Globe, title: "App Store Optimization (ASO)", description: "Strategy for better visibility, downloads, and conversion on app marketplaces." },
        { icon: Users, title: "Post-Launch Support", description: "Continuous monitoring, maintenance, and feature updates after deployment." },
        { icon: Monitor, title: "Native Mobile Development", description: "Specialized services for pure Swift/Kotlin projects where native performance is mandatory." },
    ];

    return (
        <motion.section 
            className="py-20 px-4 sm:px-10 bg-white"
            id="core-services"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                <motion.h2 className="text-4xl font-extrabold text-[#1F2937] mb-12 text-center" variants={itemVariants}>
                    Our <span className="text-[#3B82F6]">Core App Development Services</span>
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
// 4. Three-Card Pricing Section
// ----------------------------------------------------------------------
const PricingSection = () => (
    <motion.section 
        className="py-24 px-4 sm:px-10 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
    >
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] mb-4 text-center">
                Transparent <span className="text-[#3B82F6]">Development Packages</span>
            </h2>
            <p className="text-xl text-gray-500 mb-16 text-center max-w-3xl mx-auto">
                Pricing varies based on complexity, feature set, and maintenance requirements. All quotes are upfront and fixed scope.
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
                            <p className="text-sm text-gray-500">starting investment</p>
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
                                Start Discovery Call
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </motion.section>
);

// ----------------------------------------------------------------------
// 5. Contact Form Section (CTA)
// ----------------------------------------------------------------------
const ContactSection = () => (
    <section className="py-20 px-4 sm:px-10 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto p-10 bg-gray-50 rounded-xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1F2937]">Ready to Build Your App?</h2>
            <p className="text-lg text-gray-600 mb-6">
                Let's discuss your project's scope, technology stack, and timeline. Get a free consultation today.
            </p>
            <motion.a 
                href="mailto:webvisionsoftech@gmail.com?subject=App%20Development%20Inquiry&body=Hello%2C%20I%20am%20interested%20in%20your%20Mobile%20App%20Development%20services.%20My%20project%20is%20..." 
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
// MAIN COMPONENT: AppDevlopPage
// ----------------------------------------------------------------------

const AppDevlopPage = () => {
    return (
        <div className="min-h-screen bg-white text-[#1F2937] font-sans">

          {/* 3. NEW: Image Mosaic Section */}
            <ImageMosaicSection />
            
            {/* 1. Hero Content/Image Section */}
            <HeroSection />
            
            {/* 2. Content/Image Detail Section (Tech Stack) */}
            <TechStackSection />
            
            {/* 3. Card Grid Section (Core Services) */}
            <CardGridSection />

            {/* 4. Pricing Section */}
            <PricingSection />

            {/* 5. Contact Form Section (CTA) */}
            <ContactSection />
            
        </div>
    );
};

export default AppDevlopPage;