import React, { useState, useEffect, useRef } from 'react';
import { Smile, Calendar, Car } from 'lucide-react';

// Custom Hook for the Count-Up Animation
const useCountUp = (end, duration = 2000, startAnimate = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimate) return;

    let start = 0;
    const increment = end / (duration / 16); // 16ms per frame approx

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, startAnimate]);

  return count;
};

const StatItem = ({ icon: Icon, targetValue, label, isVisible }) => {
  const count = useCountUp(targetValue, 2000, isVisible);

  return (
    <div className="flex flex-col items-center text-white p-4 transition-transform duration-300 hover:scale-105">
      <div className="mb-4">
        <Icon size={64} strokeWidth={1.5} className="opacity-90" />
      </div>
      <div className="text-4xl md:text-5xl font-bold mb-1">
        {count}
      </div>
      <div className="text-sm md:text-base font-medium opacity-80 text-center">
        {label}
      </div>
    </div>
  );
};

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Smile, value: 650, label: "Happy smiles" },
    { icon: Calendar, value: 20, label: "Years of experience" },
    { icon: Car, value: 1200, label: "Emergency Vehicles" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full py-16 md:py-24 bg-gradient-to-r from-sky-400 to-sky-300 shadow-inner"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              icon={stat.icon}
              targetValue={stat.value}
              label={stat.label}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;