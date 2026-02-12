import React from 'react';
import { ExpertGuidanceIcon, OfferIcon1, OfferIcon2, OfferIcon3, ArrowIcon, PlayIcon } from '../../utils/icons';
import { motion } from 'framer-motion';

const FeatureItem = ({ icon, title, desc, index }: { icon: React.ReactNode, title: string, desc: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="group p-10 md:p-12 bg-white hover:bg-gray-50/50 transition-colors duration-500 relative overflow-hidden"
  >
    <div className="flex items-start gap-8">
       <div className="shrink-0 w-12 h-12 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-500">
          <div className="group-hover:scale-110 transition-transform duration-500">
             {icon}
          </div>
       </div>
       <div>
          <h3 className="text-lg font-bold text-primary mb-3 tracking-tight group-hover:text-black transition-colors">{title}</h3>
          <p className="text-gray-500 leading-relaxed text-sm font-medium">{desc}</p>
       </div>
    </div>
  </motion.div>
);

const WhyChooseUs = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden bg-white">
      
      {/* Subtle Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
           <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="w-8 h-px bg-primary"></span>
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Why Le Dieu</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary tracking-tighter leading-[0.95]">
                 Smart Insurance. <br/>
                 <span className="text-gray-300 font-serif italic">Intelligent Design.</span>
              </h2>
           </div>

           <div className="mb-4">
              <a href="/about-us" className="group flex items-center gap-4 text-primary text-lg font-medium hover:opacity-70 transition-opacity">
                 <span className="border-b border-primary/20 pb-1 group-hover:border-primary transition-all">Our Philosophy</span>
                 <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
           </div>
        </div>

        {/* Enterprise Grid Layout */}
        <div className="bg-gray-100 p-px rounded-[2rem] overflow-hidden shadow-sm">
           <div className="grid lg:grid-cols-12 gap-px bg-gray-100">
              
              {/* Feature Video / Main Card */}
              <div className="lg:col-span-7 bg-black relative group overflow-hidden min-h-[600px] lg:min-h-[auto]">
                 <div className="absolute inset-0">
                    <video 
                       autoPlay muted loop playsInline
                       className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 ease-in-out scale-105 group-hover:scale-100"
                       poster="https://cdn.prod.website-files.com/68eb347fff39988d379df7a3%2F68ecdf06ddadf85c68612bd0_asuric-video%20%282%29-poster-00001.jpg"
                    >
                       <source src="https://cdn.prod.website-files.com/68eb347fff39988d379df7a3%2F68ecdf06ddadf85c68612bd0_asuric-video%20%282%29-transcode.mp4" type="video/mp4" />
                    </video>
                 </div>

                 {/* Content Overlay */}
                 <div className="absolute inset-0 p-12 md:p-16 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                       <motion.div 
                          initial={{ opacity: 0, y: -20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold text-white uppercase tracking-widest border border-white/10"
                       >
                          Excellence
                       </motion.div>
                    </div>

                    <div>
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center cursor-pointer group/play hover:bg-white hover:text-black transition-all duration-500 mb-10">
                           <PlayIcon className="w-5 h-5 text-white ml-1 transition-colors group-hover/play:text-black" />
                        </div>
                        <h3 className="text-white text-3xl md:text-4xl font-medium max-w-lg leading-tight tracking-tight">
                           See how we protect legacies across the globe with unwavering precision.
                        </h3>
                    </div>
                 </div>
              </div>

              {/* Feature List Grid */}
              <div className="lg:col-span-5 bg-gray-50 flex flex-col gap-px">
                 <FeatureItem 
                    index={0}
                    icon={<ExpertGuidanceIcon />}
                    title="Expert Guidance"
                    desc="Direct access to senior consultants who navigate complex risk landscapes."
                 />
                 <FeatureItem 
                    index={1}
                    icon={<OfferIcon2 />}
                    title="Adaptive Policies"
                    desc="Coverage that evolves dynamically with your life stages and assets."
                 />
                 <FeatureItem 
                    index={2}
                    icon={<OfferIcon3 />}
                    title="24/7 Concierge"
                    desc="Round-the-clock dedicated support team for claims and emergencies."
                 />
                 <FeatureItem 
                    index={3}
                    icon={<OfferIcon1 />}
                    title="Rapid Settlement"
                    desc="AI-driven claims processing designed to approve settlements instantly."
                 />
              </div>

           </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;