'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

const milestones = [
    { year: "2003", title: "Inception & Licensing", description: "Le Dieu established as a Direct Insurance Broking Firm with full IRDA licensing, setting a new standard for transparency." },
    { year: "2008", title: "Corporate Expansion", description: "Rapid expansion into large industrial sectors, securing mandates for power projects and infrastructure developments." },
    { year: "2013", title: "Pan-India Presence", description: "Established strategic corporate offices in Bhopal and New Delhi, extending service delivery across all major Indian states." },
    { year: "2018", title: "Digital Evolution", description: "Integration of advanced risk analytics and digital policy management systems to offer real-time insights to clients." },
    { year: "2023", title: "20 Years of Trust", description: "Celebrating two decades of excellence, protecting over 10,000 families and businesses with claims settled exceeding ₹500 Cr." },
];

const values = [
    { icon: "🛡️", title: "Unwavering Integrity", description: "We operate with radical transparency. Your best interest is our only interest—commission never dictates our counsel." },
    { icon: "🎯", title: "Precision Tailoring", description: "We reject off-the-shelf policies. Every solution is architected around your unique risk profile and business DNA." },
    { icon: "⚡", title: "Claims Velocity", description: "A dedicated claims division that fights for your settlement. We measure success by the speed and fairness of your recovery." },
    { icon: "🏢", title: "Sector Mastery", description: "Deep, specialized knowledge across manufacturing, infrastructure, and corporate risk landscapes." },
];

const stats = [
    { number: "20+", label: "Years of Excellence" },
    { number: "10k+", label: "Clients Protected" },
    { number: "21+", label: "Insurer Partners" },
    { number: "₹500Cr+", label: "Claims Settled" },
];

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <SmoothScroll>
            <div ref={containerRef} className="min-h-screen bg-primary text-white selection:bg-accent selection:text-white">
                <ScrollProgress />
                <NavBar />

                <PageHero
                    title="About Le Dieu"
                    subtitle="Architecting resilience for India's most ambitious enterprises since 2003."
                    breadcrumb="About Us"
                    backgroundImage="/images/about-team.png"
                />

                {/* Strategic Vision Section - Dark Premium Layout */}
                <section className="relative py-24 md:py-40 bg-primary overflow-hidden">
                    {/* Ambient Background Elements */}
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent-green/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            {/* Typography */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                            >
                                <motion.div variants={fadeUpVariants} className="flex items-center gap-4 mb-8">
                                    <div className="h-px w-8 bg-accent"></div>
                                    <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase">Our Identity</span>
                                </motion.div>

                                <div className="space-y-4 mb-10">
                                    <div className="overflow-hidden">
                                        <motion.h2 variants={textRevealVariants} className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-white">
                                            Beyond
                                        </motion.h2>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.h2 variants={textRevealVariants} className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                                            Insurance.
                                        </motion.h2>
                                    </div>
                                </div>

                                <motion.p variants={fadeUpVariants} className="text-xl text-white/70 leading-relaxed max-w-lg mb-8 font-light border-l border-white/10 pl-6">
                                    Le Dieu Insurance Brokers is not just an intermediary; we are your strategic risk partners. Licensed by IRDA since 2003, we bridge the gap between complex enterprise risks and optimal financial protection.
                                </motion.p>

                                <motion.div variants={fadeUpVariants}>
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center gap-4 group cursor-pointer"
                                    >
                                        <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                            <svg className="w-4 h-4 text-accent group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </div>
                                        <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-accent transition-colors">Start the dialogue</span>
                                    </a>
                                </motion.div>
                            </motion.div>

                            {/* Statistical Excellence - Glass Cards */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                                className="grid gap-6"
                            >
                                <motion.div variants={fadeUpVariants} className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent/30 transition-colors duration-500">
                                    <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Market Leadership</h3>
                                    <p className="text-white text-lg leading-relaxed">
                                        Serving prestigious industrial houses, power projects, and infrastructure giants with a philosophy of <span className="text-accent">zero compromise</span> on coverage quality.
                                    </p>
                                </motion.div>
                                <motion.div variants={fadeUpVariants} className="grid grid-cols-2 gap-6">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-500">
                                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                                            <div className="text-white/40 text-[10px] uppercase font-bold tracking-wider">{stat.label}</div>
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Bento Grid Values Section */}
                <section className="py-24 md:py-32 bg-black/20 relative">
                    <div className="container mx-auto px-6 md:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mb-20 text-center max-w-3xl mx-auto"
                        >
                            <motion.h2 variants={fadeUpVariants} className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-white">The Principles That Drive Us</motion.h2>
                            <motion.p variants={fadeUpVariants} className="text-white/60 text-lg">Foundation of trust built over two decades of unwavering service.</motion.p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((val, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/5 hover:border-accent/40 transition-all duration-500 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
                                    <div className="relative z-10">
                                        <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">{val.icon}</div>
                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{val.title}</h3>
                                        <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">{val.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cinematic Timeline */}
                <section className="py-24 md:py-40 bg-primary relative overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mb-24 md:mb-32"
                        >
                            <motion.h2 variants={textRevealVariants} className="text-4xl md:text-8xl font-bold tracking-tighter text-white/10">TIMELINE</motion.h2>
                            <motion.div variants={fadeUpVariants} className="flex items-center gap-4 mt-[-2rem] md:mt-[-4rem] ml-2">
                                <div className="h-px w-12 bg-accent"></div>
                                <span className="text-accent font-bold tracking-[0.3em] uppercase">Milestones</span>
                            </motion.div>
                        </motion.div>

                        <div className="relative max-w-4xl mx-auto">
                            {/* Central Line */}
                            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform md:-translate-x-1/2" />

                            {milestones.map((milestone, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className={`relative flex items-center gap-10 md:gap-20 mb-20 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Spacer for desktop alignment */}
                                    <div className="hidden md:block flex-1" />

                                    {/* Node */}
                                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary border border-accent flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                                        <div className="w-2 h-2 rounded-full bg-accent" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pl-4 md:pl-0">
                                        <div className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-accent/30 transition-all duration-500">
                                            <div className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{milestone.year}</div>
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{milestone.title}</h3>
                                            <p className="text-white/60 text-sm leading-relaxed">{milestone.description}</p>
                                        </div>
                                    </div>
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
