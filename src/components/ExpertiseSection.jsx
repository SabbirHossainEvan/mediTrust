import React, { useEffect, useState, useRef } from 'react';

const ExpertiseSection = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { label: "SUCCESS RATE", percentage: 80 },
    { label: "BLOOD BANK", percentage: 80 },
    { label: "DISEASE CURABILITY", percentage: 60 },
    { label: "HAPPY PATIENTS", percentage: 60 },
    { label: "CASES SOLVED", percentage: 75 },
    { label: "CASES SOLVED", percentage: 75 }, // Duplicate per original design
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
            OUR EXPERTISE
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Vel et consectetur augue venenatis 
            pharetra non iaculis bibendum feugiat.
          </p>
        </div>

        {/* Progress Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center font-bold text-gray-700 text-sm tracking-wide">
                <span>{skill.label}</span>
                <span>{skill.percentage}%</span>
              </div>
              
              {/* Progress Track */}
              <div className="h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                {/* Dynamic Fill Layer */}
                <div 
                  className="h-full bg-[#3F37C9] rounded-full transition-all duration-[1500ms] ease-out shadow-lg"
                  style={{ 
                    width: isAnimate ? `${skill.percentage}%` : '0%',
                    transitionDelay: `${index * 100}ms` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;