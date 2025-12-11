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
} from "lucide-react";
import { Link } from "react-router-dom";

// Service data with corresponding icons for better visual representation
const services = [
  {
    name: "Software Development",
    description:
      "Custom software solutions tailored to your unique business needs.",
    icon: <Code size={32} />,
    link: "/servicesPages/SoftDevPage",
  },
  {
    name: "Website Development",
    description: "Modern, responsive websites.",
    icon: <Layers size={32} />,
    link: "/servicesPages/WebDevPage",
  },
  {
    name: "App Development",
    description: "High-performance mobile applications.",
    icon: <AppWindow size={32} />,
    link: "/servicesPages/appDev",
  },
  {
    name: "Outsourcing & Consulting",
    description: "Expert consulting services.",
    icon: <Users size={32} />,
    link: "/servicesPages/OutConsultPage",
  },
  {
    name: "IT Business Solution",
    description: "Streamline your business processes.",
    icon: <Briefcase size={32} />,
    link: "/servicesPages/ITBusinessPage",
  },
  {
    name: "ERP & CRM Solution",
    description: "Powerful and scalable ERP & CRM systems.",
    icon: <Database size={32} />,
    link: "/servicesPages/ERPCrmPage",
  },
  {
    name: "SEO Optimization",
    description: "Boost your website ranking.",
    icon: <Briefcase size={32} />,
    link: "/servicesPages/SeoPage",
  },
  {
    name: "Social Media Marketing",
    description: "Grow your brand online.",
    icon: <Share2 size={32} />,
    link: "/servicesPages/SmmPage",
  },
];

//this is commented out code for reference only
/**
 * OurService Component
 * Displays a grid of service cards with minimal, clean animations.
 */
const OurService = () => {
  // Animation for the container to stagger the appearance of children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animation for each individual service card
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      className="
        py-20
        font-sans
        bg-gray-50
        sm:py-24
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mb-16
            text-center
          "
        >
          <h2
            className="
              text-4xl font-extrabold text-gray-900 tracking-tight
              md:text-5xl
            "
          >
            Our Services
          </h2>
          <p
            className="
              max-w-2xl
              mt-4 mx-auto
              text-lg text-gray-600
            "
          >
            We provide cutting-edge solutions to elevate your business and drive
            success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="
            grid grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="
                no-underline
              "
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="
                flex flex-col
                p-8
                text-center
                bg-white
                rounded-2xl
                shadow-lg
              "
              >
                <div
                  className="
                  flex-grow
                "
                >
                  <div
                    className="
                    inline-block
                    p-4 mb-6
                    text-blue-600
                    bg-blue-100
                    rounded-full
                  "
                  >
                    {service.icon}
                  </div>
                  <h3
                    className="
                    mb-3
                    text-xl font-bold text-gray-900
                  "
                  >
                    {service.name}
                  </h3>
                  <p
                    className="
                    text-gray-500
                  "
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurService;
