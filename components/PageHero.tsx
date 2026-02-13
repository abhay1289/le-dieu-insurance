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

    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.85]);

    const titleWords = title.split(' ');

    return (
        <section
            ref={heroRef}
            className="relative h-[55vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] w-full overflow-hidden bg-primary"
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
                <div className="container mx-auto px-6 md:px-12 pb-8 sm:pb-10 md:pb-12">

                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-3 mb-4 sm:mb-5 md:mb-6"
                    >
                        <a href="/" className="text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] hover:text-accent transition-colors duration-300">Home</a>
                        <span className="text-white/20 text-[10px]">—</span>
                        <span className="text-white/80 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em]">{breadcrumb}</span>
                    </motion.div>

                    {/* Title */}
                    <h1 className="flex flex-wrap gap-x-[0.2em]">
                        {titleWords.map((word, i) => (
                            <span key={i} className="overflow-hidden block">
                                <motion.span
                                    initial={{ y: '110%' }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.4 + i * 0.08,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="block text-white font-heading font-extrabold tracking-tight leading-[1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-medium mt-4 sm:mt-5"
                    >
                        {subtitle}
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
};

export default PageHero;
