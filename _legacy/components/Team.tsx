import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, TwitterIcon, MailIcon } from '../utils/icons';

const teamMembers = [
  {
    id: 1,
    name: "Vikram Le Dieu",
    role: "Founder & Chairman",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=75&w=800&auto=format&fit=crop", // Indian Professional Male
    bio: "Visionary leader with 25+ years shaping the future of global insurance markets."
  },
  {
    id: 2,
    name: "Ananya Singh",
    role: "Chief Risk Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=75&w=800&auto=format&fit=crop", // Indian Professional Female
    bio: "Specializing in enterprise risk management and strategic financial forecasting."
  },
  {
    id: 3,
    name: "Rohan Gupta",
    role: "Head of Private Client",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=75&w=800&auto=format&fit=crop", // Indian Male Portrait
    bio: "Dedicated to curating bespoke protection portfolios for high-net-worth individuals."
  },
  {
    id: 4,
    name: "Meera Patel",
    role: "Global Operations Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=75&w=800&auto=format&fit=crop", // Indian Professional Female
    bio: "Driving operational excellence and digital transformation across all sectors."
  }
];

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-[500px] w-full overflow-hidden rounded-[20px] bg-gray-100 mb-6">
        <motion.img 
          src={member.image} 
          alt={member.name} 
          className="h-full w-full object-cover filter grayscale contrast-[1.1] transition-all duration-700 ease-out group-hover:filter-none group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40"></div>
        
        {/* Hover Social Panel (Glassmorphism) */}
        <div className="absolute bottom-6 left-6 right-6 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
           <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center justify-between">
              <span className="text-white/80 text-xs font-medium tracking-wide">Connect</span>
              <div className="flex gap-3">
                 <a href="#" className="text-white hover:text-accent transition-colors"><LinkedinIcon className="w-4 h-4" /></a>
                 <a href="#" className="text-white hover:text-accent transition-colors"><TwitterIcon className="w-4 h-4" /></a>
                 <a href="#" className="text-white hover:text-accent transition-colors"><MailIcon className="w-4 h-4" /></a>
              </div>
           </div>
        </div>
      </div>

      {/* Info Area */}
      <div className="pl-2">
         <div className="flex flex-col border-l-2 border-transparent group-hover:border-accent transition-colors duration-300 pl-4 group-hover:pl-4 -ml-4">
            <h3 className="text-2xl font-bold text-primary mb-1 group-hover:translate-x-2 transition-transform duration-500 ease-out">{member.name}</h3>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">{member.role}</p>
            <p className="text-gray-500 text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 ease-out overflow-hidden">
               {member.bio}
            </p>
         </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="max-w-3xl"
           >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-secondary/30 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="text-xs font-bold tracking-widest text-primary uppercase">Leadership</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-primary leading-[1.1]">
                Guided by <span className="text-accent italic">Visionaries.</span><br/>
                <span className="text-gray-300">Executed by Experts.</span>
              </h2>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="max-w-xs text-right hidden lg:block"
           >
              <p className="text-gray-500 leading-relaxed text-sm">
                 Meet the seasoned professionals dedicated to securing your legacy with precision and integrity.
              </p>
           </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
           {teamMembers.map((member, index) => (
             <TeamMemberCard key={member.id} member={member} index={index} />
           ))}
        </div>

        {/* Bottom CTA Line */}
        <motion.div 
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          className="h-px bg-gray-100 mt-24 relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full animate-shimmer"></div>
        </motion.div>

        <div className="flex justify-center mt-12">
            <a href="/agents" className="group text-primary font-semibold flex items-center gap-2 hover:text-accent transition-colors">
               <span className="border-b border-transparent group-hover:border-accent transition-all">View Full Board of Directors</span>
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transform group-hover:translate-x-1 transition-transform">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </a>
        </div>

      </div>
    </section>
  );
};

export default Team;