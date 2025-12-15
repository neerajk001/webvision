import { motion } from 'framer-motion';
import { label } from 'framer-motion/client';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';

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
              { label: "Software Development", url: "/about"},
              {label: "Website Development", url: "/"},
              {label: "Mobile App Development",url: "/about"},
               {label:"Outsourcing & Consulting",url: "/about"},
               {label:"ERP & CRM Solution",url: "/about"},
               {label:"SEO & Digital Marketing",url: "/about"},
               {label:"social Media Marketing",url: "/about"},

            ].map((service, idx) => (
              <li key={idx}>
                 <a
          href={service.url}
          className="hover:text-blue-500 transition-colors"
        >{service.label}

           </a>
           </li>
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
      { label: "About Us", url: "/about" },
      { label: "Our Portfolios", url: "/portfolio" },
      { label: "Our Products", url: "/product" },
      { label: "Contact Us", url: "/contact" },
      { label: "Terms & Conditions", url: "/terms" },
      { label: "Privacy Policy", url: "/#" },
    ].map((item, idx) => (
      <li key={idx}>
       <Link to={item.url} className="hover:text-blue-500 transition-colors">
    {item.label}
</Link>
      </li>
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
      {[
        { icon: FaFacebookF, link: 'https://www.facebook.com/people/Webvision-Softech-Pvt-Ltd/100054232521328/' },
        { icon: FaTwitter, link: 'https://twitter.com/yourprofile' },
        { icon: FaInstagram, link: 'https://www.instagram.com/yourprofile' },
        { icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/yourprofile' },
        { icon: FaYoutube, link: 'https://www.youtube.com/channel/yourchannel' }
      ].map((social, idx) => (
        <motion.a
          key={idx}
          whileHover={{ scale: 1.2 }}
          className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition"
          href={social.link}  
          target="_blank"      
          rel="noopener noreferrer"  
        >
          <social.icon size={18} />
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
