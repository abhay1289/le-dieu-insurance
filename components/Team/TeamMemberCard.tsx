import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, TwitterIcon, MailIcon, ArrowIcon } from '../../utils/icons';

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
      <div className="relative rounded-[2.5rem] overflow-hidden bg-[#F2F4F3] aspect-[4/5] shadow-sm hover:shadow-2xl transition-all duration-700">
        <motion.img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-110"
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
        <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">

          {/* Info Card - Glassmorphism */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl overflow-hidden group/info">
            <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover/info:translate-y-0 transition-transform duration-700"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-1">{member.name}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 group-hover/info:text-primary transition-colors">{member.role}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover/info:bg-primary transition-colors">
                  <ArrowIcon className="w-3 h-3 text-white -rotate-45" />
                </div>
              </div>

              <p className="text-white/80 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {member.bio}
              </p>

              <div className="flex gap-4 mt-6 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <a href="#" className="text-white/60 hover:text-white transition-colors"><LinkedinIcon className="w-3.5 h-3.5" /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors"><TwitterIcon className="w-3.5 h-3.5" /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors"><MailIcon className="w-3.5 h-3.5" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;