'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';

function SpotlightCard({ children, className = "", color = "rgba(255, 255, 255, 0.1)" }: { children: React.ReactNode; className?: string; color?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-1 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            400px circle at ${mouseX}px ${mouseY}px,
                            ${color},
                            transparent 80%
                        )
                    `,
                }}
            />
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
}

// Premium Premium Icons
const IntegrityIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
    </svg>
);

const TailoringIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
        <polyline points="7.5 19.79 7.5 14.6 3 12" />
        <polyline points="21 12 16.5 14.6 16.5 19.79" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
);

const VelocityIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
);

const MasteryIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import PageHero from '@/components/PageHero';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';
import FAQ from '@/components/FAQ/FAQ';

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
    {
        icon: <IntegrityIcon />,
        title: "Unwavering Integrity",
        description: "We operate with radical transparency. Your best interest is our only interest—commission never dictates our counsel.",
        color: "rgba(34, 197, 94, 0.15)",
        gridClass: "lg:col-span-1"
    },
    {
        icon: <TailoringIcon />,
        title: "Precision Tailoring",
        description: "We reject off-the-shelf policies. Every solution is architected around your unique risk profile and business DNA.",
        color: "rgba(0, 0, 0, 0.05)",
        gridClass: "lg:col-span-1"
    },
    {
        icon: <VelocityIcon />,
        title: "Claims Velocity",
        description: "A dedicated claims division that fights for your settlement. We measure success by the speed and fairness of your recovery.",
        color: "rgba(34, 197, 94, 0.1)",
        gridClass: "lg:col-span-1"
    },
    {
        icon: <MasteryIcon />,
        title: "Sector Mastery",
        description: "Deep, specialized knowledge across manufacturing, infrastructure, and corporate risk landscapes. We transform complex liability into clear structural security.",
        color: "rgba(0, 0, 0, 0.08)",
        gridClass: "lg:col-span-2 lg:row-span-1"
    },
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
            <div ref={containerRef} className="min-h-screen bg-white text-primary selection:bg-primary selection:text-white">
                <ScrollProgress />
                <NavBar />

                <PageHero
                    title="About Le Dieu"
                    subtitle="Architecting resilience for India's most ambitious enterprises since 2003."
                    breadcrumb="About Us"
                    backgroundImage="/images/about-team.png"
                />

                {/* Strategic Vision Section - White Layout */}
                <section className="relative py-24 md:py-40 bg-white overflow-hidden">
                    {/* Ambient Background Elements */}
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-gray-100 rounded-full blur-[100px] pointer-events-none" />

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
                                    <div className="h-px w-8 bg-black"></div>
                                    <span className="text-xs font-bold tracking-[0.3em] text-black uppercase">Our Identity</span>
                                </motion.div>

                                <div className="space-y-4 mb-10">
                                    <div className="overflow-hidden">
                                        <motion.h2 variants={textRevealVariants} className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-primary">
                                            Beyond
                                        </motion.h2>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.h2 variants={textRevealVariants} className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                                            Insurance.
                                        </motion.h2>
                                    </div>
                                </div>

                                <motion.p variants={fadeUpVariants} className="text-xl text-gray-500 leading-relaxed max-w-lg mb-8 font-light border-l border-gray-200 pl-6">
                                    Le Dieu Insurance Brokers is not just an intermediary; we are your strategic risk partners. Licensed by IRDA since 2003, we bridge the gap between complex enterprise risks and optimal financial protection.
                                </motion.p>

                                <motion.div variants={fadeUpVariants}>
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center gap-4 group cursor-pointer"
                                    >
                                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                            <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </div>
                                        <span className="text-sm font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">Start the dialogue</span>
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
                                <motion.div variants={fadeUpVariants} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-accent/30 transition-colors duration-500 shadow-sm hover:shadow-md">
                                    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Market Leadership</h3>
                                    <p className="text-primary text-lg leading-relaxed">
                                        Serving prestigious industrial houses, power projects, and infrastructure giants with a philosophy of <span className="text-accent font-medium">zero compromise</span> on coverage quality.
                                    </p>
                                </motion.div>
                                <motion.div variants={fadeUpVariants} className="grid grid-cols-2 gap-6">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-500">
                                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                                            <div className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">{stat.label}</div>
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Bento Grid Values Section - Premium Architecture */}
                <section className="py-24 md:py-48 relative overflow-hidden bg-white">
                    {/* Artistic Background Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.03)_0%,transparent_70%)]" />
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-[0.03]" />
                    </div>

                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mb-24 text-center max-w-4xl mx-auto"
                        >
                            <motion.div variants={fadeUpVariants} className="flex items-center justify-center gap-4 mb-6">
                                <span className="h-px w-8 bg-accent/30" />
                                <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em]">Our Philosophy</span>
                                <span className="h-px w-8 bg-accent/30" />
                            </motion.div>
                            <motion.h2 variants={fadeUpVariants} className="text-5xl md:text-8xl font-bold tracking-[ -0.05em] mb-8 text-primary leading-[0.9]">
                                Principles That <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent">Define Excellence</span>
                            </motion.h2>
                            <motion.p variants={fadeUpVariants} className="text-gray-400 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                                A foundation of trust built over two decades of unwavering service and strategic foresight.
                            </motion.p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
                            {values.map((val, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className={val.gridClass || "lg:col-span-1"}
                                >
                                    <SpotlightCard
                                        color={val.color}
                                        className="h-full group/card"
                                    >
                                        <div className="p-10 h-full flex flex-col justify-between">
                                            <div>
                                                <div className="w-16 h-16 rounded-[1.25rem] bg-gray-50 flex items-center justify-center text-primary mb-8 group-hover/card:scale-110 group-hover/card:bg-primary group-hover/card:text-accent transition-all duration-700 ease-out shadow-sm border border-gray-100">
                                                    {val.icon}
                                                </div>
                                                <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight group-hover/card:translate-x-2 transition-transform duration-500">
                                                    {val.title}
                                                </h3>
                                                <p className="text-gray-400 leading-relaxed font-medium text-sm group-hover/card:text-gray-600 transition-colors">
                                                    {val.description}
                                                </p>
                                            </div>

                                            {/* Decorative element for larger cards */}
                                            {val.gridClass?.includes('lg:col-span-2') && (
                                                <div className="flex gap-4 mt-8 pt-8 border-t border-gray-100 items-baseline">
                                                    <div className="text-4xl font-bold text-accent tracking-tighter">01</div>
                                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Industry Ranking</div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Subtle corner accent */}
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000" />
                                    </SpotlightCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cinematic Timeline */}
                <section className="py-24 md:py-40 bg-white relative overflow-hidden border-t border-gray-100">
                    <div className="container mx-auto px-6 md:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mb-24 md:mb-32"
                        >
                            <motion.h2 variants={textRevealVariants} className="text-4xl md:text-8xl font-bold tracking-tighter text-gray-100">TIMELINE</motion.h2>
                            <motion.div variants={fadeUpVariants} className="flex items-center gap-4 mt-[-2rem] md:mt-[-4rem] ml-2">
                                <div className="h-px w-12 bg-primary"></div>
                                <span className="text-primary font-bold tracking-[0.3em] uppercase">Milestones</span>
                            </motion.div>
                        </motion.div>

                        <div className="relative max-w-4xl mx-auto">
                            {/* Central Line */}
                            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent transform md:-translate-x-1/2" />

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
                                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white border border-primary flex items-center justify-center shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pl-4 md:pl-0">
                                        <div className="group relative p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl">
                                            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{milestone.year}</div>
                                            <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary transition-colors">{milestone.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{milestone.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <FAQ />
                <Footer />
            </div>
        </SmoothScroll>
    );
}
