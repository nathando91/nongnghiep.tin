'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Set active link based on current path
        setActiveLink(window.location.pathname);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Trang Chủ', href: '/' },
        { name: 'Ruồi Lính Đen', href: '/ruoi-linh-den' },
        { name: 'Trang Trại Vịt', href: '/trang-trai-vit' },
        { name: 'Về Chúng Tôi', href: '/ve-chung-toi' },
        { name: 'Liên Hệ', href: '/lien-he' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <div className="relative w-10 h-10 mr-2">
                            <Image
                                src="/images/logo-192.png"
                                alt="Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
                            Trang Trại Huế
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeLink === link.href
                                    ? 'text-green-600 bg-green-50'
                                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                                    }`}
                                onClick={() => setActiveLink(link.href)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="flex items-center text-gray-700 text-sm">
                            <div className="bg-green-50 p-2 rounded-full mr-2">
                                <FaPhone className="text-green-500" />
                            </div>
                            <span>0989205010</span>
                        </div>
                        <div className="flex items-center text-gray-700 text-sm">
                            <div className="bg-green-50 p-2 rounded-full mr-2">
                                <FaMapMarkerAlt className="text-green-500" />
                            </div>
                            <span className="truncate max-w-[200px]">Thôn 1, Vinh Thanh, Phú Vang, Huế</span>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden bg-gray-50 p-2 rounded-full text-gray-700 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Đóng menu" : "Mở menu"}
                    >
                        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white shadow-lg overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4">
                            <div className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`px-4 py-3 rounded-lg transition-colors ${activeLink === link.href
                                            ? 'bg-green-50 text-green-600 font-medium'
                                            : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                        onClick={() => {
                                            setIsOpen(false);
                                            setActiveLink(link.href);
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="pt-4 mt-2 border-t border-gray-100">
                                    <div className="flex items-center text-gray-700 py-2">
                                        <div className="bg-green-50 p-2 rounded-full mr-3">
                                            <FaPhone className="text-green-500" />
                                        </div>
                                        <span>0989205010</span>
                                    </div>
                                    <div className="flex items-center text-gray-700 py-2">
                                        <div className="bg-green-50 p-2 rounded-full mr-3">
                                            <FaMapMarkerAlt className="text-green-500" />
                                        </div>
                                        <span>Thôn 1, Vinh Thanh, Phú Vang, Huế</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar; 