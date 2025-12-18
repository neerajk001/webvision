import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ===================== DATA ===================== */
const slideData = [
  { id: 1, text: "Software Development", description: "Tailor-made solutions for complex business challenges.", pageUrl: "/servicesPages/SoftDevPage", imgUrl: "/serv.png" },
  { id: 2, text: "Website Design", description: "Responsive and high-performance websites that convert.", pageUrl: "/servicesPages/WebDevPage", imgUrl: "/images/websitehm.png" },
  { id: 3, text: "Mobile Apps", description: "Next-gen iOS and Android applications for your users.", pageUrl: "/servicesPages/appDev", imgUrl: "/images/app_analytics_dashboard.jpg" },
  { id: 4, text: "IT Consulting", description: "Strategic technology planning to scale your enterprise.", pageUrl: "/servicesPages/OutConsultPage", imgUrl: "/hero.png" },
  { id: 5, text: "Business Infrastructure", description: "Secure and scalable server environments for IT growth.", pageUrl: "/servicesPages/ITBusinessPage", imgUrl: "/images/itserver.png" },
  { id: 6, text: "CRM Systems", description: "Manage customer relationships with integrated data tools.", pageUrl: "/servicesPages/ERPCrmPage", imgUrl: "/images/seomastering.png" },
  { id: 7, text: "Digital Services", description: "End-to-end digital transformation and support.", pageUrl: "/service", imgUrl: "/images/headseoWix.avif" },
  { id: 8, text: "Expert FAQ", description: "Answers to your most critical technology questions.", pageUrl: "/about", imgUrl: "/images/FAQ.png" },
];

/* ===================== ANIMATION VARIANTS ===================== */
const slideVariants = {
  enter: { x: "100%", opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

/* ===================== MAIN SECTION ===================== */
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-swipe logic: Change slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-black">
      
      {/* 📸 Background Image Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slideData[currentIndex].imgUrl})` }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* 📄 Content Overlay */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          key={`text-${currentIndex}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-4xl"
        >
          <h2 className="text-white font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            WELCOME TO WEBVISION SOFTECH PVT LTD.
          </h2>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6">
            {slideData[currentIndex].text}
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl mb-8">
            {slideData[currentIndex].description}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = slideData[currentIndex].pageUrl)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg transition shadow-lg"
          >
            Explore Service
          </motion.button>
        </motion.div>
      </div>

      {/* 🔘 Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              index === currentIndex ? "w-10 bg-blue-500" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* 🌊 Floating Bubbles (Repurposed for foreground effect) */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
        <BubbleBackground />
      </div>
    </section>
  );
};

/* ===================== SUPPORTING COMPONENTS ===================== */

const BubbleBackground = () => {
  const BUBBLE_COLORS = ["#3b82f6", "#db2777", "#7c3aed", "#10b981", "#f59e0b"];
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute bottom-0 rounded-full blur-xl"
          style={{
            width: `${20 + Math.random() * 80}px`,
            height: `${20 + Math.random() * 80}px`,
            backgroundColor: BUBBLE_COLORS[i % BUBBLE_COLORS.length],
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: "-110vh",
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default HeroSection;