import React, {useEffect} from "react";
import { motion } from "framer-motion";
import InlineContactForm from "../../components/InlineContactForm";
import { 
    Search, Target, TrendingUp, Zap, Smartphone, Monitor as Laptop, DollarSign, Shield,
    Link, Code, Users, Globe , Check, Phone, Mail, Monitor as LaptopIcon // Using Monitor as LaptopIcon for clarity
} from "lucide-react"; 

// --- Styling & Config ---
// Accent Color: Vibrant Orange (#FF8C00)
// Text Color: Deep Blue (#1F2937)




const ImageBannerSection = () => (
  useEffect(() => {
  window.scrollTo(0, 0);
}, []),
   <motion.section
    className="py-16 px-4 sm:px-10 bg-white flex justify-center"
    // ... animation props ...
>
    {/* Container: Use a taller aspect ratio (e.g., aspect-4/3) */}
    <motion.div 
        className="w-[90%] max-w-6xl aspect-9/3" 
        whileHover={{ scale: 1.01 }}
    >
        <img 
            src="/images/native-banner.avif" 
            alt="Image Description"
            // Image: Ensure it covers the new aspect ratio size
            className="w-full h-full object-cover rounded-xl shadow-2xl border-0 border-[]/50"
        />
    </motion.div>
</motion.section>
);


// --- Pricing Card Data ---
const pricingPlans = [
    {
        icon: Shield,
        title: "Local SEO Starter",
        subtitle: "Focus: Local Ranking & Visibility",
        features: [
            "Comprehensive Local Audit",
            "Google Business Profile Setup/Optimization",
            "5 Core Web Vitals Fixes",
            "Monthly Local Ranking Report",
        ],
        accent: "text-blue-500",
        shadow: "shadow-blue-300"
    },
    {
        icon: Zap,
        title: "Growth Accelerator (Recommended)",
        subtitle: "Focus: National Growth & Technical SEO",
        features: [
            "All Starter features included",
            "Full Technical SEO Audit & Implementation",
            "Content Strategy & Keyword Mapping",
            "Monthly Backlink Outreach (4 Links)",
        ],
        accent: "text-[#3B82F6]", 
        shadow: "shadow-[#3B82F6]/50" 
    },
    {
        icon: DollarSign,
        title: "Enterprise E-commerce",
        subtitle: "Focus: High Volume & Global Authority",
        features: [
            "All Growth features included",
            "Dedicated ASO & Mobile App Optimization",
            "Advanced Structured Data Implementation",
            "Quarterly E-E-A-T Strategy Session",
        ],
        accent: "text-blue-500",
        shadow: "shadow-blue-300"
    }
];

// --- Framer Motion Variants ---
const cardContainerVariants = {
    visible: { 
        transition: { 
            staggerChildren: 0.1,
        }
    },
};

const cardItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const containerVariants = {
    visible: { 
        transition: { 
            staggerChildren: 0.1,
        }
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};




// ----------------------------------------------------------------------
// THE NEW COMPONENT: Three-Card Pricing Section
// ----------------------------------------------------------------------
const PricingSection = () => (
    <motion.section 
        className="py-24 px-4 sm:px-10 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardContainerVariants}
    >
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] mb-16 text-center">
                Our Transparent <span className="text-[#3B82F6]">Service Charges</span>
            </h2>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={cardContainerVariants}
            >
                {pricingPlans.map((plan, index) => (
                    <motion.div 
                        key={index}
                        className={`p-8 bg-white rounded-xl shadow-xl transition duration-300 border-t-8 border-b-8 ${plan.accent.replace('text', 'border')} ${plan.shadow} flex flex-col`}
                        variants={cardItemVariants}
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
                                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.accent}`} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button Placeholder */}
                        <div className="mt-8">
                            <a 
                                href="/contact" 
                                className={`block w-full text-center py-3 rounded-lg font-semibold transition duration-300 
                                            ${plan.accent.includes('#FF8C00') ? 'bg-[#3B82F6] text-white hover:blue-500' : 'bg-gray-200 text-[#1F2937] hover:bg-blue-500'}`}
                            >
                                Select Plan
                            </a>
                        </div>
                    </motion.div>
                ))}
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
            
            {/* Left Part: Text and Heading (SEO Focus) */}
            <motion.div 
                className="space-y-4"
                variants={itemVariants}
            >
                <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    Your Digital Growth Engine
                </h2>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1F2937]">
                    Mastering Search: From <span className="text-[#3B82F6]">Code to Conversions</span>
                </h1>
                <p className="text-lg text-gray-600">
                    We specialize in technical SEO that aligns perfectly with modern search algorithms. Our strategies cover mobile responsiveness, Core Web Vitals, and semantic markup to build long-term authority.
                </p>
                <motion.a 
                    href="#card-grid"
                    className="inline-block mt-4 px-6 py-3 bg-[#3B82F6] text-white font-semibold rounded-lg shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(255, 140, 0, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    Explore Our Pillars
                </motion.a>
            </motion.div>

            {/* Right Part: Image */}
            <motion.div 
                className="flex justify-center"
                variants={itemVariants}
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {/* --- CORRECTED Image Path Location --- */}
                {/* The path should start from the root (public folder) and use forward slashes / */}
                <div className="w-full max-w-lg h-full flex items-center justify-center">
                    <img 
                        src="/images/seomastering.png" // Corrected path to start from public folder
                        alt="SEO strategy illustration on laptop and mobile"
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
const ContentImageSection = () => (
    <motion.section 
        className="py-20 px-4 sm:px-10 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
    >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Part: Image */}
            <motion.div 
                className="flex justify-center order-2 md:order-1"
                variants={itemVariants}
                whileHover={{ scale: 1.02, rotate: -0.5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {/* --- CORRECTED Image Path Location --- */}
                <img 
                    src="/images/headseoWix.avif" // Corrected path to start from public folder
                    alt="Detailed optimization dashboard"
                    className="w-full max-w-md rounded-xl shadow-2xl border-4 border-[#1F2937]"
                />
            </motion.div>

            {/* Right Part: Related SEO Information */}
            <motion.div 
                className="space-y-4 order-1 md:order-2"
                variants={itemVariants}
            >
                <h3 className="text-4xl font-extrabold text-[#1F2937]">
                    Technical Audit & <span className="text-[#3B82F6]">Performance Fixes</span>
                </h3>
                <p className="text-lg text-gray-600">
                    We start with a comprehensive audit of your site's codebase and architecture. This ensures search engines can efficiently crawl, index, and rank your content without technical barriers.
                </p>
                <p className="text-lg text-gray-600">
                    Our process commences with a **thorough inspection** of your existing **site infrastructure and underlying source code**. This step is vital to confirm compliance and **maximize the efficiency** with which search engines can **crawl, catalogue, and elevate** your web presence without hindrance.
                </p>
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
    const digitalPillars = [
        { icon: Smartphone, title: "Mobile SEO Focus", description: "Dedicated optimization for mobile-first indexing and responsive design." },
        { icon: Laptop, title: "Desktop Performance", description: "Ensuring blazing fast load times and clean code for traditional desktop users." },
        { icon: Search, title: "Algorithmic Compliance", description: "Strategies that align with Google's latest core updates and guidelines." },
        { icon: TrendingUp, title: "Voice Search Optimization", description: "Optimizing content for conversational, question-based search queries." },
        { icon: Target, title: "A/B Testing Content", description: "Iterative testing of titles, metas, and copy to maximize CTR and ranking." },
        { icon: Users, title: "E-E-A-T Signals", description: "Building Experience, Expertise, Authority, and Trust across your domain." },
        { icon: Globe, title: "Local SEO Mastery", description: "Dominating local map packs and 'near me' searches for physical businesses." },
        { icon: Link, title: "Backlink Acquisition", description: "Ethical and high-quality link building to boost domain authority." },
    ];

    return (
        <motion.section 
            className="py-20 px-4 sm:px-10 bg-white"
            id="card-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                <motion.h2 className="text-4xl font-extrabold text-[#1F2937] mb-12 text-center" variants={itemVariants}>
                    The 8 Pillars of <span className="text-[#3B82F6]">Digital Authority</span>
                </motion.h2>
                
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants}>
                    {digitalPillars.map((pillar, index) => (
                        <PillarCard key={index} {...pillar} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};


// ----------------------------------------------------------------------
// MAIN COMPONENT: SeoPage
// ----------------------------------------------------------------------

const SeoPage = () => {
    return (
        <div className="min-h-screen bg-white text-[#1F2937] font-sans">
            
            <ImageBannerSection />

            {/* 1. Hero Content/Image Section */}
            <HeroSection />
            
            {/* 2. Content/Image Detail Section */}
            <ContentImageSection />
            
            {/* 3. Pricing Section */}
            <PricingSection />

            {/* 4. Card Grid Section */}
            <CardGridSection />

            
            {/* 5. Contact Form Section */}
            <section className="py-20 px-4 sm:px-10 bg-gray-50 border-t border-gray-200">
                <div className="max-w-3xl mx-auto p-10 bg-white rounded-xl shadow-2xl text-center">
                    <h2 className="text-3xl font-bold mb-4 text-[#1F2937]">Ready to Scale?</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Contact us now to get your free SEO audit and consultation.
                    </p>
                    {/* Updated CTA button */}
                       <InlineContactForm targetEmail="webvisionsoftech@gmail.com" /> 
                </div>
            </section>
            
        </div>
    );
};

export default SeoPage;