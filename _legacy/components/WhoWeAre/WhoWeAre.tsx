import React, { useRef } from 'react';
import { ArrowIcon } from '../../utils/icons';
import { motion, useScroll, useTransform } from 'framer-motion';

const StatItem = ({ number, text }: { number: string; text: string }) => (
  <div className="flex flex-col gap-2">
    <div className="overflow-hidden">
      <motion.span 
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="block text-5xl md:text-6xl font-medium text-primary tracking-tight"
      >
        {number}
      </motion.span>
    </div>
    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{text}</span>
  </div>
);

const WhoWeAre = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Heading & Image */}
            <div className="lg:col-span-7 relative flex flex-col">
                <div className="mb-16">
                     <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-8"
                     >
                        <div className="w-12 h-[1px] bg-primary"></div>
                        <span className="uppercase tracking-[0.2em] text-xs font-bold text-primary">Who We Are</span>
                     </motion.div>
                     
                     <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-[1] tracking-tight">
                        We Empower <br/>
                        <span className="text-accent italic font-serif relative z-10 block mt-2">
                           Legacies.
                           <svg className="absolute -bottom-4 left-0 w-full h-4 text-accent/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                           </svg>
                        </span>
                     </h2>
                </div>

                <div className="relative rounded-[3rem] overflow-hidden aspect-[16/10] shadow-2xl group mt-auto">
                    <motion.div style={{ scale: imageScale }} className="w-full h-full">
                       <img 
                         src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
                         alt="Strategic Team Meeting" 
                         className="w-full h-full object-cover"
                       />
                    </motion.div>
                    
                    {/* Floating Badge */}
                    <motion.div 
                      style={{ y: yOffset }}
                      className="absolute bottom-10 right-10 bg-black/30 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-white hidden md:block"
                    >
                       <div className="text-3xl font-bold">100%</div>
                       <div className="text-xs uppercase tracking-widest opacity-80">Committed</div>
                    </motion.div>
                </div>
            </div>

            {/* Right Column: Content & Stats */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-6 lg:pt-32">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <p className="text-xl md:text-3xl text-primary font-light leading-snug mb-10">
                       "Since 1998, Le Dieu has stood as a quiet bastion of financial security for India's most discerning individuals. We are architects of resilience."
                    </p>
                    <p className="text-gray-500 leading-relaxed text-lg mb-12">
                        We combine decades of deep industry expertise with a modern, human-centric approach. Our mission isn't just to sell policies; it's to provide the certainty you need to live fearlessly in an ever-changing world.
                    </p>
                    
                    <a href="/about-us" className="group inline-flex items-center gap-4 text-primary font-semibold text-lg">
                        <span className="border-b border-primary group-hover:border-accent transition-all pb-0.5">Learn More About Us</span>
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                           <ArrowIcon className="w-3 h-3 group-hover:-rotate-45 transition-transform duration-300" />
                        </div>
                    </a>
                </motion.div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-12 mt-20 border-t border-gray-100 pt-16">
                   <StatItem number="25+" text="Years Experience" />
                   <StatItem number="10k+" text="Families Protected" />
                   <StatItem number="₹200Cr+" text="Claims Paid" />
                   <StatItem number="99%" text="Client Satisfaction" />
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;