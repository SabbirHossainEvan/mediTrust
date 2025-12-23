import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: "WELCOME TO MEDITRUST",
      description: "Lorem ipsum dolor sit amet consectetur. Commodo ullamcorper vulputate nullam egestas tellus erat viverra in.",
      image: "https://img.freepik.com/free-vector/health-insurance-concept-illustration_114360-1505.jpg",
    },
    {
      id: 2,
      title: "BEST DOCTORS FOR YOU",
      description: "Experience world-class healthcare with our expert medical team and advanced facilities.",
      image: "https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",
    },
    {
      id: 3,
      title: "YOUR HEALTH IS PRIORITY",
      description: "Get 24/7 support and medicine delivery right at your doorstep with MediTrust.",
      image: "https://img.freepik.com/free-vector/online-doctor-consultation-illustration_114360-1533.jpg",
    }
  ];

  return (
    <div className="w-full h-[600px] lg:h-[85vh] bg-gradient-to-r from-[#DBEAFE] to-[#93C5FD]">
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col lg:flex-row items-center justify-between h-full max-w-7xl mx-auto px-6 py-12 gap-8">
              
              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 text-left"
              >
                <h1 className="text-4xl md:text-6xl font-black text-[#1E3A8A] leading-tight mb-4 uppercase">
                  {slide.title}
                </h1>
                <p className="text-gray-700 text-lg mb-8 max-w-lg leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:scale-105 active:scale-95">
                    Explore Now
                  </button>
                  <button className="bg-white/50 backdrop-blur-md border-2 border-[#2563EB] text-[#2563EB] px-8 py-3 rounded-full font-bold hover:bg-[#2563EB] hover:text-white transition-all">
                    Contact Us
                  </button>
                </div>
              </motion.div>

              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 flex justify-center relative"
              >

                <motion.img 
                  src={slide.image} 
                  alt="Medical Illustration"
                  className="w-full max-w-[450px] drop-shadow-2xl z-10"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200/50 rounded-full blur-3xl -z-0" />
              </motion.div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: #1E3A8A !important;
          transform: scale(0.6);
        }
        .swiper-pagination-bullet-active {
          background: #2563EB !important;
          width: 25px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;      