'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Eye, Shield, Target, Zap, Balance, Users, Heart } from 'lucide-react';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import FAQ from '@/components/FAQ/FAQ';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
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
                    {/* --- Hero Section (Inspired by Image 1) --- */}
                    <section className="relative h-screen flex items-center overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                                alt="Modern Corporate Office"
                                className="w-full h-full object-cover grayscale brightness-[0.3]"
                            />
                            <div className="absolute inset-0 bg-neutral-950/40" />
                        </div>

                        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={stagger}
                                className="max-w-4xl"
                            >
                                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-10">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">Home</span>
                                    <span className="text-white/30 text-[10px] tracking-[0.2em]">/</span>
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">About Us</span>
                                </motion.div>

                                <motion.h1
                                    variants={fadeUp}
                                    className="text-6xl md:text-9xl font-bold tracking-tighter text-white leading-[0.85] mb-8 uppercase"
                                >
                                    Architecting <br />
                                    <span className="text-white/40">Resilience</span>
                                </motion.h1>

                                <motion.p
                                    variants={fadeUp}
                                    className="text-lg md:text-2xl text-white/60 leading-relaxed max-w-2xl font-light"
                                >
                                    Building the premier platform for enterprise risk management and insurance excellence in India.
                                </motion.p>
                            </motion.div>
                        </div>
                    </section>

                    {/* --- Story Section (Inspired by Image 2) --- */}
                    <section className="py-24 md:py-40 bg-white">
                        <div className="container mx-auto px-6 md:px-12">
                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={stagger}
                                >
                                    <motion.span variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-6 block">
                                        Our Legacy
                                    </motion.span>
                                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-bold tracking-tighter leading-none mb-10 text-neutral-900 uppercase">
                                        It Started with <br />a Vision
                                    </motion.h2>

                                    <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-light max-w-xl">
                                        <motion.p variants={fadeUp}>
                                            It started with a question that wouldn't let us go: Why don't we have a world-class, natural-risk consultancy right here at home? A place where the game of risk could be played the way it was meant to be played.
                                        </motion.p>
                                        <motion.p variants={fadeUp}>
                                            The Indian industrial region has always had the heart. We have dedicated founders, passionate teams, and communities that believe in the power of stability to bring people together. What we were missing wasn't passion, it was a home. A true foundation.
                                        </motion.p>

                                        <motion.div variants={fadeUp} className="pt-4 border-l-4 border-neutral-900 pl-8">
                                            <p className="text-2xl font-medium text-neutral-900 italic">"So we chose to build it."</p>
                                        </motion.div>

                                        <motion.p variants={fadeUp} className="pt-4">
                                            With local belief, hard work, and a vision for something better. This is a project created by people who live here, work here, and refuse to settle for less than what this nation deserves.
                                        </motion.p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1600880210834-4e31e5f8f203?q=80&w=2670&auto=format&fit=crop"
                                        alt="Indian Corporate Hub"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-neutral-900/5" />
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* --- Purpose & Direction (Inspired by Image 3) --- */}
                    <section className="py-24 md:py-40 bg-[#fbfbf9]">
                        <div className="container mx-auto px-6 md:px-12">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={stagger}
                                className="text-center mb-24"
                            >
                                <motion.span variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-6 block">
                                    What Drives Us
                                </motion.span>
                                <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase text-neutral-900">
                                    Purpose & <span className="text-neutral-400">Direction</span>
                                </motion.h2>
                                <motion.p variants={fadeUp} className="text-lg text-neutral-500 max-w-2xl mx-auto mt-8 font-light">
                                    Every great organization is built on a strong foundation of purpose and a clear vision for the future.
                                </motion.p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                                {/* Mission Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-12 md:p-16 rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-neutral-100 flex flex-col items-start gap-8 group hover:translate-y-[-10px] transition-all duration-500"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-neutral-900 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                                        <Zap className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-4">Our Mission</span>
                                        <h3 className="text-4xl font-bold tracking-tight mb-6">Why We Exist</h3>
                                        <p className="text-neutral-500 leading-relaxed text-lg font-light">
                                            To inspire and develop the next generation of industrial frameworks by delivering international-standard risk audits and high-performance policy placement—empowering enterprises to reach their fullest potential.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Vision Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="bg-white p-12 md:p-16 rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-neutral-100 flex flex-col items-start gap-8 group hover:translate-y-[-10px] transition-all duration-500"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-neutral-200 flex items-center justify-center text-neutral-900 group-hover:scale-110 transition-transform duration-500">
                                        <Eye className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-4">Our Vision</span>
                                        <h3 className="text-4xl font-bold tracking-tight mb-6">Where We're Going</h3>
                                        <p className="text-neutral-500 leading-relaxed text-lg font-light">
                                            To be internationally recognized as India's leading center of excellence for risk management and a premier destination for world-class, multi-sector insurance strategies.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* --- Values Section (Inspired by Image 4) --- */}
                    <section className="py-24 md:py-40 bg-white">
                        <div className="container mx-auto px-6 md:px-12">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={stagger}
                                className="text-center mb-24"
                            >
                                <motion.span variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-6 block">
                                    What We Stand For
                                </motion.span>
                                <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase text-neutral-900">
                                    Our <span className="text-neutral-400">Values</span>
                                </motion.h2>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { icon: <Shield className="w-6 h-6" />, title: "INTEGRITY", desc: "Foundation of transparency without compromise. We honor our heritage through ethics, not imitation." },
                                    { icon: <Users className="w-6 h-6" />, title: "COMMUNITY", desc: "Every enterprise has a place here. From industrial giants to startups, you belong to our shield." },
                                    { icon: <Heart className="w-6 h-6" />, title: "PASSION", desc: "Insurance isn't just numbers to us. It's how we protect growth, innovation, and the next generation." },
                                    { icon: <Balance className="w-6 h-6" />, title: "ADVOCACY", desc: "Client advocacy matters. So does claims excellence. We hold both together for your peace of mind." }
                                ].map((value, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white p-10 rounded-[2rem] border border-neutral-100 shadow-sm hover:shadow-xl hover:translate-y-[-5px] transition-all duration-500 text-center flex flex-col items-center gap-6"
                                    >
                                        <div className="w-14 h-14 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 transition-colors">
                                            {value.icon}
                                        </div>
                                        <h3 className="text-xl font-bold tracking-widest text-neutral-900 uppercase">{value.title}</h3>
                                        <p className="text-neutral-500 text-sm leading-relaxed font-light">
                                            {value.desc}
                                        </p>
                                    </motion.div>
                                ))}
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
