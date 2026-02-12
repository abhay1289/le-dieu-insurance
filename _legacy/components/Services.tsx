import React from 'react';
import { ArrowIcon } from '../utils/icons';
import { motion } from 'framer-motion';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'life',
    title: "Life Insurance",
    description: "Secure your family's future with comprehensive plans that provide financial stability when it matters most.",
    icon: "https://cdn.prod.website-files.com/68ec98e703f05ee922bd92e5/68ec9c2d2a0bbea7f6239b3f_life-insurance.svg",
    image: "https://images.unsplash.com/photo-1543355609-0d2931a78486?q=75&w=800&auto=format&fit=crop" // Indian Mother/Family
  },
  {
    id: 'health',
    title: "Health Insurance",
    description: "Access top-tier medical care with flexible health plans designed to safeguard your well-being.",
    icon: "https://cdn.prod.website-files.com/68ec98e703f05ee922bd92e5/68ec9ba4d76194bf1a568d0c_health-insurance.svg",
    image: "https://images.unsplash.com/photo-1588775405975-6c81674e119b?q=75&w=800&auto=format&fit=crop" // Indian Doctor/Patient
  },
  {
    id: 'business',
    title: "Business Insurance",
    description: "Protect your enterprise against unforeseen risks with tailored liability and asset coverage solutions.",
    icon: "https://cdn.prod.website-files.com/68ec98e703f05ee922bd92e5/68ec9bb63293033d83ef6285_business-insurance.svg",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=75&w=800&auto=format&fit=crop" // Indian Corporate Meeting
  }
];

const textRevealVariants = {
  hidden: { y: "100%" },
  visible: { 
    y: 0, 
    transition: { 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const ServiceCard: React.FC<{ service: ServiceItem, index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative h-[600px] bg-white overflow-hidden border-r border-b border-gray-100 last:border-r-0 lg:border-b-0 hover:z-10"
    >
      {/* Interaction Layer - Background Image */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full p-10 lg:p-12 transition-all duration-500">
        
        {/* Top Section */}
        <div className="flex justify-between items-start">
           <div className="flex flex-col gap-4">
              <span className="text-sm font-medium tracking-widest text-gray-300 group-hover:text-white/60 transition-colors duration-500">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center transition-all duration-500 group-hover:bg-white/10 group-hover:backdrop-blur-md">
                 <img 
                   src={service.icon} 
                   alt="icon" 
                   className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-500" 
                 />
              </div>
           </div>
           
           <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary group-hover:border-white/30 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
             <ArrowIcon className="w-4 h-4 transform group-hover:-rotate-45 transition-transform duration-500" />
           </div>
        </div>

        {/* Bottom Section */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]">
          <h3 className="text-3xl lg:text-4xl font-light text-primary mb-4 group-hover:text-white transition-colors duration-500 leading-tight">
            {service.title.split(' ')[0]} <br/>
            <span className="font-bold">{service.title.split(' ').slice(1).join(' ')}</span>
          </h3>

          <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-700 ease-[0.22,1,0.36,1]">
             <p className="text-white/80 text-lg font-light leading-relaxed pt-4 pb-2">
               {service.description}
             </p>
             <div className="pt-4">
                <span className="text-accent text-sm font-semibold tracking-wide border-b border-accent pb-0.5">Learn More</span>
             </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section Matching Hero Style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10 border-b border-gray-100 pb-12">
           <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="max-w-3xl"
           >
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
                className="inline-block text-accent text-lg font-medium mb-4 tracking-wide"
              >
                [ Our Expertise ]
              </motion.div>
              
              <div className="mb-2">
                <div className="overflow-hidden">
                  <motion.h2 
                    variants={textRevealVariants} 
                    className="text-primary text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
                  >
                    Comprehensive
                  </motion.h2>
                </div>
                <div className="overflow-hidden">
                   <motion.div variants={textRevealVariants} className="flex flex-wrap gap-x-4 items-baseline">
                      <span className="text-primary text-5xl md:text-7xl font-light italic">Protection</span>
                      <span className="text-gray-300 text-3xl md:text-5xl font-light tracking-tight">For Every Stage.</span>
                   </motion.div>
                </div>
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="mb-4"
           >
              <a href="/services" className="group flex items-center gap-3 text-primary text-lg font-medium hover:text-accent transition-colors">
                 <span className="border-b border-current pb-1 group-hover:border-accent">View All Solutions</span>
                 <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
           </motion.div>
        </div>

        {/* Enterprise Grid Layout */}
        <div className="border-t border-gray-100">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-gray-100">
             {servicesData.map((service, index) => (
               <ServiceCard key={service.id} service={service} index={index} />
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Services;