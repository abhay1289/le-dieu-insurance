import React from 'react';
import { ArrowIcon } from '../../utils/icons';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="contact" className="py-16 md:py-32 bg-[#FAFBFB]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl border border-gray-100"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.1 }}
              className="flex items-center justify-center gap-4 mb-4 md:mb-8"
            >
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-accent">Start Your Journey</span>
            </motion.div>

            <div className="overflow-hidden mb-8 md:mb-12 py-2">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-[73px] font-bold text-primary leading-[0.9] tracking-tighter"
              >
                Ready to secure your legacy with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary font-bold">Trusted Advisors</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <a href="#team" className="bg-accent text-black px-10 py-5 rounded-full font-bold text-sm tracking-wide hover:bg-accent-hover transition-colors flex items-center justify-center gap-3 hover:scale-105 transform duration-300 shadow-lg">
                Chat With Advisor <ArrowIcon className="w-3 h-3" />
              </a>
              <a href="#contact" className="bg-transparent border border-gray-200 text-primary px-10 py-5 rounded-full font-bold text-sm tracking-wide hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
                Contact Us <ArrowIcon className="w-3 h-3" />
              </a>
            </motion.div>
          </div>

          {/* Decorative Elements - Subtle Abstract Forms */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gray-100 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gray-50 rounded-full blur-[100px] pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;