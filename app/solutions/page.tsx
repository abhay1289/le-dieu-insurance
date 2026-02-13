'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import CTA from '@/components/CTA/CTA';
import PageHero from '@/components/PageHero';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

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

const ShieldCheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
    </svg>
);

const ChartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
    </svg>
);

const solutionIcons: Record<string, React.ReactNode> = {
    manufacturing: <FactoryIcon />,
    infrastructure: <CraneIcon />,
    specialized: <BoltIcon />,
    corporate: <BriefcaseIcon />,
    healthcare: <StethoscopeIcon />,
    hospitality: <BedIcon />,
};

const industrySolutions = [
    {
        id: "manufacturing",
        title: "Heavy Industries",
        subtitle: "Zero-Downtime Protection",
        description: "In heavy manufacturing, even brief downtime is a catastrophic leak that silently erodes years of hard-won profitability. We architect robust, multi-layered safety nets that go far beyond standard insurance coverage. Our specialized frameworks neutralize risks from critical machinery breakdowns and prolonged operational interruptions. By rigorously stress-testing your total exposure, we ensure your factory remains financially resilient against devastating black-swan events.",
        features: [
            { title: "Asset Resilience", text: "End-to-end protection for plant, machinery, and physical assets." },
            { title: "Profit Continuity", text: "Advanced loss of profit modeling to shield your balance sheet." }
        ],
        coverages: ["Industrial All Risk", "Business Interruption", "Machinery Breakdown", "LOP (Loss of Profits)"],
        image: "/images/solutions-heavy-industries.png"
    },
    {
        id: "infrastructure",
        title: "Mega Projects",
        subtitle: "Foundation to Finish",
        description: "Engineering mega-projects demands risk management foundations as solid as the bridges you build across India. From ground-breaking to ribbon-cutting, we provide surgical coverage for ambitious civil engineering marvels nationwide. Our core focus is protecting your enterprise against costly project delays and unexpected material damage. By building bespoke risk transfer mechanisms, we shield your capital from unforeseen tremors that destabilize completions.",
        features: [
            { title: "CAR/EAR Mastery", text: "Comprehensive Contractor's and Erector's All Risk frameworks." },
            { title: "ALOP Protection", text: "Shielding against financial losses due to project delays (Advanced LOP)." }
        ],
        coverages: ["Contractor's All Risk", "Marine Cargo (Daly)", "Professional Indemnity", "Third Party Liability"],
        image: "/images/solutions-mega-projects.png"
    },
    {
        id: "specialized",
        title: "Power & Energy",
        subtitle: "Grid Reliability",
        description: "As India transitions toward a complex energy grid, power sector threats have decoupled from traditional risk models entirely. Whether managing a thermal giant or a sprawling solar park, your risk transfer strategy must be dynamic. We architect specialized policies guarding against grid interruptions and environmental catastrophes. Our tailored approach ensures every kilowatt generated is protected by a resilient financial chassis.",
        features: [
            { title: "Mega Risk Cover", text: "Custom-built frameworks for high-value power generation units." },
            { title: "Renewable Assets", text: "Specific coverage for solar parks and wind energy installations." }
        ],
        coverages: ["Mega Risk Policy", "Environmental Liability", "Terrorism Cover", "Grid Interruption"],
        image: "/images/solutions-power-energy.png"
    },
    {
        id: "corporate",
        title: "Corporate Liability",
        subtitle: "Executive Resilience",
        description: "In an era of rising litigation and relentless digital warfare, corporate leaders face unprecedented personal and professional exposure. We act as the strategic architect for your leadership's reputation, shielding the brain trust from catastrophic failure. Our liability solutions protect Directors and Officers from financial ruin across all jurisdictions. By fortifying balance sheets against sophisticated cyber threats, we neutralize ransomware vulnerabilities.",
        features: [
            { title: "D&O Shield", text: "Protecting Directors and Officers from personal liability claims." },
            { title: "Cyber Fortress", text: "Response-first coverage for data breaches and ransomware threats." }
        ],
        coverages: ["Directors & Officers", "Cyber Liability", "Professional Indemnity", "Crime & Fraud"],
        image: "/images/solutions-corporate-fleet.png"
    },
    {
        id: "healthcare",
        title: "Healthcare",
        subtitle: "Clinical Excellence",
        description: "Operating a modern healthcare institution demands managing advanced diagnostic tools alongside the vital protection of human lives. Our risk protocols are built on strong foundations of clinical excellence and uncompromising patient safety. We design medical malpractice and equipment breakdown frameworks that prioritize seamless operational continuity. From shielding high-value diagnostic suites to managing complex liabilities, our bespoke solutions safeguard institutional integrity.",
        features: [
            { title: "Medical Malpractice", text: "Dedicated coverage for healthcare professionals and entities." },
            { title: "Equipment Safety", text: "Protection for high-value diagnostic and surgical infrastructure." }
        ],
        coverages: ["Medical Malpractice", "Equipment Breakdown", "Public Liability", "Clinical Trial Cover"],
        image: "/images/solutions-healthcare.png"
    },
    {
        id: "hospitality",
        title: "Guest Assurance",
        subtitle: "Elite Hospitality",
        description: "Building a recognized hospitality brand takes decades of impeccable service, yet a single uninsured incident can tarnish that reputation overnight. We create comprehensive safety nets for elite hotel chains prioritizing guest assurance and total asset resilience. Our frameworks protect your property's physical grandeur while ensuring brand integrity remains absolutely unshakeable. By strategically shielding every operational asset, we ensure enduring luxury.",
        features: [
            { title: "Property All Risk", text: "Shielding iconic hospitality assets from fire, flood, and theft." },
            { title: "Guest Indemnity", text: "Comprehensive liability for guest accidents and hospitality errors." }
        ],
        coverages: ["Property All Risk", "Guest Liability", "Food & Liquor Liability", "Fidelity Guarantee"],
        image: "/images/solutions-hospitality.png"
    },
];

const processSteps = [
    { step: "01", title: "Discovery", description: "Deep-dive workshops to unearth hidden exposure vectors across your enterprise." },
    { step: "02", title: "Analysis", description: "Quantitative stress-testing of your current risk portfolio against worst-case scenarios." },
    { step: "03", title: "Design", description: "Architecting a bespoke transfer mechanism with 21+ insurer partners." },
    { step: "04", title: "Execution", description: "Seamless policy placement and SLA-backed service delivery with ongoing stewardship." },
];

const textRevealVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function SolutionsPage() {
    const [activeCategory, setActiveCategory] = useState<string | null>("manufacturing");

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-white text-primary selection:bg-primary selection:text-white">
                <ScrollProgress />
                <NavBar />

                <PageHero
                    title="Solutions"
                    subtitle="Bespoke risk transfer mechanisms for the industries that power India's economy."
                    breadcrumb="Solutions"
                    backgroundImage="/images/service-business.png"
                />

                {/* Solutions Accordion */}
                <section className="py-16 md:py-32 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12 relative z-10">

                        {/* Section Header */}
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-8">
                            <div className="max-w-2xl">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 mb-6"
                                >
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">Industry Solutions</span>
                                </motion.div>
                                <div className="overflow-hidden">
                                    <motion.h2
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-4xl sm:text-5xl md:text-[73px] font-bold text-primary tracking-tighter leading-[0.9]"
                                    >
                                        Sector-Specific<br />
                                        <span className="text-gray-300">Expertise</span>
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
                                Each industry carries unique risks. We don't apply templates — we architect bespoke coverage frameworks calibrated to your sector's operational realities.
                            </motion.p>
                        </div>

                        {/* Accordion */}
                        <div className="max-w-7xl mx-auto">
                            {industrySolutions.map((solution, index) => {
                                const isActive = activeCategory === solution.id;

                                return (
                                    <div
                                        key={solution.id}
                                        className={`border-b border-gray-100 transition-all duration-700 ${isActive ? 'pb-16 pt-8' : 'py-6'}`}
                                    >
                                        <button
                                            onClick={() => setActiveCategory(activeCategory === solution.id ? null : solution.id)}
                                            className="w-full flex items-center justify-between group text-left"
                                        >
                                            <div className="flex items-center gap-6 md:gap-8">
                                                <span className={`text-sm font-bold tracking-widest transition-colors duration-500 ${isActive ? 'text-accent' : 'text-gray-300'}`}>
                                                    0{index + 1}
                                                </span>
                                                <h2 className={`text-2xl sm:text-3xl md:text-6xl font-bold tracking-tighter transition-all duration-700 ${isActive ? 'text-primary' : 'text-gray-900/40 group-hover:text-primary group-hover:translate-x-2'}`}>
                                                    {solution.title}
                                                </h2>
                                            </div>
                                            <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full border flex items-center justify-center transition-all duration-700 flex-shrink-0 ${isActive ? 'bg-primary border-primary rotate-45' : 'bg-white border-gray-200 group-hover:border-primary'}`}>
                                                <svg className={`w-5 h-5 transition-colors duration-700 ${isActive ? 'text-white' : 'text-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </div>
                                        </button>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 pt-12">

                                                        {/* Left Column */}
                                                        <div className="flex flex-col justify-between">
                                                            <div>
                                                                <motion.div
                                                                    initial={{ opacity: 0, x: -20 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: 0.3 }}
                                                                    className="flex items-center gap-3 mb-8"
                                                                >
                                                                    <span className="h-[2px] w-10 bg-accent" />
                                                                    <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">{solution.subtitle}</span>
                                                                </motion.div>

                                                                <motion.p
                                                                    initial={{ opacity: 0, y: 20 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.4 }}
                                                                    className="text-gray-500 text-base md:text-lg leading-relaxed font-medium mb-10 max-w-lg"
                                                                >
                                                                    {solution.description}
                                                                </motion.p>
                                                            </div>

                                                            <motion.div
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                transition={{ delay: 0.5 }}
                                                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                                            >
                                                                {solution.features.map((feature, fi) => (
                                                                    <div key={fi} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent/30 hover:bg-white transition-all duration-500 group/item">
                                                                        <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-4 text-primary group-hover/item:bg-accent group-hover/item:text-white group-hover/item:border-accent transition-all duration-500">
                                                                            {fi === 0 ? <ShieldCheckIcon /> : <ChartIcon />}
                                                                        </div>
                                                                        <h4 className="text-lg font-bold text-primary mb-2 tracking-tight">{feature.title}</h4>
                                                                        <p className="text-gray-500 text-sm leading-relaxed font-medium">{feature.text}</p>
                                                                    </div>
                                                                ))}
                                                            </motion.div>
                                                        </div>

                                                        {/* Right Column — Image */}
                                                        <div className="relative">
                                                            <motion.div
                                                                initial={{ scale: 0.95, opacity: 0 }}
                                                                animate={{ scale: 1, opacity: 1 }}
                                                                transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                                                className="relative group/img"
                                                            >
                                                                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
                                                                    <img
                                                                        src={solution.image}
                                                                        alt={solution.title}
                                                                        className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover/img:scale-105"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                                                    {/* Bottom info */}
                                                                    <div className="absolute bottom-8 left-8 right-8">
                                                                        <div className="flex flex-wrap gap-2">
                                                                            {solution.coverages.map((c, ci) => (
                                                                                <span key={ci} className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-[10px] text-white/80 font-bold uppercase tracking-wider border border-white/10">
                                                                                    {c}
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Engagement Protocol */}
                <section className="py-16 md:py-32 bg-[#FAFBFB] border-t border-gray-100 relative overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12 relative z-10">

                        {/* Section Header */}
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-8">
                            <div className="max-w-2xl">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 mb-6"
                                >
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">The Protocol</span>
                                </motion.div>
                                <div className="overflow-hidden">
                                    <motion.h2
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-4xl sm:text-5xl md:text-[73px] font-bold text-primary tracking-tighter leading-[0.9]"
                                    >
                                        Engagement<br />
                                        <span className="text-gray-300">Lifecycle</span>
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
                                A disciplined four-phase protocol built on two decades of institutional risk management experience.
                            </motion.p>
                        </div>

                        {/* Process Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-[2rem] overflow-hidden border border-gray-200">
                            {processSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="bg-white p-8 md:p-10 group hover:bg-gray-50/50 transition-colors duration-500 relative overflow-hidden"
                                >
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileHover={{ height: '100%' }}
                                        transition={{ duration: 0.7 }}
                                        className="absolute top-0 left-0 w-1 bg-accent"
                                    />
                                    <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] block mb-3">Phase {step.step}</span>
                                    <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">{step.title}</h3>
                                    <p className="text-gray-500 leading-relaxed font-medium text-sm">{step.description}</p>
                                    <motion.div
                                        initial={{ width: '40px' }}
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.5 }}
                                        className="h-[2px] bg-accent mt-8"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTA />
                <Footer />
            </div>
        </SmoothScroll>
    );
}
