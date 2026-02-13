'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    once?: boolean;
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className = '', delay = 0, once = true }) => {
    const words = text.split(' ');

    return (
        <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: '-20%' }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.04,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
        >
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                    <motion.span
                        className="inline-block"
                        variants={{
                            hidden: { y: '100%', opacity: 0 },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.6,
                                    ease: [0.16, 1, 0.3, 1],
                                },
                            },
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.span>
    );
};

export default TextReveal;
