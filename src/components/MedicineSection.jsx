import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const MedicineSection = () => {
  const medicines = [
    { id: 1, name: "Sergel", strength: "20 mg", company: "Healthcare Pharmaceuticals Ltd.", price: "99.00", image: "https://i.ibb.co/6R0D9YV/medicine1.png" },
    { id: 2, name: "Sabitar", strength: "50 mg", company: "Healthcare Pharmaceuticals Ltd.", price: "99.00", image: "https://i.ibb.co/zH9P8Xm/medicine2.png" },
    { id: 3, name: "Edeloss Plus", strength: "10 mg", company: "Healthcare Pharmaceuticals Ltd.", price: "99.00", image: "https://i.ibb.co/mS0G6V4/medicine3.png" },
    { id: 4, name: "Pantonix", strength: "20 mg", company: "Healthcare Pharmaceuticals Ltd.", price: "99.00", image: "https://i.ibb.co/q9Wf9pG/medicine4.png" },
    { id: 5, name: "Sergel", strength: "20 mg", company: "Healthcare Pharmaceuticals Ltd.", price: "99.00", image: "https://i.ibb.co/6R0D9YV/medicine1.png" },
  ];

  return (
    <section className="py-16 px-4 bg-white max-w-7xl mx-auto overflow-hidden">
      {/* Header with Fade-in Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">OUR MEDICINE</h2>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Facilisis amet vulputate vestibulum pulvinar mi vulputate sem urna.
        </p>
      </motion.div>

      {/* Animated Medicine Slider */}
      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        effect={'coverflow'} // Adds a 3D slide effect
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-20"
      >
        {medicines.map((item, index) => (
          <SwiperSlide key={item.id}>
            <motion.div 
              // Slide-in animation for each card
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              
              whileHover={{ y: -12, scale: 1.02 }}
              className="bg-[#E5E7EB] rounded-[32px] p-5 shadow-sm h-full flex flex-col transition-all duration-300"
            >
              {/* Image Container with inner animation */}
              <div className="bg-white rounded-3xl p-6 mb-5 flex items-center justify-center h-52 shadow-inner group overflow-hidden">
                <motion.img 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  src={item.image} 
                  alt={item.name} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>

              {/* Info Section */}
              <div className="flex-grow px-2">
                <div className="flex items-center gap-2 mb-1">
                   <h3 className="text-xl font-bold text-[#1a1a1a]">{item.name}</h3>
                   <span className="text-[10px] bg-gray-300 px-2 py-0.5 rounded text-gray-700 font-bold uppercase">
                     {item.strength}
                   </span>
                </div>
                <p className="text-gray-500 text-sm mb-4 font-medium leading-tight">
                  {item.company}
                </p>
                <p className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                  <span className="text-lg mr-1 font-normal">৳</span> {item.price}
                </p>
              </div>

              {/* Buttons with Slide-up Animation on Hover */}
              <div className="flex gap-3 mt-auto">
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-[#5D5FEF] hover:bg-[#4749D4] text-white text-xs py-3.5 rounded-xl font-bold shadow-md transition-colors"
                >
                  Add to cart
                </motion.button>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-[#5D5FEF] hover:bg-[#4749D4] text-white text-xs py-3.5 rounded-xl font-bold shadow-md transition-colors"
                >
                  Buy Now
                </motion.button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #cbd5e1 !important;
          opacity: 1 !important;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #4b5563 !important;
          width: 24px !important;
          border-radius: 10px !important;
        }
        .swiper-container {
          padding-top: 20px;
        }
      `}</style>
    </section>
  );
};

export default MedicineSection;