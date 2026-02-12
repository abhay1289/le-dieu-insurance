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

const milestones = [
    { year: "2003", title: "Founded & IRDA Licensed", description: "Established as a Direct Insurance Broking Firm, licensed by the Insurance Regulatory and Development Authority of India." },
    { year: "2008", title: "Corporate Portfolio Expansion", description: "Expanded services to serve large industrial houses, power projects, and infrastructure developments across India." },
    { year: "2013", title: "Pan-India Operations", description: "Established nationwide presence with corporate offices in Bhopal and Delhi, serving clients across all major Indian states." },
    { year: "2018", title: "Digital Transformation", description: "Adopted advanced risk analytics and digital policy management platforms to enhance client service delivery." },
    { year: "2023", title: "Two Decades of Excellence", description: "Celebrated 20 years of trusted insurance broking, with 10,000+ families and businesses protected nationwide." },
];

const values = [
    { icon: "🛡️", title: "Trust & Integrity", description: "Every recommendation we make is guided by transparency and your best interests, never by commission." },
    { icon: "🎯", title: "Client-Centric Approach", description: "We design coverage around your unique risk profile — not what suits insurers, but what protects you." },
    { icon: "⚡", title: "Claims Excellence", description: "Our dedicated claims team ensures swift, hassle-free settlements — our strongest competitive advantage." },
    { icon: "🏢", title: "Industry Expertise", description: "Deep domain knowledge across manufacturing, infrastructure, healthcare, hospitality, and corporate sectors." },
];

const stats = [
    { number: "20+", label: "Years of Excellence" },
    { number: "10,000+", label: "Clients Protected" },
    { number: "21+", label: "Partner Insurers" },
    { number: "₹500Cr+", label: "Claims Settled" },
];

export default function AboutPage() {
    return (
        <SmoothScroll>
            <div className="min-h-screen bg-white">
                <ScrollProgress />
                <NavBar />

                <PageHero
                    title="About Le Dieu Insurance"
                    subtitle="India's trusted IRDA-licensed insurance broker since 2003 — delivering tailored risk management, policy placement, and claims excellence for businesses and families nationwide."
                    breadcrumb="About Us"
                    backgroundImage="/images/about-team.png"
                />

                {/* Mission & Vision Section */}
                <section className="py-16 md:py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                            {/* Left - Label & Heading */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                            >
                                <motion.div
                                    variants={fadeUpVariants}
                                    className="flex items-center gap-4 mb-4 md:mb-8"
                                >
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">Who We Are</span>
                                </motion.div>

                                <div className="overflow-hidden mb-6">
                                    <motion.h2
                                        variants={textRevealVariants}
                                        className="text-primary text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95]"
                                    >
                                        Protecting India&apos;s
                                    </motion.h2>
                                </div>
                                <div className="overflow-hidden">
                                    <motion.h2
                                        variants={textRevealVariants}
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95]"
                                    >
                                        Businesses Since 2003
                                    </motion.h2>
                                </div>
                            </motion.div>

                            {/* Right - Content */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="space-y-6"
                            >
                                <motion.p variants={fadeUpVariants} className="text-gray-600 text-lg leading-relaxed">
                                    Le Dieu Insurance Brokers Pvt. Ltd. is a leading IRDA-licensed direct insurance broking firm in India, serving mid-to-large corporates, SMEs, and retail clients with end-to-end risk management and insurance solutions.
                                </motion.p>
                                <motion.p variants={fadeUpVariants} className="text-gray-500 leading-relaxed">
                                    Our valued clients include large and prestigious industrial houses, power projects, infrastructure developments, road and civil engineering projects, the hospitality industry, hospitals, and corporate enterprises across India. With a dedicated team of insurance professionals, risk engineers, chartered accountants, and MBAs, we deliver tailor-made policies that are cost-effective yet provide the widest coverage for indemnification.
                                </motion.p>
                                <motion.p variants={fadeUpVariants} className="text-gray-500 leading-relaxed">
                                    Our expertise in claims settlement has created deep satisfaction among our existing clients — and we consider this our strongest competitive advantage. We leverage our PAN India network and deep market knowledge to negotiate optimal coverage from 21+ insurance companies, ensuring you receive protection that truly reflects your risk profile.
                                </motion.p>

                                <motion.div variants={fadeUpVariants} className="pt-4">
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-accent hover:text-primary transition-all duration-300 shadow-lg shadow-primary/10"
                                    >
                                        Schedule a Consultation
                                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 8h14M9 2l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="py-0 bg-white">
                    <div className="container mx-auto px-6 md:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                            className="grid grid-cols-2 md:grid-cols-4 bg-primary rounded-[2rem] md:rounded-[2.5rem] overflow-hidden"
                        >
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUpVariants}
                                    className={`p-8 md:p-12 text-center ${i < stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
                                >
                                    <div className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-2">{stat.number}</div>
                                    <div className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em]">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Core Values */}
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
                                <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">Our Foundation</span>
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.h2
                                    variants={textRevealVariants}
                                    className="text-primary text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter"
                                >
                                    Built on Values That Matter
                                </motion.h2>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {values.map((value, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUpVariants}
                                    className="group relative bg-gray-50 hover:bg-primary rounded-[1.5rem] p-8 md:p-10 transition-all duration-500 cursor-pointer overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 group-hover:bg-accent/10 rounded-full blur-[40px] transition-all duration-500" />
                                    <div className="relative z-10">
                                        <div className="text-4xl mb-6">{value.icon}</div>
                                        <h3 className="text-primary group-hover:text-white text-lg font-bold tracking-tight mb-3 transition-colors duration-500">{value.title}</h3>
                                        <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-500">{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Timeline Section */}
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
                                <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">Our Journey</span>
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.h2
                                    variants={textRevealVariants}
                                    className="text-primary text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter"
                                >
                                    Milestones of Excellence
                                </motion.h2>
                            </div>
                        </motion.div>

                        <div className="max-w-4xl mx-auto">
                            {milestones.map((milestone, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                                    className="relative flex gap-6 md:gap-10 mb-8 md:mb-12 last:mb-0"
                                >
                                    {/* Year Badge */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm md:text-base tracking-tight shadow-lg shadow-primary/20">
                                            {milestone.year}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-white rounded-[1.5rem] p-6 md:p-8 border border-gray-100 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500">
                                        <h3 className="text-primary text-lg md:text-xl font-bold tracking-tight mb-2">{milestone.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{milestone.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* IRDA License Section */}
                <section className="py-16 md:py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="bg-gradient-to-br from-primary via-primary to-primary/95 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-accent/10 rounded-full blur-[100px]" />
                            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-accent/5 rounded-full blur-[80px]" />

                            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <motion.div variants={fadeUpVariants} className="flex items-center gap-4 mb-6">
                                        <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">Regulatory Compliance</span>
                                    </motion.div>
                                    <motion.h2 variants={fadeUpVariants} className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-6">
                                        IRDA Licensed Since 2003
                                    </motion.h2>
                                    <motion.p variants={fadeUpVariants} className="text-white/70 text-lg leading-relaxed mb-8">
                                        Licensed by the Insurance Regulatory and Development Authority (IRDA) as a Direct Insurance Broking Firm, Le Dieu Insurance operates with full regulatory compliance. Our license ensures that every policy recommendation is backed by statutory oversight, giving you complete confidence in our advice and service delivery.
                                    </motion.p>
                                    <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-4">
                                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 text-white text-xs font-bold uppercase tracking-wider">
                                            ✓ IRDA Licensed
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 text-white text-xs font-bold uppercase tracking-wider">
                                            ✓ PAN India Coverage
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 text-white text-xs font-bold uppercase tracking-wider">
                                            ✓ 21+ Insurers
                                        </div>
                                    </motion.div>
                                </div>

                                <motion.div variants={fadeUpVariants} className="flex justify-center">
                                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 md:p-12 text-center max-w-sm">
                                        <div className="text-7xl md:text-8xl font-bold text-accent tracking-tighter mb-2">20+</div>
                                        <div className="text-white/80 text-lg font-medium mb-6">Years of Trusted Service</div>
                                        <div className="h-px bg-white/10 mb-6" />
                                        <p className="text-white/50 text-sm leading-relaxed">
                                            Serving India&apos;s top industrial houses, infrastructure projects, and corporate enterprises with unwavering commitment.
                                        </p>
                                    </div>
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
