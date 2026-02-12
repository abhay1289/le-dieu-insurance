'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import PageHero from '@/components/PageHero';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

const coreServices = [
    {
        id: "01",
        title: "Risk Engineering",
        subtitle: "Precision Identification.",
        description: "We don't just insure; we engineer resilience. Our risk management protocols involve a forensic auditing of your operational landscape to identify vulnerabilities before they manifest as losses.",
        features: ["Forensic Risk Audits", "Loss Prevention Architecture", "Contractual Liability Analysis"],
        color: "bg-[#0B1C15]",
        accent: "text-emerald-400"
    },
    {
        id: "02",
        title: "Strategic Placement",
        subtitle: "Market Leverage.",
        description: "Leveraging two decades of relationships with 21+ insurers to architect coverage that defies standard market limitations. we negotiate from a position of data-backed strength.",
        features: ["GAP Analysis", "Portfolio Rationalization", "Competitive Bidding"],
        color: "bg-[#0F2920]",
        accent: "text-cyan-400"
    },
    {
        id: "03",
        title: "Claims Advocacy",
        subtitle: "Relentless Defense.",
        description: "The true test of insurance. We manage the entire claims lifecycle, from notification to settlement, ensuring technical nuances are interpreted in your favor.",
        features: ["24/7 Crisis Response", "Settlement Negotiation", "Technical Arbitration"],
        color: "bg-[#14362A]",
        accent: "text-indigo-400"
    },
];

const specializedServices = [
    { icon: "⚡", title: "Energy Audit", description: "Optimizing consumption patterns to reduce operational overhead." },
    { icon: "🛡️", title: "Safety Protocol", description: "Workplace safety compliance ensuring zero-incident environments." },
    { icon: "🌿", title: "Eco-Compliance", description: "Navigating the complex landscape of environmental liability." },
    { icon: "⚙️", title: "Process Optimization", description: "Streamlining workflows to mitigate business interruption risks." },
    { icon: "📋", title: "Claims Recovery", description: "Maximizing settlement value through technical expertise." },
];

const insuranceTypes = [
    "Fire & Earthquake", "Industrial All Risk", "Marine Cargo", "Public Liability",
    "Cyber Security", "Directors & Officers", "Trade Credit", "Group Health",
    "Engineering (CAR/EAR)", "Workmen's Comp"
];

const Card = ({ card, index, range, targetScale, progress }: any) => {
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
                className={`relative flex flex-col w-[90vw] md:w-[1000px] h-[60vh] md:h-[500px] rounded-[2rem] p-8 md:p-16 border border-white/10 overflow-hidden transform-gpu origin-top ${card.color}`}
            >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="flex flex-col md:flex-row h-full gap-8 md:gap-16">
                    <div className="w-full md:w-[40%] flex flex-col justify-between">
                        <div className={`text-6xl md:text-8xl font-bold font-mono opacity-20 ${card.accent}`}>{card.id}</div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">{card.title}</h2>
                    </div>

                    <div className="w-full md:w-[60%] flex flex-col justify-between">
                        <div>
                            <p className={`text-lg md:text-xl font-medium mb-6 ${card.accent}`}>{card.subtitle}</p>
                            <p className="text-white/70 text-base md:text-lg leading-relaxed">{card.description}</p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {card.features.map((f: string, i: number) => (
                                <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 uppercase tracking-wider">
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default function ServicesPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <SmoothScroll>
            <div className="bg-black min-h-screen text-white">
                <ScrollProgress />
                <NavBar />

                <PageHero
                    title="Expertise"
                    subtitle="De-risking the future for India's industrial giants through precision engineering and strategic transfer."
                    breadcrumb="Services"
                    backgroundImage="/images/service-risk-new.jpg"
                />

                {/* Stacking Cards Section */}
                <div ref={containerRef} className="relative mt-[10vh] mb-[10vh]">
                    <div className="container mx-auto px-6 mb-20 md:mb-32 text-center">
                        <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] block mb-6">Our Methodology</span>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">The Protection Matrix.</h2>
                    </div>

                    {coreServices.map((service, i) => {
                        const targetScale = 1 - ((coreServices.length - i) * 0.05);
                        return <Card key={i} index={i} card={service} range={[i * .25, 1]} targetScale={targetScale} progress={scrollYProgress} />
                    })}
                </div>

                {/* Specialized Services - Grid */}
                <section className="py-24 md:py-32 bg-[#0B1C15] relative overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">Specialized Audits</h2>
                                <p className="text-white/50 max-w-md">Technical assessments designed to optimize operational efficiency and insurability.</p>
                            </div>
                            <div className="h-px w-full md:w-auto md:flex-1 bg-white/10 mb-2 md:mx-12" />
                            <div className="text-accent font-mono text-sm">05 MODULES</div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
                            {specializedServices.map((service, i) => (
                                <div key={i} className="group relative p-10 bg-[#0B1C15] hover:bg-[#0F2920] transition-colors duration-500">
                                    <div className="text-4xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                                    <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors leading-relaxed">{service.description}</p>
                                </div>
                            ))}
                            {/* Empty filler for grid if needed, or join us card */}
                            <div className="group relative p-10 bg-[#0B1C15] hover:bg-accent transition-colors duration-500 flex flex-col justify-center items-center text-center cursor-pointer">
                                <h3 className="text-xl font-bold text-white mb-2">Need Custom Analysis?</h3>
                                <p className="text-sm text-white/50 group-hover:text-white/90 mb-6">Contact our risk engineers.</p>
                                <div className="w-10 h-10 rounded-full border border-white/20 group-hover:bg-white group-hover:text-accent flex items-center justify-center transition-all">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ticker / Marquee for Coverage Types */}
                <section className="py-24 bg-black border-t border-white/5">
                    <div className="container mx-auto px-6 mb-12">
                        <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Comprehensive Scope</span>
                    </div>
                    <div className="relative flex overflow-x-hidden">
                        <div className="py-12 animate-marquee whitespace-nowrap flex gap-12 md:gap-24">
                            {[...insuranceTypes, ...insuranceTypes].map((type, i) => (
                                <span key={i} className="text-4xl md:text-6xl font-bold text-white/20 hover:text-white/80 transition-colors cursor-default uppercase">
                                    {type}
                                </span>
                            ))}
                        </div>
                        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex gap-12 md:gap-24">
                            {[...insuranceTypes, ...insuranceTypes].map((type, i) => (
                                <span key={i} className="text-4xl md:text-6xl font-bold text-white/20 hover:text-white/80 transition-colors cursor-default uppercase">
                                    {type}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </SmoothScroll>
    );
}
