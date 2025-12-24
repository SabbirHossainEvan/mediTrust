// import React from 'react';
// import { motion } from 'framer-motion';
// import { Facebook, Linkedin, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     company: ["About us", "Contact us", "Shukhee Insights", "FAQ"],
//     service: ["Video Consultancy", "Health Mall", "Online Pharmacy", "Home Lab", "Caregiver"],
//     legal: ["Terms & Conditions", "Privacy Policy", "Refund Policy"]
//   };

//   return (
//     <footer className="bg-[#222222] text-white pt-16 pb-8 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Top Section: Tagline */}
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-2xl font-semibold mb-12"
//         >
//           We can't wait to take care of you
//         </motion.h2>

//         {/* Main Grid Section */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          
//           {/* Company Links */}
//           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
//             <h3 className="text-[#90BC3F] font-bold mb-6 text-lg">Company</h3>
//             <ul className="space-y-3 text-gray-300 text-sm">
//               {footerLinks.company.map(link => (
//                 <li key={link} className="hover:text-[#90BC3F] cursor-pointer transition-colors">{link}</li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Service Links */}
//           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
//             <h3 className="text-[#90BC3F] font-bold mb-6 text-lg">Service</h3>
//             <ul className="space-y-3 text-gray-300 text-sm">
//               {footerLinks.service.map(link => (
//                 <li key={link} className="hover:text-[#90BC3F] cursor-pointer transition-colors">{link}</li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Legal Links */}
//           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
//             <h3 className="text-[#90BC3F] font-bold mb-6 text-lg">Legal and Policies</h3>
//             <ul className="space-y-3 text-gray-300 text-sm">
//               {footerLinks.legal.map(link => (
//                 <li key={link} className="hover:text-[#90BC3F] cursor-pointer transition-colors">{link}</li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Social Links */}
//           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
//             <h3 className="text-[#90BC3F] font-bold mb-6 text-lg">Social Links</h3>
//             <div className="flex gap-4">
//               {[Facebook, Linkedin, Instagram, Youtube].map((Icon, index) => (
//                 <motion.div 
//                   key={index}
//                   whileHover={{ scale: 1.2, color: "#90BC3F" }}
//                   className="bg-white text-black p-2 rounded-full cursor-pointer transition-all"
//                 >
//                   <Icon size={18} />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Download App */}
//           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
//             <h3 className="text-[#90BC3F] font-bold mb-6 text-lg">Download App</h3>
//             <div className="space-y-3">
//               <img 
//                 src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
//                 alt="Google Play" 
//                 className="w-32 cursor-pointer hover:opacity-80 transition-opacity"
//               />
//               <img 
//                 src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
//                 alt="App Store" 
//                 className="w-32 cursor-pointer hover:opacity-80 transition-opacity"
//               />
//             </div>
//           </motion.div>
//         </div>

//         <div className="border-t border-gray-700 my-8"></div>


//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
//           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
//             <h2 className="text-[#90BC3F] text-2xl font-bold mb-2">MediTrust</h2>
//             <p className="text-gray-400 text-xs italic underline cursor-pointer">
//               An initiative of Grameen HealthTech Limited (GHL).
//             </p>
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0 }} 
//             whileInView={{ opacity: 1 }}
//             className="text-gray-400 text-xs text-right space-y-2"
//           >
//             <div className="flex items-center justify-end gap-4">
//               <span className="flex items-center gap-1 hover:text-white cursor-pointer"><Phone size={14} /> 10657</span>
//               <span className="flex items-center gap-1 hover:text-white cursor-pointer"><Mail size={14} /> info@shukhee.com</span>
//             </div>
//             <p className="flex items-center justify-end gap-1">
//               <MapPin size={14} /> Telecom Bhaban (Level-12), 53/1 Box Nagar, Zoo Road, Dhaka-1216.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer Link Categories
  const footerLinks = {
    company: ["About us", "Contact us", "Shukhee Insights", "FAQ"],
    service: ["Video Consultancy", "Health Mall", "Online Pharmacy", "Home Lab", "Caregiver"],
    legal: ["Terms & Conditions", "Privacy Policy", "Refund Policy"]
  };

  // Dynamic Social Media Links
  const socialMedia = [
    { Icon: Facebook, url: "https://www.facebook.com/SabbirHossainEvan31", color: "#1877F2" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/sabbirhossainevan/", color: "#0A66C2" },
    { Icon: Instagram, url: "https://www.instagram.com/_evan__31_?igsh=cG1lMWV5YjM1Z2oz", color: "#E4405F" },
    { Icon: Youtube, url: "https://github.com/SabbirHossainEvan", color: "#FF0000" },
  ];

  return (
    <footer className="bg-[#222222] text-white pt-16 pb-8 px-6 md:px-12 mt-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Tagline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-12"
        >
          We can't wait to take care of you
        </motion.h2>

        {/* Main Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          
          {/* Company Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
            <h3 className="text-[#90BC3F] font-bold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {footerLinks.company.map(link => (
                <li key={link} className="hover:text-[#90BC3F] cursor-pointer transition-colors">{link}</li>
              ))}
            </ul>
          </motion.div>

          {/* Service Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            <h3 className="text-[#90BC3F] font-bold mb-6 text-lg">Service</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {footerLinks.service.map(link => (
                <li key={link} className="hover:text-[#90BC3F] cursor-pointer transition-colors">{link}</li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
            <h3 className="text-[#90BC3F] font-bold mb-6 text-lg">Legal and Policies</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {footerLinks.legal.map(link => (
                <li key={link} className="hover:text-[#90BC3F] cursor-pointer transition-colors">{link}</li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links - Updated with Clickable Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
            <h3 className="text-[#90BC3F] font-bold mb-6 text-lg">Social Links</h3>
            <div className="flex gap-4">
              {socialMedia.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2, 
                    backgroundColor: social.color, 
                    color: "#ffffff" 
                  }}
                  className="bg-white text-black p-2 rounded-full cursor-pointer transition-all flex items-center justify-center shadow-md"
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Download App */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
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

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Contact Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-[#90BC3F] text-2xl font-bold mb-2">MediTrust</h2>
            <p className="text-gray-400 text-xs italic underline cursor-pointer">
              An initiative of Grameen HealthTech Limited (GHL).
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-xs text-left md:text-right space-y-2"
          >
            <div className="flex flex-wrap items-center justify-start md:justify-end gap-4">
              <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
                <Phone size={14} /> 10657
              </span>
              <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
                <Mail size={14} /> info@shukhee.com
              </span>
            </div>
            <p className="flex items-center justify-start md:justify-end gap-1">
              <MapPin size={14} /> Telecom Bhaban (Level-12), 53/1 Box Nagar, Zoo Road, Dhaka-1216.
            </p>
            <p className="mt-4 opacity-50">© {currentYear} MediTrust. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;