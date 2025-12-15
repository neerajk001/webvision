import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Award } from 'lucide-react'; // Added lucide imports for completeness

/* ===================== CONFIGURATION & HELPER FUNCTIONS ===================== */

/** Shuffles an array randomly. Used to swap card positions on page load. */
const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

/* ===================== DATA ===================== */
const initialCardData = [
  { id: 1, text: "Software", pageUrl: "/servicesPages/SoftDevPage", imgUrl: "/serv.png" },
  { id: 2, text: "Website", pageUrl: "/servicesPages/WebDevPage", imgUrl: "/images/websitehm.png" },
  { id: 3, text: "App", pageUrl: "/servicesPages/appDev", imgUrl: "/images/app_analytics_dashboard.jpg" },
  { id: 4, text: "Consulting", pageUrl: "/servicesPages/OutConsultPage", imgUrl: "/hero.png" },
  { id: 5, text: "IT Business", pageUrl: "/servicesPages/ITBusinessPage", imgUrl: "/images/itserver.png" },
  { id: 6, text: "CRM", pageUrl: "/servicesPages/ERPCrmPage", imgUrl: "/images/seomastering.png" },
  { id: 7, text: "Services", pageUrl: "/service", imgUrl: "/images/headseoWix.avif" },
  { id: 8, text: "FAQ", pageUrl: "/about", imgUrl: "/images/FAQ.png" },
];

/* --- MARQUEE ANIMATION LOGIC --- */

// The cards are split 4/4. To create a seamless loop, we need to scroll the width of 4 cards + gaps.
// Card width is md:w-44 (176px). Gap is gap-6 (24px). Total width per card: 200px.
// Total scroll distance: 4 cards * 200px = 800px.

const CARD_WIDTH_PLUS_GAP = 200; // Based on md:w-44 (~176px) + gap-6 (24px)
const SCROLL_DISTANCE = 4 * CARD_WIDTH_PLUS_GAP; 
const DURATION = 25; // Slower duration for a smoother visual effect

const marqueeVariants = {
  // Row 1: Left to Right (Moves from negative distance to 0, then loops)
  scrollLeftToRight: {
    x: [`-${SCROLL_DISTANCE}px`, "0px"],
    transition: {
      x: {
        duration: DURATION,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  },
  // Row 2: Right to Left (Moves from 0 to negative distance, then loops)
  scrollRightToLeft: {
    x: ["0px", `-${SCROLL_DISTANCE}px`],
    transition: {
      x: {
        duration: DURATION,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  },
};

/* ===================== CARD ANIMATION ===================== */
const floatAnimation = {
  animate: (i) => ({
    x: [0, Math.random() * 10 - 5, 0], 
    y: [0, Math.random() * 10 - 5, 0],
    transition: {
      x: { 
        duration: 3 + Math.random() * 1, 
        ease: "easeInOut", 
        repeat: Infinity, 
        repeatType: "reverse",
        delay: i * 0.1
      },
      y: { 
        duration: 3 + Math.random() * 1, 
        ease: "easeInOut", 
        repeat: Infinity, 
        repeatType: "reverse",
        delay: i * 0.1
      },
    },
  }),
};

/* ===================== CARD ===================== */
const AnimatedCard = ({ data, index }) => (
  <motion.div
    custom={index}
    variants={floatAnimation}
    animate="animate"
    onClick={() => (window.location.href = data.pageUrl)}
    className="
      relative
      w-28 h-28
      sm:w-32 sm:h-32
      md:w-44 md:h-44
      flex-shrink-0 /* Essential for horizontal scrolling */
      rounded-lg
      cursor-pointer
      shadow-xl
      bg-cover bg-center
      flex items-center justify-center
      z-10
    "
    style={{ backgroundImage: `url(${data.imgUrl})` }}
    whileHover={{ scale: 1.08 }}
  >
    <div className="bg-black/50 px-3 py-1 rounded-md text-sm text-white font-semibold">
      {data.text}
    </div>
  </motion.div>
);

/* ===================== MOBILE CIRCLE / BUBBLE BACKGROUND (Unchanged) ===================== */

const CircularLayout = ({ cards }) => {
  const radius = 120; 
  return (
    <div className="relative w-[300px] h-[300px] mx-auto z-10">
      {cards.map((card, index) => {
        const angle = (index / cards.length) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return (
          <div
            key={card.id}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
            }}
          >
            <AnimatedCard data={card} index={index} />
          </div>
        );
      })}
    </div>
  );
};

const Bubble = ({ side, size, delay, duration }) => (
  <motion.span
    className="absolute bottom-0 rounded-full bg-sky-600/30"
    style={{
      width: size,
      height: size,
      left: side === "left" ? "-10%" : "110%",
    }}
    animate={{
      x: side === "left" ? "120vw" : "-120vw",
      y: "-110vh",
      opacity: [0.4, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

const BubbleBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(14)].map((_, i) => (
      <Bubble
        key={i}
        side={i % 2 === 0 ? "left" : "right"}
        size={`${10 + Math.random() * 80}px`} 
        delay={Math.random() * 5}
        duration={8 + Math.random() * 6}
      />
    ))}
  </div>
);

/* ===================== MAIN SECTION ===================== */
const HeroSection = () => {
  const [shuffledData] = useState(
    () => shuffleArray([...initialCardData])
  );

  // Split the data into two rows and duplicate them for the seamless scroll loop
  const row1Original = shuffledData.slice(0, 4);
  const row2Original = shuffledData.slice(4, 8);
  
  const row1 = [...row1Original, ...row1Original];
  const row2 = [...row2Original, ...row2Original];
  
  // useEffect kept empty for the initial shuffle on mount requirement
  useEffect(() => {
    // This runs once on mount.
  }, []); 

  return (
    <section className="relative bg-white-50 py-16 px-4 overflow-hidden min-h-[600px]">
      
      {/* 🌊 Bubble Background */}
      <BubbleBackground />

      <h2 className="relative text-2xl md:text-3xl font-bold text-center mb-12 z-10">
        WELCOME TO WEBVISION SOFTECH PVT LTD.
      </h2>

      {/* MOBILE – CIRCLE Layout */}
      <div className="block md:hidden relative z-10">
        <CircularLayout cards={shuffledData} />
      </div>

      {/* DESKTOP – ROW Layout (Automated Marquee Scroll) */}
      <div className="hidden md:block relative z-10 max-w-7xl mx-auto overflow-hidden">
        
        {/* Row 1 (Left to Right Scroll) */}
        <div className="my-6">
          <motion.div
            className="flex gap-24 w-max" // w-max ensures the container width supports the duplicated items
            variants={marqueeVariants}
            animate="scrollLeftToRight"
          >
            {row1.map((card, index) => (
              <AnimatedCard key={card.id + "-1-" + index} data={card} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 (Right to Left Scroll) */}
        <div className="my-6">
          <motion.div
            className="flex gap-24 w-max"
            variants={marqueeVariants}
            animate="scrollRightToLeft"
          >
            {row2.map((card, index) => (
              <AnimatedCard key={card.id + "-2-" + index} data={card} index={index + 4} />
            ))}
          </motion.div>
        </div>

      </div>
      
    </section>
  );
};

export default HeroSection;