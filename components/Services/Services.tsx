import React from 'react';
import { ArrowIcon, OfferIcon1, OfferIcon2, OfferIcon3 } from '../../utils/icons';
import { motion } from 'framer-motion';
import ServiceCard, { ServiceItem } from './ServiceCard';

const servicesData: ServiceItem[] = [
  {
    id: 'risk-management',
    title: "Risk Management",
    description: "Systematic identification and evaluation of loss exposures using the most appropriate techniques for treating risks.",
    icon: OfferIcon1,
    image: "/images/service-risk-new.jpg"
  },
  {
    id: 'policy-placement',
    title: "Policy Placement",
    description: "Rigorous risk profiling and value-based negotiation across 21+ insurers to ensure optimal coverage and rationalized portfolios.",
    icon: OfferIcon2,
    image: "/images/service-health.png"
  },
  {
    id: 'specialized-audits',
    title: "Engineering Audits",
    description: "Specialized services including Energy Audits, Safety Reviews, and Process Audits to optimize your industrial operations.",
    image: "/images/service-business.png",
    icon: OfferIcon3
  }
];

const textRevealVariants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as any
    }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 md:mb-10 gap-6 md:gap-12 border-b border-gray-100 pb-6 md:pb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } } }}
              className="flex items-center gap-4 mb-4 md:mb-8"
            >

              <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase">Our Expertise</span>
            </motion.div>

            <div className="mb-2">

              <div className="overflow-hidden py-2">
                <motion.div variants={textRevealVariants} className="flex flex-col">
                  <span className="text-primary text-4xl sm:text-5xl md:text-[64px] font-bold tracking-tighter leading-[1.15]">Risk Engineering</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent text-4xl sm:text-5xl md:text-[64px] font-bold tracking-tighter leading-[1.15]">Insurance Solutions</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.3 }}
            className="mb-4 mt-8 lg:mt-0"
          >
            <a href="#services" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-accent transition-all">
              <span className="border-b border-gray-200 group-hover:border-accent pb-1">View All Solutions</span>
              <ArrowIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="border-t border-gray-100">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-gray-100"
          >
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Services;