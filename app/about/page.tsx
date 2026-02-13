'use client';

import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import FAQ from '@/components/FAQ/FAQ';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

// Standard SVGs for "Billion Dollar" Enterprise Look
const Icons = {
    Integrity: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
    Tailoring: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
    ),
    Velocity: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
    ),
    Mastery: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
    ),
    Eye: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
    ),
    Zap: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
    )
};

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative border border-white/5 bg-neutral-900/40 backdrop-blur-sm overflow-hidden rounded-[2.5rem] transition-all duration-700 hover:border-white/10 hover:bg-neutral-900/60 ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            500px circle at ${mouseX}px ${mouseY}px,
                            rgba(255, 255, 255, 0.05),
                            transparent 80%
                        )
                    `,
                }}
            />
            {children}
        </div>
    );
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
};

const stagger = {
    visible: {
        transition: { staggerChildren: 0.1 }
    }
};

export default function AboutPage() {
    return (
        <SmoothScroll>
            <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-neutral-900 selection:text-white">
                <ScrollProgress />
                <NavBar />

                <main>
                    {/* --- Hero Section --- */}
                    <section className="relative h-screen flex items-center overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                                alt="Modern Corporate Office"
                                className="w-full h-full object-cover grayscale brightness-[0.3]"
                            />
                            <div className="absolute inset-0 bg-neutral-950/40" />
                        </div>

                        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20 text-center">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={stagger}
                                className="max-w-5xl mx-auto"
                            >
                                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-10 mx-auto">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">Perspective</span>
                                    <span className="text-white/30 text-[10px] tracking-[0.2em]">/</span>
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Institutional Shield</span>
                                </motion.div>

                                <motion.h1
                                    variants={fadeUp}
                                    className="text-7xl md:text-[120px] font-bold tracking-tighter text-white leading-[0.8] mb-12 uppercase"
                                >
                                    Architecting <br />
                                    <span className="text-white/30">Stable Futures</span>
                                </motion.h1>

                                <motion.p
                                    variants={fadeUp}
                                    className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-3xl mx-auto font-light"
                                >
                                    Protecting India's most ambitious industrial and corporate houses with radical transparency and uncompromising precision.
                                </motion.p>
                            </motion.div>
                        </div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 1 }}
                            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                        >
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">Scroll to Explore</span>
                            <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
                        </motion.div>
                    </section>

                    {/* --- Story Section --- */}
                    <section className="py-24 md:py-48 bg-white border-b border-neutral-100">
                        <div className="container mx-auto px-6 md:px-12">
                            <div className="grid lg:grid-cols-2 gap-24 items-center">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={stagger}
                                >
                                    <motion.span variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-8 block">
                                        The Genesis
                                    </motion.span>
                                    <motion.h2 variants={fadeUp} className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-12 text-neutral-900 uppercase">
                                        It started <br />with a question
                                    </motion.h2>

                                    <div className="space-y-8 text-xl text-neutral-600 leading-relaxed font-light max-w-xl">
                                        <motion.p variants={fadeUp}>
                                            Why don't we have a world-class, natural-risk consultancy right here at home? A place where the game of risk could be played the way it was meant to be played.
                                        </motion.p>

                                        <motion.div variants={fadeUp} className="py-8 border-y border-neutral-100">
                                            <p className="text-3xl font-bold text-neutral-900 tracking-tight leading-tight uppercase">
                                                "So we chose <br />to build it."
                                            </p>
                                        </motion.div>

                                        <motion.p variants={fadeUp} className="text-lg">
                                            This is a project created by people who refuse to settle for less than what this nation deserves. With local belief and a global vision, we are protecting the heart of industrial India.
                                        </motion.p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
                                    className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] group"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1620067954955-e40733ff7be4?q=80&w=2671&auto=format&fit=crop"
                                        alt="Industrial India"
                                        className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-neutral-900/5" />
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* --- Principles Section (Masterpiece Design) --- */}
                    <section className="py-24 md:py-48 bg-[#050505] relative overflow-hidden">
                        {/* Ambient Deep Glows */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

                        <div className="container mx-auto px-6 md:px-12 relative z-10">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={stagger}
                                className="text-center mb-32"
                            >
                                <motion.h2
                                    variants={fadeUp}
                                    className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8"
                                >
                                    The Principles <br />
                                    <span className="text-white/20 italic font-medium">That Drive Us</span>
                                </motion.h2>
                                <motion.p
                                    variants={fadeUp}
                                    className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed"
                                >
                                    Foundation of trust built over two decades of unwavering service and institutional grade excellence.
                                </motion.p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    {
                                        icon: <Icons.Integrity />,
                                        title: "Unwavering Integrity",
                                        desc: "We operate with radical transparency. Your best interest is our only interest—commission never dictates our counsel."
                                    },
                                    {
                                        icon: <Icons.Tailoring />,
                                        title: "Precision Tailoring",
                                        desc: "We reject off-the-shelf policies. Every solution is architected around your unique risk profile and business DNA."
                                    },
                                    {
                                        icon: <Icons.Velocity />,
                                        title: "Claims Velocity",
                                        desc: "A dedicated claims division that fights for your settlement. We measure success by the speed and fairness of your recovery."
                                    },
                                    {
                                        icon: <Icons.Mastery />,
                                        title: "Sector Mastery",
                                        desc: "Deep, specialized knowledge across manufacturing, infrastructure, and corporate risk landscapes across the India."
                                    }
                                ].map((principle, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                                    >
                                        <SpotlightCard className="h-full p-10 flex flex-col items-start gap-12 group hover:translate-y-[-5px]">
                                            <div className="w-14 h-14 rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                                                {principle.icon}
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold tracking-tight text-white transition-transform duration-500">
                                                    {principle.title}
                                                </h3>
                                                <p className="text-white/30 leading-relaxed text-[15px] font-light group-hover:text-white/50 transition-colors duration-500">
                                                    {principle.desc}
                                                </p>
                                            </div>
                                        </SpotlightCard>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* --- Purpose & Direction --- */}
                    <section className="py-24 md:py-48 bg-[#fbfbf9]">
                        <div className="container mx-auto px-6 md:px-12">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={stagger}
                                className="text-center mb-32"
                            >
                                <motion.span variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-8 block font-mono">
                                    Strategic Focus
                                </motion.span>
                                <motion.h2 variants={fadeUp} className="text-6xl md:text-8xl font-bold tracking-tighter uppercase text-neutral-900 mb-12">
                                    Purpose & <span className="text-neutral-300">Direction</span>
                                </motion.h2>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                                {/* Mission Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                                    className="bg-white p-16 md:p-20 rounded-[3rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.05)] border border-neutral-100 flex flex-col items-start gap-12 group hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.1)] transition-all duration-700 hover:translate-y-[-10px]"
                                >
                                    <div className="w-20 h-20 rounded-3xl bg-neutral-900 flex items-center justify-center text-white transition-all duration-500 group-hover:rotate-6">
                                        <Icons.Zap />
                                    </div>
                                    <div className="space-y-6">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 block">Our Mission</span>
                                        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-900 uppercase">Why We Exist</h3>
                                        <p className="text-neutral-500 leading-relaxed text-lg font-light">
                                            To deliver international-standard risk audits and high-performance policy placement—empowering India's core enterprises to reach their fullest potential without financial exposure.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Vision Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                                    className="bg-white p-16 md:p-20 rounded-[3rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.05)] border border-neutral-100 flex flex-col items-start gap-12 group hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.1)] transition-all duration-700 hover:translate-y-[-10px]"
                                >
                                    <div className="w-20 h-20 rounded-3xl bg-neutral-100 flex items-center justify-center text-neutral-900 transition-all duration-500 group-hover:-rotate-6">
                                        <Icons.Eye />
                                    </div>
                                    <div className="space-y-6">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 block">Our Vision</span>
                                        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-900 uppercase">Where We're Going</h3>
                                        <p className="text-neutral-500 leading-relaxed text-lg font-light">
                                            To be India's undisputed center of excellence for risk management, architecting premium, multi-sector insurance strategies for a globalised economy.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* --- FAQ Section --- */}
                    <div id="faq">
                        <FAQ />
                    </div>
                </main>

                <Footer />
            </div>
        </SmoothScroll>
    );
}
