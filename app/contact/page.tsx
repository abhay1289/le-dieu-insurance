'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import PageHero from '@/components/PageHero';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

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

const textRevealVariants = {
    hidden: { y: "100%" },
    visible: {
        y: 0,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
};

const offices = [
    {
        city: "Bhopal",
        label: "Corporate Headquarters",
        address: "B-84, Sec-B, Shahpura, Near Lifeline Hospital, Bhopal - 462016, Madhya Pradesh",
        phone: "+91 0755-4294493",
        mobile: "+91 98260 68043",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8!2d77.4!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEyJzAwLjAiTiA3N8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1",
    },
    {
        city: "New Delhi",
        label: "Branch Office",
        address: "522, 523A, Somdutt Towers-II, Bhikaji Cama Place, RK Puram, New Delhi",
        phone: "011-41038988",
        mobile: "+91 98990 62737",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2!2d77.18!3d28.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzEyLjAiTiA3N8KwMTAnNDguMCJF!5e0!3m2!1sen!2sin!4v1",
    },
];

const contactMethods = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
        label: "Email Us",
        value: "info@ledieuinsurance.com",
        href: "mailto:info@ledieuinsurance.com",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
        label: "Call Us",
        value: "+91 98990 62737",
        href: "tel:+919899062737",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        label: "Business Hours",
        value: "Mon-Fri: 8AM - 6PM",
        href: "#",
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
        // Form submission logic
        alert('Thank you for your inquiry! Our team will get back to you within 24 hours.');
    };

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-white">
                <ScrollProgress />
                <NavBar />

                <PageHero
                    title="Contact Us"
                    subtitle="Get expert insurance advice from India's trusted IRDA-licensed broker. Reach our offices in Bhopal and New Delhi for personalized risk management solutions."
                    breadcrumb="Contact"
                />

                {/* Contact Methods Bar */}
                <section className="py-0 bg-white -mt-1">
                    <div className="container mx-auto px-6 md:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                            className="grid md:grid-cols-3 bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-2xl shadow-black/5 border border-gray-100 overflow-hidden -mt-12 relative z-30"
                        >
                            {contactMethods.map((method, i) => (
                                <motion.a
                                    key={i}
                                    href={method.href}
                                    variants={fadeUpVariants}
                                    className={`group p-6 md:p-8 flex items-center gap-5 hover:bg-primary transition-all duration-500 ${i < contactMethods.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''
                                        } border-gray-100`}
                                >
                                    <div className="w-12 h-12 rounded-full bg-gray-50 group-hover:bg-accent/20 flex items-center justify-center text-primary group-hover:text-accent transition-all duration-500 flex-shrink-0">
                                        {method.icon}
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-white/40 mb-1 transition-colors duration-500">
                                            {method.label}
                                        </div>
                                        <div className="text-primary group-hover:text-white font-bold text-sm tracking-tight transition-colors duration-500">
                                            {method.value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Contact Form & Info */}
                <section className="py-16 md:py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                            {/* Left - Form */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                            >
                                <motion.div variants={fadeUpVariants} className="flex items-center gap-4 mb-4 md:mb-8">
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">Get in Touch</span>
                                </motion.div>
                                <div className="overflow-hidden mb-4">
                                    <motion.h2
                                        variants={textRevealVariants}
                                        className="text-primary text-4xl sm:text-5xl font-bold tracking-tighter leading-[0.95]"
                                    >
                                        Request a Free
                                    </motion.h2>
                                </div>
                                <div className="overflow-hidden mb-8">
                                    <motion.h2
                                        variants={textRevealVariants}
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent text-4xl sm:text-5xl font-bold tracking-tighter leading-[0.95]"
                                    >
                                        Risk Assessment
                                    </motion.h2>
                                </div>

                                <motion.form
                                    variants={fadeUpVariants}
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Full Name *</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-primary text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Email Address *</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-primary text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Phone Number</label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-primary text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                                                placeholder="+91 XXXXX XXXXX"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Company Name</label>
                                            <input
                                                id="company"
                                                name="company"
                                                type="text"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-primary text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                                                placeholder="Your company"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Service Required</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-primary text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all appearance-none"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="risk-management">Risk Management</option>
                                            <option value="policy-placement">Policy Placement</option>
                                            <option value="claims-support">Claims Support</option>
                                            <option value="energy-audit">Energy Audit</option>
                                            <option value="safety-review">Safety Review</option>
                                            <option value="general-inquiry">General Inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Your Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-primary text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                                            placeholder="Tell us about your insurance requirements..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-accent hover:text-primary transition-all duration-300 shadow-lg shadow-primary/10 active:scale-95"
                                    >
                                        Submit Inquiry
                                    </button>
                                </motion.form>
                            </motion.div>

                            {/* Right - Office Info */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="space-y-6"
                            >
                                {offices.map((office, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeUpVariants}
                                        className="group bg-gray-50 hover:bg-primary rounded-[1.5rem] p-8 md:p-10 transition-all duration-500 overflow-hidden relative"
                                    >
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 group-hover:bg-accent/10 rounded-full blur-[40px] transition-all duration-500" />
                                        <div className="relative z-10">
                                            <div className="flex items-start justify-between mb-6">
                                                <div>
                                                    <div className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{office.label}</div>
                                                    <h3 className="text-primary group-hover:text-white text-2xl font-bold tracking-tight transition-colors duration-500">{office.city}</h3>
                                                </div>
                                                <div className="w-12 h-12 rounded-full bg-white group-hover:bg-white/10 flex items-center justify-center transition-all duration-500">
                                                    <svg className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed mb-4 transition-colors duration-500">
                                                {office.address}
                                            </p>

                                            <div className="space-y-2">
                                                <div className="flex items-center gap-3">
                                                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                    </svg>
                                                    <span className="text-primary group-hover:text-white font-medium text-sm transition-colors duration-500">{office.phone}</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                                    </svg>
                                                    <span className="text-primary group-hover:text-white font-medium text-sm transition-colors duration-500">{office.mobile}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Quick Info Card */}
                                <motion.div
                                    variants={fadeUpVariants}
                                    className="bg-gradient-to-br from-primary via-primary to-primary/95 rounded-[1.5rem] p-8 md:p-10 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-[40px]" />
                                    <div className="relative z-10">
                                        <div className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Response Time</div>
                                        <h3 className="text-white text-2xl font-bold tracking-tight mb-3">We Reply Within 24 Hours</h3>
                                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                                            Our dedicated team ensures every inquiry receives a prompt, detailed response — because your coverage can&apos;t wait.
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <a
                                                href="mailto:info@ledieuinsurance.com"
                                                className="bg-accent text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-accent-hover transition-all duration-300 active:scale-95"
                                            >
                                                Email Us Now
                                            </a>
                                            <a
                                                href="tel:+919899062737"
                                                className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all duration-300"
                                            >
                                                Call Now
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Business Hours */}
                <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="text-center mb-12"
                        >
                            <motion.div variants={fadeUpVariants} className="flex items-center justify-center gap-4 mb-4">
                                <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">Availability</span>
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.h2
                                    variants={textRevealVariants}
                                    className="text-primary text-3xl md:text-4xl font-bold tracking-tighter"
                                >
                                    Business Hours
                                </motion.h2>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                            className="max-w-2xl mx-auto"
                        >
                            {[
                                { day: "Monday", hours: "08:00 AM – 06:00 PM", active: true },
                                { day: "Tuesday", hours: "08:00 AM – 06:00 PM", active: true },
                                { day: "Wednesday", hours: "02:00 PM – 08:00 PM", active: true },
                                { day: "Thursday", hours: "08:00 AM – 08:00 PM", active: true },
                                { day: "Friday", hours: "08:00 AM – 04:00 PM", active: true },
                                { day: "Saturday", hours: "Closed", active: false },
                                { day: "Sunday", hours: "Closed", active: false },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUpVariants}
                                    className={`flex justify-between items-center py-4 px-6 ${i < 6 ? 'border-b border-gray-200' : ''
                                        } ${!item.active ? 'opacity-40' : ''}`}
                                >
                                    <span className="text-primary font-bold text-sm">{item.day}</span>
                                    <span className={`text-sm font-medium ${item.active ? 'text-accent' : 'text-gray-400'}`}>{item.hours}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </SmoothScroll>
    );
}
