import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ExternalLink, Award } from 'lucide-react';

const Aboutus = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardText =
    'We provide our clients with the exact tailor-made software solutions that will meet their specific business requirements. Our team of experienced and technical software developers will integrate application development with your line of business.';

  const extraInfo =
    'Beyond development, we focus on scalability and security, ensuring your digital assets grow alongside your business. Our methodology involves deep technical audits and performance optimization to guarantee search engine visibility and user retention.';

  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 translate-x-20 hidden md:block" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* --- Left: Image with Floating Badge --- */}
        <motion.div
          className="flex-1 relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <motion.img
              src="/hero.png"
              alt="About WebVision"
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating Experience Badge */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 md:right-4 bg-blue-600 text-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4"
          >
            <Award size={40} className="text-blue-200" />
            <div>
              <p className="text-2xl font-black">12+</p>
              <p className="text-xs uppercase tracking-widest font-bold">Years Experience</p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Right: Content --- */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.span variants={textVariant} className="text-blue-600 font-bold tracking-[0.3em] uppercase text-sm block">
              Who We Are
            </motion.span>
            <motion.h2 variants={textVariant} className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Driving Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Innovation</span>
            </motion.h2>
            <motion.div variants={textVariant} className="h-1.5 w-20 bg-blue-600 rounded-full" />
          </motion.div>

          <div className="space-y-6 relative">
            {[1, 2].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ x: 10 }}
                className="bg-white p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-l-4 border-blue-500 text-slate-700 leading-relaxed transition-all hover:shadow-xl"
              >
                {cardText}
              </motion.div>
            ))}

            {/* --- Read More Section --- */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: 'auto', scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95 }}
                  className="overflow-hidden"
                >
                  <div className="bg-blue-50/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100 text-slate-800 italic leading-relaxed shadow-inner mt-4">
                    {extraInfo}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- Buttons --- */}
          <div className="flex flex-wrap gap-5 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all group"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
              <ChevronDown className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </motion.button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/portfolio"
                className="flex items-center gap-2 border-2 border-slate-900 text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-md group"
              >
                Our Portfolio
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
