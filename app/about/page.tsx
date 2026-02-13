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
        <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-1 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:border-accent/40 ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${color}, transparent 80%)`,
                }}
            />
            <div className="relative z-10 h-full">{children}</div>
        </motion.div>
    );
}

const IntegrityIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v4" /><path d="M12 16h.01" />
    </svg>
);

const VelocityIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
);

const MasteryIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

const ForesightIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
        <line x1="12" y1="7" x2="12" y2="8" /><line x1="12" y1="16" x2="12" y2="17" />
        <line x1="16" y1="12" x2="17" y2="12" /><line x1="7" y1="12" x2="8" y2="12" />
    </svg>
);

import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import CTA from '@/components/CTA/CTA';
import PageHero from '@/components/PageHero';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';
import FAQ from '@/components/FAQ/FAQ';
import PageTransition from '@/components/PageTransition';
import AnimatedCounter from '@/components/AnimatedCounter';
import TextReveal from '@/components/TextReveal';

const textRevealVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const values = [
    {
        icon: <IntegrityIcon />,
        title: "Unwavering Integrity",
        description: "We operate with radical transparency. Your best interest is our only interest — commission never dictates our counsel.",
        color: "rgba(56, 74, 141, 0.15)",
        gridClass: "lg:col-span-2"
    },
    {
        icon: <MasteryIcon />,
        title: "Sector Mastery",
        description: "Deep, specialized knowledge across manufacturing, infrastructure, and corporate risk landscapes. We transform complex liability into simple certainty.",
        color: "rgba(0, 0, 0, 0.08)",
        gridClass: "lg:col-span-2"
    },
    {
        icon: <VelocityIcon />,
        title: "Claims Velocity",
        description: "A dedicated claims division that fights for your settlement. We measure success by the speed and fairness of every recovery.",
        color: "rgba(56, 74, 141, 0.1)",
        gridClass: "lg:col-span-2"
    },
    {
        icon: <ForesightIcon />,
        title: "Strategic Foresight",
        description: "Proprietary risk modeling that anticipates market shifts and regulatory changes before they impact your operations or bottom line.",
        color: "rgba(0, 0, 0, 0.05)",
        gridClass: "lg:col-span-2"
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

    const philosophyRef = useRef(null);
    const { scrollYProgress: philosophyScroll } = useScroll({
        target: philosophyRef,
        offset: ["start end", "end start"]
    });
    const philosophyY = useTransform(philosophyScroll, [0, 1], ["-15%", "15%"]);

    return (
        <SmoothScroll>
            <PageTransition>
            <div ref={containerRef} className="min-h-screen bg-white text-primary selection:bg-primary selection:text-white">
                <ScrollProgress />
                <NavBar />

                <PageHero
                    title="About Le Dieu"
                    subtitle="Architecting resilience for India's most ambitious enterprises since 2003."
                    breadcrumb="About Us"
                    backgroundImage="/images/about-team.png"
                />

                {/* Strategic Vision Section */}
                <section className="relative py-24 md:py-32 bg-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

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
                                    <span className="text-sm font-extrabold tracking-[0.3em] text-accent uppercase">Our Identity</span>
                                </motion.div>

                                <div className="space-y-2 mb-10">
                                    <div className="overflow-hidden">
                                        <motion.h2 variants={textRevealVariants} className="text-4xl sm:text-5xl md:text-[64px] font-heading font-extrabold tracking-tight leading-[1.15] text-primary">
                                            Beyond
                                        </motion.h2>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.h2 variants={textRevealVariants} className="text-4xl sm:text-5xl md:text-[64px] font-heading font-extrabold tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent">
                                            Insurance.
                                        </motion.h2>
                                    </div>
                                </div>

                                <motion.p variants={fadeUpVariants} className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mb-8 font-medium border-l-2 border-primary/20 pl-6">
                                    <strong className="text-primary font-extrabold">Le Dieu Insurance Brokers</strong> is not just an intermediary; we are your strategic risk partners. Licensed by IRDA since 2003, we bridge the gap between complex enterprise risks and optimal financial protection.
                                </motion.p>

                                <motion.div variants={fadeUpVariants}>
                                    <a href="/contact" className="inline-flex items-center gap-4 group cursor-pointer">
                                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                            <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </div>
                                        <span className="text-sm font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">Start the dialogue</span>
                                    </a>
                                </motion.div>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                                className="grid gap-6"
                            >
                                <motion.div variants={fadeUpVariants} className="p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent/30 transition-colors duration-500">
                                    <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Market Leadership</h3>
                                    <p className="text-primary text-base md:text-lg leading-relaxed font-medium">
                                        Serving prestigious industrial houses, power projects, and infrastructure giants with a philosophy of <span className="text-accent font-semibold">zero compromise</span> on coverage quality.
                                    </p>
                                </motion.div>
                                <motion.div variants={fadeUpVariants} className="grid grid-cols-2 gap-4 md:gap-6">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="p-5 md:p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md hover:border-accent/20 transition-all duration-500 text-center sm:text-left">
                                            <AnimatedCounter value={stat.number} className="text-3xl md:text-4xl font-bold text-primary mb-1 tracking-tighter block" />
                                            <div className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.2em]">{stat.label}</div>
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section ref={philosophyRef} className="py-24 md:py-32 relative overflow-hidden bg-[#FAFBFB] border-t border-gray-100">
                    {/* Parallax Background */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <motion.div style={{ y: philosophyY }} className="absolute inset-x-0 -top-[20%] -bottom-[20%]">
                            <img
                                src="/images/indian-family-sitting-on-sofa-looking-at-camera-2026-01-07-00-48-21-utc.jpeg"
                                alt="Indian family at home"
                                className="w-full h-full object-cover opacity-[0.08]"
                            />
                        </motion.div>
                    </div>

                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        {/* Section Header */}
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8">
                            <div className="max-w-2xl">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 mb-6"
                                >
                                    <span className="text-sm font-extrabold tracking-[0.3em] text-accent uppercase">Our Philosophy</span>
                                </motion.div>
                                <div className="overflow-hidden">
                                    <motion.h2
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-4xl sm:text-5xl md:text-[64px] font-heading font-extrabold text-primary tracking-tight leading-[1.15]"
                                    >
                                        Principles That<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent">Define Excellence</span>
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
                                A foundation of trust built over two decades of unwavering service and strategic foresight.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {values.map((val, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className={`${val.gridClass || "lg:col-span-1"} flex`}
                                >
                                    <SpotlightCard color={val.color} className="h-full group/card">
                                        <div className="p-6 md:p-8 h-full flex flex-col justify-between min-h-[220px]">
                                            <div>
                                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-primary mb-5 group-hover/card:bg-accent group-hover/card:text-white transition-all duration-700 border border-gray-100">
                                                    <div className="scale-75 md:scale-90">{val.icon}</div>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3 tracking-tight">
                                                    {val.title}
                                                </h3>
                                                <p className="text-gray-500 leading-relaxed font-medium text-sm">
                                                    {val.description}
                                                </p>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <FAQ />
                <CTA />
                <Footer />
            </div>
            </PageTransition>
        </SmoothScroll>
    );
}
