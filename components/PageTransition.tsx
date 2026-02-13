'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
    children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    return (
        <>
            {/* Curtain wipe overlay */}

            {/* Page content fade in */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default PageTransition;
