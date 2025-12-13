import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

/* ===================== HELPER FUNCTIONS ===================== */

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
// Use a constant initial data set
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

/* ===================== CARD ANIMATION ===================== */
// Modified for random, non-rotating bubble-like movement
const floatAnimation = {
  animate: (i) => ({
    // Random float within a small range (e.g., -10px to +10px)
    x: [0, Math.random() * 20 - 10, 0, Math.random() * 20 - 10, 0], 
    y: [0, Math.random() * 20 - 10, 0, Math.random() * 20 - 10, 0],
    transition: {
      x: { 
        duration: 4 + Math.random() * 2, // Random duration for variation
        ease: "easeInOut", 
        repeat: Infinity, 
        repeatType: "reverse",
        delay: i * 0.2 // Stagger the start time
      },
      y: { 
        duration: 4 + Math.random() * 2, 
        ease: "easeInOut", 
        repeat: Infinity, 
        repeatType: "reverse",
        delay: i * 0.2
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
      
      /* Card Shape: Square */
      rounded-lg /* Use rounded corners for a softer square look */
      
      cursor-pointer
      shadow-xl
      bg-cover bg-center
      flex items-center justify-center
      z-10
    "
    style={{ backgroundImage: `url(${data.imgUrl})` }}
    whileHover={{ scale: 1.08 }}
  >
    {/* Text is now static (no counter-rotation needed) */}
    <div className="bg-black/50 px-3 py-1 rounded-md text-sm text-white font-semibold">
      {data.text}
    </div>
  </motion.div>
);

/* ===================== MOBILE CIRCLE ===================== */
// The circular layout positions the cards, but the cards themselves are square
const CircularLayout = ({ cards }) => {
  const radius = 120; // Adjusted radius for better spacing of square cards

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
            {/* Swiping position is achieved by shuffling the cards array in HeroSection */}
            <AnimatedCard data={card} index={index} />
          </div>
        );
      })}
    </div>
  );
};

/* ===================== BUBBLES ===================== */
// Reusing your existing Bubble components which create a nice background effect
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
        size={`${10 + Math.random() * 80}px`} // Smaller, tighter bubbles
        delay={Math.random() * 5}
        duration={8 + Math.random() * 6}
      />
    ))}
  </div>
);

/* ===================== MAIN SECTION ===================== */
const HeroSection = () => {
  // Use state to hold the card data, initialized with a shuffled version
  const [shuffledData, setShuffledData] = useState(
    () => shuffleArray([...initialCardData])
  );

  // Split the shuffled data into two rows
  const row1 = shuffledData.slice(0, 4);
  const row2 = shuffledData.slice(4, 8);
  
  // The useEffect with an empty dependency array ensures the shuffle happens ONLY on mount (page reload)
  // This satisfies the requirement to "alternate only when page reoad"
  useEffect(() => {
    // This state update is actually redundant if initialized correctly above, 
    // but serves as a clear point for where the shuffle logic lives.
    // If the data was fetched asynchronously, the shuffle would happen here.
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

      {/* DESKTOP – ROW Layout */}
      <div className="hidden md:flex relative z-10 max-w-7xl mx-auto flex-col gap-12">
        
        {/* First Row (4 Cards) */}
        <div className="flex justify-around items-center gap-6">
          {row1.map((card, index) => (
            // The key is essential for React to track the movement of the cards 
            // after the shuffle (swiping the position)
            <AnimatedCard key={card.id} data={card} index={index} />
          ))}
        </div>

        {/* Second Row (4 Cards) */}
        <div className="flex justify-around items-center gap-6">
          {row2.map((card, index) => (
            // Use index + 4 for the custom prop to ensure proper animation staggering
            <AnimatedCard key={card.id} data={card} index={index + 4} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;