import React from 'react';
import { motion } from 'framer-motion';
import { ArrowIcon } from '../../utils/icons';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType; // Changed from string to Component type
  image: string;
}

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
      className="group relative h-[500px] lg:h-[650px] bg-white overflow-hidden border-r border-b border-gray-200 last:border-r-0 lg:border-b-0 hover:z-10"
    >
      {/* Interaction Layer - Background Image */}
      {/* Interaction Layer - Background Image (Visible by default now) */}
      <div className="absolute inset-0 z-0 opacity-100 transition-opacity duration-700 ease-in-out">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transform scale-110 lg:scale-100 lg:group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
        />
        {/* Dark overlay for readability - Reduced intensity */}
        <div className="absolute inset-0 bg-black/50 lg:bg-black/40 lg:group-hover:bg-black/50 transition-colors duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full p-10 lg:p-14 transition-all duration-500">

        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold tracking-widest text-white lg:text-white/60 lg:group-hover:text-white transition-colors duration-500">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <div className="w-14 h-14 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-500 border bg-accent border-accent text-primary lg:bg-white/10 lg:border-white/10 lg:text-white lg:group-hover:bg-accent lg:group-hover:border-accent lg:group-hover:text-primary">
              <service.icon
                className="w-6 h-6 transition-all duration-500 text-primary lg:text-white lg:group-hover:text-primary"
              />
            </div>
          </div>

          <div className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 bg-accent text-primary border-accent lg:bg-transparent lg:text-white lg:border-white/20 lg:group-hover:bg-accent lg:group-hover:text-primary lg:group-hover:border-accent">
            <ArrowIcon className="w-4 h-4 transform -rotate-45 lg:rotate-0 lg:group-hover:-rotate-45 transition-transform duration-500" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-700 ease-[0.19,1,0.22,1]">
          <div className="pb-6 overflow-visible">
            <h3 className="text-4xl lg:text-5xl font-light mb-2 transition-colors duration-500 leading-[1.1] tracking-tight text-accent lg:text-white lg:group-hover:text-accent">
              {service.title.split(' ')[0]} <br />
              <span className="font-bold">{service.title.split(' ').slice(1).join(' ')}</span>
            </h3>
          </div>

          <div className="relative overflow-visible">
            <div className="overflow-hidden transition-all duration-700 ease-[0.19,1,0.22,1] max-h-60 lg:max-h-0 lg:group-hover:max-h-60">
              <p className="text-white/80 text-lg font-normal leading-relaxed pb-8 max-w-sm">
                {service.description}
              </p>
            </div>

            <div className="pt-2 opacity-100">
              <span className="text-xs font-bold uppercase tracking-widest border-b pb-1 transition-all duration-500 text-accent border-accent lg:text-white lg:border-white/30 lg:group-hover:text-accent lg:group-hover:border-accent">
                Explore Solution
              </span>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ServiceCard;