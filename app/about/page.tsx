'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';
import PageHero from '@/components/PageHero';

const AboutPage = () => {
    return (
        <SmoothScroll>
            <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
                <ScrollProgress />
                <NavBar />

                <main>
                    {/* Simple, Premium Hero */}
                    <PageHero
                        title="Our Legacy"
                        subtitle="Three decades of protecting India's industrial backbone with precision and integrity."
                        breadcrumb="About Us"
                        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                    />

                    {/* Minimalist Narrative Section */}
                    <section className="py-24 md:py-32 bg-black border-b border-white/5">
                        <div className="container mx-auto px-6 md:px-12">
                            <div className="max-w-4xl">
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-8 block"
                                >
                                    The Narrative
                                </motion.span>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-6xl font-bold tracking-tight mb-12 leading-[1.1]"
                                >
                                    At <span className="text-white/40">Le Dieu</span>, we believe that risk management is not just a service—it&apos;s a <br />
                                    <span className="italic">Strategic Discipline.</span>
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
                                >
                                    Since 2003, we have operated at the intersection of complex industrial risk and forensic auditing. We don&apos;t just sell policies; we engineer resilience for enterprises that drive India&apos;s growth.
                                </motion.p>
                            </div>
                        </div>
                    </section>

                    {/* Clean Value Grid */}
                    <section className="py-24 md:py-32 bg-neutral-950">
                        <div className="container mx-auto px-6 md:px-12">
                            <div className="grid md:grid-cols-3 gap-16 md:gap-24">
                                {[
                                    { number: "01", title: "Forensic Precision", desc: "Every operational landscape is different. We perform forensic audits to identify vulnerabilities before they manifest as losses." },
                                    { number: "02", title: "Claims Advocacy", desc: "We act as your shield. Our dedicated settlement officers manage every incident from reporting to final resolution." },
                                    { number: "03", title: "Institutional Grade", desc: "Handling over ₹50B in assets, our scale provides you with access to global markets and premium risk strategies." }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative"
                                    >
                                        <div className="text-white/10 text-4xl font-mono font-bold mb-6">{item.number}</div>
                                        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                        <p className="text-white/50 leading-relaxed font-light">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Minimalist History Section */}
                    <section className="py-24 md:py-32 bg-black">
                        <div className="container mx-auto px-6 md:px-12">
                            <div className="flex flex-col md:flex-row gap-20">
                                <div className="md:w-1/3">
                                    <h2 className="text-5xl font-bold tracking-tighter sticky top-32">The <br />Timeline.</h2>
                                </div>
                                <div className="md:w-2/3 space-y-24">
                                    {[
                                        { year: "2003", title: "Foundation", desc: "Established in Bhopal with a vision to redefine the role of insurance brokers in the industrial sector." },
                                        { year: "2010", title: "Scale", desc: "Expanded operations to New Delhi, managing complex portfolios for infrastructure giants." },
                                        { year: "Today", title: "Excellence", desc: "Consistently ranked among the most specialized brokers for industrial engineering and risk audits." }
                                    ].map((m, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="border-l border-white/10 pl-8 relative"
                                        >
                                            <div className="absolute top-0 left-0 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                            <span className="text-white/30 font-mono text-sm mb-2 block tracking-widest">{m.year}</span>
                                            <h3 className="text-2xl font-bold mb-4">{m.title}</h3>
                                            <p className="text-white/50 font-light leading-relaxed max-w-lg">{m.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </SmoothScroll>
    );
};

export default AboutPage;
