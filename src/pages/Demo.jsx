import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

// Reusable Input Field Component with animation
const FormInput = ({ id, label, value, onChange, error, type = 'text' }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.div variants={itemVariants} className="w-full">
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          rows="4"
          placeholder={label}
          value={value}
          onChange={onChange}
          className={`w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${error ? 'ring-2 ring-red-500' : ''}`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={label}
          value={value}
          onChange={onChange}
          className={`w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${error ? 'ring-2 ring-red-500' : ''}`}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
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
            className="w-12 h-12 bg-white border border-gray-300 flex items-center justify-center transform rotate-45 rounded-lg hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
            variants={iconVariants}
            whileHover={{ scale: 1.1, rotate: 45 }}
        >
            <div className="transform -rotate-45">{icon}</div>
        </motion.a>
    );
};


// Main Demo Component
export default function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    companyName: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' },
    { icon: <Youtube size={20} />, href: '#' },
  ];

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Please enter your Name';
    if (!formData.jobTitle) tempErrors.jobTitle = 'Please enter your Job Title';
    if (!formData.companyName) tempErrors.companyName = 'Please enter your Company Name';
    if (!formData.email) {
      tempErrors.email = 'Please enter your Email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid';
    }
    if (!formData.mobile) tempErrors.mobile = 'Please enter your Mobile Number';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
        setErrors(prev => ({...prev, [name]: null}));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully:', formData);
      // Here you would typically send the data to a server
      alert('Thank you for your request! We will get back to you soon.');
    } else {
      console.log('Form validation failed');
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { staggerChildren: 0.1 } 
    },
  };

  return (
    <div className="bg-white font-sans">
      {/* Header Section */}
      <motion.div 
        className="bg-gray-50 py-16 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-gray-100 to-white opacity-50 transform -skew-y-6"></div>
        <div className="relative z-10">
            <h1 className="text-4xl font-bold text-gray-800">REQUEST FOR DEMO</h1>
            <p className="text-gray-500 mt-2">
              <a href="#" className="hover:text-blue-500">Home</a> / REQUEST FOR DEMO
            </p>
        </div>
      </motion.div>

      {/* Content and Form Section */}
      <motion.div 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
            className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
          A demo is the best way to find out more about how our solutions could help your organisation. The demonstration normally lasts about an hour, depending on the depth of functionality you’d like to see. For more details, simply fill in the form below and we will get back to you within one business day.
        </motion.p>

        {/* Social Icons */}
        <motion.div 
            className="flex justify-center items-center space-x-8 mb-12"
            variants={containerVariants}
        >
          {socialLinks.map((social, index) => (
            <SocialIcon key={index} icon={social.icon} href={social.href} />
          ))}
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            <FormInput id="name" label="Enter Your Name" value={formData.name} onChange={handleChange} error={errors.name} />
            <FormInput id="jobTitle" label="Enter Your Job Title" value={formData.jobTitle} onChange={handleChange} error={errors.jobTitle} />
            <FormInput id="companyName" label="Enter Your Company Name" value={formData.companyName} onChange={handleChange} error={errors.companyName} />
            <FormInput id="email" label="Enter Your Email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
            <FormInput id="mobile" label="Enter Your Mobile Number" type="tel" value={formData.mobile} onChange={handleChange} error={errors.mobile} />
            <FormInput id="subject" label="Subject" value={formData.subject} onChange={handleChange} error={errors.subject} />
            <div className="md:col-span-2">
              <FormInput id="message" label="Your Message" type="textarea" value={formData.message} onChange={handleChange} error={errors.message} />
            </div>
          </motion.div>

          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.button
              type="submit"
              className="bg-gray-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK YOUR DEMO NOW
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}