'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
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
        stat: { value: "360°", label: "Exposure Mapping" },
        image: "/images/service-risk-engineering.png"
    },
    {
        id: "02",
        title: "Policy Placement",
        subtitle: "Precision Placement.",
        description: "Policy Placement is a rigorous and thorough process involving detailed risk profiling, policy analysis, portfolio rationalization, and RFQs to secure optimal coverage. We negotiate for value-based coverage across 21+ insurers, leveraging two decades of deep market relationships. Every quote undergoes meticulous evaluation and recommendation, followed by strategic placement and final scrutiny to ensure your coverage consistently defies standard market limitations.",
        features: ["Risk Profiling", "Portfolio Rationalization", "Competitive Bidding"],
        stat: { value: "21+", label: "Insurer Partners" },
        image: "/images/service-strategic-placement.png"
    },
    {
        id: "03",
        title: "Investment Strategy",
        subtitle: "Post-Placement Vigilance.",
        description: "Our engagement begins once your policy is scrutinized and approved — not where others end. We assist in claims management, handle endorsements, track renewals, and manage the renewal process with the same rigor as the initial policy placement. This continuous investment in your portfolio ensures that your coverage evolves alongside your business, maintaining relevance and maximum protection year after year.",
        features: ["Claims Assistance", "Endorsement Management", "Renewal Tracking"],
        stat: { value: "100%", label: "Renewal Oversight" },
        image: "/images/service-claims-advocacy.png"
    },
    {
        id: "04",
        title: "Specialized Services",
        subtitle: "Beyond Standard Coverage.",
        description: "We offer comprehensive specialized services including Energy Audits, Safety Reviews, Environmental and Process Audits, along with expert Claim Consultancy support. These technical assessments are designed to help optimize your operations, ensure full regulatory compliance, and support efficient claim management. Our specialized team brings deep domain expertise to identify risks that standard brokers overlook, delivering measurable value beyond the policy document.",
        features: ["Energy Audits", "Safety Reviews", "Claim Consultancy"],
        stat: { value: "5x", label: "Audit Depth" },
        image: "/images/service-risk-new.jpg"
    },
    {
        id: "05",
        title: "Industry Domain Expertise",
        subtitle: "Sector-Deep Knowledge.",
        description: "We bring comprehensive insurance coverage spanning Fire, Earthquake, MBD, LOP, Burglary, Money, Fidelity, Transit, Health, PA, WC, Vehicle, Credit, Trade, and Marine lines. Our deep domain expertise across heavy industries, infrastructure, energy, healthcare, and hospitality means we understand the nuances defining each sector. We deliver coverage architectures that are precisely calibrated to your industry unique operational realities and risk profiles.",
        features: ["Multi-Line Coverage", "Sector Specialization", "Domain Risk Mapping"],
        stat: { value: "15+", label: "Coverage Lines" },
        image: "/images/service-business.png"
    },
    {
        id: "06",
        title: "Insurance Broker Services",
        subtitle: "IRDA-Licensed Excellence.",
        description: "LeDieu Insurance is IRDA-licensed, offering tailored insurance solutions backed by expert risk assessment, consultancy, and claims support. As a licensed broker, we operate with the highest regulatory standards while maintaining agility to customize solutions for every client. Our brokerage framework combines institutional credibility with personalized service, ensuring that every policy placed reflects both market best practices and your specific requirements.",
        features: ["IRDA Licensed", "Risk Consultancy", "Tailored Solutions"],
        stat: { value: "20+", label: "Years Licensed" },
        image: "/images/service-strategic-placement.png"
    },
    {
        id: "07",
        title: "Risk Management — Loss Prevention",
        subtitle: "Proactive Defense.",
        description: "Post-privatization, India general insurance moved to free pricing through detariffing, allowing insurers to price by risk. Brokers now play a key role in this evolved landscape, bridging technical expertise with market access. Our loss prevention protocols are engineered to reduce claim frequency and severity, transforming your risk profile from reactive to proactive — lowering premiums while strengthening your operational resilience.",
        features: ["Loss Prevention Audits", "Risk Scoring", "Premium Optimization"],
        stat: { value: "40%", label: "Claim Reduction" },
        image: "/images/service-risk-engineering.png"
    },
    {
        id: "08",
        title: "Insurance Solutions — Support Services",
        subtitle: "End-to-End Framework.",
        description: "Our Insurance Solutions encompass Engineering, Trade, Marine, Employee Benefits, Property and Casualty covers including CAR, MBD, Health, Credit, Marine, and much beyond. We deliver a comprehensive support framework that extends from initial risk assessment through policy servicing and claims resolution. Every solution is architected to provide seamless protection across your entire operational footprint, ensuring no exposure goes unaddressed or underinsured.",
        features: ["Engineering & Trade", "Employee Benefits", "Property & Casualty"],
        stat: { value: "₹500Cr+", label: "Claims Settled" },
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
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
                onMouseMove={handleMouseMove}
                className="relative w-[92vw] md:w-[1200px] h-[55vh] md:h-[440px] rounded-[1.5rem] border border-gray-200/60 shadow-xl overflow-hidden transform-gpu origin-top bg-white group/card hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:border-gray-300/80 transition-all duration-700"
            >
                {/* Cursor spotlight glow */}
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover/card:opacity-100 z-20"
                    style={{
                        background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(34,197,94,0.06), transparent 80%)`,
                    }}
                />

                <div className="flex flex-col md:flex-row h-full relative z-10">

                    {/* Left — Image Panel */}
                    <div className="relative w-full md:w-[44%] h-[32%] md:h-full overflow-hidden bg-primary">
                        <div className="absolute inset-0">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover/card:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/35 to-primary/15" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/20" />

                        {/* Stat block — top left */}
                        <div className="absolute top-5 left-5 md:top-9 md:left-9 z-10">
                            <div className="flex items-center gap-2.5 mb-2">
                                <span className="h-[2px] w-5 bg-accent" />
                                <span className="text-accent text-[9px] font-bold uppercase tracking-[0.3em]">{card.stat.label}</span>
                            </div>
                            <div className="text-white text-3xl md:text-[2.75rem] font-bold tracking-tighter leading-none">{card.stat.value}</div>
                        </div>

                        {/* Subtitle — bottom left */}
                        <div className="absolute bottom-5 left-5 right-5 md:bottom-9 md:left-9 md:right-9 z-10">
                            <div className="flex items-center gap-3">
                                <span className="h-[2px] w-8 bg-accent" />
                                <span className="text-white/60 text-[9px] font-bold uppercase tracking-[0.4em]">{card.subtitle}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right — Content Panel */}
                    <div className="relative w-full md:w-[56%] h-[68%] md:h-full bg-white">

                        {/* Accent left edge */}
                        <div className="hidden md:block absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-accent via-accent/20 to-transparent" />
                        {/* Accent top edge on mobile */}
                        <div className="md:hidden absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent/20 to-transparent" />

                        <div className="h-full flex flex-col p-6 md:pl-11 md:pr-10 md:py-9 lg:pl-12 lg:pr-11 lg:py-10">

                            {/* — Top: Label + Title — */}
                            <div>
                                <div className="flex items-center justify-between mb-3.5">
                                    <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">Service {card.id}</span>
                                    <span className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 group-hover/card:text-accent transition-colors duration-500">
                                        {card.id} / 08
                                    </span>
                                </div>
                                <h2 className="text-[1.45rem] sm:text-[1.7rem] md:text-[2rem] font-bold text-primary leading-[1.08] tracking-tighter">
                                    {card.title}
                                </h2>
                            </div>

                            {/* — Divider — */}
                            <div className="my-4 md:my-5 h-[1px] bg-gradient-to-r from-gray-200 via-gray-100 to-transparent" />

                            {/* — Middle: Description — */}
                            <p className="text-gray-500 text-[13px] md:text-[14px] leading-[1.75] font-medium flex-1 border-l-2 border-gray-100 pl-5 group-hover/card:border-accent/40 transition-colors duration-500">
                                {card.description}
                            </p>

                            {/* — Divider — */}
                            <div className="my-4 md:my-5 h-[1px] bg-gradient-to-r from-gray-200 via-gray-100 to-transparent" />

                            {/* — Bottom: Features row — */}
                            <div className="flex items-center gap-2 flex-wrap">
                                {card.features.map((f: string, i: number) => (
                                    <span
                                        key={i}
                                        className="px-3.5 py-[6px] rounded-full border border-gray-200 text-[9px] text-gray-400 uppercase tracking-[0.15em] font-bold hover:border-primary hover:text-primary hover:bg-gray-50/80 transition-all duration-300 cursor-default"
                                    >
                                        {f}
                                    </span>
                                ))}
                                {/* Arrow CTA */}
                                <div className="ml-auto w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover/card:bg-accent group-hover/card:border-accent transition-all duration-500 cursor-pointer shrink-0">
                                    <svg className="w-3.5 h-3.5 text-gray-400 group-hover/card:text-white group-hover/card:-rotate-45 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
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
