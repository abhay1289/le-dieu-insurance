import React, { useRef } from 'react';
import { ExpertGuidanceIcon, OfferIcon1, OfferIcon2, OfferIcon3, ArrowIcon, PlayIcon } from '../../utils/icons';
import { motion, useScroll, useTransform } from 'framer-motion';

const FeatureCard = ({ icon, title, desc, index }: { icon: React.ReactNode, title: string, desc: string, index: number }) => {
   const [isActive, setIsActive] = React.useState(false);

   return (
      <motion.div
         initial="initial"
         whileHover="active"
         animate={isActive ? "active" : undefined}
         onClick={() => setIsActive(!isActive)}
         variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
         }}
         transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
         className="bg-white p-6 md:p-10 lg:p-12 border-r border-b border-gray-100 last:border-r-0 hover:bg-gray-50/50 transition-colors duration-500 group relative overflow-hidden cursor-pointer"
      >
         {/* Green left border expansion */}
         <motion.div
            variants={{
               initial: { height: 0 },
               active: { height: '100%' }
            }}
            transition={{ duration: 0.7 }}
            className="absolute top-0 left-0 w-1 bg-accent"
         ></motion.div>

         {/* Icon Container */}
         <motion.div
            variants={{
               initial: { backgroundColor: '#F9FAFB', borderColor: '#F3F4F6', rotate: 0 },
               active: { backgroundColor: 'var(--color-accent-green)', borderColor: 'var(--color-accent-green)', rotate: 6 }
            }}
            transition={{ duration: 0.5 }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 md:mb-8 border"
         >
            <motion.div
               variants={{
                  initial: { color: '#0B1C15' },
                  active: { color: '#0B1C15' }
               }}
               className="transition-colors duration-500"
            >
               {icon}
            </motion.div>
         </motion.div>

         <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">{title}</h3>
         <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base">
            {desc}
         </p>

         {/* Bottom accent line expansion */}
         <motion.div
            variants={{
               initial: { width: '40px' },
               active: { width: '100%' }
            }}
            transition={{ duration: 0.5 }}
            className="h-[2px] bg-accent mt-6 md:mt-8"
         />
      </motion.div>
   );
};

const WhyChooseUs = () => {
   const containerRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
   });

   const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
   const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

   const features = [
      {
         icon: <ExpertGuidanceIcon />,
         title: "Strategic Advisory",
         desc: "Direct access to senior partners who navigate complex global risks with precision and market-leading expertise."
      },
      {
         icon: <OfferIcon2 />,
         title: "Adaptive Evolution",
         desc: "Our policies aren't static. We utilize proprietary data to evolve your coverage in real-time as your risk profile changes."
      },
      {
         icon: <OfferIcon3 />,
         title: "Concierge Claims",
         desc: "A dedicated settlement officer for every claim. No call centers, no waiting—just direct, professional resolution."
      },
      {
         icon: <OfferIcon1 />,
         title: "Digital Fortress",
         desc: "Integrated AI architecture that predicts liability gaps before they occur, ensuring continuous asset protection."
      }
   ];

   return (
      <section ref={containerRef} className="py-16 md:py-32 bg-white relative overflow-hidden">

         {/* Premium Background Image with Parallax */}
         <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]"
         >
            <img
               src="/images/bg-redefining.png"
               alt="Background Pattern"
               className="w-full h-full object-cover"
            />
         </motion.div>

         {/* Subtle Grid Pattern Overlay */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" />

         <div className="container mx-auto px-6 md:px-12 relative z-10">

            {/* Editorial Section Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-6 md:gap-10">
               <div className="max-w-3xl">
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="flex items-center gap-4 mb-4 md:mb-8"
                  >

                     <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">Institutional Grade</span>
                  </motion.div>

                  <div className="overflow-hidden">
                     <motion.h2
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                        className="text-4xl sm:text-5xl md:text-[73px] font-bold text-primary tracking-tighter leading-[0.9] mb-6"
                     >
                        Redefining <br />
                        <span className="text-gray-300">Certainty</span>
                     </motion.h2>
                  </div>
               </div>

               <div className="max-w-md pb-4">
                  <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base border-l-2 border-primary/20 pl-8">
                     We move beyond traditional insurance models to provide architected resilience for India's most significant family and corporate legacies.
                  </p>
               </div>
            </div>

            {/* Feature Grid */}
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-10%" }}
               variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
               }}
               className="grid md:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-100 mb-12 md:mb-20 shadow-[0_40px_100px_rgba(0,0,0,0.02)] rounded-[2rem] overflow-hidden"
            >
               {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} index={index} />
               ))}
            </motion.div>

            {/* Cinematic Visual Anchor */}
            <motion.div
               initial={{ opacity: 0, scale: 1.05, y: 40 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as any }}
               className="relative h-[280px] md:h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl"
            >
               <motion.div style={{ scale: imageScale }} className="w-full h-full">
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors duration-1000 z-10"></div>
                  <video
                     autoPlay muted loop playsInline
                     className="w-full h-full object-cover"
                     poster="/images/hero-fallback.jpg"
                  >
                     <source src="https://cdn.prod.website-files.com/68eb347fff39988d379df7a3%2F68ecdf06ddadf85c68612bd0_asuric-video%20%282%29-transcode.mp4" type="video/mp4" />
                  </video>
               </motion.div>

               <div className="absolute inset-0 z-20 p-6 md:p-20 flex flex-col justify-end">
                  <div className="max-w-2xl">
                     <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-12 h-12 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 md:mb-10 cursor-pointer shadow-xl shadow-primary/20"
                     >
                        <PlayIcon className="w-5 h-5 text-white ml-1" />
                     </motion.div>
                     <h3 className="text-xl md:text-5xl font-bold text-white tracking-tight mb-3 md:mb-6 leading-tight">
                        Watch the <span className="text-gray-100 underline decoration-1 underline-offset-8">Standard</span> in action
                     </h3>
                     <p className="text-white/70 font-medium max-w-sm text-sm md:text-base">
                        A short film on how we provide the certainty required to live and lead fearlessly.
                     </p>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default WhyChooseUs;