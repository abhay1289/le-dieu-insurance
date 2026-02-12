import React from 'react';
import { motion } from 'framer-motion';

// Custom Icons for Values
const IntegrityIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M8 11l2 2 4-4" />
  </svg>
);

const ExcellenceIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const LegacyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
    <path d="M4 22v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2" />
    <line x1="8" y1="2" x2="8" y2="4" />
    <line x1="16" y1="2" x2="16" y2="4" />
  </svg>
);

const ValueCard = ({ title, desc, icon, index }: { title: string, desc: string, icon: React.ReactNode, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
  >
    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-accent transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">
      {desc}
    </p>
  </motion.div>
);

const CompanyHistory = () => {
  return (
    <section className="py-16 md:py-40 bg-[#F2F4F3] relative overflow-hidden">

      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2000&auto=format&fit=crop"
          alt="Background Texture"
          className="w-full h-full object-cover opacity-[0.03] mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2F4F3] via-transparent to-[#F2F4F3]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2F4F3] via-transparent to-[#F2F4F3]/80"></div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/50 -skew-x-12 transform translate-x-20 pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-12 md:mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">

              <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-accent">Our Legacy</span>
            </div>
            <h2 className="text-5xl md:text-[73px] font-bold text-primary tracking-tighter leading-[0.9] mb-8">
              Founded on Trust <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent font-bold">Built for Eternity</span>
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm font-medium mb-12 max-w-lg">
              Since 1998, Le Dieu has stood as a quiet bastion of financial security for the world's most discerning individuals. We don't just sell policies; we architect resilience.
            </p>

            <div className="flex gap-12 border-t border-gray-200 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">1998</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Established</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Global Awards</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Strategic Meeting"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent/30 rounded-[3rem] -z-0"></div>
          </motion.div>
        </div>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-primary text-white p-10 rounded-[2rem] h-full flex flex-col justify-between relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  "To empower our clients to live fearlessly by providing unwavering financial protection and personalized risk management solutions that transcend generations."
                </p>
              </div>
              <div className="mt-8 relative z-10">

                <div className="italic font-medium text-white/60">Alexander Le Dieu, Founder</div>
              </div>

              {/* Abstract Decor */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-3 gap-6 h-full">
              <ValueCard
                index={1}
                title="Integrity"
                icon={<IntegrityIcon />}
                desc="We believe in absolute transparency. Your trust is our most valuable asset, and we earn it every single day."
              />
              <ValueCard
                index={2}
                title="Excellence"
                icon={<ExcellenceIcon />}
                desc="Good enough is never enough. We strive for perfection in every policy, claim, and client interaction."
              />
              <ValueCard
                index={3}
                title="Legacy"
                icon={<LegacyIcon />}
                desc="We think in decades, not quarters. Our goal is to secure your prosperity for generations to come."
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanyHistory;