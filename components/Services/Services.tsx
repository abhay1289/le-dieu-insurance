import React from 'react';
import { ArrowIcon, ShieldCheckIcon, FileTextIcon, ClipboardSearchIcon } from '../../utils/icons';
import { motion } from 'framer-motion';
import ServiceCard, { ServiceItem } from './ServiceCard';

const servicesData: ServiceItem[] = [
  {
    id: 'risk-management',
    title: "Risk Management",
    description: "Systematic identification and evaluation of loss exposures using the most appropriate techniques for treating risks.",
    icon: ShieldCheckIcon,
    image: "/images/service-risk-new.jpg"
  },
  {
    id: 'policy-placement',
    title: "Policy Placement",
    description: "Rigorous risk profiling and value-based negotiation across 21+ insurers to ensure optimal coverage and rationalized portfolios.",
    icon: FileTextIcon,
    image: "/images/service-policy-placement.png"
  },
  {
    id: 'specialized-audits',
    title: "Engineering Audits",
    description: "Specialized services including Energy Audits, Safety Reviews, and Process Audits to optimize your industrial operations.",
    image: "/images/service-business.png",
    icon: ClipboardSearchIcon
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
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } } }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <span className="text-sm font-extrabold tracking-[0.3em] text-accent uppercase">Our Expertise</span>
            </motion.div>

            <div>
              <div className="overflow-hidden">
                <motion.div variants={textRevealVariants} className="flex flex-col items-center">
                  <span className="text-primary text-4xl sm:text-5xl md:text-[64px] font-heading font-extrabold tracking-tight leading-[1.15]">Risk Engineering</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent text-4xl sm:text-5xl md:text-[64px] font-heading font-extrabold tracking-tight leading-[1.15]">Insurance Solutions</span>
                </motion.div>
              </div>
            </div>
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