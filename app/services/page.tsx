'use client';

import React from 'react';
import { motion } from 'framer-motion';
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

const coreServices = [
    {
        number: "01",
        title: "Risk Management",
        subtitle: "Systematic Risk Identification & Evaluation",
        description: "Risk management is a systematic process for the comprehensive identification and evaluation of loss exposures faced by an organization or individual. We select and administer the most appropriate techniques for treating such exposures — from avoidance and retention to loss prevention and transfer through insurance.",
        features: ["Risk Avoidance Strategies", "Loss Prevention Programs", "Loss Reduction Analysis", "Contractual Risk Transfer", "Insurance Risk Transfer", "Retention Planning"],
        accent: "from-accent to-green-600",
    },
    {
        number: "02",
        title: "Policy Placement",
        subtitle: "Value-Based Coverage Across 21+ Insurers",
        description: "Policy Placement is a rigorous, multi-step process involving risk profiling, comprehensive policy analysis, portfolio rationalization, requests for quotations from 21+ insurance companies, negotiation for value-based coverage, evaluation and recommendation of quotes, final policy placement, and thorough policy scrutiny.",
        features: ["GAP Analysis Process", "Risk Profiling", "Policy Analysis", "Portfolio Rationalization", "RFQ & Negotiation", "Quotation Evaluation", "Policy Scrutiny"],
        accent: "from-blue-500 to-cyan-500",
    },
    {
        number: "03",
        title: "Portfolio Management",
        subtitle: "End-to-End Policy Administration",
        description: "Portfolio Management begins as soon as your policy is scrutinized and approved. We assist you in claim settlements, administer all endorsements and amendments, track renewals, and undertake the renewal process with equal rigor as the initial placement — ensuring continuous, uninterrupted coverage protection.",
        features: ["Policy Administration", "Insurance Information Programs", "Claim Management", "Endorsement Tracking", "Renewal Management", "Coverage Optimization"],
        accent: "from-purple-500 to-violet-500",
    },
];

const specializedServices = [
    { icon: "⚡", title: "Energy Audit", description: "Comprehensive energy assessment of industrial operations to identify efficiency opportunities, reduce costs, and optimize your insurability profile." },
    { icon: "🛡️", title: "Safety Review", description: "Detailed safety assessment of workplace environments, processes, and equipment to minimize risk exposure and improve compliance with industry standards." },
    { icon: "🌿", title: "Environmental Audit", description: "Thorough environmental compliance review ensuring your operations meet regulatory requirements and minimize ecological liability risks." },
    { icon: "⚙️", title: "Process Audit", description: "In-depth analysis of operational processes to identify vulnerabilities, streamline workflows, and reduce the likelihood of insurable incidents." },
    { icon: "📋", title: "Claim Consultancy", description: "Expert guidance through the claims process, ensuring maximum claim recovery with minimal delays. Our dedicated team handles documentation and negotiations on your behalf." },
];

const insuranceTypes = [
    "Fire & Earthquake", "Machinery Breakdown", "Loss of Profit", "Burglary & Money",
    "Fidelity Guarantee", "Marine & Transit", "Health & PA", "Workmen Compensation",
    "Motor Vehicle", "Credit Insurance", "Professional Liability", "Directors & Officers",
    "Kidnap & Ransom", "CAR & EAR", "Stock Deterioration", "Electronic Equipment",
    "Contractor Plant", "Travel Insurance", "Cyber Liability", "Product Liability",
];

export default function ServicesPage() {
    return (
        <SmoothScroll>
            <div className="min-h-screen bg-white">
                <ScrollProgress />
                <NavBar />

                <PageHero
                    title="Our Services"
                    subtitle="Comprehensive insurance broking, risk management, and claims excellence — tailored for India's leading industries and enterprises."
                    breadcrumb="Services"
                    backgroundImage="/images/service-risk-new.jpg"
                />

                {/* Core Services */}
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
                                <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">Core Services</span>
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.h2
                                    variants={textRevealVariants}
                                    className="text-primary text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95]"
                                >
                                    End-to-End Insurance
                                </motion.h2>
                            </div>
                            <div className="overflow-hidden">
                                <motion.h2
                                    variants={textRevealVariants}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95]"
                                >
                                    Broking Solutions
                                </motion.h2>
                            </div>
                        </motion.div>

                        {/* Detailed Service Cards */}
                        <div className="space-y-8 md:space-y-12">
                            {coreServices.map((service, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                                    className="group relative bg-gray-50 hover:bg-primary rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 lg:p-16 transition-all duration-700 overflow-hidden cursor-pointer"
                                >
                                    <div className={`absolute top-0 right-0 w-[40%] h-[50%] bg-gradient-to-br ${service.accent} opacity-5 group-hover:opacity-10 rounded-full blur-[80px] transition-opacity duration-700`} />

                                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                                        <div>
                                            <div className="text-8xl md:text-9xl font-bold text-gray-200/50 group-hover:text-white/10 tracking-tighter leading-none mb-6 transition-colors duration-700">
                                                {service.number}
                                            </div>
                                            <h3 className="text-primary group-hover:text-white text-3xl md:text-4xl font-bold tracking-tighter mb-3 transition-colors duration-700">
                                                {service.title}
                                            </h3>
                                            <p className="text-accent text-sm font-bold uppercase tracking-wider mb-6">
                                                {service.subtitle}
                                            </p>
                                            <p className="text-gray-500 group-hover:text-white/70 leading-relaxed transition-colors duration-700">
                                                {service.description}
                                            </p>
                                        </div>

                                        <div>
                                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-white/40 mb-6 transition-colors duration-700">
                                                Key Capabilities
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {service.features.map((feature, fi) => (
                                                    <div
                                                        key={fi}
                                                        className="flex items-center gap-3 bg-white group-hover:bg-white/10 rounded-xl px-4 py-3 transition-all duration-500"
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                                        <span className="text-primary group-hover:text-white text-sm font-medium transition-colors duration-500">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Specialized Services */}
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
                                <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">Specialized Services</span>
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.h2
                                    variants={textRevealVariants}
                                    className="text-primary text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter"
                                >
                                    Engineering & Audit Excellence
                                </motion.h2>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {specializedServices.map((service, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUpVariants}
                                    className={`group relative bg-white hover:bg-primary rounded-[1.5rem] p-8 md:p-10 transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:border-transparent ${i >= 3 ? 'lg:col-span-1' : ''}`}
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 group-hover:bg-accent/10 rounded-full blur-[40px] transition-all duration-500" />
                                    <div className="relative z-10">
                                        <div className="text-4xl mb-6">{service.icon}</div>
                                        <h3 className="text-primary group-hover:text-white text-xl font-bold tracking-tight mb-3 transition-colors duration-500">{service.title}</h3>
                                        <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-500">{service.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Insurance Coverage Types */}
                <section className="py-16 md:py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="text-center mb-12 md:mb-20"
                        >
                            <motion.div variants={fadeUpVariants} className="flex items-center justify-center gap-4 mb-4 md:mb-8">
                                <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">Coverage Types</span>
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.h2
                                    variants={textRevealVariants}
                                    className="text-primary text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter"
                                >
                                    Comprehensive Insurance Portfolio
                                </motion.h2>
                            </div>
                            <motion.p variants={fadeUpVariants} className="text-gray-500 text-lg max-w-2xl mx-auto mt-6">
                                From fire and marine to cyber liability and directors&apos; insurance — we cover every risk your business faces.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{ visible: { transition: { staggerChildren: 0.03 } } }}
                            className="flex flex-wrap justify-center gap-3 md:gap-4"
                        >
                            {insuranceTypes.map((type, i) => (
                                <motion.div
                                    key={i}
                                    variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
                                    className="bg-gray-50 hover:bg-primary hover:text-white text-primary border border-gray-100 hover:border-transparent rounded-full px-5 py-3 text-sm font-medium tracking-tight transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/10"
                                >
                                    {type}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="bg-gradient-to-br from-primary via-primary to-primary/95 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-accent/10 rounded-full blur-[100px]" />

                            <div className="relative z-10">
                                <motion.div variants={fadeUpVariants} className="flex items-center justify-center gap-4 mb-6">
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">Get Protected Today</span>
                                </motion.div>
                                <motion.h2 variants={fadeUpVariants} className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-6 max-w-3xl mx-auto">
                                    Ready to Optimize Your Insurance Portfolio?
                                </motion.h2>
                                <motion.p variants={fadeUpVariants} className="text-white/60 text-lg max-w-xl mx-auto mb-10">
                                    Let our expert team conduct a comprehensive risk assessment and recommend the optimal coverage for your business.
                                </motion.p>
                                <motion.div variants={fadeUpVariants} className="flex flex-wrap justify-center gap-4">
                                    <a
                                        href="/contact"
                                        className="bg-accent text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 active:scale-95"
                                    >
                                        Request a Consultation
                                    </a>
                                    <a
                                        href="tel:+919899062737"
                                        className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white/20 transition-all duration-300"
                                    >
                                        Call +91 98990 62737
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </SmoothScroll>
    );
}
