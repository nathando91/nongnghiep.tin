'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    bgColor?: string;
}

const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    id,
    bgColor = 'bg-white',
}) => {
    return (
        <section id={id} className={`py-16 md:py-24 ${bgColor} ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 md:px-8"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section; 