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
  const [isActive, setIsActive] = React.useState(false);

  return (
    <motion.div
      initial="initial"
      whileHover="active"
      animate={isActive ? "active" : undefined}
      onClick={() => setIsActive(!isActive)}


      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
      className="group relative h-[500px] lg:h-[650px] bg-white overflow-hidden border-r border-b border-gray-200 last:border-r-0 lg:border-b-0 hover:z-10 cursor-pointer"
    >
      {/* Interaction Layer - Background Image */}
      <div className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out">
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
        {/* Dark overlay for readability */}
        <motion.div
          variants={{
            initial: { backgroundColor: 'rgba(0,0,0,0.4)' },
            active: { backgroundColor: 'rgba(0,0,0,0.55)' }
          }}
          className="absolute inset-0 transition-colors duration-500"
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-10 lg:p-14 transition-all duration-500">

        {/* Top Section */}

        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-6">
            <motion.span
              variants={{
                initial: { color: 'rgba(255,255,255,0.6)' },
                active: { color: 'rgba(255,255,255,1)' }
              }}
              className="text-xs font-bold tracking-widest transition-colors duration-500"
            >
              {(index + 1).toString().padStart(2, '0')}
            </motion.span>
            <motion.div
              variants={{
                initial: { backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.1)', color: '#ffffff' },
                active: { backgroundColor: '#86EFAC', borderColor: '#86EFAC', color: '#0B1C15' }
              }}
              className="w-14 h-14 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-500 border"
            >
              <service.icon className="w-6 h-6 transition-all duration-500" />
            </motion.div>
          </div>

          <motion.div
            variants={{
              initial: { backgroundColor: 'transparent', borderColor: 'rgba(255,255,255,0.2)', color: '#ffffff' },
              active: { backgroundColor: '#86EFAC', borderColor: '#86EFAC', color: '#0B1C15' }
            }}
            className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500"
          >
            <motion.div
              variants={{
                initial: { rotate: 0 },
                active: { rotate: -45 }
              }}
              transition={{ duration: 0.5 }}
            >
              <ArrowIcon className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={{
            initial: { y: 20 },
            active: { y: 0 }
          }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] as any }}
          className="transform"
        >
          <div className="pb-6 overflow-visible">
            <motion.h3
              variants={{
                initial: { color: '#ffffff' },
                active: { color: '#86EFAC' }
              }}
              className="text-4xl lg:text-5xl font-light mb-2 transition-colors duration-500 leading-[1.1] tracking-tight"
            >
              {service.title.split(' ')[0]} <br />
              <span className="font-bold">{service.title.split(' ').slice(1).join(' ')}</span>
            </motion.h3>
          </div>

          <div className="relative overflow-visible">
            <motion.div
              variants={{
                initial: { height: 0, opacity: 0, marginBottom: 0 },
                active: { height: 'auto', opacity: 1, marginBottom: 32 }
              }}
              className="overflow-hidden transition-all duration-700 ease-[0.19,1,0.22,1]"
            >
              <p className="text-white/80 text-lg font-normal leading-relaxed max-w-sm">
                {service.description}
              </p>
            </motion.div>

            <div className="pt-2">
              <motion.span
                variants={{
                  initial: { color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' },
                  active: { color: '#86EFAC', borderColor: '#86EFAC' }
                }}
                className="text-xs font-bold uppercase tracking-widest border-b pb-1 transition-all duration-500"
              >
                Explore Solution
              </motion.span>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ServiceCard;