import React, { useState } from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

// Reusable Input Field Component with animation
const FormInput = ({ id, label, value, onChange, error, type = "text" }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="
        w-full
      "
    >
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows="4"
          placeholder={label}
          value={value}
          onChange={onChange}
          className={`
            w-full
            p-4
            bg-gray-100
            rounded-lg
            transition-shadow
            focus:outline-none focus:ring-2 focus:ring-blue-500
            ${error ? "ring-2 ring-red-500" : ""}
          `}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={label}
          value={value}
          onChange={onChange}
          className={`
            w-full
            p-4
            bg-gray-100
            rounded-lg
            transition-shadow
            focus:outline-none focus:ring-2 focus:ring-blue-500
            ${error ? "ring-2 ring-red-500" : ""}
          `}
        />
      )}
      {error && (
        <p
          className="
          mt-1
          text-red-500 text-sm
        "
        >
          {error}
        </p>
      )}
    </motion.div>
  );
};

// Social Icon component with diamond shape
const SocialIcon = ({ icon, href }) => {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={iconVariants}
      whileHover={{ scale: 1.1, rotate: 45 }}
      className="
            flex
            w-12 h-12
            bg-white
            border border-gray-300 rounded-lg
            transition-all
            items-center justify-center transform rotate-45 hover:bg-blue-500 hover:text-white hover:border-blue-500 duration-300
          "
    >
      <div
        className="
                transform -rotate-45
              "
      >
        {icon}
      </div>
    </motion.a>
  );
};

// Main Demo Component
export default function Demo() {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    companyName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Youtube size={20} />, href: "#" },
  ];

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Please enter your Name";
    if (!formData.jobTitle) tempErrors.jobTitle = "Please enter your Job Title";
    if (!formData.companyName)
      tempErrors.companyName = "Please enter your Company Name";
    if (!formData.email) {
      tempErrors.email = "Please enter your Email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid";
    }
    if (!formData.mobile) tempErrors.mobile = "Please enter your Mobile Number";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", formData);
      // Here you would typically send the data to a server
      alert("Thank you for your request! We will get back to you soon.");
    } else {
      console.log("Form validation failed");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div
      className="
        font-sans
        bg-white
      "
    >
      <SEO
        title="Request a Demo"
        description="Request a demo of Webvision Infotech products and services — book a free consultation."
        url="/demo"
      />
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          overflow-hidden
          py-16
          text-center
          bg-gray-50
          relative
        "
      >
        <div
          className="
            w-full h-full
            bg-gradient-to-r from-white via-gray-100 to-white
            opacity-50
            absolute top-0 left-0 transform -skew-y-6
          "
        ></div>
        <div
          className="
            z-10
            relative
          "
        >
          <h1
            className="
                text-4xl font-bold text-gray-800
              "
          >
            REQUEST FOR DEMO
          </h1>
          <p
            className="
                mt-2
                text-gray-500
              "
          >
            <a
              href="#"
              className="
                  hover:text-blue-500
                "
            >
              Home
            </a>{" "}
            / REQUEST FOR DEMO
          </p>
        </div>
      </motion.div>

      {/* Content and Form Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          max-w-5xl
          mx-auto px-4 py-16
          sm:px-6
          lg:px-8
        "
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="
            max-w-3xl
            mb-12 mx-auto
            text-center text-gray-600
          "
        >
          A demo is the best way to find out more about how our solutions could
          help your organisation. The demonstration normally lasts about an
          hour, depending on the depth of functionality you’d like to see. For
          more details, simply fill in the form below and we will get back to
          you within one business day.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          variants={containerVariants}
          className="
            flex
            space-x-8 mb-12
            justify-center items-center
          "
        >
          {socialLinks.map((social, index) => (
            <SocialIcon key={index} icon={social.icon} href={social.href} />
          ))}
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          <motion.div
            variants={containerVariants}
            className="
              grid grid-cols-1
              gap-6
              md:grid-cols-2
            "
          >
            <FormInput
              id="name"
              label="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <FormInput
              id="jobTitle"
              label="Enter Your Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              error={errors.jobTitle}
            />
            <FormInput
              id="companyName"
              label="Enter Your Company Name"
              value={formData.companyName}
              onChange={handleChange}
              error={errors.companyName}
            />
            <FormInput
              id="email"
              label="Enter Your Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <FormInput
              id="mobile"
              label="Enter Your Mobile Number"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              error={errors.mobile}
            />
            <FormInput
              id="subject"
              label="Subject"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
            />
            <div
              className="
                md:col-span-2
              "
            >
              <FormInput
                id="message"
                label="Your Message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="
              mt-8
              text-center
            "
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                py-4 px-8
                text-white font-bold
                bg-gray-800
                rounded-lg
                transition-colors shadow-lg
                hover:bg-blue-600 duration-300
              "
            >
              BOOK YOUR DEMO NOW
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
