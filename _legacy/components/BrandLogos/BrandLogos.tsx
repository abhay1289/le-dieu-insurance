import React from 'react';
import { motion } from 'framer-motion';

const BrandLogos = () => {
  const logos = [
    "https://cdn.prod.website-files.com/68eb347fff39988d379df7a3/68ec828759cfb7b513f345a7_brand-logo%20(3).svg",
    "https://cdn.prod.website-files.com/68eb347fff39988d379df7a3/68ec8287705e6d2f7891da52_brand-logo%20(2).svg",
    "https://cdn.prod.website-files.com/68eb347fff39988d379df7a3/68ec8287bb4c8547e4ca9ec0_brand-logo%20(1).svg",
    "https://cdn.prod.website-files.com/68eb347fff39988d379df7a3/68ec82a250f03f95350712d9_02%201.svg"
  ];

  // Increased duplication for ultra-wide monitors to prevent flickering
  const repeatedLogos = Array(10).fill(logos).flat();

  return (
    <section className="py-16 border-b border-gray-100 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 mb-8">
        <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Trusted by Industry Leaders</p>
      </div>

      {/* Enhanced Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-full mt-4">
        <motion.div 
          className="flex items-center gap-20 md:gap-32 flex-shrink-0 pr-20 md:pr-32"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 80, 
            ease: "linear", 
            repeat: Infinity 
          }}
          style={{ width: "max-content" }}
        >
          {repeatedLogos.map((src, i) => (
            <div key={i} className="flex-shrink-0 opacity-40 hover:opacity-100 grayscale transition-all duration-500 cursor-pointer hover:scale-105">
              <img 
                src={src} 
                alt="Brand Logo" 
                className="h-7 md:h-9 w-auto object-contain" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandLogos;