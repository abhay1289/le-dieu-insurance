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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 md:mb-12 gap-6 md:gap-12">
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
              className="flex items-center gap-4 mb-2 md:mb-4"
            >

              <span className="text-sm font-extrabold tracking-[0.3em] text-accent uppercase">Board of Directors</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
                className="text-4xl sm:text-5xl md:text-[64px] font-heading font-extrabold text-primary tracking-tight leading-[1.15]"
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

      </div>
    </section>
  );
};

export default Team;