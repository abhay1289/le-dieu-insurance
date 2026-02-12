'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import PageHero from '@/components/PageHero';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

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
        description: "For factories where every second of downtime costs millions. We cover machinery, assets, and profit continuity.",
        coverages: ["Industrial All Risk", "Loss of Profit", "Machinery Breakdown"],
        gradient: "from-orange-500/20 to-red-500/20"
    },
    {
        category: "infrastructure",
        title: "Mega Projects",
        subtitle: "Foundation to Finish",
        description: "End-to-end coverage for roads, bridges, and civil engineering marvels. Protecting against delays, damage, and third-party liabilities.",
        coverages: ["Contractor's All Risk", "Advance Loss of Profits", "Third Party Liability"],
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        category: "specialized",
        title: "Power & Energy",
        subtitle: "Grid Reliability",
        description: "Specialized risk transfer for thermal, solar, and hydro power plants facing unique environmental and operational threats.",
        coverages: ["Mega Risk Policies", "Business Interruption", "Terrorism Cover"],
        gradient: "from-yellow-400/20 to-amber-500/20"
    },
    {
        category: "corporate",
        title: "Corporate Fleet",
        subtitle: "Executive Liability",
        description: "Protecting the decision-makers and the balance sheet. From D&O to Cyber, we shield the organization's brain.",
        coverages: ["Directors & Officers", "Cyber Liability", "Errors & Omissions"],
        gradient: "from-purple-500/20 to-indigo-500/20"
    },
    {
        category: "specialized",
        title: "Healthcare",
        subtitle: "Clinical Excellence",
        description: "Coverage for hospitals handling delicate lives. Medical malpractice and equipment protection protocols.",
        coverages: ["Medical Malpractice", "Equipment Breakdown", "Public Liability"],
        gradient: "from-emerald-500/20 to-green-500/20"
    },
    {
        category: "corporate",
        title: "Hospitality",
        subtitle: "Guest Assurance",
        description: "Protecting properties, guests, and reputation. Comprehensive covers for 5-star chains and resorts.",
        coverages: ["Property All Risk", "Guest Liability", "Fidelity Guarantee"],
        gradient: "from-pink-500/20 to-rose-500/20"
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
            <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
                <ScrollProgress />
                <NavBar />

                <PageHero
                    title="Solutions"
                    subtitle="Bespoke risk transfer mechanisms for the industries that power India's economy."
                    breadcrumb="Solutions"
                    backgroundImage="/images/service-business.png"
                />

                {/* Filters */}
                <section className="pt-24 pb-12 bg-black sticky top-0 md:relative z-30 border-b border-white/5 md:border-none">
                    <div className="container mx-auto px-6 flex justify-center overflow-x-auto no-scrollbar pb-4 md:pb-0">
                        <div className="flex bg-white/5 p-1 rounded-full backdrop-blur-md border border-white/10">
                            {industryCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`relative px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 z-10 whitespace-nowrap ${activeCategory === cat.id ? 'text-black' : 'text-white/60 hover:text-white'
                                        }`}
                                >
                                    {activeCategory === cat.id && (
                                        <motion.span
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-accent rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solutions Grid */}
                <section className="py-12 md:py-24 bg-black relative min-h-[80vh]">
                    <div className="container mx-auto px-6 md:px-12">
                        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence mode="popLayout">
                                {filteredSolutions.map((solution, i) => (
                                    <motion.div
                                        layout
                                        key={solution.title}
                                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="group relative h-[400px] rounded-3xl bg-[#0B1C15] border border-white/5 overflow-hidden hover:border-accent/40 transition-colors duration-500"
                                    >
                                        {/* Hover Gradient Bloom */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl`} />

                                        <div className="relative h-full p-8 flex flex-col justify-between z-10">
                                            <div>
                                                <div className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border w-fit px-2 py-1 rounded-full border-accent/20 bg-accent/5">{solution.category}</div>
                                                <h3 className="text-3xl font-bold text-white mb-2">{solution.title}</h3>
                                                <p className="text-white/40 font-mono text-xs uppercase tracking-widest mb-6">{solution.subtitle}</p>
                                                <p className="text-white/70 leading-relaxed text-sm">{solution.description}</p>
                                            </div>

                                            <div>
                                                <div className="h-px w-full bg-white/10 mb-6 group-hover:bg-accent/30 transition-colors" />
                                                <div className="flex flex-wrap gap-2">
                                                    {solution.coverages.map((c, ci) => (
                                                        <span key={ci} className="text-[10px] font-bold uppercase text-white/40 group-hover:text-white transition-colors bg-white/5 px-2 py-1 rounded">
                                                            {c}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover Arrow */}
                                        <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0 text-accent">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </section>

                {/* Cyberpunk Process Steps */}
                <section className="py-24 md:py-32 bg-[#0B1C15] border-t border-white/5">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="mb-20 text-center">
                            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">The Protocol</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 tracking-tighter">Engagement Lifecycle</h2>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0" />

                            {processSteps.map((step, i) => (
                                <div key={i} className="relative group">
                                    <div className="w-14 h-14 rounded-full bg-[#0B1C15] border border-accent/20 group-hover:border-accent group-hover:bg-accent group-hover:text-black text-white flex items-center justify-center font-bold text-xl transition-all duration-500 relative z-10 mb-8 mx-auto md:mx-0 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 text-center md:text-left">{step.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed text-center md:text-left">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </SmoothScroll>
    );
}
