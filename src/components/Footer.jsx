import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: ["About us", "Contact us", "Shukhee Insights", "FAQ"],
    service: ["Video Consultancy", "Health Mall", "Online Pharmacy", "Home Lab", "Caregiver"],
    legal: ["Terms & Conditions", "Privacy Policy", "Refund Policy"]
  };

  return (
    <footer className="bg-[#222222] text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Tagline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl font-semibold mb-12"
        >
          We can't wait to take care of you
        </motion.h2>

        {/* Main Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          
          {/* Company Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <h3 className="text-[#90BC3F] font-bold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {footerLinks.company.map(link => (
                <li key={link} className="hover:text-[#90BC3F] cursor-pointer transition-colors">{link}</li>
              ))}
            </ul>
          </motion.div>

          {/* Service Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h3 className="text-[#90BC3F] font-bold mb-6 text-lg">Service</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {footerLinks.service.map(link => (
                <li key={link} className="hover:text-[#90BC3F] cursor-pointer transition-colors">{link}</li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <h3 className="text-[#90BC3F] font-bold mb-6 text-lg">Legal and Policies</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {footerLinks.legal.map(link => (
                <li key={link} className="hover:text-[#90BC3F] cursor-pointer transition-colors">{link}</li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <h3 className="text-[#90BC3F] font-bold mb-6 text-lg">Social Links</h3>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Instagram, Youtube].map((Icon, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.2, color: "#90BC3F" }}
                  className="bg-white text-black p-2 rounded-full cursor-pointer transition-all"
                >
                  <Icon size={18} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Download App */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <h3 className="text-[#90BC3F] font-bold mb-6 text-lg">Download App</h3>
            <div className="space-y-3">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Google Play" 
                className="w-32 cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="App Store" 
                className="w-32 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>


        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h2 className="text-[#90BC3F] text-2xl font-bold mb-2">MediTrust</h2>
            <p className="text-gray-400 text-xs italic underline cursor-pointer">
              An initiative of Grameen HealthTech Limited (GHL).
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-xs text-right space-y-2"
          >
            <div className="flex items-center justify-end gap-4">
              <span className="flex items-center gap-1 hover:text-white cursor-pointer"><Phone size={14} /> 10657</span>
              <span className="flex items-center gap-1 hover:text-white cursor-pointer"><Mail size={14} /> info@shukhee.com</span>
            </div>
            <p className="flex items-center justify-end gap-1">
              <MapPin size={14} /> Telecom Bhaban (Level-12), 53/1 Box Nagar, Zoo Road, Dhaka-1216.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;