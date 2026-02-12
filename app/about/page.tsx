'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

// --- Sophisticated Animation Variants ---
const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

const textMask = {
    initial: { y: "100%" },
    animate: { y: 0 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

// --- Components ---

const AboutHero = () => {
    return (
        <section className="relative h-screen flex flex-col justify-center bg-black overflow-hidden select-none">
            {/* Immersive Background */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
                    className="w-full h-full object-cover grayscale transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="initial"
                        animate="animate"
                        className="mb-8"
                    >
                        <span className="text-white/40 text-xs font-mono tracking-[0.5em] uppercase border-l-2 border-white/20 pl-4 py-1">
                            A Legacy of Excellence
                        </span>
                    </motion.div>

                    <div className="overflow-hidden mb-4">
                        <motion.h1
                            variants={textMask}
                            initial="initial"
                            animate="animate"
                            className="text-[12vw] md:text-[8vw] font-bold text-white leading-none tracking-tighter"
                        >
                            ENGINEERING
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden mb-12">
                        <motion.h1
                            variants={textMask}
                            initial="initial"
                            animate="animate"
                            transition={{ ...textMask.transition, delay: 0.1 }}
                            className="text-[12vw] md:text-[8vw] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-white to-white/40 leading-none tracking-tighter"
                        >
                            RESILIENCE.
                        </motion.h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mt-24 border-t border-white/10 pt-12 max-w-5xl">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="text-white/60 text-lg md:text-xl font-light leading-relaxed font-sans"
                        >
                            For three decades, Le Dieu has stood as the invisible guardian of India&apos;s industrial skyline. We don&apos;t just manage risk; we architect certainty in an unpredictable world.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.7 }}
                            className="flex items-center gap-12"
                        >
                            <div className="h-24 w-px bg-white/10" />
                            <div>
                                <h3 className="text-white text-5xl font-bold font-mono tracking-tighter">₹50B+</h3>
                                <p className="text-white/30 text-xs uppercase tracking-widest mt-2 uppercase">Assets Under Shield</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
                <span className="text-[10px] text-white/30 tracking-[0.3em] uppercase">Scroll</span>
            </motion.div>
        </section>
    );
};

const ManifestoSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const words = "OUR PHILOSOPHY IS ROOTED IN THE BELIEF THAT EVERY RISK IS AN OPPORTUNITY FOR STRATEGIC REINFORCEMENT.".split(" ");

    return (
        <section ref={sectionRef} className="py-40 bg-white text-black overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-wrap max-w-6xl mx-auto">
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            style={{
                                opacity: useTransform(scrollYProgress, [0 + (i * 0.03), 0.3 + (i * 0.03)], [0, 1]),
                                y: useTransform(scrollYProgress, [0 + (i * 0.03), 0.3 + (i * 0.03)], [20, 0])
                            }}
                            className="text-4xl md:text-[6vw] font-bold tracking-tighter mr-6 leading-[0.9] mb-4"
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>
            </div>
            {/* Background Large Text Overlay */}
            <div className="absolute bottom-0 right-0 opacity-[0.02] -mb-12 select-none pointer-events-none">
                <h2 className="text-[30vw] font-black leading-none">LE DIEU</h2>
            </div>
        </section>
    );
};

const PrinciplesBento = () => {
    return (
        <section className="py-32 bg-black relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-xl">
                        <span className="text-white/40 text-xs font-mono tracking-[0.4em] uppercase mb-4 block">The Protection Matrix</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">Our Core Foundations.</h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-6">
                    {/* Big Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="md:col-span-8 h-[500px] bg-neutral-900 rounded-[2.5rem] p-12 relative overflow-hidden group border border-white/5"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-3xl">🛡️</div>
                            <div>
                                <h3 className="text-4xl font-bold text-white mb-6">Forensic Precision.</h3>
                                <p className="text-white/50 text-xl max-w-sm leading-relaxed">
                                    We employ deep-dive auditing techniques to expose liability gaps that standard brokers often overlook.
                                </p>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full -mr-64 -mt-64 blur-[80px] pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </motion.div>

                    {/* Smaller Cards */}
                    <div className="md:col-span-4 grid gap-6">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="h-[240px] bg-neutral-900 rounded-[2rem] p-8 border border-white/5 flex flex-col justify-between group"
                        >
                            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Client First</span>
                            <h4 className="text-2xl font-bold text-white">Claims Advocacy.</h4>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="h-[240px] bg-white rounded-[2rem] p-8 flex flex-col justify-between group"
                        >
                            <span className="text-xs font-mono text-black/40 uppercase tracking-widest">Global Reach</span>
                            <h4 className="text-2xl font-bold text-black">Strategic Placement.</h4>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TimelineSection = () => {
    const milestones = [
        { year: "2003", title: "The Inception", desc: "Le Dieu Insurance Brokers was founded with a singular mission: to provide the corporate world with risk transfer strategies that actually work." },
        { year: "2010", title: "Industrial Focus", desc: "Successfully brokered one of the largest power project insurance packages in North India, cementing our status as industrial experts." },
        { year: "2018", title: "Digital Integration", desc: "Implemented proprietary data analytics to provide our clients with real-time exposure monitoring." },
        { year: "Present", title: "Future-Proofing", desc: "Continuing to lead with over ₹50B in assets protected across diverse sectors including infrastructure, power, and high-tech manufacturing." }
    ];

    return (
        <section className="py-40 bg-zinc-950 text-white overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <h2 className="text-7xl font-bold tracking-tighter mb-8 italic">The <br />Evolution.</h2>
                        <div className="h-px w-24 bg-white/20 mb-8" />
                        <p className="text-white/40 text-lg leading-relaxed">
                            A track record of unwavering commitment to excellence, spanning three decades of industrial evolution in India.
                        </p>
                    </div>

                    <div className="lg:col-span-8 space-y-32">
                        {milestones.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className="relative pl-12 border-l border-white/10"
                            >
                                <div className="absolute top-0 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-black" />
                                <span className="text-5xl font-mono text-white/10 font-bold mb-4 block">{m.year}</span>
                                <h3 className="text-3xl font-bold mb-6">{m.title}</h3>
                                <p className="text-white/50 text-lg max-w-xl leading-relaxed">{m.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const BoardSection = () => {
    const leaders = [
        { name: "Dharampal Rupal", role: "Chairman", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" },
        { name: "Ashar Husain", role: "Vice President", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" },
        { name: "Deepak Simhal", role: "Managing Partner", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop" },
        { name: "Shruti Simhal", role: "Strategic Partner", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2574&auto=format&fit=crop" }
    ];

    return (
        <section className="py-40 bg-white text-black">
            <div className="container mx-auto px-6 md:px-12 text-center mb-32">
                <span className="text-black/40 text-xs font-mono tracking-[0.5em] uppercase mb-4 block">Leadership</span>
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">THE BOARD.</h2>
            </div>

            <div className="border-t border-black/10">
                {leaders.map((leader, i) => (
                    <div
                        key={i}
                        className="group relative border-b border-black/10 py-16 md:py-24 transition-colors hover:bg-black hover:text-white cursor-pointer overflow-hidden"
                    >
                        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between relative z-10 transition-transform group-hover:translate-x-4 duration-500">
                            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 md:mb-0">{leader.name}</h3>
                            <div className="flex items-center gap-12">
                                <span className="text-sm font-bold uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100">{leader.role}</span>
                                <div className="hidden md:flex w-20 h-20 rounded-full border border-black/10 group-hover:border-white/30 items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-700">
                                    <ArrowIcon className="w-8 h-8" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Image Reveal - For Desktop */}
                        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-80 h-[450px] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none scale-90 group-hover:scale-100 translate-x-20 group-hover:translate-x-0 hidden md:block">
                            <img src={leader.image} className="w-full h-full object-cover rounded-3xl grayscale brightness-75 transition-all" alt={leader.name} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// --- Main Page Component ---

export default function AboutPage() {
    return (
        <SmoothScroll>
            <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
                <ScrollProgress />
                <NavBar />

                <main>
                    <AboutHero />
                    <ManifestoSection />
                    <PrinciplesBento />
                    <TimelineSection />
                    <BoardSection />
                </main>

                <Footer />
            </div>
        </SmoothScroll>
    );
}
