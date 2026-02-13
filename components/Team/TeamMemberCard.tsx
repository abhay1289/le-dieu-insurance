import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, ArrowIcon } from '../../utils/icons';

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
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
      className="group relative"
    >
      <div className="relative rounded-[2.5rem] overflow-hidden bg-[#F2F4F3] aspect-[3/4] shadow-sm hover:shadow-2xl transition-all duration-700">
        <motion.img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-top transition-all duration-1000 ease-out grayscale-0 scale-105 lg:grayscale lg:scale-100 lg:group-hover:grayscale-0 lg:group-hover:scale-105"
        />

        {/* Gradient overlay — only bottom portion */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-700 opacity-70 lg:opacity-50 lg:group-hover:opacity-70"></div>

        {/* Bottom info — compact, no glass card */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 transition-transform duration-700 transform translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0">

          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight leading-tight mb-1">{member.name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{member.role}</p>
            </div>
            <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center bg-white/10 hover:bg-accent transition-colors duration-300 flex-shrink-0 mb-1">
              <LinkedinIcon className="w-3.5 h-3.5 text-white" />
            </a>
          </div>

          {/* Short bio — 2 lines max */}
          <p className="text-white/60 text-xs leading-relaxed mt-3 line-clamp-2 transition-opacity duration-500 delay-100 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
            {member.bio.split(/(Le Dieu Insurance Brokers|Le Dieu)/g).map((part, i) => 
              part === 'Le Dieu Insurance Brokers' || part === 'Le Dieu' ? <strong key={i} className="font-bold text-white">{part}</strong> : part
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
