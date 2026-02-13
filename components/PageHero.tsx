'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
            delayChildren: 0.3,
        },
    },
};

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, breadcrumb, backgroundImage }) => {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.9]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section ref={heroRef} className="relative min-h-[50vh] md:min-h-[60vh] w-full overflow-hidden bg-primary flex items-end">
            {/* Parallax Background Image */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                        style={{ y: bgY, scale: bgScale }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <motion.img
                            initial={{ scale: 1.15, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                            src={backgroundImage}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <motion.div
                        style={{ opacity: overlayOpacity }}
                        className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40 z-10"
                    />
                </div>
            )}

            {/* Decorative Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute top-0 right-0 w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] z-0"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.7 }}
                className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px] z-0"
            />

            <motion.div
                style={{ y: contentY, opacity: contentOpacity }}
                className="container mx-auto px-6 md:px-12 relative z-20 pb-16 md:pb-20 pt-32 md:pt-40"
            >
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

                    {/* Title — split into words for staggered reveal */}
                    <div className="mb-4">
                        <div className="overflow-hidden">
                            <motion.h1
                                variants={textRevealVariants}
                                className="text-white font-bold tracking-tight leading-[1.1]"
                                style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
                            >
                                {title}
                            </motion.h1>
                        </div>
                    </div>

                    {/* Animated accent line */}
                    <div className="overflow-hidden mb-6">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="h-[2px] w-20 bg-accent origin-left"
                        />
                    </div>

                    {/* Subtitle */}
                    <div className="overflow-hidden">
                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }}
                            className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl font-normal"
                        >
                            {subtitle}
                        </motion.p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Accent Line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent z-30 opacity-60 origin-left"
            />
        </section>
    );
};

export default PageHero;
