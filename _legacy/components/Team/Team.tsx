import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard, { TeamMember } from './TeamMemberCard';

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Vikram Le Dieu",
    role: "Founder & Chairman",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=75&w=800&auto=format&fit=crop", 
    bio: "Visionary leader with 25+ years shaping the future of global insurance markets."
  },
  {
    id: 2,
    name: "Ananya Singh",
    role: "Chief Risk Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=75&w=800&auto=format&fit=crop", 
    bio: "Specializing in enterprise risk management and strategic financial forecasting."
  },
  {
    id: 3,
    name: "Rohan Gupta",
    role: "Head of Private Client",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=75&w=800&auto=format&fit=crop", 
    bio: "Dedicated to curating bespoke protection portfolios for high-net-worth individuals."
  },
  {
    id: 4,
    name: "Meera Patel",
    role: "Global Operations Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=75&w=800&auto=format&fit=crop", 
    bio: "Driving operational excellence and digital transformation across all sectors."
  }
];

const Team = () => {
  return (
    <section className="py-32 md:py-40 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="max-w-4xl"
           >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-primary"></span>
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Leadership</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-primary leading-[1] tracking-tighter">
                Guided by <span className="text-accent italic font-serif">Visionaries.</span><br/>
                <span className="text-gray-300">Executed by Experts.</span>
              </h2>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="max-w-xs text-right hidden lg:block pb-2"
           >
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                 Meet the seasoned professionals dedicated to securing your legacy with precision and integrity.
              </p>
           </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
           {teamMembers.map((member, index) => (
             <TeamMemberCard key={member.id} member={member} index={index} />
           ))}
        </div>

        {/* Bottom CTA Line */}
        <motion.div 
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
          className="h-px bg-gray-200 mt-32 relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent w-full animate-shimmer"></div>
        </motion.div>

        <div className="flex justify-center mt-12">
            <a href="/agents" className="group text-primary font-bold tracking-tight text-sm flex items-center gap-2 hover:opacity-70 transition-opacity">
               <span className="border-b border-gray-300 group-hover:border-primary transition-all pb-1">View Full Board of Directors</span>
            </a>
        </div>

      </div>
    </section>
  );
};

export default Team;