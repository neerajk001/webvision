import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";

/* ===================== DATA ===================== */
const slideData = [
  {
    id: 1,
    text: "Software Development",
    description: "Tailor-made solutions for complex business challenges.",
    pageUrl: "/services/software-development",
    imgUrl: "/serv.png",
  },
  {
    id: 2,
    text: "Website Design",
    description: "Responsive and high-performance websites that convert.",
    pageUrl: "/services/web-development",
    imgUrl: "/images/websitehm.png",
  },
  {
    id: 3,
    text: "Mobile Apps",
    description: "Next-gen iOS and Android applications for your users.",
    pageUrl: "/services/app-development",
    imgUrl: "/images/app_analytics_dashboard.jpg",
  },
  {
    id: 4,
    text: "IT Consulting",
    description: "Strategic technology planning to scale your enterprise.",
    pageUrl: "/services/out-consulting",
    imgUrl: "/hero.png",
  },
  {
    id: 5,
    text: "Business Infrastructure",
    description: "Secure and scalable server environments for IT growth.",
    pageUrl: "/services/it-business",
    imgUrl: "/images/itserver.png",
  },
  {
    id: 6,
    text: "CRM Systems",
    description: "Manage customer relationships with integrated data tools.",
    pageUrl: "/services/erp-crm",
    imgUrl: "/images/seomastering.png",
  },
  {
    id: 7,
    text: "Digital Services",
    description: "End-to-end digital transformation and support.",
    pageUrl: "/services",
    imgUrl: "/images/headseoWix.avif",
  },
  {
    id: 8,
    text: "Expert FAQ",
    description: "Answers to your most critical technology questions.",
    pageUrl: "/about",
    imgUrl: "/images/FAQ.png",
  },
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
    <section
      className="
        overflow-hidden
        w-full h-[400px]
        bg-black
        relative
        md:h-[500px]
      "
    >
      <SEO
        title="Home"
        description="Webvision Infotech - Software, Web and App development, SEO and digital services."
        url="/"
      />

      {/* 📸 Background Image Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundImage: `url(${slideData[currentIndex].imgUrl})` }}
          className="
            w-full h-full
            bg-cover bg-center
            absolute inset-0
          "
        >
          {/* Overlay to ensure text readability */}
          <div
            className="
              bg-black/40
              absolute inset-0
            "
          />
        </motion.div>
      </AnimatePresence>

      {/* 📄 Content Overlay */}
      <div
        className="
          z-20 flex flex-col
          h-full
          px-6
          text-center
          relative items-center justify-center
        "
      >
        <motion.div
          key={`text-${currentIndex}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="
            max-w-4xl
          "
        >
          <h2
            className="
              mb-4
              text-white font-bold tracking-widest text-sm
              uppercase
              md:text-base
            "
          >
            WELCOME TO WEBVISION SOFTECH PVT LTD.
          </h2>
          <h1
            className="
              mb-6
              text-4xl font-extrabold text-white
              md:text-7xl
            "
          >
            {slideData[currentIndex].text}
          </h1>
          <p
            className="
              mb-8
              text-gray-200 text-lg
              md:text-2xl
            "
          >
            {slideData[currentIndex].description}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              (window.location.href = slideData[currentIndex].pageUrl)
            }
            className="
              px-10 py-4
              text-white font-bold text-lg
              bg-blue-500
              rounded-full
              shadow-lg
              hover:bg-blue-600 transition
            "
          >
            Explore Service
          </motion.button>
        </motion.div>
      </div>

      {/* 🔘 Navigation Dots */}
      <div
        className="
          z-30 flex
          absolute bottom-10 left-1/2 -translate-x-1/2 gap-3
        "
      >
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              h-2
              rounded-full
              transition-all
              duration-300
              ${index === currentIndex ? "w-10 bg-blue-500" : "w-2 bg-white/50"}
            `}
          />
        ))}
      </div>

      {/* 🌊 Floating Bubbles (Repurposed for foreground effect) */}
      <div
        className="
          z-10
          pointer-events-none opacity-30
          absolute inset-0
        "
      >
        <BubbleBackground />
      </div>
    </section>
  );
};

/* ===================== SUPPORTING COMPONENTS ===================== */

const BubbleBackground = () => {
  const BUBBLE_COLORS = ["#3b82f6", "#db2777", "#7c3aed", "#10b981", "#f59e0b"];
  return (
    <div
      className="
        overflow-hidden
        absolute inset-0
      "
    >
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={i}
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
          className="
            rounded-full
            absolute bottom-0 blur-xl
          "
        />
      ))}
    </div>
  );
};

export default HeroSection;
