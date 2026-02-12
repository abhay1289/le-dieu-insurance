import React from 'react';
import { motion } from 'framer-motion';

const BrandLogos = () => {
  const logos = [
    "https://cdn.prod.website-files.com/68eb347fff39988d379df7a3/68ec828759cfb7b513f345a7_brand-logo%20(3).svg",
    "https://cdn.prod.website-files.com/68eb347fff39988d379df7a3/68ec8287705e6d2f7891da52_brand-logo%20(2).svg",
    "https://cdn.prod.website-files.com/68eb347fff39988d379df7a3/68ec8287bb4c8547e4ca9ec0_brand-logo%20(1).svg",
    "https://cdn.prod.website-files.com/68eb347fff39988d379df7a3/68ec82a250f03f95350712d9_02%201.svg"
  ];

  // Create duplicate sets to ensure seamless looping and full width coverage
  // Using 8 sets ensures we have enough content for wide screens and the -50% translate works perfectly
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-12 border-b border-gray-100 bg-white overflow-hidden relative">
      {/* Gradient Masks for smooth fade in/out edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-full">
        <motion.div 
          className="flex items-center gap-16 md:gap-32 flex-shrink-0 pr-16 md:pr-32"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 60, // Slower speed for elegance
            ease: "linear", 
            repeat: Infinity 
          }}
          style={{ width: "max-content" }}
        >
          {repeatedLogos.map((src, i) => (
            <div key={i} className="flex-shrink-0 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
              <img 
                src={src} 
                alt="Brand Logo" 
                className="h-8 md:h-10 w-auto object-contain" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandLogos;