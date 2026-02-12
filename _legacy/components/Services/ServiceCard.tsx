import React from 'react';
import { motion } from 'framer-motion';
import { ArrowIcon } from '../../utils/icons';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-[650px] bg-white overflow-hidden border-r border-b border-gray-100 last:border-r-0 lg:border-b-0 hover:z-10"
    >
      {/* Interaction Layer - Background Image */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
        />
        {/* Pure black overlay for text readability, no tints */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full p-10 lg:p-14 transition-all duration-500">
        
        {/* Top Section */}
        <div className="flex justify-between items-start">
           <div className="flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest text-gray-300 group-hover:text-white/80 transition-colors duration-500">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center transition-all duration-500 group-hover:bg-white/10 group-hover:backdrop-blur-md border border-transparent group-hover:border-white/10">
                 <img 
                   src={service.icon} 
                   alt="icon" 
                   className="w-6 h-6 opacity-40 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-500" 
                 />
              </div>
           </div>
           
           <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary group-hover:border-white/20 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
             <ArrowIcon className="w-4 h-4 transform group-hover:-rotate-45 transition-transform duration-500" />
           </div>
        </div>

        {/* Bottom Section */}
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.19,1,0.22,1]">
          <h3 className="text-4xl lg:text-5xl font-light text-primary mb-6 group-hover:text-white transition-colors duration-500 leading-[0.9] tracking-tight">
            {service.title.split(' ')[0]} <br/>
            <span className="font-bold">{service.title.split(' ').slice(1).join(' ')}</span>
          </h3>

          <div className="overflow-hidden max-h-0 group-hover:max-h-60 transition-all duration-700 ease-[0.19,1,0.22,1]">
             <p className="text-white/80 text-lg font-normal leading-relaxed pt-2 pb-8 max-w-sm">
               {service.description}
             </p>
             <div className="pt-2">
                <span className="text-accent text-xs font-bold uppercase tracking-widest border-b border-accent pb-1">Explore Solution</span>
             </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ServiceCard;