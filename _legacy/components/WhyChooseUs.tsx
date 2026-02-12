import React from 'react';
import { ExpertGuidanceIcon, OfferIcon1, OfferIcon2, OfferIcon3, ArrowIcon, PlayIcon } from '../utils/icons';
import { motion } from 'framer-motion';

const FeatureItem = ({ icon, title, desc, index }: { icon: React.ReactNode, title: string, desc: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="group p-8 md:p-10 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-500 relative overflow-hidden"
  >
    <div className="flex items-start gap-6">
       <div className="shrink-0 w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-gray-100 group-hover:border-primary">
          <div className="group-hover:brightness-0 group-hover:invert transition-all duration-300">
             {icon}
          </div>
       </div>
       <div>
          <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent-hover transition-colors">{title}</h3>
          <p className="text-gray-500 leading-relaxed text-sm lg:text-base font-light">{desc}</p>
       </div>
    </div>
  </motion.div>
);

const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-40 relative overflow-hidden">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <img 
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=75&w=1920&auto=format&fit=crop" 
            alt="Indian Architecture Background" 
            className="w-full h-full object-cover opacity-[0.10]"
         />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
           <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-12 h-px bg-primary/20"></span>
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Why Le Dieu</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-bold text-primary tracking-tight leading-[1]">
                 Smart Insurance. <br/>
                 <span className="text-gray-300">Intelligent Design.</span>
              </h2>
           </div>

           <div className="mb-2">
              <a href="/about-us" className="group flex items-center gap-3 text-primary font-medium hover:text-accent-hover transition-colors">
                 <span className="border-b border-primary/20 pb-0.5 group-hover:border-accent-hover">Our Philosophy</span>
                 <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
           </div>
        </div>

        {/* Enterprise Grid Layout */}
        <div className="bg-gray-200/50 p-px rounded-[2.5rem] overflow-hidden backdrop-blur-sm shadow-xl">
           <div className="grid lg:grid-cols-12 gap-px bg-gray-200/50">
              
              {/* Feature Video / Main Card */}
              <div className="lg:col-span-7 bg-white relative group overflow-hidden min-h-[500px] lg:min-h-[auto]">
                 <div className="absolute inset-0">
                    <video 
                       autoPlay muted loop playsInline
                       className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
                       poster="https://cdn.prod.website-files.com/68eb347fff39988d379df7a3%2F68ecdf06ddadf85c68612bd0_asuric-video%20%282%29-poster-00001.jpg"
                    >
                       <source src="https://cdn.prod.website-files.com/68eb347fff39988d379df7a3%2F68ecdf06ddadf85c68612bd0_asuric-video%20%282%29-transcode.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                 </div>

                 {/* Content Overlay */}
                 <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                       <motion.div 
                          initial={{ opacity: 0, y: -20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-sm font-bold text-primary shadow-lg"
                       >
                          Client Satisfaction 99%
                       </motion.div>
                    </div>

                    <div>
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center cursor-pointer group hover:bg-accent hover:border-accent transition-all duration-500 mb-8">
                           <PlayIcon className="w-6 h-6 text-white group-hover:text-primary ml-1 transition-colors" />
                        </div>
                        <h3 className="text-white text-3xl font-bold max-w-md leading-tight">
                           See how we protect legacies across the globe.
                        </h3>
                    </div>
                 </div>
              </div>

              {/* Feature List Grid */}
              <div className="lg:col-span-5 bg-gray-100/50 flex flex-col gap-px">
                 <FeatureItem 
                    index={0}
                    icon={<ExpertGuidanceIcon />}
                    title="Expert Guidance"
                    desc="Direct access to senior consultants who navigate complex risk landscapes for you."
                 />
                 <FeatureItem 
                    index={1}
                    icon={<OfferIcon2 />}
                    title="Adaptive Policies"
                    desc="Coverage that evolves dynamically with your life stages and asset portfolio."
                 />
                 <FeatureItem 
                    index={2}
                    icon={<OfferIcon3 />}
                    title="24/7 Concierge"
                    desc="Round-the-clock dedicated support team for claims, emergencies, and inquiries."
                 />
                 <FeatureItem 
                    index={3}
                    icon={<OfferIcon1 />}
                    title="Rapid Settlement"
                    desc="AI-driven claims processing designed to approve settlements in record time."
                 />
              </div>

           </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;