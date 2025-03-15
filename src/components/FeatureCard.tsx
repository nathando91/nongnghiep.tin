'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface FeatureCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    imageSrc?: string;
    href?: string;
    delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description,
    icon,
    imageSrc,
    href,
    delay = 0,
}) => {
    const cardContent = (
        <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100 hover:border-green-200 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay }}
            whileHover={{
                y: -8,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: { duration: 0.3 }
            }}
        >
            {imageSrc && (
                <div className="relative h-56 w-full">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
            )}
            <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                    {icon && (
                        <div className="text-green-500 mr-3 bg-green-50 p-3 rounded-full">
                            {icon}
                        </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
            {href && (
                <div className="px-6 pb-6 mt-2">
                    <Link
                        href={href}
                        className="inline-flex items-center text-green-500 font-medium hover:text-green-600 transition-colors"
                    >
                        Tìm hiểu thêm
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            )}
        </motion.div>
    );

    return cardContent;
};

export default FeatureCard; 