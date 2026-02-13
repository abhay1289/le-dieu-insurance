'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PageHeroProps {
    title: string;
    subtitle: string;
    breadcrumb: string;
    backgroundImage?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, breadcrumb, backgroundImage }) => {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    // Parallax layers
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.85]);

    // Split title into words for staggered animation
    const titleWords = title.split(' ');

    return (
        <section
            ref={heroRef}
            className="relative h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-screen w-full overflow-hidden bg-primary"
        >
            {/* === PARALLAX BACKGROUND === */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                        style={{ y: bgY, scale: bgScale }}
                        className="absolute inset-[-10%] w-[120%] h-[120%]"
                    >
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            src={backgroundImage}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Multi-layer overlay for depth */}
                    <motion.div
                        style={{ opacity: overlayOpacity }}
                        className="absolute inset-0 bg-primary z-[1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30 z-[2]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-transparent z-[2]" />
                </div>
            )}

            {/* === CONTENT === */}
            <motion.div
                style={{ y: contentY, opacity: contentOpacity }}
                className="relative z-10 h-full flex flex-col justify-end"
            >
                <div className="container mx-auto px-6 md:px-12 pb-12 sm:pb-16 md:pb-20 lg:pb-28">

                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-3 mb-6 sm:mb-8 md:mb-10"
                    >
                        <a href="/" className="text-white/40 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] hover:text-accent transition-colors duration-300">Home</a>
                        <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="h-[1px] w-6 sm:w-8 bg-accent origin-left"
                        />
                        <span className="text-white/80 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em]">{breadcrumb}</span>
                    </motion.div>

                    {/* Title — word-by-word reveal */}
                    <div className="mb-5 sm:mb-6 md:mb-8">
                        <h1 className="flex flex-wrap gap-x-[0.25em]">
                            {titleWords.map((word, i) => (
                                <span key={i} className="overflow-hidden block">
                                    <motion.span
                                        initial={{ y: '110%', rotateX: -40 }}
                                        animate={{ y: 0, rotateX: 0 }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.4 + i * 0.08,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="block text-white font-bold tracking-tighter leading-[1] text-[clamp(3rem,10vw,7.5rem)]"
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                        </h1>
                    </div>

                    {/* Divider + Subtitle row */}
                    <div className="flex flex-col md:flex-row md:items-end gap-5 md:gap-10 lg:gap-16">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="h-[2px] w-16 md:w-20 bg-accent origin-left flex-shrink-0 hidden md:block mt-1"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-medium"
                        >
                            {subtitle}
                        </motion.p>
                    </div>
                </div>

                {/* === BOTTOM BAR === */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="border-t border-white/[0.08]"
                >
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="flex items-center justify-between py-4 sm:py-5 md:py-6">
                            {/* Mini stats */}
                            <div className="hidden sm:flex items-center gap-6 md:gap-10 lg:gap-14">
                                {[
                                    { value: '20+', label: 'Years' },
                                    { value: '10k+', label: 'Clients' },
                                    { value: '21+', label: 'Insurers' },
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center gap-2 md:gap-3">
                                        <span className="text-white font-bold text-sm sm:text-base md:text-lg tracking-tighter">{stat.value}</span>
                                        <span className="text-white/30 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em]">{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Scroll indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="flex items-center gap-3 ml-auto"
                            >
                                <span className="text-white/30 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] hidden sm:block">Scroll</span>
                                <motion.div
                                    animate={{ y: [0, 6, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                                    className="w-5 h-8 sm:w-6 sm:h-9 rounded-full border border-white/20 flex items-start justify-center p-1.5"
                                >
                                    <motion.div className="w-1 h-1.5 sm:w-1.5 sm:h-2 rounded-full bg-accent" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* === BOTTOM ACCENT LINE === */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent z-30 origin-left"
            />
        </section>
    );
};

export default PageHero;
