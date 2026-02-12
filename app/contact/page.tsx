'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
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

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Transmission Received. Our engineers will decode your requirements.');
    };

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
                <ScrollProgress />
                <NavBar />

                <PageHero
                    title="Connect"
                    subtitle="Initiate a dialogue with India's premier risk architects."
                    breadcrumb="Contact"
                    backgroundImage="/images/contact-bg.jpg"
                />

                <div className="relative z-10 container mx-auto px-6 md:px-12 py-24 md:py-32">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Sticky Left Column */}
                        <div className="lg:sticky lg:top-32 h-fit">
                            <span className="text-white text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Communication Channels</span>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
                                Let's Engineer <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white">Your Shield.</span>
                            </h2>
                            <p className="text-white/50 text-lg leading-relaxed max-w-md mb-12">
                                We operate at the intersection of complex risk and simple solutions. Reach out to audit your current exposure.
                            </p>

                            <div className="space-y-8">
                                {offices.map((office, i) => (
                                    <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/30 hover:bg-white/10 transition-all duration-500">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <div className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{office.label}</div>
                                                <h3 className="text-2xl font-bold">{office.city}</h3>
                                            </div>
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            </div>
                                        </div>
                                        <p className="text-white/60 text-sm mb-4 leading-relaxed">{office.address}</p>
                                        <div className="flex flex-col gap-2 text-sm font-mono text-white/40">
                                            <span className="hover:text-white cursor-pointer transition-colors">{office.phone}</span>
                                            <span className="hover:text-white cursor-pointer transition-colors">{office.email}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="bg-black p-8 md:p-12 rounded-[3rem] border border-white/5 relative overflow-hidden">
                            {/* Abstract Decorative Circles */}
                            <div className="absolute inset-0">
                                <img
                                    src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2670&auto=format&fit=crop"
                                    alt="Support"
                                    className="w-full h-full object-cover opacity-20 filter grayscale brightness-50"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
                            </div>
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                                <div className="space-y-6">
                                    <div className="relative group">
                                        <label className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">Identity</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all font-mono text-sm"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <label className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">Coordinates</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all font-mono text-sm"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <label className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">Organization</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Company Name"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all font-mono text-sm"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <label className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">Objective</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            placeholder="Describe your risk profile..."
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all font-mono text-sm resize-none"
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-white text-black py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300">
                                    Initiate Protocol
                                </button>

                                <p className="text-center text-white/30 text-[10px] uppercase tracking-widest">
                                    Encrypted Transmission • 256-Bit SSL
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </SmoothScroll>
    );
}
