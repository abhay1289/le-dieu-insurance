'use client';

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import CTA from '@/components/CTA/CTA';
import PageHero from '@/components/PageHero';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';
import PageTransition from '@/components/PageTransition';
import AnimatedCounter from '@/components/AnimatedCounter';

const textRevealVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const offices = [
    {
        city: "Bhopal",
        label: "Headquarters",
        address: "B-84, Sec-B, Shahpura, Near Lifeline Hospital, Bhopal - 462016",
        phone: "+91 0755-4294493",
        email: "bhopal@ledieuinsurance.com",
        mapQuery: "B-84+Sec-B+Shahpura+Bhopal+462016",
        hours: "Mon – Sat, 9:30 AM – 6:30 PM",
    },
    {
        city: "New Delhi",
        label: "Strategic Office",
        address: "522, 523A, Somdutt Towers-II, Bhikaji Cama Place, RK Puram, New Delhi",
        phone: "011-41038988",
        email: "delhi@ledieuinsurance.com",
        mapQuery: "Somdutt+Towers+Bhikaji+Cama+Place+New+Delhi",
        hours: "Mon – Fri, 10:00 AM – 6:00 PM",
    },
];

function OfficeCard({ office, index }: { office: typeof offices[0]; index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            onMouseMove={handleMouseMove}
            className="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:border-accent/30"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(56,74,141,0.08), transparent 80%)`,
                }}
            />

            {/* Map */}
            <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                <iframe
                    src={`https://www.google.com/maps?q=${office.mapQuery}&output=embed&z=15`}
                    className="w-full h-full border-0 grayscale contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${office.city} Office Location`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-accent text-[9px] font-bold uppercase tracking-[0.3em] px-3 py-1.5 rounded-full border border-accent/20">{office.label}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">{office.city}</h3>
                <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <p className="text-gray-500 text-sm font-medium leading-relaxed">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <p className="text-gray-500 text-sm font-medium">{office.hours}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-primary font-medium hover:text-accent transition-colors">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        {office.phone}
                    </a>
                    <span className="text-gray-200">|</span>
                    <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-sm text-primary font-medium hover:text-accent transition-colors">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        Email
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <SmoothScroll>
            <PageTransition>
            <div className="min-h-screen bg-white text-primary selection:bg-primary selection:text-white">
                <ScrollProgress />
                <NavBar />

                <PageHero
                    title="Contact"
                    subtitle="Every great partnership begins with a conversation. We're listening."
                    breadcrumb="Contact"
                    backgroundImage="/images/about-team.png"
                />

                {/* Main Section: Form + Sidebar */}
                <section className="relative py-24 md:py-32 bg-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

                    <div className="container mx-auto px-6 md:px-12 relative z-10">

                        {/* Section Header */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="mb-16 md:mb-24"
                        >
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                                <div className="max-w-2xl">
                                    <motion.div variants={fadeUpVariants} className="flex items-center gap-4 mb-6">
                                        <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase">Reach Out</span>
                                    </motion.div>
                                    <div className="overflow-hidden">
                                        <motion.h2
                                            variants={textRevealVariants}
                                            className="text-4xl sm:text-5xl md:text-[64px] font-heading font-extrabold text-primary tracking-tight leading-[1.15]"
                                        >
                                            How Can We<br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent">Help You?</span>
                                        </motion.h2>
                                    </div>
                                </div>
                                <motion.p variants={fadeUpVariants} className="text-gray-500 font-medium leading-relaxed text-sm md:text-base max-w-md border-l-2 border-primary/20 pl-8">
                                    Whether you need a comprehensive risk audit, want to optimize existing coverage, or simply want to understand your options — our team responds within 24 hours.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Form + Sidebar */}
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">

                            {/* Form */}
                            <div className="lg:col-span-7">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {submitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="bg-gray-50 rounded-[2rem] p-12 md:p-20 text-center border border-gray-100"
                                        >
                                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <h3 className="text-3xl font-bold text-primary tracking-tight mb-3">Message Received</h3>
                                            <p className="text-gray-500 font-medium text-sm">Our team will be in touch within 24 hours.</p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="text-primary text-[11px] font-bold uppercase tracking-[0.15em] mb-2.5 block">First Name <span className="text-accent">*</span></label>
                                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John"
                                                        className="w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-primary text-base font-medium placeholder:text-gray-300 focus:outline-none focus:border-accent transition-colors" />
                                                </div>
                                                <div>
                                                    <label className="text-primary text-[11px] font-bold uppercase tracking-[0.15em] mb-2.5 block">Last Name <span className="text-accent">*</span></label>
                                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe"
                                                        className="w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-primary text-base font-medium placeholder:text-gray-300 focus:outline-none focus:border-accent transition-colors" />
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="text-primary text-[11px] font-bold uppercase tracking-[0.15em] mb-2.5 block">Work Email <span className="text-accent">*</span></label>
                                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com"
                                                        className="w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-primary text-base font-medium placeholder:text-gray-300 focus:outline-none focus:border-accent transition-colors" />
                                                </div>
                                                <div>
                                                    <label className="text-primary text-[11px] font-bold uppercase tracking-[0.15em] mb-2.5 block">Phone</label>
                                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210"
                                                        className="w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-primary text-base font-medium placeholder:text-gray-300 focus:outline-none focus:border-accent transition-colors" />
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="text-primary text-[11px] font-bold uppercase tracking-[0.15em] mb-2.5 block">Company</label>
                                                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name"
                                                        className="w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-primary text-base font-medium placeholder:text-gray-300 focus:outline-none focus:border-accent transition-colors" />
                                                </div>
                                                <div>
                                                    <label className="text-primary text-[11px] font-bold uppercase tracking-[0.15em] mb-2.5 block">I'm Interested In</label>
                                                    <select name="service" value={formData.service} onChange={handleChange}
                                                        className="w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-primary text-base font-medium focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                                                        <option value="">Select a service</option>
                                                        <option value="risk-management">Risk Management</option>
                                                        <option value="policy-placement">Policy Placement & Negotiation</option>
                                                        <option value="claims-advocacy">Claims Advocacy</option>
                                                        <option value="specialized-audits">Specialized Risk Audits</option>
                                                        <option value="loss-prevention">Loss Prevention Engineering</option>
                                                        <option value="corporate-liability">Corporate Liability</option>
                                                        <option value="employee-benefits">Employee Benefits</option>
                                                        <option value="general-inquiry">General Inquiry</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-primary text-[11px] font-bold uppercase tracking-[0.15em] mb-2.5 block">Message <span className="text-accent">*</span></label>
                                                <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Tell us about your organization and what you're looking to protect..."
                                                    className="w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-primary text-base font-medium placeholder:text-gray-300 focus:outline-none focus:border-accent transition-colors resize-none" />
                                            </div>
                                            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                                <button type="submit"
                                                    className="bg-accent text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-accent-hover transition-all duration-300 flex items-center gap-3 hover:scale-[1.02] transform shadow-lg shadow-accent/20">
                                                    Send Message
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                                </button>
                                                <p className="text-gray-400 text-xs font-medium leading-relaxed max-w-[220px]">
                                                    We typically respond within one business day.
                                                </p>
                                            </div>
                                        </form>
                                    )}
                                </motion.div>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-5">
                                <div className="lg:sticky lg:top-32 space-y-6">
                                    {/* Direct Contact Card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                        className="p-6 md:p-8 rounded-[2rem] bg-primary text-white relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
                                        <div className="relative z-10">
                                            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] block mb-4">Direct Line</span>
                                            <h3 className="text-2xl font-bold tracking-tight mb-6">Prefer to talk? Call us directly.</h3>
                                            <div className="space-y-4">
                                                <a href="tel:+917554294493" className="flex items-center gap-4 group/link">
                                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-accent group-hover/link:text-white transition-colors">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                                    </div>
                                                    <div>
                                                        <div className="text-white font-medium text-sm">+91 0755-4294493</div>
                                                        <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Bhopal HQ</div>
                                                    </div>
                                                </a>
                                                <a href="tel:01141038988" className="flex items-center gap-4 group/link">
                                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-accent group-hover/link:text-white transition-colors">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                                    </div>
                                                    <div>
                                                        <div className="text-white font-medium text-sm">011-41038988</div>
                                                        <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">New Delhi</div>
                                                    </div>
                                                </a>
                                                <a href="mailto:info@ledieuinsurance.com" className="flex items-center gap-4 group/link">
                                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-accent group-hover/link:text-white transition-colors">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                    </div>
                                                    <div>
                                                        <div className="text-white font-medium text-sm">info@ledieuinsurance.com</div>
                                                        <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">General Inquiries</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Stats */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                        className="grid grid-cols-2 gap-4"
                                    >
                                        {[
                                            { value: "24hr", label: "Response Time" },
                                            { value: "20+", label: "Years Active" },
                                            { value: "99%", label: "Retention Rate" },
                                            { value: "21+", label: "Insurer Partners" },
                                        ].map((stat, i) => (
                                            <div key={i} className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md hover:border-accent/20 transition-all duration-500 text-center">
                                                <AnimatedCounter value={stat.value} className="text-2xl font-bold text-primary tracking-tighter mb-1 block" />
                                                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Offices with Maps */}
                <section className="py-24 md:py-32 bg-[#FAFBFB] border-t border-gray-100 relative overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8">
                            <div className="max-w-2xl">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 mb-6"
                                >
                                    <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase">Our Offices</span>
                                </motion.div>
                                <div className="overflow-hidden">
                                    <motion.h2
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-4xl sm:text-5xl md:text-[64px] font-heading font-extrabold text-primary tracking-tight leading-[1.15]"
                                    >
                                        Visit Us
                                    </motion.h2>
                                </div>
                            </div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-500 font-medium leading-relaxed text-sm md:text-base max-w-sm border-l-2 border-primary/20 pl-8"
                            >
                                Two offices. One standard of excellence. Walk in or schedule a meeting — we'd love to meet face to face.
                            </motion.p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            {offices.map((office, i) => (
                                <OfficeCard key={i} office={office} index={i} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Full-width Map */}
                <section className="relative">
                    <div className="h-[400px] md:h-[500px] w-full relative group">
                        <iframe
                            src="https://www.google.com/maps?q=Le+Dieu+Insurance+Brokers+Bhopal&output=embed&z=5"
                            className="w-full h-full border-0 grayscale-[0.3] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Le Dieu Insurance — India Presence"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none opacity-60" />
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="absolute bottom-8 left-6 md:left-12 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-gray-100 max-w-xs"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Pan-India Coverage</span>
                            </div>
                            <p className="text-primary text-sm font-bold tracking-tight">Bhopal · New Delhi</p>
                            <p className="text-gray-500 text-xs font-medium mt-1">Serving enterprises across all 28 states</p>
                        </motion.div>
                    </div>
                </section>

                <CTA />
                <Footer />
            </div>
            </PageTransition>
        </SmoothScroll>
    );
}
