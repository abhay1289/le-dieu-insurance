'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
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

function SolutionCard({ solution }: { solution: any }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileHover={{ y: -12 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            className="group relative h-[480px] rounded-[2.5rem] bg-[#FBFBFB] border border-gray-100 overflow-hidden shadow-sm hover:shadow-[0_50px_100px_rgba(0,0,0,0.08)] transition-all duration-500"
        >
            {/* Background Image with Controlled Scale */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover opacity-[0.05] transition-opacity duration-1000 group-hover:opacity-[0.12] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBFB] via-[#FBFBFB]/20 to-transparent" />
            </div>

            {/* Spotlight Effect - Higher Contrast */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            500px circle at ${mouseX}px ${mouseY}px,
                            ${solution.hexColor},
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative h-full p-10 flex flex-col justify-between z-10">
                <div>
                    <div className="flex justify-between items-start mb-8">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 bg-white border border-gray-100 px-4 py-1.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                            {solution.category}
                        </span>
                        <div className="w-14 h-14 rounded-2xl border border-gray-100 bg-white flex items-center justify-center text-primary transform group-hover:-rotate-6 transition-transform duration-700 shadow-sm group-hover:shadow-md">
                            {solution.icon}
                        </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3 tracking-tighter leading-tight group-hover:text-accent transition-colors duration-500">
                        {solution.title}
                    </h3>
                    <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                        {solution.subtitle}
                    </p>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base font-medium max-w-[95%]">
                        {solution.description}
                    </p>
                </div>

                <div>
                    <div className="h-px w-full bg-gray-100 mb-8 group-hover:bg-accent/20 transition-colors duration-500" />
                    <div className="flex flex-wrap gap-2">
                        {solution.coverages.map((c: string, ci: number) => (
                            <span key={ci} className="text-[10px] font-bold uppercase text-gray-500 px-3 py-1.5 rounded-xl bg-white border border-gray-100 group-hover:border-accent/30 group-hover:text-primary transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                                {c}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hover Indicator Bar - Animated */}
            <motion.div
                className="absolute bottom-0 left-0 h-2 bg-accent w-0 group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]"
            />
        </motion.div>
    );
}

const industryCategories = [
    { id: "all", label: "All Sectors" },
    { id: "manufacturing", label: "Industrial" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "corporate", label: "Corporate" },
    { id: "specialized", label: "Specialized" },
];

const industrySolutions = [
    {
        category: "manufacturing",
        title: "Heavy Industries",
        subtitle: "Zero-Downtime Protection",
        icon: <FactoryIcon />,
        description: "For factories where every second of downtime costs millions. We cover machinery, assets, and profit continuity.",
        coverages: ["Industrial All Risk", "Loss of Profit", "Machinery Breakdown"],
        hexColor: "rgba(249, 115, 22, 0.08)",
        image: "/images/solutions-heavy-industries.png"
    },
    {
        category: "infrastructure",
        title: "Mega Projects",
        subtitle: "Foundation to Finish",
        icon: <CraneIcon />,
        description: "End-to-end coverage for roads, bridges, and civil engineering marvels. Protecting against delays, damage, and third-party liabilities.",
        coverages: ["Contractor's All Risk", "Advance Loss of Profits", "Third Party Liability"],
        hexColor: "rgba(34, 197, 94, 0.08)",
        image: "/images/solutions-mega-projects.png"
    },
    {
        category: "specialized",
        title: "Power & Energy",
        subtitle: "Grid Reliability",
        icon: <BoltIcon />,
        description: "Specialized risk transfer for thermal, solar, and hydro power plants facing unique environmental and operational threats.",
        coverages: ["Mega Risk Policies", "Business Interruption", "Terrorism Cover"],
        hexColor: "rgba(234, 179, 8, 0.08)",
        image: "/images/solutions-power-energy.png"
    },
    {
        category: "corporate",
        title: "Corporate Fleet",
        subtitle: "Executive Liability",
        icon: <BriefcaseIcon />,
        description: "Protecting the decision-makers and the balance sheet. From D&O to Cyber, we shield the organization's brain.",
        coverages: ["Directors & Officers", "Cyber Liability", "Errors & Omissions"],
        hexColor: "rgba(168, 85, 247, 0.08)",
        image: "/images/solutions-corporate-fleet.png"
    },
    {
        category: "specialized",
        title: "Healthcare",
        subtitle: "Clinical Excellence",
        icon: <StethoscopeIcon />,
        description: "Coverage for hospitals handling delicate lives. Medical malpractice and equipment protection protocols.",
        coverages: ["Medical Malpractice", "Equipment Breakdown", "Public Liability"],
        hexColor: "rgba(100, 116, 139, 0.08)",
        image: "/images/solutions-healthcare.png"
    },
    {
        category: "corporate",
        title: "Hospitality",
        subtitle: "Guest Assurance",
        icon: <BedIcon />,
        description: "Protecting properties, guests, and reputation. Comprehensive covers for 5-star chains and resorts.",
        coverages: ["Property All Risk", "Guest Liability", "Fidelity Guarantee"],
        hexColor: "rgba(244, 63, 94, 0.08)",
        image: "/images/solutions-hospitality.png"
    },
];

const processSteps = [
    {
        step: "01",
        title: "Discovery",
        description: "Deep-dive workshops to unearth hidden exposure vectors.",
    },
    {
        step: "02",
        title: "Analysis",
        description: "Quantitative stress-testing of your current risk portfolio.",
    },
    {
        step: "03",
        title: "Design",
        description: "Architecting a bespoke transfer mechanism with 21+ insurers.",
    },
    {
        step: "04",
        title: "Execution",
        description: "Seamless policy placement and SLA-backed service delivery.",
    },
];

export default function SolutionsPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSolutions = activeCategory === "all"
        ? industrySolutions
        : industrySolutions.filter(s => s.category === activeCategory);

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

                {/* Filters */}
                <section className="pt-24 pb-12 bg-white sticky top-0 md:relative z-30">
                    <div className="container mx-auto px-6 flex justify-center">
                        <div className="flex bg-gray-50 p-1.5 rounded-full border border-gray-100 shadow-sm">
                            {industryCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`relative px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 z-10 whitespace-nowrap ${activeCategory === cat.id ? 'text-white' : 'text-gray-400 hover:text-primary'
                                        }`}
                                >
                                    {activeCategory === cat.id && (
                                        <motion.span
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20 -z-10"
                                            transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                                        />
                                    )}
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solutions Grid */}
                <section className="py-12 md:py-24 bg-white relative">
                    {/* Subtle Background Mesh */}
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.4] pointer-events-none" />

                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                            <AnimatePresence mode="popLayout">
                                {filteredSolutions.map((solution) => (
                                    <SolutionCard key={solution.title} solution={solution} />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </section>

                {/* Engagement Protocol */}
                <section className="py-24 md:py-40 bg-white border-t border-gray-100 relative overflow-hidden">
                    {/* Ambient Glows */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        <div className="mb-24 text-center max-w-3xl mx-auto">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-accent text-[10px] font-bold uppercase tracking-[0.4em]"
                            >
                                The Protocol
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-bold text-primary mt-6 tracking-tighter leading-[0.9]"
                            >
                                Engagement <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gray-400">Lifecycle</span>
                            </motion.h2>
                        </div>

                        <div className="grid md:grid-cols-4 gap-12 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

                            {processSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative group text-center md:text-left"
                                >
                                    <div className="w-20 h-20 rounded-3xl bg-white border border-gray-100 group-hover:border-primary group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center font-bold text-2xl transition-all duration-700 relative z-10 mb-10 mx-auto md:mx-0 shadow-sm group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
                                        {step.step}
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight group-hover:text-primary transition-colors">{step.title}</h3>
                                    <p className="text-gray-500 text-base leading-relaxed font-medium">
                                        {step.description}
                                    </p>

                                    {/* Mobile/Tablet Step Indicator Line */}
                                    {i < processSteps.length - 1 && (
                                        <div className="lg:hidden w-px h-12 bg-gray-100 mx-auto md:mx-0 mt-8" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </SmoothScroll>
    );
}
