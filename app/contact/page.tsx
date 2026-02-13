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
            <div className="min-h-screen bg-white text-primary selection:bg-primary selection:text-white">
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
                            <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Communication Channels</span>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
                                Let's Engineer <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gray-400">Your Shield.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-12">
                                We operate at the intersection of complex risk and simple solutions. Reach out to audit your current exposure.
                            </p>

                            <div className="space-y-8">
                                {offices.map((office, i) => (
                                    <div key={i} className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all duration-500">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{office.label}</div>
                                                <h3 className="text-2xl font-bold text-primary">{office.city}</h3>
                                            </div>
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            </div>
                                        </div>
                                        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{office.address}</p>
                                        <div className="flex flex-col gap-2 text-sm font-mono text-gray-400">
                                            <span className="hover:text-primary cursor-pointer transition-colors">{office.phone}</span>
                                            <span className="hover:text-primary cursor-pointer transition-colors">{office.email}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 relative overflow-hidden shadow-sm">
                            {/* Abstract Decorative Circles */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                                <div className="space-y-6">
                                    <div className="relative group">
                                        <label className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2 block group-focus-within:text-primary transition-colors">Identity</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-primary placeholder:text-gray-300 focus:outline-none focus:border-primary/50 focus:bg-white transition-all font-mono text-sm"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <label className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2 block group-focus-within:text-primary transition-colors">Coordinates</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-primary placeholder:text-gray-300 focus:outline-none focus:border-primary/50 focus:bg-white transition-all font-mono text-sm"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <label className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2 block group-focus-within:text-primary transition-colors">Organization</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Company Name"
                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-primary placeholder:text-gray-300 focus:outline-none focus:border-primary/50 focus:bg-white transition-all font-mono text-sm"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <label className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2 block group-focus-within:text-primary transition-colors">Objective</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            placeholder="Describe your risk profile..."
                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-primary placeholder:text-gray-300 focus:outline-none focus:border-primary/50 focus:bg-white transition-all font-mono text-sm resize-none"
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-primary text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-primary/90 hover:shadow-xl transition-all duration-300">
                                    Initiate Protocol
                                </button>

                                <p className="text-center text-gray-300 text-[10px] uppercase tracking-widest">
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
