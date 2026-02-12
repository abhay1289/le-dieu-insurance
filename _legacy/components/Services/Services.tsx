import React from 'react';
import { ArrowIcon } from '../../utils/icons';
import { motion } from 'framer-motion';
import ServiceCard, { ServiceItem } from './ServiceCard';

const servicesData: ServiceItem[] = [
  {
    id: 'life',
    title: "Life Insurance",
    description: "Secure your family's future with comprehensive plans that provide financial stability when it matters most.",
    icon: "https://cdn.prod.website-files.com/68ec98e703f05ee922bd92e5/68ec9c2d2a0bbea7f6239b3f_life-insurance.svg",
    image: "https://images.unsplash.com/photo-1543355609-0d2931a78486?q=75&w=800&auto=format&fit=crop" 
  },
  {
    id: 'health',
    title: "Health Insurance",
    description: "Access top-tier medical care with flexible health plans designed to safeguard your well-being.",
    icon: "https://cdn.prod.website-files.com/68ec98e703f05ee922bd92e5/68ec9ba4d76194bf1a568d0c_health-insurance.svg",
    image: "https://images.unsplash.com/photo-1588775405975-6c81674e119b?q=75&w=800&auto=format&fit=crop" 
  },
  {
    id: 'business',
    title: "Business Insurance",
    description: "Protect your enterprise against unforeseen risks with tailored liability and asset coverage solutions.",
    icon: "https://cdn.prod.website-files.com/68ec98e703f05ee922bd92e5/68ec9bb63293033d83ef6285_business-insurance.svg",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=75&w=800&auto=format&fit=crop" 
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

const Services = () => {
  return (
    <section className="py-32 md:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-gray-100 pb-16">
           <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="max-w-4xl"
           >
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="w-8 h-px bg-primary"></span>
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Our Expertise</span>
              </motion.div>
              
              <div className="mb-2">
                <div className="overflow-hidden">
                  <motion.h2 
                    variants={textRevealVariants} 
                    className="text-primary text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95]"
                  >
                    Comprehensive
                  </motion.h2>
                </div>
                <div className="overflow-hidden">
                   <motion.div variants={textRevealVariants} className="flex flex-wrap gap-x-4 items-baseline">
                      <span className="text-primary text-6xl md:text-8xl font-light italic font-serif">Protection</span>
                      <span className="text-gray-300 text-4xl md:text-6xl font-light tracking-tight ml-4">For Every Stage.</span>
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
              <a href="/services" className="group flex items-center gap-3 text-primary text-lg font-medium hover:text-accent-hover transition-colors">
                 <span className="border-b border-current pb-1 group-hover:border-accent-hover">View All Solutions</span>
                 <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
           </motion.div>
        </div>

        {/* Services Grid */}
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