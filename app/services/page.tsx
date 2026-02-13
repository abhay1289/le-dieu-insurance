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
        description: "Risk management is a systematic process for the careful identification and evaluation of loss exposures faced by an organization. We deploy forensic auditing protocols across your entire operational landscape to uncover hidden vulnerabilities before they escalate into costly incidents. Our methodology ensures the selection and administration of the most appropriate techniques for treating such exposures, transforming uncertainty into a structured, defensible strategy. Every assessment is backed by quantitative modeling and two decades of industrial benchmarking data.",
        features: ["Forensic Risk Audits", "Exposure Evaluation", "Loss Treatment Strategy"],
        stat: { value: "360°", label: "Exposure Mapping" },
        image: "/images/service-risk-engineering.png"
    },
    {
        id: "02",
        title: "Policy Placement",
        subtitle: "Precision Placement.",
        description: "Policy Placement is a rigorous process involving detailed risk profiling, policy analysis, portfolio rationalization, and RFQs to secure optimal coverage. We negotiate for value-based coverage across 21+ insurers, leveraging two decades of deep market relationships and proprietary benchmarking intelligence. Every quote undergoes meticulous evaluation and recommendation, followed by strategic placement and final scrutiny to ensure your coverage consistently defies standard market limitations. Our placement discipline has secured preferential terms for enterprises managing assets exceeding ₹500 crores.",
        features: ["Risk Profiling", "Portfolio Rationalization", "Competitive Bidding"],
        stat: { value: "21+", label: "Insurer Partners" },
        image: "/images/service-strategic-placement.png"
    },
    {
        id: "03",
        title: "Investment Strategy",
        subtitle: "Post-Placement Vigilance.",
        description: "Our engagement begins once your policy is scrutinized and approved — not where others end. We assist in claims management, handle endorsements, track renewals, and manage the entire renewal process with the same rigor as the initial policy placement. This continuous investment in your portfolio ensures that your coverage evolves alongside your business, maintaining relevance and maximum protection year after year. We proactively monitor market shifts and regulatory changes to recalibrate your coverage before gaps emerge.",
        features: ["Claims Assistance", "Endorsement Management", "Renewal Tracking"],
        stat: { value: "100%", label: "Renewal Oversight" },
        image: "/images/service-claims-advocacy.png"
    },
    {
        id: "04",
        title: "Specialized Services",
        subtitle: "Beyond Standard Coverage.",
        description: "We offer comprehensive specialized services including Energy Audits, Safety Reviews, Environmental and Process Audits, along with expert Claim Consultancy support. These detailed technical assessments are designed to help fully optimize your operations, ensure full regulatory compliance, and support efficient claim management. Our specialized team brings deep domain expertise to identify risks that standard brokers overlook, delivering measurable value beyond the policy document. Each audit generates actionable insights with prioritized recommendations tied to quantifiable risk reduction outcomes.",
        features: ["Energy Audits", "Safety Reviews", "Claim Consultancy"],
        stat: { value: "5x", label: "Audit Depth" },
        image: "/images/service-risk-new.jpg"
    },
    {
        id: "05",
        title: "Industry Domain Expertise",
        subtitle: "Sector-Deep Knowledge.",
        description: "We bring comprehensive insurance coverage spanning Fire, Earthquake, MBD, LOP, Burglary, Money, Fidelity, Transit, Health, PA, WC, Vehicle, Credit, Trade, and Marine lines. Our deep domain expertise across heavy industries, infrastructure, energy, healthcare, and hospitality means we understand the nuances defining each sector. We deliver coverage architectures that are precisely calibrated to your industry unique operational realities and risk profiles. This sector-specific intelligence ensures that no blind spot exists between your operations and your protection framework.",
        features: ["Multi-Line Coverage", "Sector Specialization", "Domain Risk Mapping"],
        stat: { value: "15+", label: "Coverage Lines" },
        image: "/images/service-business.png"
    },
    {
        id: "06",
        title: "Insurance Broker Services",
        subtitle: "IRDA-Licensed Excellence.",
        description: "LeDieu Insurance is IRDA-licensed, offering tailored insurance solutions backed by expert risk assessment, consultancy, and claims support. As a licensed broker, we operate with the highest regulatory standards while maintaining agility to customize solutions for every client. Our brokerage framework combines institutional credibility with personalized service, ensuring every policy placed reflects both market best practices and your specific requirements. We maintain direct relationships with underwriting desks at all major insurers, enabling faster turnarounds and preferential terms.",
        features: ["IRDA Licensed", "Risk Consultancy", "Tailored Solutions"],
        stat: { value: "20+", label: "Years Licensed" },
        image: "/images/service-strategic-placement.png"
    },
    {
        id: "07",
        title: "Risk Management — Loss Prevention",
        subtitle: "Proactive Defense.",
        description: "Post-privatization, India general insurance moved to free pricing through detariffing, allowing insurers to price by risk. Brokers now play a key role in this evolved landscape, bridging technical expertise with market access. Our loss prevention protocols are specifically engineered to reduce claim frequency and severity, transforming your risk profile from reactive to proactive — lowering premiums while strengthening your operational resilience. We conduct thorough on-site inspections and implement corrective frameworks that demonstrably improve your insurability score.",
        features: ["Loss Prevention Audits", "Risk Scoring", "Premium Optimization"],
        stat: { value: "40%", label: "Claim Reduction" },
        image: "/images/service-risk-engineering.png"
    },
    {
        id: "08",
        title: "Insurance Solutions — Support Services",
        subtitle: "End-to-End Framework.",
        description: "Our Insurance Solutions encompass Engineering, Trade, Marine, Employee Benefits, Property and Casualty covers including CAR, MBD, Health, Credit, Marine, and much beyond. We deliver a comprehensive support framework that extends from initial risk assessment through policy servicing and claims resolution. Every solution is architected to provide seamless protection across your entire operational footprint, ensuring no exposure goes unaddressed or underinsured. Our dedicated support infrastructure includes assigned account managers and round-the-clock claims response for critical incident coverage.",
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
                className="relative w-[92vw] md:w-[1200px] h-[55vh] md:h-[440px] rounded-2xl overflow-hidden transform-gpu origin-top bg-primary group/card transition-all duration-700 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_20px_60px_rgba(0,0,0,0.12)] hover:shadow-[0_1px_3px_rgba(0,0,0,0.1),0_30px_80px_rgba(0,0,0,0.18)]"
            >
                {/* Cursor glow */}
                <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-30"
                    style={{
                        background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(34,197,94,0.07), transparent 70%)`,
                    }}
                />

                {/* Full background image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/80" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
                </div>

                {/* Content layout */}
                <div className="relative z-10 h-full flex flex-col md:flex-row">

                    {/* Left — Content */}
                    <div className="w-full md:w-[55%] h-[68%] md:h-full flex flex-col justify-between p-7 md:p-10 lg:p-12">

                        {/* Top */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-7 h-[1.5px] bg-accent" />
                                <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">{card.subtitle}</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
                                {card.title}
                            </h2>
                            <p className="text-white/55 text-[13px] md:text-[13.5px] leading-[1.8] font-medium max-w-lg">
                                {card.description}
                            </p>
                        </div>

                        {/* Bottom — Tags */}
                        <div className="flex items-center gap-2 flex-wrap mt-6">
                            {card.features.map((f: string, i: number) => (
                                <span
                                    key={i}
                                    className="px-3.5 py-[5px] rounded-full border border-white/10 text-[9px] text-white/40 uppercase tracking-[0.15em] font-bold hover:border-accent/50 hover:text-accent transition-all duration-300 cursor-default backdrop-blur-sm"
                                >
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right — Visual */}
                    <div className="w-full md:w-[45%] h-[32%] md:h-full relative overflow-hidden">

                        {/* Visible image portion */}
                        <div className="absolute inset-0">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover/card:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-primary/20" />
                        </div>

                        {/* Stat overlay — bottom right */}
                        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 text-right">
                            <div className="text-white text-4xl md:text-5xl font-bold tracking-tighter leading-none mb-1">{card.stat.value}</div>
                            <div className="text-white/40 text-[9px] font-bold uppercase tracking-[0.25em]">{card.stat.label}</div>
                        </div>

                        {/* Card counter — top right */}
                        <div className="absolute top-6 right-6 md:top-10 md:right-10 z-10">
                            <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] group-hover/card:text-white/40 transition-colors duration-500">{card.id}<span className="text-white/10 mx-1">/</span>08</span>
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
