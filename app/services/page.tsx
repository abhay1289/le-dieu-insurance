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
        title: "Risk Management",
        subtitle: "Systematic Identification.",
        description: "Risk management is a systematic process for the identification and evaluation of loss exposures faced by an organization or individual. We deploy forensic auditing protocols across your entire operational landscape to uncover hidden vulnerabilities before they escalate. Our methodology ensures the selection and administration of the most appropriate techniques for treating such exposures, transforming uncertainty into a structured, defensible strategy.",
        features: ["Forensic Risk Audits", "Exposure Evaluation", "Loss Treatment Strategy"],
        image: "/images/service-risk-engineering.png"
    },
    {
        id: "02",
        title: "Policy Placement",
        subtitle: "Precision Placement.",
        description: "Policy Placement is a rigorous and thorough process involving detailed risk profiling, policy analysis, portfolio rationalization, and RFQs to secure optimal coverage. We negotiate for value-based coverage across 21+ insurers, leveraging two decades of deep market relationships. Every quote undergoes meticulous evaluation and recommendation, followed by strategic placement and final scrutiny to ensure your coverage consistently defies standard market limitations.",
        features: ["Risk Profiling", "Portfolio Rationalization", "Competitive Bidding"],
        image: "/images/service-strategic-placement.png"
    },
    {
        id: "03",
        title: "Investment Strategy",
        subtitle: "Post-Placement Vigilance.",
        description: "Our engagement begins once your policy is scrutinized and approved — not where others end. We assist in claims management, handle endorsements, track renewals, and manage the renewal process with the same rigor as the initial policy placement. This continuous investment in your portfolio ensures that your coverage evolves alongside your business, maintaining relevance and maximum protection year after year.",
        features: ["Claims Assistance", "Endorsement Management", "Renewal Tracking"],
        image: "/images/service-claims-advocacy.png"
    },
    {
        id: "04",
        title: "Specialized Services",
        subtitle: "Beyond Standard Coverage.",
        description: "We offer comprehensive specialized services including Energy Audits, Safety Reviews, Environmental and Process Audits, along with expert Claim Consultancy support. These technical assessments are designed to help optimize your operations, ensure full regulatory compliance, and support efficient claim management. Our specialized team brings deep domain expertise to identify risks that standard brokers overlook, delivering measurable value beyond the policy document.",
        features: ["Energy Audits", "Safety Reviews", "Claim Consultancy"],
        image: "/images/service-risk-new.jpg"
    },
    {
        id: "05",
        title: "Industry Domain Expertise",
        subtitle: "Sector-Deep Knowledge.",
        description: "We bring comprehensive insurance coverage spanning Fire, Earthquake, MBD, LOP, Burglary, Money, Fidelity, Transit, Health, PA, WC, Vehicle, Credit, Trade, and Marine lines. Our deep domain expertise across heavy industries, infrastructure, energy, healthcare, and hospitality means we understand the nuances defining each sector. We deliver coverage architectures that are precisely calibrated to your industry unique operational realities and risk profiles.",
        features: ["Multi-Line Coverage", "Sector Specialization", "Domain Risk Mapping"],
        image: "/images/service-business.png"
    },
    {
        id: "06",
        title: "Insurance Broker Services",
        subtitle: "IRDA-Licensed Excellence.",
        description: "LeDieu Insurance is IRDA-licensed, offering tailored insurance solutions backed by expert risk assessment, consultancy, and claims support. As a licensed broker, we operate with the highest regulatory standards while maintaining agility to customize solutions for every client. Our brokerage framework combines institutional credibility with personalized service, ensuring that every policy placed reflects both market best practices and your specific requirements.",
        features: ["IRDA Licensed", "Risk Consultancy", "Tailored Solutions"],
        image: "/images/service-strategic-placement.png"
    },
    {
        id: "07",
        title: "Risk Management — Loss Prevention",
        subtitle: "Proactive Defense.",
        description: "Post-privatization, India general insurance moved to free pricing through detariffing, allowing insurers to price by risk. Brokers now play a key role in this evolved landscape, bridging technical expertise with market access. Our loss prevention protocols are engineered to reduce claim frequency and severity, transforming your risk profile from reactive to proactive — lowering premiums while strengthening your operational resilience.",
        features: ["Loss Prevention Audits", "Risk Scoring", "Premium Optimization"],
        image: "/images/service-risk-engineering.png"
    },
    {
        id: "08",
        title: "Insurance Solutions — Support Services",
        subtitle: "End-to-End Framework.",
        description: "Our Insurance Solutions encompass Engineering, Trade, Marine, Employee Benefits, Property and Casualty covers including CAR, MBD, Health, Credit, Marine, and much beyond. We deliver a comprehensive support framework that extends from initial risk assessment through policy servicing and claims resolution. Every solution is architected to provide seamless protection across your entire operational footprint, ensuring no exposure goes unaddressed or underinsured.",
        features: ["Engineering & Trade", "Employee Benefits", "Property & Casualty"],
        image: "/images/service-claims-advocacy.png"
    },
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
                className="relative w-[90vw] md:w-[1100px] h-[65vh] md:h-[520px] rounded-[1.5rem] border border-gray-200/80 shadow-xl overflow-hidden transform-gpu origin-top bg-white group/card hover:shadow-2xl transition-shadow duration-700"
            >
                <div className="flex flex-col md:flex-row h-full">

                    {/* Left — Image Panel */}
                    <div className="relative w-full md:w-[45%] h-[35%] md:h-full overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover/card:scale-110"
                            />
                        </div>
                        {/* Gradient overlays for depth */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                        {/* Subtitle label on image */}
                        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
                            <div className="flex items-center gap-3">
                                <span className="h-[2px] w-8 bg-accent" />
                                <span className="text-white/90 text-[11px] font-bold uppercase tracking-[0.35em]">{card.subtitle}</span>
                            </div>
                        </div>

                        {/* Vertical divider accent */}
                        <div className="hidden md:block absolute top-8 bottom-8 right-0 w-[1px] bg-gradient-to-b from-transparent via-gray-200/50 to-transparent z-10" />
                    </div>

                    {/* Right — Content Panel */}
                    <div className="relative w-full md:w-[55%] h-[65%] md:h-full flex flex-col justify-between p-7 md:p-12 lg:p-14">

                        {/* Subtle background texture */}
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.15] pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full">
                            {/* Title */}
                            <div className="mb-6 md:mb-8">
                                <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-primary leading-[1.15] tracking-tight">
                                    {card.title}
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="text-gray-500 text-[14px] md:text-[15px] leading-[1.75] font-medium flex-1">
                                {card.description}
                            </p>

                            {/* Feature Tags */}
                            <div className="flex flex-wrap gap-2 pt-6 md:pt-8 border-t border-gray-100 mt-6 md:mt-8">
                                {card.features.map((f: string, i: number) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-[11px] text-gray-500 uppercase tracking-wider font-semibold hover:border-accent hover:text-accent transition-colors duration-300"
                                    >
                                        {f}
                                    </span>
                                ))}
                            </div>
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
            <div className="bg-white min-h-screen text-primary">
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
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-6">Our Services</span>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-primary">The Protection Matrix.</h2>
                    </div>

                    {coreServices.map((service, i) => {
                        const targetScale = 1 - ((coreServices.length - i) * 0.03);
                        return <Card key={i} index={i} card={service} range={[i * (1 / coreServices.length), 1]} targetScale={targetScale} progress={scrollYProgress} />
                    })}
                </div>

                {/* Ticker / Marquee for Coverage Types */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-6 mb-12">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Comprehensive Scope</span>
                    </div>
                    <div className="relative flex overflow-x-hidden">
                        <div className="py-12 animate-marquee whitespace-nowrap flex gap-12 md:gap-24">
                            {[...insuranceTypes, ...insuranceTypes].map((type, i) => (
                                <span key={i} className="text-4xl md:text-6xl font-bold text-gray-100 hover:text-primary transition-colors cursor-default uppercase">
                                    {type}
                                </span>
                            ))}
                        </div>
                        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex gap-12 md:gap-24">
                            {[...insuranceTypes, ...insuranceTypes].map((type, i) => (
                                <span key={i} className="text-4xl md:text-6xl font-bold text-gray-100 hover:text-primary transition-colors cursor-default uppercase">
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
