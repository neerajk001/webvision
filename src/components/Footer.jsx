import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaChevronRight } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="relative bg-[#0B0F19] text-gray-300 overflow-hidden">
      {/* 🌌 Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* --- About Section --- */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/">
              <img src="/image.png" alt="logo" className="w-32 md:w-40 brightness-110" />
            </Link>
            <h2 className="text-xl font-bold text-white tracking-tight">Webvision Softech</h2>
            <p className="text-sm leading-relaxed text-gray-400">
              A “One Stop IT Solution” for modern business processes. We specialize in crafting high-performance web and window applications that drive digital growth.
            </p>
          </motion.div>

          {/* --- Services Section --- */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">Our Services</h3>
            <ul className="space-y-3">
              {[
                { label: "Software Development", url: "/servicesPages/SoftDevPage"},
                { label: "Website Development", url: "/servicesPages/WebDevPage"},
                { label: "Mobile App Development", url: "/servicesPages/appDev"},
                { label: "ERP & CRM Solutions", url: "/servicesPages/ERPCrmPage"},
                { label: "SEO & Digital Marketing", url: "/servicesPages/SeoPage"},
              ].map((service, idx) => (
                <motion.li key={idx} whileHover={{ x: 5 }} className="group flex items-center gap-2 text-sm">
                  <FaChevronRight className="text-blue-500 text-[10px] opacity-0 group-hover:opacity-100 transition-all" />
                  <Link to={service.url} className="hover:text-blue-400 transition-colors">
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* --- Useful Links --- */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">Useful Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Our Portfolios", url: "/portfolio" },
                { label: "Our Products", url: "/product" },
                { label: "Contact Us", url: "/contact" },
                { label: "Terms & Conditions", url: "/TermsPage" },
              ].map((item, idx) => (
                <motion.li key={idx} whileHover={{ x: 5 }} className="group flex items-center gap-2 text-sm">
                  <FaChevronRight className="text-blue-500 text-[10px] opacity-0 group-hover:opacity-100 transition-all" />
                  <Link to={item.url} className="hover:text-blue-400 transition-colors">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* --- Contact & Social --- */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">Connect With Us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MdLocationOn className="text-blue-500 text-xl flex-shrink-0" />
                <p className="text-gray-400">Vasai West, Palghar, Maharashtra 401202.</p>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-blue-500 text-xl flex-shrink-0" />
                <a href="mailto:info@webvisionsoftech.com" className="hover:text-white transition-colors">info@webvisionsoftech.com</a>
              </div>
              <div className="flex items-center gap-3">
                <MdPhone className="text-blue-500 text-xl flex-shrink-0" />
                <p className="text-gray-400">+91 9322347666</p>
              </div>
            </div>

            {/* Social Icons Container */}
            <div className="flex gap-3 pt-4">
              {[
                { icon: FaFacebookF, link: 'https://www.facebook.com/people/Webvision-Softech-Pvt-Ltd/100054232521328/' },
                { icon: FaTwitter, link: 'https://x.com/webvisionsofte1' },
                { icon: FaInstagram, link: 'https://www.instagram.com/webvision_softech/' },
                { icon: FaLinkedinIn, link: 'https://www.linkedin.com/company/webvisionsoftech/' },
                { icon: FaYoutube, link: 'https://www.youtube.com/channel/UChgKCsA6Rs4_hCs3Y4Eqbkw' }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -5, backgroundColor: '#3b82f6' }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800/50 p-2.5 rounded-xl text-white transition-all shadow-lg"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- Footer Bottom --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-800/50 mt-16 pt-8 text-center"
        >
          <p className="text-xs text-gray-500 tracking-widest uppercase">
            © {new Date().getFullYear()} <span className="text-white font-bold">Webvision Softech Pvt. Ltd.</span> All Rights Reserved.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Engineered with Precision by <a href="https://thunderous-liger-65cb46.netlify.app/" className="text-blue-500/80 hover:text-blue-400 transition-colors">Harsh Dubey</a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;