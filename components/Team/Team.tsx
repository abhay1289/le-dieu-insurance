import React from 'react';
import { motion } from 'framer-motion';
import { ArrowIcon } from '../../utils/icons';
import TeamMemberCard, { TeamMember } from './TeamMemberCard';

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dharampal Rupal",
    role: "Chairman",
    image: "/images/team-chairman.png",
    bio: "Founding visionary driving the strategic direction and excellence of Le Dieu Insurance Brokers."
  },
  {
    id: 2,
    name: "Ashar Husain",
    role: "Vice President",
    image: "/images/team-vp.png",
    bio: "Expert risk consultant leading the PAN India brokerage operations and specialized engineering audits."
  },
  {
    id: 3,
    name: "Deepak Simhal",
    role: "Managing Partner",
    image: "/images/team-mp.png",
    bio: "Focused on client-centric policy placement and navigating complex risk portfolios for industrial giants."
  },
  {
    id: 4,
    name: "Shruti Simhal",
    role: "Strategic Partner",
    image: "/images/team-sp.png",
    bio: "Dedicated to building lasting relationships and delivering value-based insurance solutions across India."
  }
];

const Team = () => {
  return (
    <section id="team" className="py-16 md:py-32 bg-[#FAFBFB] relative overflow-hidden">

      {/* Premium Background Decor */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-6 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4 md:mb-8"
            >

              <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase">Board of Directors</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
                className="text-4xl sm:text-5xl md:text-[64px] font-bold text-primary tracking-tight leading-[1.15]"
              >
                Guided by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent font-bold">Visionaries</span>
              </motion.h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xs lg:text-right pb-4 mt-6 lg:mt-0"
          >
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              A collective of world-class strategists and industry titans dedicated to securing your family's future across generations.
            </p>
          </motion.div>
        </div>

        {/* Leadership Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </motion.div>

        {/* Bottom Interactive Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 p-6 md:p-8 bg-white border border-gray-100 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 shadow-sm hover:shadow-xl transition-all duration-500 group"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <div>
              <span className="block text-sm font-bold text-primary">Global Advisory Board</span>
              <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">50+ Partner Consultants</span>
            </div>
          </div>

          <div className="hidden lg:block h-px w-32 bg-gray-100"></div>

          <div className="flex gap-4">
            <a href="#contact" className="px-8 py-4 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent-hover transition-colors">
              Connect With Leadership
            </a>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ArrowIcon className="w-4 h-4 text-primary" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Team;