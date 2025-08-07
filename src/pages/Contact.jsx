import React from 'react';
import { motion } from 'framer-motion';

// --- Helper Components: Icons ---
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);


// --- Main Components ---

/**
 * ContactInfoCard Component
 * A card to display a piece of contact information (email, phone, address).
 */
const ContactInfoCard = ({ icon, title, lines }) => (
    <motion.div
        className="bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center"
        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
        }}
    >
        <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="text-gray-600">
            {lines.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
    </motion.div>
);

/**
 * ContactForm Component
 * A modern contact form.
 */
const ContactForm = () => (
    <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch With Us</h2>
        <p className="text-gray-500 mb-8">For More Details Please Visit. Monday to Saturday 10am to 7pm</p>
        <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
                <input type="text" placeholder="Subject" className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
                <textarea placeholder="Your Message" rows="5" className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div>
                <motion.button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Send Message
                </motion.button>
            </div>
        </form>
    </div>
);

/**
 * ContactPage Component
 * The main container for the entire contact page.
 */
const Contact = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="bg-white pt-24 pb-12">
                 <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Contact Us</h1>
                    <p className="text-lg text-gray-500 mt-2">Home / Contact Us</p>
                </motion.div>
            </div>

            {/* Contact Cards Section */}
            <div className="py-16 md:py-24">
                <motion.div
                    className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <ContactInfoCard icon={<MailIcon />} title="Mail Here" lines={["info@webvisionsoftech.com", "webvisionsoftech@gmail.com"]} />
                    <ContactInfoCard icon={<LocationIcon />} title="Visit Here" lines={["224/A,B4, 2nd Floor, Vishwakarma", "Paradise, Phase -1, Ambadi Rd, Sai Nagar,", "Vasai West, Palghar, Vasai-Virar, Maharashtra 401202"]} />
                    <ContactInfoCard icon={<PhoneIcon />} title="Call Here" lines={["+91 9322347666", "+91 8422014356"]} />
                </motion.div>
            </div>

            {/* Form & Map Section */}
            <div className="pb-16 md:pb-24">
                <motion.div
                    className="container mx-auto px-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                >
                    <ContactForm />

                    {/* Embedded Map */}
                    <div className="mt-16 rounded-xl shadow-2xl overflow-hidden">
                         <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.373269228581!2d72.8201249752109!3d19.30930778194916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1e8b6b6b6b9%3A0x8b8b8b8b8b8b8b8b!2sweb%20vision%20softech%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1723061262174!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact