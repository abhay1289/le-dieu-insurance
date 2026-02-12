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
          className="h-full w-full object-cover transition-all duration-1000 ease-out grayscale-0 scale-110 lg:grayscale lg:scale-100 lg:group-hover:grayscale-0 lg:group-hover:scale-110"
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent transition-opacity duration-700 opacity-60 lg:opacity-40 lg:group-hover:opacity-60"></div>
        <div className="absolute inset-x-0 bottom-0 p-8 transition-transform duration-700 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0">

          {/* Info Card - Glassmorphism */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl overflow-hidden group/info">
            <div className="absolute inset-0 bg-white/20 transition-transform duration-700 transform translate-y-0 lg:translate-y-full lg:group-hover/info:translate-y-0"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-1">{member.name}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] transition-colors text-primary lg:text-white/60 lg:group-hover/info:text-primary">{member.role}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-colors bg-primary lg:bg-white/10 lg:group-hover/info:bg-primary">
                  <ArrowIcon className="w-3 h-3 text-white -rotate-45" />
                </div>
              </div>

              <p className="text-white/80 text-xs leading-relaxed transition-opacity duration-500 delay-100 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
                {member.bio}
              </p>

              <div className="flex gap-4 mt-6 pt-6 border-t border-white/10 transition-opacity duration-500 delay-200 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
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