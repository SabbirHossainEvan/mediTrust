import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import img1 from "../assets/image 22 (1).png";
import img2 from "../assets/image 19.png";
import img3 from "../assets/image 20.png";
import img4 from "../assets/image 21.png";
import { Link } from "react-router";

const MedicineSection = () => {
  const medicines = [
    {
      id: 1,
      name: "Sergel",
      strength: "20 mg",
      company: "Healthcare Pharmaceuticals Ltd.",
      price: "99.00",
      image: img1,
    },
    {
      id: 2,
      name: "Sabitar",
      strength: "50 mg",
      company: "Healthcare Pharmaceuticals Ltd.",
      price: "99.00",
      image: img2,
    },
    {
      id: 3,
      name: "Edeloss Plus",
      strength: "10 mg",
      company: "Healthcare Pharmaceuticals Ltd.",
      price: "99.00",
      image: img3,
    },
    {
      id: 4,
      name: "Pantonix",
      strength: "20 mg",
      company: "Healthcare Pharmaceuticals Ltd.",
      price: "99.00",
      image: img4,
    },
    {
      id: 5,
      name: "Sergel",
      strength: "20 mg",
      company: "Healthcare Pharmaceuticals Ltd.",
      price: "99.00",
      image: img1,
    },
  ];

  return (
    <section className="py-10 px-4 bg-white max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, letterSpacing: "-5px" }}
          whileInView={{ opacity: 1, letterSpacing: "1px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-900 mb-4 uppercase"
        >
          Our Medicine
        </motion.h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Facilisis amet vulputate
          vestibulum pulvinar mi vulputate sem urna.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-30"
      >
        {medicines.map((item, index) => (
          <SwiperSlide key={item.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-[#F1F3F6] rounded-[35px] p-5 shadow-sm border border-transparent hover:border-indigo-200 transition-all group h-full"
            >

              <div className="bg-white rounded-[30px] p-6 mb-6 h-56 gap-5 flex items-center justify-center shadow-inner relative overflow-hidden">
                <motion.img
                  whileHover={{
                    scale: 1.15,
                    y: -10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  src={item.image}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain z-10"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/200";
                  }}
                />

                <div className="absolute w-32 h-32 bg-indigo-50 rounded-full -bottom-10 -right-10 group-hover:scale-150 transition-transform duration-500" />
              </div>

              {/* Info Area */}
              <div className="px-2">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-bold text-indigo-600 bg-white px-2 py-1 rounded-md shadow-sm">
                    {item.strength}
                  </span>
                </div>
                <p className="text-gray-400 text-xs mb-4 line-clamp-1">
                  {item.company}
                </p>
                <div className="text-2xl font-black text-gray-900 mb-6 flex items-baseline">
                  <span className="text-sm mr-1 font-bold">৳</span>
                  {item.price}
                </div>
              </div>


              <div className="flex gap-2">
                <Link to={"/cart"} className="flex-1 bg-[#5D5FEF] text-white text-center text-[11px] font-bold py-3.5 rounded-2xl shadow-lg shadow-indigo-200">
                                  <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  
                >
                  Add to cart
                </motion.button>
                </Link>
                
                <Link to={"/cart"} className="flex-1 text-center bg-white text-[#5D5FEF] border border-[#5D5FEF] text-[11px] font-bold py-3.5 rounded-2xl hover:bg-indigo-50">
                                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  
                >
                  Buy Now
                </motion.button>
                </Link>

              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d1d5db !important;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #5d5fef !important;
          opacity: 1;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
};

export default MedicineSection;
