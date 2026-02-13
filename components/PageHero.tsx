'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
    title: string;
    subtitle: string;
    breadcrumb: string;
    backgroundImage?: string;
}

const textRevealVariants = {
    hidden: { y: "100%" },
    visible: {
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, breadcrumb, backgroundImage }) => {
    return (
        <section className="relative min-h-[50vh] md:min-h-[60vh] w-full overflow-hidden bg-primary flex items-end">
            {/* Background Image */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 8, ease: "linear" }}
                        src={backgroundImage}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40 z-10" />
                </div>
            )}

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] z-0" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px] z-0" />

            <div className="container mx-auto px-6 md:px-12 relative z-20 pb-16 md:pb-20 pt-32 md:pt-40">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Breadcrumb */}
                    <div className="overflow-hidden mb-6">
                        <motion.div
                            variants={textRevealVariants}
                            className="flex items-center gap-3 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]"
                        >
                            <a href="/" className="hover:text-accent transition-colors">Home</a>
                            <span className="text-accent">•</span>
                            <span className="text-white/80">{breadcrumb}</span>
                        </motion.div>
                    </div>

                    {/* Title */}
                    <div className="overflow-hidden mb-4">
                        <motion.h1
                            variants={textRevealVariants}
                            className="text-white font-bold tracking-tight leading-[1.1]"
                            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
                        >
                            {title}
                        </motion.h1>
                    </div>

                    {/* Subtitle */}
                    <div className="overflow-hidden">
                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }}
                            className="text-white text-lg md:text-xl leading-relaxed max-w-2xl font-normal"
                        >
                            {subtitle}
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent z-30 opacity-40" />
        </section>
    );
};

export default PageHero;
