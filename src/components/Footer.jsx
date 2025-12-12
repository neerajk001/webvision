import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 px-6 md:px-20 py-10">
      <div className="grid md:grid-cols-4 gap-10">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/image.png" alt="footer logo" className='w-20 md:w-32 lg:w-48'/>
          <h2 className="text-xl font-semibold mb-4">Webvision Softech</h2>
          <p className="text-sm leading-relaxed">
            Webvision Softech is a “One Stop IT Solution” for any kind of business process. We deal with web & window’s application services located in Mumbai, India.
          </p>
          <a href="#" className="mt-3 inline-block text-blue-400 hover:text-blue-500 text-sm font-medium">
            Read More →
          </a>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Software Development",
              "Website Development",
              "Mobile App Development",
              "Outsourcing & Consulting",
              "Application Development",
              "ERP & CRM Solution",
              "SEO & Digital Marketing",
              "social Media Marketing"

            ].map((service, idx) => (
              <li key={idx}>• {service}</li>
            ))}
          </ul>
        </motion.div>

        {/* Useful Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              "About Us",
              "Our Portfolios",
              "Our Products",
              "Contact Us",
              "Terms & Conditions",
              "Privacy Policy"
            ].map((link, idx) => (
              <li key={idx}>• {link}</li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <MdLocationOn className="text-xl mt-0.5 mr-2" />
              <p>
                224/A,B4 ,2nd Floor, Vishwakarma Paradise, Phase -1, Ambadi Rd, Vasai West, Palghar, Maharashtra 401202.
              </p>
            </div>
            <div className="flex items-center">
              <MdEmail className="text-xl mr-2" />
              <span>info@webvisionsoftech.com</span>
            </div>
            <div className="flex items-center">
              <MdEmail className="text-xl mr-2" />
              <span>webvisionsoftech@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MdPhone className="text-xl mr-2" />
              <span>+91 9322347666 | +91 8422014356</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-white">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.2 }}
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition"
                href="#"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} <span className="font-semibold text-white">WEBVISION SOFTECH PVT. LTD.</span> All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
