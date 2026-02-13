'use client';

import React, { useRef } from 'react';
import { ArrowIcon } from '../../utils/icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import Magnetic from '../Magnetic';

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.92, 0.98, 1]);

  return (
    <section ref={sectionRef} id="contact" className="py-16 md:py-32 bg-[#FAFBFB] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          style={{ scale: cardScale }}
          className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden border border-gray-100"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex items-center justify-center gap-4 mb-4 md:mb-8"
            >
              <span className="text-sm font-extrabold tracking-[0.3em] text-accent uppercase">Start Your Journey</span>
            </motion.div>

            <div className="overflow-hidden mb-8 md:mb-12 py-2">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-[64px] font-heading font-extrabold text-primary leading-[1.15] tracking-tight"
              >
                Ready to secure your legacy with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary font-bold">Trusted Advisors</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <Magnetic strength={0.2}>
                <a href="/services" className="bg-accent text-white px-10 py-5 rounded-full font-bold text-sm tracking-wide hover:bg-accent-hover transition-all flex items-center justify-center gap-3 hover:scale-105 transform duration-300">
                  Explore Our Services <ArrowIcon className="w-3 h-3" />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href="/contact" className="bg-transparent border border-gray-200 text-primary px-10 py-5 rounded-full font-bold text-sm tracking-wide hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-3">
                  Contact Us <ArrowIcon className="w-3 h-3" />
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Animated gradient orbs */}
          <motion.div
            style={{ y: bgY }}
            className="absolute -top-40 -left-40 w-96 h-96 bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div
            style={{ y: bgY }}
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-gray-100 rounded-full blur-[100px] pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
