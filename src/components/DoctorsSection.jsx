


import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; 


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import docImg1 from '../assets/Rectangle 122.png';
import docImg2 from '../assets/Rectangle 115.png';
import docImg3 from '../assets/Rectangle 125.png';
import docImg4 from '../assets/Rectangle 115 (1).png';

const DoctorsSection = () => {
  const doctors = [
    { id: 1, name: "MEHRIMA KHAN", role: "Head Of Department", desc: "Expert in cardiology with over 10 years of experience.", image: docImg1 },
    { id: 2, name: "ANWAR JAHID", role: "Head Of Department", desc: "Specialized in neurological sciences and patient care.", image: docImg2 },
    { id: 3, name: "Md. Aulad Uddin", role: "Head Of Department", desc: "Dedicated to providing top-notch surgical solutions.", image: docImg3 },
    { id: 4, name: "OSIM KUMAR", role: "Head Of Department", desc: "Focused on pediatric health and child development.", image: docImg4 }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-2 uppercase tracking-tight">Our Doctors</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Behind the word mountains, far from the countries Vokalia and Consonantia.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={20} 
          slidesPerView={1} 
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{

            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            
            1024: {
              slidesPerView: 4, 
              spaceBetween: 25,
            },
          }}
          className="pb-20"
        >
          {doctors.map((doc, index) => (
            <SwiperSlide key={doc.id}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[35px] p-5 flex flex-col items-center h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Doctor Image Container */}
                <div className="w-full aspect-[4/5] rounded-[25px] overflow-hidden mb-6 bg-gray-100">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x500?text=Doctor" }}
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-blue-700 mb-1 uppercase leading-tight">
                    {doc.name}
                  </h3>
                  <p className="text-[10px] font-bold text-gray-800 mb-4 tracking-widest uppercase">
                    {doc.role}
                  </p>
                  <p className="text-gray-400 text-[11px] leading-relaxed line-clamp-3">
                    {doc.desc}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #E2E8F0 !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #3B82F6 !important;
          width: 25px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default DoctorsSection;