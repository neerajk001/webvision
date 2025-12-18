import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Layers,
  AppWindow,
  Users,
  Briefcase,
  Database,
  Share2,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Software Development",
    description: "Custom tailor-made solutions for complex business architectures.",
    icon: <Code size={28} />,
    link: "/servicesPages/SoftDevPage",
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "Website Development",
    description: "High-performance, responsive websites with modern UX/UI standards.",
    icon: <Layers size={28} />,
    link: "/servicesPages/WebDevPage",
    color: "from-purple-500 to-pink-400"
  },
  {
    name: "App Development",
    description: "Native and cross-platform mobile apps built for speed and scale.",
    icon: <AppWindow size={28} />,
    link: "/servicesPages/appDev",
    color: "from-orange-500 to-yellow-400"
  },
  {
    name: "Outsourcing & Consulting",
    description: "Expert guidance to optimize your technical roadmap and team.",
    icon: <Users size={28} />,
    link: "/servicesPages/OutConsultPage",
    color: "from-green-500 to-emerald-400"
  },
  {
    name: "IT Business Solution",
    description: "End-to-end digital transformation for modern enterprises.",
    icon: <Briefcase size={28} />,
    link: "/servicesPages/ITBusinessPage",
    color: "from-indigo-500 to-blue-400"
  },
  {
    name: "ERP & CRM Solution",
    description: "Automate your workflow with robust and scalable internal systems.",
    icon: <Database size={28} />,
    link: "/servicesPages/ERPCrmPage",
    color: "from-red-500 to-rose-400"
  },
  {
    name: "SEO Optimization",
    description: "Dominating search results with data-driven organic strategies.",
    icon: <TrendingUp size={28} />,
    link: "/servicesPages/SeoPage",
    color: "from-teal-500 to-cyan-400"
  },
  {
    name: "Social Media Marketing",
    description: "Creative storytelling to grow your brand's digital footprint.",
    icon: <Share2 size={28} />,
    link: "/servicesPages/SmmPage",
    color: "from-fuchsia-500 to-purple-400"
  },
];

const OurService = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            className="text-blue-600 font-bold tracking-[0.25em] uppercase text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Expertise
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-3 mb-6">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Capabilities</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            We don't just build software; we engineer digital experiences that push the boundaries of what's possible for your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={service.link} className="block h-full">
                <div className="relative h-full p-8 bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] group-hover:border-blue-100 flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle Gradient Hover Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                  <div>
                    {/* Icon Container */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      {service.icon}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Link Action */}
                  <div className="flex items-center text-blue-600 font-bold text-xs tracking-widest uppercase">
                    <span className="mr-2 group-hover:mr-4 transition-all">Learn More</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurService;