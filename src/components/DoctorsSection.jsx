import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const DoctorsSection = () => {
  const doctors = [
    {
      id: 1,
      name: "MEHRIMA KHAN",
      role: "Head Of Department",
      desc: "Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "https://i.ibb.co/Yy0mX8S/doctor1.jpg"
    },
    {
      id: 2,
      name: "ANWAR JAHID",
      role: "Head Of Department",
      desc: "Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "https://i.ibb.co/vYxZ6Wk/doctor2.jpg"
    },
    {
      id: 3,
      name: "Md. Aulad Uddin",
      role: "Head Of Department",
      desc: "Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "https://i.ibb.co/9G8Xf7Y/doctor3.jpg"
    },
    {
      id: 4,
      name: "OSIM KUMAR",
      role: "Head Of Department",
      desc: "Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "https://i.ibb.co/Zhf6z4S/doctor4.jpg"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 overflow-hidden">
      {/* Animated Header */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-2 uppercase tracking-tight">Our Doctors</h2>
        <p className="text-gray-500 max-w-lg mx-auto text-sm">
          Lorem ipsum dolor sit amet consectetur. A et dignissim a faucibus.
        </p>
      </motion.div>

      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-20 px-10"
      >
        {doctors.map((doc, index) => (
          <SwiperSlide key={doc.id}>
            <motion.div 
              // Slide-up and fade-in entry animation
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              
              // Hover interaction
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-white rounded-[40px] p-6 border border-gray-100 flex flex-col items-center h-full transition-all"
            >
              {/* Image with zoom effect */}
              <div className="w-full aspect-square rounded-[30px] overflow-hidden mb-6 shadow-sm">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-[#4338CA] mb-1 uppercase text-center">
                {doc.name}
              </h3>
              <p className="text-xs font-bold text-gray-800 mb-4 tracking-wider">
                {doc.role}
              </p>
              <p className="text-gray-400 text-[11px] leading-relaxed text-center px-4 mb-4">
                {doc.desc}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Same-to-Same Pagination Dots CSS */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #E5E7EB !important;
          opacity: 1 !important;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #4B5563 !important;
          width: 25px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default DoctorsSection;