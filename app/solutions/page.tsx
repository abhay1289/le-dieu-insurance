'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';
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



const industrySolutions = [
    {
        id: "manufacturing",
        title: "Heavy Industries",
        subtitle: "Zero-Downtime Protection",
        icon: <FactoryIcon />,
        description: "In heavy manufacturing, even brief downtime is a catastrophic leak that silently erodes years of hard-won profitability. We architect robust, multi-layered safety nets that go far beyond standard insurance coverage. Our specialized frameworks neutralize risks from critical machinery breakdowns and prolonged operational interruptions. By rigorously stress-testing your total exposure, we ensure your factory remains financially resilient against devastating black-swan events.",
        longDescription: "Our Industrial All Risk (IAR) frameworks are specifically engineered for the Indian manufacturing landscape. We don't just place policies; we conduct deep-dive technical audits to ensure that every unique operational risk—from boilerplate explosions to intricate supply chain disruptions—is accounted for and neutralized.",
        features: [
            { icon: "⚙️", title: "Asset Resilience", text: "End-to-end protection for plant, machinery, and physical assets." },
            { icon: "📉", title: "Profit Continuity", text: "Advanced loss of profit modeling to shield your balance sheet." }
        ],
        coverages: ["Industrial All Risk", "Business Interruption", "Machinery Breakdown", "LOP (Loss of Profits)"],
        hexColor: "rgba(249, 115, 22, 0.08)",
        image: "/images/solutions-heavy-industries.png"
    },
    {
        id: "infrastructure",
        title: "Mega Projects",
        subtitle: "Foundation to Finish",
        icon: <CraneIcon />,
        description: "Engineering mega-projects demands risk management foundations as solid as the bridges you build across India. From ground-breaking to ribbon-cutting, we provide surgical coverage for ambitious civil engineering marvels nationwide. Our core focus is protecting your enterprise against costly project delays and unexpected material damage. By building bespoke risk transfer mechanisms, we shield your capital from unforeseen tremors that destabilize completions.",
        longDescription: "Managing the risk of a multi-billion dollar infrastructure project requires more than standard insurance. It requires an understanding of EPC contracts, geological uncertainties, and regulatory shifting. We provide the financial bedrock that allows engineers to focus on building the future of India.",
        features: [
            { icon: "🏗️", title: "CAR/EAR Mastery", text: "Comprehensive Contractor's and Erector's All Risk frameworks." },
            { icon: "⏰", title: "ALOP Protection", text: "Shielding against financial losses due to project delays (Advanced LOP)." }
        ],
        coverages: ["Contractor's All Risk", "Marine Cargo (Daly)", "Professional Indemnity", "Third Party Liability"],
        hexColor: "rgba(34, 197, 94, 0.08)",
        image: "/images/solutions-mega-projects.png"
    },
    {
        id: "specialized",
        title: "Power & Energy",
        subtitle: "Grid Reliability",
        icon: <BoltIcon />,
        description: "As India transitions toward a complex energy grid, power sector threats have decoupled from traditional risk models entirely. Whether managing a thermal giant or a sprawling solar park, your risk transfer strategy must be dynamic. We architect specialized policies guarding against grid interruptions and environmental catastrophes. Our tailored approach ensures every kilowatt generated is protected by a resilient financial chassis.",
        longDescription: "As India transitions towards a greener grid, the risks associated with energy production are decoupling from traditional models. Whether it's managing the volatility of renewable assets or ensuring the stability of thermal giants, we provide specialized 'Mega Risk' policies that cover every kilowatt generated.",
        features: [
            { icon: "⚡", title: "Mega Risk Cover", text: "Custom-built frameworks for high-value power generation units." },
            { icon: "☀️", title: "Renewable Assets", text: "Specific coverage for solar parks and wind energy installations." }
        ],
        coverages: ["Mega Risk Policy", "Environmental Liability", "Terrorism Cover", "Grid Interruption"],
        hexColor: "rgba(234, 179, 8, 0.08)",
        image: "/images/solutions-power-energy.png"
    },
    {
        id: "corporate",
        title: "Corporate Liability",
        subtitle: "Executive Resilience",
        icon: <BriefcaseIcon />,
        description: "In an era of rising litigation and relentless digital warfare, corporate leaders face unprecedented personal and professional exposure. We act as the strategic architect for your leadership's reputation, shielding the brain trust from catastrophic failure. Our liability solutions protect Directors and Officers from financial ruin across all jurisdictions. By fortifying balance sheets against sophisticated cyber threats, we neutralize ransomware vulnerabilities.",
        longDescription: "In an era of rising litigation and digital warfare, corporate leaders face unprecedented personal and professional exposure. Our liability solutions act as a sophisticated shield, ensuring that board decisions and digital assets are protected by the world's leading 'A' rated underwriters.",
        features: [
            { icon: "👤", title: "D&O Shield", text: "Protecting Directors and Officers from personal liability claims." },
            { icon: "💻", title: "Cyber Fortress", text: "Response-first coverage for data breaches and ransomware threats." }
        ],
        coverages: ["Directors & Officers", "Cyber Liability", "Professional Indemnity", "Crime & Fraud"],
        hexColor: "rgba(168, 85, 247, 0.08)",
        image: "/images/solutions-corporate-fleet.png"
    },
    {
        id: "healthcare",
        title: "Healthcare",
        subtitle: "Clinical Excellence",
        icon: <StethoscopeIcon />,
        description: "Operating a modern healthcare institution demands managing advanced diagnostic tools alongside the vital protection of human lives. Our risk protocols are built on strong foundations of clinical excellence and uncompromising patient safety. We design medical malpractice and equipment breakdown frameworks that prioritize seamless operational continuity. From shielding high-value diagnostic suites to managing complex liabilities, our bespoke solutions safeguard institutional integrity.",
        longDescription: "The healthcare sector operates under a microscopic lens of accountability. We help medical institutions manage the duality of high-tech equipment risks and sensitive human-centric liabilities, providing a foundation for clinical excellence without the fear of crippling litigation.",
        features: [
            { icon: "🏥", title: "Medical Malpractice", text: "Dedicated coverage for healthcare professionals and entities." },
            { icon: "🔬", title: "Equipment Safety", text: "Protection for high-value diagnostic and surgical infrastructure." }
        ],
        coverages: ["Medical Malpractice", "Equipment Breakdown", "Public Liability", "Clinical Trial Cover"],
        hexColor: "rgba(100, 116, 139, 0.08)",
        image: "/images/solutions-healthcare.png"
    },
    {
        id: "hospitality",
        title: "Guest Assurance",
        subtitle: "Elite Hospitality",
        icon: <BedIcon />,
        description: "Building a recognized hospitality brand takes decades of impeccable service, yet a single uninsured incident can tarnish that reputation overnight. We create comprehensive safety nets for elite hotel chains prioritizing guest assurance and total asset resilience. Our frameworks protect your property's physical grandeur while ensuring brand integrity remains absolutely unshakeable. By strategically shielding every operational asset, we ensure enduring luxury.",
        longDescription: "A single incident can tarnish a decade of reputation building in the hospitality trade. We create a 360-degree safety net that covers the physical grandeur of your properties while ensuring that your guests' safety and your brand's integrity remain unshakeable.",
        features: [
            { icon: "🏨", title: "Property All Risk", text: "Shielding iconic hospitality assets from fire, flood, and theft." },
            { icon: "🥂", title: "Guest Indemnity", text: "Comprehensive liability for guest accidents and hospitality errors." }
        ],
        coverages: ["Property All Risk", "Guest Liability", "Food & Liquor Liability", "Fidelity Guarantee"],
        hexColor: "rgba(244, 63, 94, 0.08)",
        image: "/images/solutions-hospitality.png"
    },
];

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

                {/* Premium Vertical Accordion Solutions */}
                <section className="py-24 md:py-32 bg-white relative overflow-hidden">
                    {/* Background Texture */}
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.3] pointer-events-none" />

                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        <div className="max-w-7xl mx-auto">
                            {industrySolutions.map((solution, index) => {
                                const isActive = activeCategory === solution.id;

                                return (
                                    <div
                                        key={solution.id}
                                        className={`border-b border-gray-100 transition-all duration-700 ${isActive ? 'pb-20 pt-10' : 'py-8'}`}
                                    >
                                        <button
                                            onClick={() => setActiveCategory(activeCategory === solution.id ? null : solution.id)}
                                            className="w-full flex items-center justify-between group text-left"
                                        >
                                            <div className="flex items-center gap-8">
                                                <span className={`text-sm font-bold font-mono tracking-widest transition-colors duration-500 ${isActive ? 'text-accent' : 'text-gray-300'}`}>
                                                    0{index + 1}
                                                </span>
                                                <h2 className={`text-3xl md:text-7xl font-bold tracking-tighter transition-all duration-700 ${isActive ? 'text-primary scale-105 origin-left' : 'text-gray-900/40 group-hover:text-primary group-hover:translate-x-4'}`}>
                                                    {solution.title}
                                                </h2>
                                            </div>
                                            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-100 flex items-center justify-center transition-all duration-700 ${isActive ? 'bg-primary border-primary rotate-45' : 'bg-white group-hover:border-primary'}`}>
                                                <svg className={`w-6 h-6 transition-colors duration-700 ${isActive ? 'text-white' : 'text-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                                    <div className="relative grid lg:grid-cols-2 gap-12 md:gap-20 pt-16 pb-12">

                                                        {/* Left Column: Strategic Narrative */}
                                                        <div className="flex flex-col justify-between h-full">
                                                            <div>
                                                                <motion.div
                                                                    initial={{ opacity: 0, x: -20 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: 0.3 }}
                                                                    className="flex items-center gap-4 mb-10"
                                                                >
                                                                    <span className="h-[2px] w-12 bg-accent" />
                                                                    <span className="text-accent text-[12px] font-bold uppercase tracking-[0.5em]">{solution.subtitle}</span>
                                                                </motion.div>

                                                                <motion.h3
                                                                    initial={{ opacity: 0, y: 20 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.4 }}
                                                                    className="text-lg md:text-2xl text-primary font-bold leading-[1.4] mb-10 tracking-tight max-w-lg"
                                                                >
                                                                    {solution.description}
                                                                </motion.h3>
                                                            </div>

                                                            <motion.div
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                transition={{ delay: 0.5 }}
                                                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                                            >
                                                                {solution.features.map((feature, fi) => (
                                                                    <div key={fi} className="p-8 rounded-[3rem] bg-gray-50 border border-gray-100 hover:border-accent/30 hover:bg-white transition-all duration-500 group/item shadow-sm hover:shadow-xl">
                                                                        <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-3xl mb-6 group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-500 shadow-sm">
                                                                            {feature.icon}
                                                                        </div>
                                                                        <h4 className="text-xl font-bold text-primary mb-3">{feature.title}</h4>
                                                                        <p className="text-slate-500 text-sm leading-tight font-medium">{feature.text}</p>
                                                                    </div>
                                                                ))}
                                                            </motion.div>
                                                        </div>

                                                        {/* Right Column: Visual & Technical */}
                                                        <div className="relative">
                                                            <motion.div
                                                                initial={{ scale: 0.95, opacity: 0 }}
                                                                animate={{ scale: 1, opacity: 1 }}
                                                                transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                                                className="relative group/img"
                                                            >
                                                                {/* Image Container with Scanning Effect */}
                                                                <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl border-[12px] border-white">
                                                                    <img
                                                                        src={solution.image}
                                                                        alt={solution.title}
                                                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                                                    {/* Holographic Scan Line */}
                                                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent h-20 w-full animate-scan pointer-events-none" />

                                                                    <div className="absolute bottom-10 left-10 right-10">
                                                                        <div className="flex items-center gap-3 mb-4">
                                                                            <div className="px-3 py-1 bg-accent rounded text-[9px] font-bold text-white uppercase tracking-widest">Live Analysis</div>
                                                                            <div className="h-px flex-1 bg-white/20" />
                                                                        </div>
                                                                        <h4 className="text-3xl font-bold text-white tracking-tighter mb-2">
                                                                            {solution.title} <span className="text-accent underline decoration-2 underline-offset-8">Vector</span>
                                                                        </h4>
                                                                        <p className="text-white/60 text-xs font-medium tracking-wide">
                                                                            Optimizing risk transfer mechanisms based on {solution.id} market volatility metrics.
                                                                        </p>
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

                <CTA />
                <Footer />
            </div>
        </SmoothScroll>
    );
}
