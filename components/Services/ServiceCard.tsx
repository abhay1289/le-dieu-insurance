import React from 'react';
import { motion } from 'framer-motion';
import { ArrowIcon } from '../../utils/icons';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="active"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
      className="group relative h-auto min-h-[600px] md:h-[500px] lg:h-[650px] bg-white overflow-hidden border-r border-b border-gray-200 last:border-r-0 lg:border-b-0 hover:z-10 cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          variants={{
            initial: { scale: 1 },
            active: { scale: 1.1 }
          }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as any }}
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <motion.div
          variants={{
            initial: { backgroundColor: 'rgba(0,0,0,0.4)' },
            active: { backgroundColor: 'rgba(0,0,0,0.55)' }
          }}
          className="absolute inset-0 transition-colors duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 md:from-black/80 md:via-black/30 md:to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-10 lg:p-14">

        {/* Top — Icon + Arrow */}
        <div className="flex justify-between items-start mb-auto">
          <motion.div
            variants={{
              initial: { backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.1)', color: '#ffffff' },
              active: { backgroundColor: 'var(--color-accent-green)', borderColor: 'var(--color-accent-green)', color: '#ffffff' }
            }}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-500 border"
          >
            <service.icon className="w-5 h-5 md:w-6 md:h-6 transition-all duration-500" />
          </motion.div>

          <motion.div
            variants={{
              initial: { backgroundColor: 'transparent', borderColor: 'rgba(255,255,255,0.2)', color: '#ffffff' },
              active: { backgroundColor: 'var(--color-accent-green)', borderColor: 'var(--color-accent-green)', color: '#ffffff' }
            }}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-500"
          >
            <motion.div
              variants={{ initial: { rotate: 0 }, active: { rotate: -45 } }}
              transition={{ duration: 0.5 }}
            >
              <ArrowIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom — Title + Description + Link */}
        <div className="mt-auto">
          <motion.h3
            variants={{
              initial: { color: '#ffffff' },
              active: { color: index === 2 ? '#ffffff' : 'var(--color-accent-green)' }
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-light mb-3 md:mb-4 transition-colors duration-500 leading-[1.1] tracking-tight"
          >
            {service.title.split(' ')[0]} <br />
            <span className="font-bold">{service.title.split(' ').slice(1).join(' ')}</span>
          </motion.h3>

          {/* Mobile: always visible / Desktop: reveal on hover */}
          <p className="text-white text-sm md:text-lg font-bold leading-relaxed max-w-sm mb-4 md:mb-0 block md:hidden">
            {service.description}
          </p>
          <motion.div
            variants={{
              initial: { height: 0, opacity: 0, marginBottom: 0 },
              active: { height: 'auto', opacity: 1, marginBottom: 24 }
            }}
            className="overflow-hidden transition-all duration-700 ease-[0.19,1,0.22,1] hidden md:block"
          >
            <p className="text-white/80 text-lg font-normal leading-relaxed max-w-sm">
              {service.description}
            </p>
          </motion.div>

          <div className="pt-2 md:pt-6">
            <motion.span
              variants={{
                initial: { color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' },
                active: { color: 'var(--color-accent-green)', borderColor: 'var(--color-accent-green)' }
              }}
              className="text-xs font-bold uppercase tracking-widest border-b pb-1 transition-all duration-500"
            >
              Explore Solution
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
