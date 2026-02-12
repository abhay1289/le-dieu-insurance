import React from 'react';
import { ArrowIcon } from '../../utils/icons';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden"
        >
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
               <span className="uppercase tracking-[0.2em] text-xs font-bold text-accent">Start Your Journey</span>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-12 leading-[1.1] tracking-tighter">
               Ready to secure your legacy with our <span className="text-accent italic font-serif">Trusted Advisors?</span>
            </h2>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <a href="/agents" className="bg-white text-primary px-10 py-5 rounded-full font-bold text-sm tracking-wide hover:bg-accent transition-colors flex items-center justify-center gap-3 hover:scale-105 transform duration-300">
                 Chat With Advisor <ArrowIcon className="w-3 h-3" />
               </a>
               <a href="/contact-us" className="bg-transparent border border-white/20 text-white px-10 py-5 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-3">
                 Contact Us <ArrowIcon className="w-3 h-3" />
               </a>
            </div>
          </div>

          {/* Decorative Elements - Subtle Abstract Forms */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;