'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import PageHero from '@/components/PageHero';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

const FactoryIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" /><path d="M3 20v-8l10-4v4l7-3v11" /><path d="M8 12v3" /><path d="M11 12v3" /><path d="M14 12v3" /><path d="M17 12v3" />
    </svg>
);

const CraneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22h18" /><path d="M6 22V5l12 4v3" /><path d="M9 22V7l4 2v3" /><path d="M5 10l4-2" /><path d="M17 12v10" /><path d="M12 22v-8" /><path d="M18 9l3 1" />
    </svg>
);

const BoltIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
);

const BriefcaseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

const StethoscopeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /><path d="M12 16v4" /><path d="M8 20h8" /><path d="M3 5h4v1.4a3 3 0 0 1-3 3H3z" /><path d="M21 5h-4v1.4a3 3 0 0 0 3 3h1z" />
    </svg>
);

const BedIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
    </svg>
);



const industrySolutions = [
    {
        id: "manufacturing",
        title: "Heavy Industries",
        subtitle: "Zero-Downtime Protection",
        icon: <FactoryIcon />,
        description: "Heavy manufacturing demands a risk strategy as robust as the assets it protects. In an environment where a single component failure can halt a nationwide supply chain, insurance must be proactive rather than reactive. We specialize in deep-tier industrial risk engineering, analyzing thermal signatures, structural integrity, and logistical dependencies to uncover vulnerabilities before they manifest as downtime. Our frameworks integrate complex business interruption triggers with machinery breakdown coverage, ensuring that your financial chassis remains stable even during black-swan events. By stress-testing your operational exposure against global market volatility and technical failures, we build a multi-layered safety net that shields your profitability and enables aggressive industrial growth. We don't just place policies; we architect resilience for the heavy industries that form the backbone of the nation's economic future and technological advancement.",
        longDescription: "Our Industrial All Risk (IAR) frameworks are specifically engineered for the Indian manufacturing landscape. We don't just place policies; we conduct deep-dive technical audits to ensure that every unique operational risk—from boilerplate explosions to intricate supply chain disruptions—is accounted for and neutralized.",
        features: [
            { icon: "⚙️", title: "Asset Resilience", text: "End-to-end protection for plant, machinery, and physical assets." },
            { icon: "📉", title: "Profit Continuity", text: "Advanced loss of profit modeling to shield your balance sheet." }
        ],
        coverages: ["Industrial All Risk", "Business Interruption", "Machinery Breakdown", "LOP (Loss of Profits)"],
        hexColor: "rgba(249, 115, 22, 0.08)",
        image: "/images/solutions-heavy-industries.png"
    },
    {
        id: "infrastructure",
        title: "Mega Projects",
        subtitle: "Foundation to Finish",
        icon: <CraneIcon />,
        description: "Engineering mega-projects requires a risk management foundation as solid as the concrete and steel in your bridges and tunnels. From the first ground-breaking ceremony to the final ribbon-cutting, we provide surgical, end-to-end coverage for the civil engineering marvels that drive national progress. Our focus is on protecting your enterprise against the high-stakes volatility of project delays, material damage, and complex third-party liabilities during lifecycle transitions. We understand the unique challenges of EPC contracts, regulatory shifts, and environmental impact assessments in infrastructure development. By building bespoke risk transfer mechanisms, we shield your capital and your reputation from the unforeseen geological and financial tremors that can destabilize even the most ambitious projects. We ensure that your engineers and project managers can focus on building the future with absolute confidence, while we manage the invisible forces that threaten project completion.",
        longDescription: "Managing the risk of a multi-billion dollar infrastructure project requires more than standard insurance. It requires an understanding of EPC contracts, geological uncertainties, and regulatory shifting. We provide the financial bedrock that allows engineers to focus on building the future of India.",
        features: [
            { icon: "🏗️", title: "CAR/EAR Mastery", text: "Comprehensive Contractor's and Erector's All Risk frameworks." },
            { icon: "⏰", title: "ALOP Protection", text: "Shielding against financial losses due to project delays (Advanced LOP)." }
        ],
        coverages: ["Contractor's All Risk", "Marine Cargo (Daly)", "Professional Indemnity", "Third Party Liability"],
        hexColor: "rgba(34, 197, 94, 0.08)",
        image: "/images/solutions-mega-projects.png"
    },
    {
        id: "specialized",
        title: "Power & Energy",
        subtitle: "Grid Reliability",
        icon: <BoltIcon />,
        description: "As the energy landscape undergoes a radical transition toward a more complex and decentralized grid, traditional risk models are becoming obsolete. Whether you are managing the base-load stability of a thermal giant or the weather-dependent volatility of a massive renewable energy park, your risk transfer mechanism must be as dynamic as the power you generate. We architect specialized 'Mega Risk' policies that guard against grid interruptions, internal technical failures, and the rising frequency of natural catastrophes affecting global energy infrastructure. Our engineering-led approach ensures that every kilowatt—from hydro-pumping stations to wind turbine arrays—is protected by a resilient financial chassis. We empower you to lead the green transition with confidence, knowing that your operational uptime and environmental liabilities are managed by elite risk engineers who understand the intricate physics of the sector and the evolving regulatory landscape of the energy market.",
        longDescription: "As India transitions towards a greener grid, the risks associated with energy production are decoupling from traditional models. Whether it's managing the volatility of renewable assets or ensuring the stability of thermal giants, we provide specialized 'Mega Risk' policies that cover every kilowatt generated.",
        features: [
            { icon: "⚡", title: "Mega Risk Cover", text: "Custom-built frameworks for high-value power generation units." },
            { icon: "☀️", title: "Renewable Assets", text: "Specific coverage for solar parks and wind energy installations." }
        ],
        coverages: ["Mega Risk Policy", "Environmental Liability", "Terrorism Cover", "Grid Interruption"],
        hexColor: "rgba(234, 179, 8, 0.08)",
        image: "/images/solutions-power-energy.png"
    },
    {
        id: "corporate",
        title: "Corporate Liability",
        subtitle: "Executive Resilience",
        icon: <BriefcaseIcon />,
        description: "In an era characterized by rising litigiousness and sophisticated digital warfare, corporate decision-makers face an unprecedented landscape of professional exposure. We act as the strategic architect for your organization's reputation, shielding the collective intellect and financial health of the company from modern vectors of failure. Our liability solutions protect Directors and Officers from personal ruin while simultaneously fortifying the corporate balance sheet against cyber ransomware, systemic data breaches, and errors in professional judgment. We move beyond the standard fine print to build a sophisticated fortress around your boardroom, ensuring that your leadership can navigate complex regulatory environments and high-stakes transitions without the paralyzing fear of crippling litigation or reputational collapse. We treat your corporate governance as an asset to be protected with the highest level of care and elite underwriting globally.",
        longDescription: "In an era of rising litigation and digital warfare, corporate leaders face unprecedented personal and professional exposure. Our liability solutions act as a sophisticated shield, ensuring that board decisions and digital assets are protected by the world's leading 'A' rated underwriters.",
        features: [
            { icon: "👤", title: "D&O Shield", text: "Protecting Directors and Officers from personal liability claims." },
            { icon: "💻", title: "Cyber Fortress", text: "Response-first coverage for data breaches and ransomware threats." }
        ],
        coverages: ["Directors & Officers", "Cyber Liability", "Professional Indemnity", "Crime & Fraud"],
        hexColor: "rgba(168, 85, 247, 0.08)",
        image: "/images/solutions-corporate-fleet.png"
    },
    {
        id: "healthcare",
        title: "Healthcare",
        subtitle: "Clinical Excellence",
        icon: <StethoscopeIcon />,
        description: "Operating a state-of-the-art healthcare institution requires managing a delicate duality: the maintenance of cutting-edge diagnostic infrastructure and the protection of sensitive human lives. Our healthcare risk protocols are built on a foundation of clinical excellence and patient-centric safety standards. We design specialized medical malpractice and equipment breakdown frameworks that prioritize operational continuity above all else. In a landscape where a single clinical error can trigger a microscopic audit of your entire enterprise, we provide the financial and legal bedrock necessary to keep your facility focused on healing. From shielding your high-value MRI and robotic surgical suites from technical failure to managing the complex liabilities of clinical trials and data privacy, our bespoke solutions ensure that your hospital remains a trusted pillar of the community, safe from the volatile financial shocks of modern healthcare litigation and technological breakdown.",
        longDescription: "The healthcare sector operates under a microscopic lens of accountability. We help medical institutions manage the duality of high-tech equipment risks and sensitive human-centric liabilities, providing a foundation for clinical excellence without the fear of crippling litigation.",
        features: [
            { icon: "🏥", title: "Medical Malpractice", text: "Dedicated coverage for healthcare professionals and entities." },
            { icon: "🔬", title: "Equipment Safety", text: "Protection for high-value diagnostic and surgical infrastructure." }
        ],
        coverages: ["Medical Malpractice", "Equipment Breakdown", "Public Liability", "Clinical Trial Cover"],
        hexColor: "rgba(100, 116, 139, 0.08)",
        image: "/images/solutions-healthcare.png"
    },
    {
        id: "hospitality",
        title: "Guest Assurance",
        subtitle: "Elite Hospitality",
        icon: <BedIcon />,
        description: "Building a globally recognized hospitality brand takes decades of meticulous service and brand building, yet a single incident can tarnish that reputation in hours. We specialize in creating 360-degree safety nets for premium hotel chains and boutique resorts that prioritize both guest assurance and asset resilience. Our frameworks cover the physical grandeur of your properties against fire, theft, and natural disasters while ensuring that your guests' safety and your brand's integrity remains unshakeable. We manage the intricate liabilities inherent in specialty food services, liquor protocols, and public accessibility, providing a seamless layer of protection that operates invisibly in the background. By shielding your assets from loss and your operation from business interruption, we allow you to focus on the art of luxury and guest satisfaction, knowing that your financial future is secured against the unique volatility and challenges of the global tourism industry.",
        longDescription: "A single incident can tarnish a decade of reputation building in the hospitality trade. We create a 360-degree safety net that covers the physical grandeur of your properties while ensuring that your guests' safety and your brand's integrity remain unshakeable.",
        features: [
            { icon: "🏨", title: "Property All Risk", text: "Shielding iconic hospitality assets from fire, flood, and theft." },
            { icon: "🥂", title: "Guest Indemnity", text: "Comprehensive liability for guest accidents and hospitality errors." }
        ],
        coverages: ["Property All Risk", "Guest Liability", "Food & Liquor Liability", "Fidelity Guarantee"],
        hexColor: "rgba(244, 63, 94, 0.08)",
        image: "/images/solutions-hospitality.png"
    },
];

const processSteps = [
    {
        step: "01",
        title: "Discovery",
        description: "Deep-dive workshops to unearth hidden exposure vectors.",
    },
    {
        step: "02",
        title: "Analysis",
        description: "Quantitative stress-testing of your current risk portfolio.",
    },
    {
        step: "03",
        title: "Design",
        description: "Architecting a bespoke transfer mechanism with 21+ insurers.",
    },
    {
        step: "04",
        title: "Execution",
        description: "Seamless policy placement and SLA-backed service delivery.",
    },
];

export default function SolutionsPage() {
    const [activeCategory, setActiveCategory] = useState<string | null>("manufacturing");

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-white text-primary selection:bg-primary selection:text-white">
                <ScrollProgress />
                <NavBar />

                <PageHero
                    title="Solutions"
                    subtitle="Bespoke risk transfer mechanisms for the industries that power India's economy."
                    breadcrumb="Solutions"
                    backgroundImage="/images/service-business.png"
                />

                {/* Premium Vertical Accordion Solutions */}
                <section className="py-24 md:py-32 bg-white relative overflow-hidden">
                    {/* Background Texture */}
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.3] pointer-events-none" />

                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        <div className="max-w-7xl mx-auto">
                            {industrySolutions.map((solution, index) => {
                                const isActive = activeCategory === solution.id;

                                return (
                                    <div
                                        key={solution.id}
                                        className={`border-b border-gray-100 transition-all duration-700 ${isActive ? 'pb-20 pt-10' : 'py-8'}`}
                                    >
                                        <button
                                            onClick={() => setActiveCategory(activeCategory === solution.id ? null : solution.id)}
                                            className="w-full flex items-center justify-between group text-left"
                                        >
                                            <div className="flex items-center gap-8">
                                                <span className={`text-sm font-bold font-mono tracking-widest transition-colors duration-500 ${isActive ? 'text-accent' : 'text-gray-300'}`}>
                                                    0{index + 1}
                                                </span>
                                                <h2 className={`text-3xl md:text-7xl font-bold tracking-tighter transition-all duration-700 ${isActive ? 'text-primary scale-105 origin-left' : 'text-gray-900/40 group-hover:text-primary group-hover:translate-x-4'}`}>
                                                    {solution.title}
                                                </h2>
                                            </div>
                                            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-100 flex items-center justify-center transition-all duration-700 ${isActive ? 'bg-primary border-primary rotate-45' : 'bg-white group-hover:border-primary'}`}>
                                                <svg className={`w-6 h-6 transition-colors duration-700 ${isActive ? 'text-white' : 'text-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </div>
                                        </button>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="relative grid lg:grid-cols-2 gap-12 md:gap-20 pt-16 pb-12">

                                                        {/* Left Column: Strategic Narrative */}
                                                        <div className="flex flex-col space-y-12 h-full">
                                                            <div>
                                                                <motion.div
                                                                    initial={{ opacity: 0, x: -20 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: 0.3 }}
                                                                    className="flex items-center gap-4 mb-10"
                                                                >
                                                                    <span className="h-[2px] w-12 bg-accent" />
                                                                    <span className="text-accent text-[12px] font-bold uppercase tracking-[0.5em]">{solution.subtitle}</span>
                                                                </motion.div>

                                                                <motion.h3
                                                                    initial={{ opacity: 0, y: 20 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.4 }}
                                                                    className="text-lg md:text-2xl text-primary font-bold leading-[1.4] mb-10 tracking-tight max-w-lg"
                                                                >
                                                                    {solution.description}
                                                                </motion.h3>
                                                            </div>

                                                            <motion.div
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                transition={{ delay: 0.5 }}
                                                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                                            >
                                                                {solution.features.map((feature, fi) => (
                                                                    <div key={fi} className="p-8 rounded-[3rem] bg-gray-50 border border-gray-100 hover:border-accent/30 hover:bg-white transition-all duration-500 group/item shadow-sm hover:shadow-xl">
                                                                        <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-3xl mb-6 group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-500 shadow-sm">
                                                                            {feature.icon}
                                                                        </div>
                                                                        <h4 className="text-xl font-bold text-primary mb-3">{feature.title}</h4>
                                                                        <p className="text-slate-500 text-sm leading-tight font-medium">{feature.text}</p>
                                                                    </div>
                                                                ))}
                                                            </motion.div>
                                                        </div>

                                                        {/* Right Column: Visual & Technical */}
                                                        <div className="relative">
                                                            <motion.div
                                                                initial={{ scale: 0.95, opacity: 0 }}
                                                                animate={{ scale: 1, opacity: 1 }}
                                                                transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                                                className="relative group/img"
                                                            >
                                                                {/* Image Container with Scanning Effect */}
                                                                <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl border-[12px] border-white">
                                                                    <img
                                                                        src={solution.image}
                                                                        alt={solution.title}
                                                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                                                    {/* Holographic Scan Line */}
                                                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent h-20 w-full animate-scan pointer-events-none" />

                                                                    <div className="absolute bottom-10 left-10 right-10">
                                                                        <div className="flex items-center gap-3 mb-4">
                                                                            <div className="px-3 py-1 bg-accent rounded text-[9px] font-bold text-white uppercase tracking-widest">Live Analysis</div>
                                                                            <div className="h-px flex-1 bg-white/20" />
                                                                        </div>
                                                                        <h4 className="text-3xl font-bold text-white tracking-tighter mb-2">
                                                                            {solution.title} <span className="text-accent underline decoration-2 underline-offset-8">Vector</span>
                                                                        </h4>
                                                                        <p className="text-white/60 text-xs font-medium tracking-wide">
                                                                            Optimizing risk transfer mechanisms based on {solution.id} market volatility metrics.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Engagement Protocol */}
                <section className="py-24 md:py-40 bg-white border-t border-gray-100 relative overflow-hidden">
                    {/* Ambient Glows */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        <div className="mb-24 text-center max-w-3xl mx-auto">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-accent text-[11px] font-bold uppercase tracking-[0.4em]"
                            >
                                The Protocol
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-bold text-primary mt-6 tracking-tighter leading-[0.9]"
                            >
                                Engagement <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gray-400">Lifecycle</span>
                            </motion.h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">

                            {processSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative group text-center md:text-left"
                                >
                                    <div className="w-20 h-20 rounded-3xl bg-white border border-gray-100 group-hover:border-primary group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center font-bold text-2xl transition-all duration-700 relative z-10 mb-10 mx-auto md:mx-0 shadow-sm group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
                                        {step.step}
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight group-hover:text-primary transition-colors">{step.title}</h3>
                                    <p className="text-slate-600 text-base leading-tight font-semibold">
                                        {step.description}
                                    </p>

                                    {/* Mobile/Tablet Step Indicator Line */}
                                    {i < processSteps.length - 1 && (
                                        <div className="lg:hidden w-px h-12 bg-gray-100 mx-auto md:mx-0 mt-8" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </SmoothScroll>
    );
}
