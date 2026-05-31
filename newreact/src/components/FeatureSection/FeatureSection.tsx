import React, { useState } from 'react';
import { BsShieldCheck } from 'react-icons/bs';
import { FaHeadphones, FaTruck } from 'react-icons/fa6';
import { LuRotateCcw } from 'react-icons/lu';


const FeatureSection = () => {
  
  const [activeCard, setActiveCard] = useState(0);

  const features = [
    {
      id: 0,
      title: 'Free & Fast Delivery',
      Icon: FaTruck,
    },
    {
      id: 1,
      title: '24/7 Customer Support',
      Icon: FaHeadphones,
    },
    {
      id: 2,
      title: 'Secure Payment',
      Icon: BsShieldCheck,
    },
    {
      id: 3,
      title: 'Easy Returns',
      Icon: LuRotateCcw,
    },
  ];

  return (
    <div className="w-full bg-[#070b13] py-12 px-6 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature) => {
          const isActive = activeCard === feature.id;
          
          return (
            <div
              key={feature.id}
              onClick={() => setActiveCard(feature.id)}
              className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 min-h-[140px] flex flex-col justify-between bg-[#222b3c] border-2 ${
                isActive 
                  ? 'border-amber-500 shadow-lg shadow-amber-500/10' 
                  : 'border-transparent hover:border-gray-700'
              }`}
            >
              {/* Icon Container */}
              <div 
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-amber-500 text-white' 
                    : 'bg-[#2d3748] text-amber-500'
                }`}
              >
                <feature.Icon size={24} strokeWidth={2} />
              </div>

              {/* Title Text */}
              <h3 
                className={`font-semibold text-sm tracking-wide mt-4 ${
                  isActive ? 'text-amber-500' : 'text-white'
                }`}
              >
                {feature.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;