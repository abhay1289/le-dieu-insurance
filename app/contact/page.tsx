'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import CTA from '@/components/CTA/CTA';
import PageHero from '@/components/PageHero';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

const offices = [
    {
        city: "Bhopal",
        label: "Headquarters",
        address: "B-84, Sec-B, Shahpura, Near Lifeline Hospital, Bhopal - 462016",
        phone: "+91 0755-4294493",
        email: "bhopal@ledieuinsurance.com"
    },
    {
        city: "New Delhi",
        label: "Strategic Office",
        address: "522, 523A, Somdutt Towers-II, Bhikaji Cama Place, RK Puram, New Delhi",
        phone: "011-41038988",
        email: "delhi@ledieuinsurance.com"
    },
];

const contactMethods = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        label: "Call Us",
        value: "+91 0755-4294493",
        subtext: "Mon — Fri, 9AM to 6PM IST",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        label: "Email Us",
        value: "info@ledieuinsurance.com",
        subtext: "We respond within 24 hours",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
        ),
        label: "Visit Us",
        value: "Bhopal & New Delhi",
        subtext: "Two offices across India",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you. Our team will be in touch within 24 hours.');
    };

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-white text-primary selection:bg-primary selection:text-white">
                <ScrollProgress />
                <NavBar />

                <PageHero
                    title="Contact"
                    subtitle="Initiate a dialogue with India's premier risk architects."
                    breadcrumb="Contact"
                    backgroundImage="/images/contact-bg.jpg"
                />

                {/* Contact Methods Strip */}
                <section className="py-16 md:py-20 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="grid md:grid-cols-3 gap-px bg-gray-100 rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.02)]">
                            {contactMethods.map((method, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="bg-white p-8 md:p-10 group hover:bg-gray-50/50 transition-colors duration-500 relative overflow-hidden"
                                >
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileHover={{ height: '100%' }}
                                        transition={{ duration: 0.7 }}
                                        className="absolute top-0 left-0 w-1 bg-accent"
                                    />
                                    <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 text-primary group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-500">
                                        {method.icon}
                                    </div>
                                    <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">{method.label}</span>
                                    <h3 className="text-lg font-bold text-primary mb-1 tracking-tight">{method.value}</h3>
                                    <p className="text-gray-400 text-sm font-medium">{method.subtext}</p>
                                    <motion.div
                                        initial={{ width: '40px' }}
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.5 }}
                                        className="h-[2px] bg-accent mt-6"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Contact Section */}
                <section className="py-20 md:py-28 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(#0B1C15 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

                            {/* Left Column — Info */}
                            <div className="lg:col-span-5">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 mb-6"
                                >
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">Get In Touch</span>
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-4xl md:text-[56px] font-bold text-primary tracking-tighter leading-[0.9] mb-6"
                                >
                                    Let's Engineer<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent">Your Shield.</span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="text-gray-500 font-medium leading-relaxed text-sm md:text-base mb-10 border-l-2 border-primary/20 pl-6"
                                >
                                    We operate at the intersection of complex risk and simple solutions. Whether you're looking for a comprehensive risk audit or specific coverage, our team is ready to architect your protection.
                                </motion.p>

                                {/* Office Cards */}
                                <div className="space-y-4">
                                    {offices.map((office, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                            className="group p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent/30 hover:bg-white hover:shadow-lg transition-all duration-500"
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <span className="text-accent text-[9px] font-bold uppercase tracking-[0.3em]">{office.label}</span>
                                                    <h3 className="text-xl font-bold text-primary tracking-tight">{office.city}</h3>
                                                </div>
                                                <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                                                    <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                                </div>
                                            </div>
                                            <p className="text-gray-500 text-sm font-medium leading-relaxed mb-3">{office.address}</p>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-gray-400 font-medium">
                                                <span className="hover:text-primary cursor-pointer transition-colors">{office.phone}</span>
                                                <span className="hidden sm:block text-gray-200">•</span>
                                                <span className="hover:text-primary cursor-pointer transition-colors">{office.email}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column — Form */}
                            <div className="lg:col-span-7">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.04)] relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent/30 to-transparent" />

                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-primary tracking-tight mb-2">Start a Conversation</h3>
                                        <p className="text-gray-400 text-sm font-medium">Fill in your details and we'll respond within 24 hours.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.15em] mb-2 block">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    required
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-primary text-sm font-medium placeholder:text-gray-300 focus:outline-none focus:border-accent/50 focus:bg-white focus:shadow-sm transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.15em] mb-2 block">Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john@company.com"
                                                    required
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-primary text-sm font-medium placeholder:text-gray-300 focus:outline-none focus:border-accent/50 focus:bg-white focus:shadow-sm transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.15em] mb-2 block">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+91 98765 43210"
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-primary text-sm font-medium placeholder:text-gray-300 focus:outline-none focus:border-accent/50 focus:bg-white focus:shadow-sm transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.15em] mb-2 block">Company</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    placeholder="Company Name"
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-primary text-sm font-medium placeholder:text-gray-300 focus:outline-none focus:border-accent/50 focus:bg-white focus:shadow-sm transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.15em] mb-2 block">Service Interest</label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-primary text-sm font-medium focus:outline-none focus:border-accent/50 focus:bg-white focus:shadow-sm transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" className="text-gray-300">Select a service</option>
                                                <option value="risk-management">Risk Management</option>
                                                <option value="policy-placement">Policy Placement</option>
                                                <option value="claims-advocacy">Claims Advocacy</option>
                                                <option value="specialized-audits">Specialized Audits</option>
                                                <option value="loss-prevention">Loss Prevention</option>
                                                <option value="corporate-liability">Corporate Liability</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.15em] mb-2 block">Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={5}
                                                placeholder="Tell us about your requirements..."
                                                required
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-primary text-sm font-medium placeholder:text-gray-300 focus:outline-none focus:border-accent/50 focus:bg-white focus:shadow-sm transition-all resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-accent text-white py-4 rounded-full font-bold text-sm tracking-wide hover:bg-accent-hover transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-lg hover:scale-[1.01] transform"
                                        >
                                            Send Message
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </button>

                                        <p className="text-center text-gray-300 text-[10px] font-bold uppercase tracking-[0.2em] pt-2">
                                            Your information is secure and never shared
                                        </p>
                                    </form>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map / Global Presence Section */}
                <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">

                            <div className="max-w-xl">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 mb-6"
                                >
                                    <span className="h-px w-8 bg-accent/30" />
                                    <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em]">Our Presence</span>
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-4xl md:text-[56px] font-bold text-white tracking-tighter leading-[0.9] mb-6"
                                >
                                    Two Offices,<br />
                                    <span className="text-white/30">One Standard.</span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="text-white/50 font-medium leading-relaxed text-sm md:text-base"
                                >
                                    From our headquarters in Bhopal to our strategic office in New Delhi, we provide seamless coverage and support for enterprises across India. Every interaction upholds the same institutional standard.
                                </motion.p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 md:gap-8 w-full lg:w-auto">
                                {[
                                    { value: "2", label: "Offices" },
                                    { value: "20+", label: "Years" },
                                    { value: "Pan-India", label: "Coverage" },
                                    { value: "24hr", label: "Response" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * i, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-center p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500"
                                    >
                                        <div className="text-2xl md:text-4xl font-bold text-white tracking-tighter mb-1">{stat.value}</div>
                                        <div className="text-white/40 text-[9px] font-bold uppercase tracking-[0.25em]">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <CTA />
                <Footer />
            </div>
        </SmoothScroll>
    );
}
