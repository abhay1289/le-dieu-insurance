'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import CTA from '@/components/CTA/CTA';
import PageHero from '@/components/PageHero';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';
import PageTransition from '@/components/PageTransition';

const FactoryIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" /><path d="M3 20v-8l10-4v4l7-3v11" /><path d="M8 12v3" /><path d="M11 12v3" /><path d="M14 12v3" /><path d="M17 12v3" />
    </svg>
);

const CraneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22h18" /><path d="M6 22V5l12 4v3" /><path d="M9 22V7l4 2v3" /><path d="M5 10l4-2" /><path d="M17 12v10" /><path d="M12 22v-8" /><path d="M18 9l3 1" />
    </svg>
);

const BoltIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
);

const BriefcaseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

const StethoscopeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /><path d="M12 16v4" /><path d="M8 20h8" /><path d="M3 5h4v1.4a3 3 0 0 1-3 3H3z" /><path d="M21 5h-4v1.4a3 3 0 0 0 3 3h1z" />
    </svg>
);

const BedIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
    </svg>
);

const industrySolutions = [
    {
        id: "manufacturing",
        title: "Heavy Industries",
        subtitle: "Zero-Downtime Protection",
        icon: <FactoryIcon />,
        description: "In heavy manufacturing, even brief downtime is a catastrophic leak that silently erodes years of hard-won profitability. We architect robust, multi-layered safety nets that go far beyond standard insurance coverage. Our specialized frameworks neutralize risks from critical machinery breakdowns and prolonged operational interruptions. By rigorously stress-testing your total exposure, we ensure your factory remains financially resilient against devastating black-swan events.",
        features: [
            { icon: <FactoryIcon />, title: "Asset Resilience", text: "End-to-end protection for plant, machinery, and physical assets." },
            { icon: <BoltIcon />, title: "Profit Continuity", text: "Advanced loss of profit modeling to shield your balance sheet." }
        ],
        image: "/images/solutions-heavy-industries.png"
    },
    {
        id: "infrastructure",
        title: "Mega Projects",
        subtitle: "Foundation to Finish",
        icon: <CraneIcon />,
        description: "Engineering mega-projects demands risk management foundations as solid as the bridges you build across India. From ground-breaking to ribbon-cutting, we provide surgical coverage for ambitious civil engineering marvels nationwide. Our core focus is protecting your enterprise against costly project delays and unexpected material damage. By building bespoke risk transfer mechanisms, we shield your capital from unforeseen tremors that destabilize completions.",
        features: [
            { icon: <CraneIcon />, title: "CAR/EAR Mastery", text: "Comprehensive Contractor's and Erector's All Risk frameworks." },
            { icon: <BriefcaseIcon />, title: "ALOP Protection", text: "Shielding against financial losses due to project delays (Advanced LOP)." }
        ],
        image: "/images/solutions-mega-projects.png"
    },
    {
        id: "specialized",
        title: "Power & Energy",
        subtitle: "Grid Reliability",
        icon: <BoltIcon />,
        description: "As India transitions toward a complex energy grid, power sector threats have decoupled from traditional risk models entirely. Whether managing a thermal giant or a sprawling solar park, your risk transfer strategy must be dynamic. We architect specialized policies guarding against grid interruptions and environmental catastrophes. Our tailored approach ensures every kilowatt generated is protected by a resilient financial chassis.",
        features: [
            { icon: <BoltIcon />, title: "Mega Risk Cover", text: "Custom-built frameworks for high-value power generation units." },
            { icon: <FactoryIcon />, title: "Renewable Assets", text: "Specific coverage for solar parks and wind energy installations." }
        ],
        image: "/images/solutions-power-energy.png"
    },
    {
        id: "corporate",
        title: "Corporate Liability",
        subtitle: "Executive Resilience",
        icon: <BriefcaseIcon />,
        description: "In an era of rising litigation and relentless digital warfare, corporate leaders face unprecedented personal and professional exposure. We act as the strategic architect for your leadership's reputation, shielding the brain trust from catastrophic failure. Our liability solutions protect Directors and Officers from financial ruin across all jurisdictions. By fortifying balance sheets against sophisticated cyber threats, we neutralize ransomware vulnerabilities.",
        features: [
            { icon: <BriefcaseIcon />, title: "D&O Shield", text: "Protecting Directors and Officers from personal liability claims." },
            { icon: <BoltIcon />, title: "Cyber Fortress", text: "Response-first coverage for data breaches and ransomware threats." }
        ],
        image: "/images/solutions-corporate-fleet.png"
    },
    {
        id: "healthcare",
        title: "Healthcare",
        subtitle: "Clinical Excellence",
        icon: <StethoscopeIcon />,
        description: "Operating a modern healthcare institution demands managing advanced diagnostic tools alongside the vital protection of human lives. Our risk protocols are built on strong foundations of clinical excellence and uncompromising patient safety. We design medical malpractice and equipment breakdown frameworks that prioritize seamless operational continuity. From shielding high-value diagnostic suites to managing complex liabilities, our bespoke solutions safeguard institutional integrity.",
        features: [
            { icon: <StethoscopeIcon />, title: "Medical Malpractice", text: "Dedicated coverage for healthcare professionals and entities." },
            { icon: <BoltIcon />, title: "Equipment Safety", text: "Protection for high-value diagnostic and surgical infrastructure." }
        ],
        image: "/images/solutions-healthcare.png"
    },
    {
        id: "hospitality",
        title: "Guest Assurance",
        subtitle: "Elite Hospitality",
        icon: <BedIcon />,
        description: "Building a recognized hospitality brand takes decades of impeccable service, yet a single uninsured incident can tarnish that reputation overnight. We create comprehensive safety nets for elite hotel chains prioritizing guest assurance and total asset resilience. Our frameworks protect your property's physical grandeur while ensuring brand integrity remains absolutely unshakeable. By strategically shielding every operational asset, we ensure enduring luxury.",
        features: [
            { icon: <BedIcon />, title: "Property All Risk", text: "Shielding iconic hospitality assets from fire, flood, and theft." },
            { icon: <BriefcaseIcon />, title: "Guest Indemnity", text: "Comprehensive liability for guest accidents and hospitality errors." }
        ],
        image: "/images/solutions-hospitality.png"
    },
];

export default function SolutionsPage() {
    const [activeCategory, setActiveCategory] = useState<string | null>("manufacturing");
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

    return (
        <SmoothScroll>
            <PageTransition>
            <div className="min-h-screen bg-white text-primary selection:bg-primary selection:text-white">
                <ScrollProgress />
                <NavBar />

                <PageHero
                    title="Solutions"
                    subtitle="Bespoke risk transfer mechanisms for the industries that power India's economy."
                    breadcrumb="Solutions"
                    backgroundImage="/images/service-business.png"
                />

                {/* Section Header */}
                <section className="pt-16 md:pt-32 pb-0 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 md:mb-24">
                            <div className="max-w-2xl">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex items-center gap-4 mb-4 md:mb-8"
                                >
                                    <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase">Industry Focus</span>
                                </motion.div>
                                <div className="overflow-hidden">
                                    <motion.h2
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-4xl sm:text-5xl md:text-[73px] font-bold text-primary tracking-tighter leading-[1.1]"
                                    >
                                        Sector-Specific<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent font-bold">Risk Architecture</span>
                                    </motion.h2>
                                </div>
                            </div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-500 font-medium leading-relaxed text-sm md:text-base max-w-md border-l-2 border-primary/20 pl-8"
                            >
                                Every industry carries unique vulnerabilities. We don't apply templates — we engineer bespoke frameworks calibrated to your sector's specific risk DNA.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Premium Vertical Accordion Solutions */}
                <section ref={sectionRef} className="pb-24 md:pb-32 bg-white relative overflow-hidden">
                    {/* Parallax background decoration */}
                    <motion.div
                        style={{ y: bgY }}
                        className="absolute -top-[20%] -bottom-[20%] right-0 w-[40vw] bg-accent/[0.02] rounded-full blur-[150px] pointer-events-none"
                    />

                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        <div className="max-w-7xl mx-auto">
                            {industrySolutions.map((solution, index) => {
                                const isActive = activeCategory === solution.id;

                                return (
                                    <motion.div
                                        key={solution.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-50px' }}
                                        transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className={`border-b border-gray-100 transition-all duration-700 ${isActive ? 'pb-20 pt-10' : 'py-8'}`}
                                    >
                                        <button
                                            onClick={() => setActiveCategory(activeCategory === solution.id ? null : solution.id)}
                                            className="w-full flex items-center justify-between group text-left"
                                        >
                                            <div className="flex items-center gap-4 md:gap-6">
                                                <div className="flex items-center gap-4 md:gap-6">
                                                    <motion.div
                                                        animate={{
                                                            scale: isActive ? 1 : 0.9,
                                                            opacity: isActive ? 1 : 0,
                                                            width: isActive ? 'auto' : 0,
                                                        }}
                                                        transition={{ duration: 0.5 }}
                                                        className="text-accent hidden md:block overflow-hidden"
                                                    >
                                                        {solution.icon}
                                                    </motion.div>
                                                    <h2 className={`text-3xl md:text-7xl font-bold tracking-tighter transition-all duration-700 ${isActive ? 'text-primary' : 'text-gray-900/40 group-hover:text-primary group-hover:translate-x-4'}`}>
                                                        {solution.title}
                                                    </h2>
                                                </div>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: isActive ? 45 : 0, backgroundColor: isActive ? '#000000' : '#ffffff' }}
                                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                                className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-100 flex items-center justify-center flex-shrink-0"
                                            >
                                                <svg className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-500 ${isActive ? 'text-white' : 'text-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </motion.div>
                                        </button>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="relative grid lg:grid-cols-2 gap-12 md:gap-20 pt-16 pb-12">

                                                        {/* Left Column */}
                                                        <div className="flex flex-col justify-between h-full">
                                                            <div>
                                                                <motion.div
                                                                    initial={{ opacity: 0, x: -20 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                                                    className="flex items-center gap-4 mb-8"
                                                                >
                                                                    <motion.span
                                                                        initial={{ scaleX: 0 }}
                                                                        animate={{ scaleX: 1 }}
                                                                        transition={{ delay: 0.3, duration: 0.6 }}
                                                                        className="h-[2px] w-12 bg-accent origin-left"
                                                                    />
                                                                    <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">{solution.subtitle}</span>
                                                                </motion.div>

                                                                <motion.h3
                                                                    initial={{ opacity: 0, y: 20 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                                                    className="text-lg md:text-2xl text-primary font-bold leading-[1.4] mb-10 tracking-tight max-w-lg"
                                                                >
                                                                    {solution.description}
                                                                </motion.h3>
                                                            </div>

                                                            <motion.div
                                                                initial={{ opacity: 0, y: 30 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                                            >
                                                                {solution.features.map((feature, fi) => (
                                                                    <motion.div
                                                                        key={fi}
                                                                        initial={{ opacity: 0, y: 20 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        transition={{ delay: 0.5 + fi * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                                                        whileHover={{ y: -4, transition: { duration: 0.3 } }}
                                                                        className="p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent/30 hover:bg-white transition-all duration-500 group/item hover:shadow-xl"
                                                                    >
                                                                        <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-5 group-hover/item:bg-accent group-hover/item:text-white group-hover/item:border-accent transition-all duration-500 text-primary">
                                                                            {feature.icon}
                                                                        </div>
                                                                        <h4 className="text-xl font-bold text-primary mb-2 tracking-tight">{feature.title}</h4>
                                                                        <p className="text-gray-500 text-sm leading-relaxed font-medium">{feature.text}</p>
                                                                    </motion.div>
                                                                ))}
                                                            </motion.div>
                                                        </div>

                                                        {/* Right Column: Image */}
                                                        <div className="relative">
                                                            <motion.div
                                                                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                                                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                                                transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                                                className="relative group/img"
                                                            >
                                                                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
                                                                    <motion.img
                                                                        initial={{ scale: 1.1 }}
                                                                        animate={{ scale: 1 }}
                                                                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                                                        src={solution.image}
                                                                        alt={solution.title}
                                                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover/img:scale-105"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                                                    {/* Bottom overlay content */}
                                                                    <motion.div
                                                                        initial={{ opacity: 0, y: 20 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        transition={{ delay: 0.6, duration: 0.8 }}
                                                                        className="absolute bottom-8 left-8 right-8"
                                                                    >
                                                                        <div className="flex items-center gap-3 mb-3">
                                                                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                                                            <span className="text-accent text-[9px] font-bold uppercase tracking-[0.3em]">{solution.subtitle}</span>
                                                                        </div>
                                                                        <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tighter">
                                                                            {solution.title}
                                                                        </h4>
                                                                    </motion.div>
                                                                </div>
                                                            </motion.div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <CTA />
                <Footer />
            </div>
            </PageTransition>
        </SmoothScroll>
    );
}
