import React from 'react';
import { Stethoscope, Car, MapPin } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "EASY APPOINTMENTS",
      description: "Lorem ipsum dolor sit amet consectetur. Bibendum diam sollicitudin nisl volutpat at orci lobortis nunc.",
      icon: <Car className="w-12 h-12 text-black" />,
    },
    {
      title: "BEST DOCTORS",
      description: "Lorem ipsum dolor sit amet consectetur. Bibendum diam sollicitudin nisl volutpat at orci lobortis nunc.",
      icon: <Stethoscope className="w-12 h-12 text-black" />,
    },
    {
      title: "HIGH QUALITY SERVICES",
      description: "Lorem ipsum dolor sit amet consectetur. Bibendum diam sollicitudin nisl volutpat at orci lobortis nunc.",
      icon: <MapPin className="w-12 h-12 text-black" />,
    }
  ];

  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center text-center p-10 rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-5"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon Container */}
              <div className="mb-8 p-4 rounded-full transition-transform duration-500 group-hover:rotate-[360deg]">
                {feature.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-8 text-sm px-2">
                {feature.description}
              </p>

              {/* Action Button */}
              <button className="mt-auto bg-[#3F37C9] text-white px-10 py-3 rounded-2xl font-semibold text-sm tracking-wider uppercase transition-all hover:bg-[#322BB3] active:scale-95 shadow-lg shadow-indigo-100">
                LEARN MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;