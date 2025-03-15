import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    onClick,
    variant = 'primary',
    className = '',
    type = 'button',
}) => {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 text-center';

    const variantStyles = {
        primary: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl',
        secondary: 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white shadow-lg hover:shadow-xl',
        outline: 'border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white',
    };

    const buttonContent = (
        <motion.span
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
        >
            {children}
        </motion.span>
    );

    if (href) {
        return <Link href={href} className="block">{buttonContent}</Link>;
    }

    return (
        <button type={type} onClick={onClick} className="outline-none">
            {buttonContent}
        </button>
    );
};

export default Button; 