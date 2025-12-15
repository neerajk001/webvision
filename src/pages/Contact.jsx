import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- (Keep all Icon and ContactInfoCard components from the previous answer) ---

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

const ContactInfoCard = ({ icon, title, lines, link }) => (
    <motion.a
        href={link}
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center cursor-pointer"
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
                <span key={index} className="block">{line}</span> 
            ))}
        </div>
    </motion.a>
);

/**
 * ContactForm Component - MAJORLY MODIFIED
 * Now uses state to capture inputs and constructs a Gmail URL on submit.
 */
const ContactForm = ({ targetEmail }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Stop default form submission

        const { name, email, subject, message } = formData;
        
        // 1. Construct the email body
        const emailBody = `
Dear Team,

My name is ${name}.
My contact email is ${email}.

${message}

---
Sent via the website contact form.
        `.trim();

        // 2. Encode the URL parameters
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(emailBody);

        // 3. Build the final Gmail URL
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodedSubject}&body=${encodedBody}`;

        // 4. Open the link
        window.open(gmailUrl, '_blank');
        
        // Optional: Clear form data after opening the email client
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch With Us</h2>
            <p className="text-gray-500 mb-8">For More Details Please Visit. Monday to Saturday 10am to 7pm</p>
            
            {/* The onSubmit handler triggers the custom function */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                        type="text" 
                        name="name" // Added name attribute
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                    <input 
                        type="email" 
                        name="email" // Added name attribute
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        name="subject" // Added name attribute
                        placeholder="Subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                </div>
                <div>
                    <textarea 
                        name="message" // Added name attribute
                        placeholder="Your Message" 
                        rows="5" 
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                <div>
                    <motion.button
                        type="submit" // Must be type="submit" to trigger the form's onSubmit
                        className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Send Message via Email
                    </motion.button>
                </div>
            </form>
        </div>
    );
};


/**
 * ContactPage Component - Sligthly Modified to pass targetEmail prop
 */
const Contact = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const primaryEmail = "webvisionsoftech@gmail.com"; 
    const secondaryEmail = "info@webvisionsoftech.com";
    const primaryPhone = "+919322347666"; 
    const addressLines = [
        "224/A,B4, 2nd Floor, Vishwakarma",
        "Paradise, Phase -1, Ambadi Rd, Sai Nagar,",
        "Vasai West, Palghar, Vasai-Virar, Maharashtra 401202"
    ];

    // Card Links (Same as before)
    const mailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${primaryEmail}&cc=${secondaryEmail}&su=Inquiry%20from%20Website`;
    const mapQuery = encodeURIComponent(addressLines.join(', '));
    const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
    const whatsappLink = `https://wa.me/${primaryPhone.replace(/[^0-9]/g, '')}`; 

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section (omitted for brevity) */}
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

            {/* Contact Cards Section (Same as before) */}
            <div className="py-16 md:py-24">
                <motion.div
                    className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <ContactInfoCard 
                        icon={<MailIcon />} 
                        title="Mail Here" 
                        lines={["info@webvisionsoftech.com", "webvisionsoftech@gmail.com"]}
                        link={mailLink} 
                    />
                    <ContactInfoCard 
                        icon={<LocationIcon />} 
                        title="Visit Here" 
                        lines={addressLines}
                        link={mapLink} 
                    />
                    <ContactInfoCard 
                        icon={<PhoneIcon />} 
                        title="Call Here / WhatsApp" 
                        lines={["+91 9322347666", "+91 8422014356"]} 
                        link={whatsappLink} 
                    />
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
                    {/* Passed the target email as a prop */}
                    <ContactForm targetEmail={primaryEmail} /> 

                    {/* Embedded Map */}
                    <div className="mt-16 rounded-xl shadow-2xl overflow-hidden">
                         <iframe
                             src={`https://maps.google.com/maps?q=${encodeURIComponent(addressLines.join(', '))}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
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

export default Contact;