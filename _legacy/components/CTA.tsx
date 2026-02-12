import React from 'react';
import { ArrowIcon } from '../utils/icons';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-secondary rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden"
        >
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
               <span className="uppercase tracking-widest text-sm font-medium text-gray-500">Let’s Talk</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-10 leading-tight">
               Let’s Talk to Our Trusted <span className="text-accent italic">Insurance Advisor</span>
            </h2>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <a href="/agents" className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-accent transition-colors flex items-center justify-center gap-2">
                 Chat With Advisor <ArrowIcon />
               </a>
               <a href="/contact-us" className="bg-transparent border border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                 Contact Us <ArrowIcon />
               </a>
            </div>
          </div>

          {/* Decorative Images (Hidden on mobile for cleaner look or adapted) */}
          <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-48 h-48 hidden lg:block border-4 border-white rounded-full overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" alt="Indian Advisor" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-48 h-48 hidden lg:block border-4 border-white rounded-full overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop" alt="Indian Agent" className="w-full h-full object-cover" />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;