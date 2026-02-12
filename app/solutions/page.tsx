'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import PageHero from '@/components/PageHero';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

const textRevealVariants = {
    hidden: { y: "100%" },
    visible: {
        y: 0,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
};

const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const industryCategories = [
    { id: "all", label: "All Industries" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "corporate", label: "Corporate" },
    { id: "energy", label: "Energy & Power" },
];

const industrySolutions = [
    {
        category: "manufacturing",
        icon: "🏭",
        title: "Manufacturing & Industrial",
        description: "Comprehensive risk coverage for factories, plants, and production facilities — including fire, machinery breakdown, loss of profit, and workmen compensation.",
        coverages: ["Fire & Allied Perils", "Machinery Breakdown", "Loss of Profit", "Workmen Compensation", "Product Liability"],
    },
    {
        category: "infrastructure",
        icon: "🏗️",
        title: "Infrastructure & Construction",
        description: "End-to-end project insurance for roads, bridges, buildings, and civil engineering works — from Contractor All Risk to Erection All Risk coverage.",
        coverages: ["Contractor All Risk (CAR)", "Erection All Risk (EAR)", "Contractor Plant & Machinery", "Third-Party Liability", "Advance Loss of Profit"],
    },
    {
        category: "energy",
        icon: "⚡",
        title: "Power & Energy Projects",
        description: "Specialized insurance solutions for power plants, renewable energy installations, and energy infrastructure — handling complex risk profiles unique to the sector.",
        coverages: ["Power Plant Insurance", "Business Interruption", "Machinery Breakdown", "Environmental Liability", "Equipment Electronic"],
    },
    {
        category: "corporate",
        icon: "🏢",
        title: "Corporate & SME Solutions",
        description: "Tailored risk management for corporate offices, commercial establishments, and medium-scale enterprises — balancing cost efficiency with maximum protection.",
        coverages: ["Fire & Burglary", "Fidelity Guarantee", "Directors & Officers", "Professional Indemnity", "Cyber Liability"],
    },
    {
        category: "corporate",
        icon: "🏥",
        title: "Healthcare & Hospitals",
        description: "Specialized coverage for hospitals, clinics, and healthcare institutions — including professional liability, equipment insurance, and employee health benefits.",
        coverages: ["Professional Liability", "Medical Equipment", "Fire & Allied Perils", "Employee Health Benefits", "Cyber Security"],
    },
    {
        category: "corporate",
        icon: "🏨",
        title: "Hospitality & Hotels",
        description: "Comprehensive protection for the hotel and hospitality industry — covering property, liability, employee benefits, and guest-related risks.",
        coverages: ["Property All Risk", "Public Liability", "Money Insurance", "Stock Deterioration", "Business Interruption"],
    },
];

const processSteps = [
    {
        step: "01",
        title: "Risk Discovery",
        description: "We conduct thorough on-site assessments and detailed interviews to map every risk exposure your business faces — visible and hidden.",
    },
    {
        step: "02",
        title: "Gap Analysis",
        description: "Our experts analyze your existing coverage against identified risks, revealing gaps that leave your business vulnerable.",
    },
    {
        step: "03",
        title: "Solution Design",
        description: "We design a customized insurance portfolio, negotiating with 21+ insurers to secure the most cost-effective, comprehensive coverage.",
    },
    {
        step: "04",
        title: "Implementation & Support",
        description: "From policy placement to claims management and renewals — we provide continuous, hands-on support throughout the policy lifecycle.",
    },
];

export default function SolutionsPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSolutions = activeCategory === "all"
        ? industrySolutions
        : industrySolutions.filter(s => s.category === activeCategory);

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-white">
                <ScrollProgress />
                <NavBar />

                <PageHero
                    title="Industry Solutions"
                    subtitle="Tailored insurance and risk management solutions designed for India's most demanding industries — from manufacturing to infrastructure, healthcare to hospitality."
                    breadcrumb="Solutions"
                    backgroundImage="/images/service-business.png"
                />

                {/* How We Work Process */}
                <section className="py-16 md:py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="mb-12 md:mb-20"
                        >
                            <motion.div variants={fadeUpVariants} className="flex items-center gap-4 mb-4 md:mb-8">
                                <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">Our Process</span>
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.h2
                                    variants={textRevealVariants}
                                    className="text-primary text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95]"
                                >
                                    How We Protect
                                </motion.h2>
                            </div>
                            <div className="overflow-hidden">
                                <motion.h2
                                    variants={textRevealVariants}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95]"
                                >
                                    Your Business
                                </motion.h2>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {processSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUpVariants}
                                    className="relative bg-gray-50 rounded-[1.5rem] p-8 md:p-10 group hover:bg-primary transition-all duration-500 cursor-pointer overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 group-hover:bg-accent/10 rounded-full blur-[40px] transition-all duration-500" />
                                    <div className="relative z-10">
                                        <div className="text-5xl md:text-6xl font-bold text-gray-200/60 group-hover:text-white/10 tracking-tighter leading-none mb-6 transition-colors duration-500">
                                            {step.step}
                                        </div>
                                        <h3 className="text-primary group-hover:text-white text-xl font-bold tracking-tight mb-3 transition-colors duration-500">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-500">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Connector line on desktop */}
                                    {i < processSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gray-200 z-20" />
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Industry Solutions with Filter */}
                <section className="py-16 md:py-32 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="text-center mb-12 md:mb-20"
                        >
                            <motion.div variants={fadeUpVariants} className="flex items-center justify-center gap-4 mb-4 md:mb-8">
                                <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">Industry Expertise</span>
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.h2
                                    variants={textRevealVariants}
                                    className="text-primary text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter"
                                >
                                    Solutions by Industry
                                </motion.h2>
                            </div>
                        </motion.div>

                        {/* Filter Tabs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
                        >
                            {industryCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 z-10 ${activeCategory === cat.id ? 'text-white' : 'text-gray-500 hover:text-primary'
                                        }`}
                                >
                                    {activeCategory === cat.id && (
                                        <motion.span
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20 -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {cat.label}
                                </button>
                            ))}
                        </motion.div>

                        {/* Solutions Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <AnimatePresence mode="wait">
                                {filteredSolutions.map((solution, i) => (
                                    <motion.div
                                        key={solution.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                                        className="group bg-white hover:bg-primary rounded-[1.5rem] p-8 md:p-10 transition-all duration-500 cursor-pointer border border-gray-100 hover:border-transparent overflow-hidden relative"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 group-hover:bg-accent/10 rounded-full blur-[50px] transition-all duration-500" />
                                        <div className="relative z-10">
                                            <div className="text-4xl mb-6">{solution.icon}</div>
                                            <h3 className="text-primary group-hover:text-white text-xl font-bold tracking-tight mb-3 transition-colors duration-500">
                                                {solution.title}
                                            </h3>
                                            <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed mb-6 transition-colors duration-500">
                                                {solution.description}
                                            </p>

                                            <div className="space-y-2">
                                                {solution.coverages.map((coverage, ci) => (
                                                    <div
                                                        key={ci}
                                                        className="flex items-center gap-2 text-xs font-medium text-gray-400 group-hover:text-white/50 transition-colors duration-500"
                                                    >
                                                        <div className="w-1 h-1 rounded-full bg-accent" />
                                                        {coverage}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-8 flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                                View Solutions
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* Why Choose Our Solutions */}
                <section className="py-16 md:py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="bg-gradient-to-br from-primary via-primary to-primary/95 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-accent/10 rounded-full blur-[100px]" />
                            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-accent/5 rounded-full blur-[80px]" />

                            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <motion.div variants={fadeUpVariants} className="flex items-center gap-4 mb-6">
                                        <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">The Le Dieu Advantage</span>
                                    </motion.div>
                                    <motion.h2 variants={fadeUpVariants} className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-6">
                                        Why India&apos;s Top Businesses Trust Us
                                    </motion.h2>
                                    <motion.p variants={fadeUpVariants} className="text-white/70 text-lg leading-relaxed mb-8">
                                        Post-liberalization, India&apos;s general insurance market moved to free pricing (detariffing), allowing insurers to price policies based on risk quality. As your broker, we leverage this to negotiate optimal coverage at the most competitive premiums from 21+ insurers.
                                    </motion.p>
                                </div>

                                <motion.div variants={fadeUpVariants} className="space-y-4">
                                    {[
                                        { stat: "21+", label: "Insurance Partners", desc: "Access to all major general insurance companies" },
                                        { stat: "PAN", label: "India Coverage", desc: "Nationwide service delivery and support" },
                                        { stat: "24/7", label: "Claims Support", desc: "Round-the-clock dedicated claims assistance" },
                                        { stat: "100%", label: "Client Retention", desc: "Industry-leading client satisfaction rate" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                                            <div className="text-2xl md:text-3xl font-bold text-accent tracking-tighter min-w-[80px]">{item.stat}</div>
                                            <div>
                                                <div className="text-white font-bold text-sm">{item.label}</div>
                                                <div className="text-white/50 text-xs">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-16 md:py-20 bg-gray-50">
                    <div className="container mx-auto px-6 md:px-12 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeUpVariants} className="text-primary text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                                Need a Custom Industry Solution?
                            </motion.h2>
                            <motion.p variants={fadeUpVariants} className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
                                Our risk engineers will design a tailored insurance package for your specific industry requirements.
                            </motion.p>
                            <motion.div variants={fadeUpVariants}>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-accent hover:text-primary transition-all duration-300 shadow-lg shadow-primary/10 active:scale-95"
                                >
                                    Get a Custom Quote
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 8h14M9 2l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </SmoothScroll>
    );
}
