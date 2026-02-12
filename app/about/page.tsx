'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';
import { ArrowIcon } from '@/utils/icons';

// --- Components ---

const AboutHero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 bg-black overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                    alt="Corporate Architecture"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-white/60 text-xs font-bold uppercase tracking-[0.3em] mb-6 block border-l border-white/20 pl-4">
                        Our Narrative
                    </span>
                    <h1 className="text-6xl md:text-[100px] font-bold text-white leading-[0.9] tracking-tighter mb-10">
                        Architects of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-800">Certainty.</span>
                    </h1>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 mt-12 md:mt-24 border-t border-white/10 pt-12">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-white/80 text-lg md:text-xl font-light leading-relaxed"
                    >
                        At Le Dieu, we don't just sell insurance; we engineer resilience. For over three decades, we have been the silent force behind India's most ambitious industrial feats, turning catastrophic risk into calculated strategy.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex flex-col justify-between"
                    >
                        <div className="flex gap-12 text-white/40 font-mono text-sm">
                            <div>
                                <div className="block text-white text-2xl font-bold mb-1">2003</div>
                                <span>Established</span>
                            </div>
                            <div>
                                <div className="block text-white text-2xl font-bold mb-1">₹50B+</div>
                                <span>Assets Protected</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ImageRevealSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section ref={containerRef} className="py-0 min-h-screen bg-neutral-900 relative overflow-hidden flex items-center">
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y }} className="w-full h-[120%]">
                    <img
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop"
                        alt="Industrial Focus"
                        className="w-full h-full object-cover grayscale opacity-40"
                    />
                </motion.div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-20 items-center">
                <div className=" md:pr-12">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-none">
                        Precision in <br />Every Policy.
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                        We believe that generic insurance is a liability. Our methodology involves deep-dive forensic audits of your operational risks, allowing us to craft bespoke coverage that fits your enterprise like a glove.
                    </p>
                    <ul className="space-y-4 border-t border-white/10 pt-8">
                        {['Forensic Risk Audits', 'Claims Advocacy', 'Gap Analysis'].map((item, i) => (
                            <li key={i} className="flex items-center text-white/80">
                                <span className="w-1.5 h-1.5 bg-white rounded-full mr-4" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Visual Empty Space to let bg shine or add specific graphic */}
                <div className="hidden md:block h-[600px] border-l border-white/10 ml-auto" />
            </div>
        </section>
    );
}

const ValuesGrid = () => {
    const values = [
        {
            title: "Integrity",
            desc: "Unwavering transparency in every transaction. We sit on your side of the table, always.",
            icon: "I"
        },
        {
            title: "Precision",
            desc: "Data-backed risk assessment that leaves no room for ambiguity or surprise clauses.",
            icon: "P"
        },
        {
            title: "Evolution",
            desc: "Dynamic policy restructuring that adapts as your business scales and markets shift.",
            icon: "E"
        }
    ];

    return (
        <section className="bg-black py-32 px-6 md:px-12 border-t border-white/10">
            <div className="container mx-auto">
                <div className="mb-20">
                    <span className="text-white/40 text-xs font-bold uppercase tracking-widest pl-4 border-l border-white/20">Our DNA</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">The Principles That Guide Us</h2>
                </div>

                <div className="grid md:grid-cols-3 border-t border-l border-white/10">
                    {values.map((val, i) => (
                        <div key={i} className="group p-12 border-r border-b border-white/10 hover:bg-neutral-900 transition-colors duration-500 relative">
                            <div className="text-white/20 font-mono text-6xl font-bold absolute top-8 right-8 group-hover:text-white/10 transition-colors">
                                {val.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6 group-hover:translate-x-2 transition-transform duration-300">{val.title}</h3>
                            <p className="text-white/50 leading-relaxed text-sm group-hover:text-white/70 transition-colors">
                                {val.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const LeadershipSection = () => {
    return (
        <section className="py-32 bg-white text-black relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mb-24">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-black">
                        Led by <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">Visionaries.</span>
                    </h2>
                    <p className="text-gray-500 text-xl font-light max-w-2xl">
                        Our leadership team combines decades of industry authority with forward-thinking risk strategies.
                    </p>
                </div>

                {/* Minimal List Layout */}
                <div className="space-y-0 border-t border-black/10">
                    {[
                        { name: "Dharampal Rupal", role: "Chairman", desc: "Driving strategic direction since 1990." },
                        { name: "Ashar Husain", role: "Vice President", desc: "Expert in complex industrial risk audits." },
                        { name: "Deepak Simhal", role: "Managing Partner", desc: "Specialist in claims resolution and advocacy." }
                    ].map((leader, i) => (
                        <div key={i} className="grid md:grid-cols-12 gap-8 py-12 border-b border-black/10 items-center hover:bg-gray-50 transition-colors group">
                            <div className="md:col-span-1 text-xs font-mono text-gray-400">0{i + 1}</div>
                            <div className="md:col-span-4 text-3xl font-bold tracking-tight">{leader.name}</div>
                            <div className="md:col-span-3 text-sm font-bold uppercase tracking-widest text-gray-500">{leader.role}</div>
                            <div className="md:col-span-4 text-gray-600 font-medium group-hover:text-black transition-colors">{leader.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- Main Page Component ---

export default function AboutPage() {
    return (
        <SmoothScroll>
            <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
                <ScrollProgress />
                <NavBar />

                <main>
                    <AboutHero />
                    <ImageRevealSection />
                    <ValuesGrid />
                    <LeadershipSection />
                </main>

                <Footer />
            </div>
        </SmoothScroll>
    );
}
