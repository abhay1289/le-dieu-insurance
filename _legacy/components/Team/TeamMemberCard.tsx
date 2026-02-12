import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, TwitterIcon, MailIcon } from '../../utils/icons';

export interface TeamMember {
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
      <div className="relative h-[480px] w-full overflow-hidden rounded-[2px] bg-gray-100 mb-8">
        <motion.img 
          src={member.image} 
          alt={member.name} 
          className="h-full w-full object-cover grayscale contrast-[1.05] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
        />
        
        {/* Gradient Overlay - Pure Black for cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
        
        {/* Hover Social Panel */}
        <div className="absolute bottom-8 left-6 right-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
           <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-none flex items-center justify-between">
              <span className="text-white text-xs font-bold tracking-widest uppercase">Connect</span>
              <div className="flex gap-4">
                 <a href="#" className="text-white hover:text-accent transition-colors"><LinkedinIcon className="w-4 h-4" /></a>
                 <a href="#" className="text-white hover:text-accent transition-colors"><TwitterIcon className="w-4 h-4" /></a>
                 <a href="#" className="text-white hover:text-accent transition-colors"><MailIcon className="w-4 h-4" /></a>
              </div>
           </div>
        </div>
      </div>

      {/* Info Area */}
      <div className="pl-0">
         <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-primary mb-1 tracking-tight">{member.name}</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 group-hover:text-accent transition-colors">{member.role}</p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
               {member.bio}
            </p>
         </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;