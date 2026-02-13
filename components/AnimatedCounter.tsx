'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
    value: string;
    className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, className = '' }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [display, setDisplay] = useState('0');

    useEffect(() => {
        if (!isInView) return;

        // Extract numeric part and suffix
        const match = value.match(/^([₹]?)([0-9.]+)(.*)$/);
        if (!match) {
            setDisplay(value);
            return;
        }

        const prefix = match[1];
        const num = parseFloat(match[2]);
        const suffix = match[3];
        const isDecimal = match[2].includes('.');
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = num * eased;

            if (isDecimal) {
                setDisplay(`${prefix}${current.toFixed(1)}${suffix}`);
            } else {
                setDisplay(`${prefix}${Math.floor(current)}${suffix}`);
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                setDisplay(value);
            }
        }

        requestAnimationFrame(update);
    }, [isInView, value]);

    return <span ref={ref} className={className}>{display}</span>;
};

export default AnimatedCounter;
