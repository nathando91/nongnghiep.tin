'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/images/hero-bg.jpg")',
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-0"></div>

            {/* Content */}
            <div className="container mx-auto px-4 z-10 text-center py-16 md:py-0">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="inline-block px-4 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6 backdrop-blur-sm border border-green-500/30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Canh tác hữu cơ & Bền vững
                    </motion.span>

                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Trang Trại Ruồi Lính Đen <br className="hidden md:block" />
                        <span className="text-green-400">&</span> Vịt Huế
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Chúng tôi chuyên nuôi ruồi lính đen và vịt với phương pháp tự nhiên,
                        thân thiện với môi trường và đảm bảo an toàn thực phẩm.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <Link href="/ruoi-linh-den">
                            <Button variant="primary" className="w-full sm:w-auto">Tìm Hiểu Về Ruồi Lính Đen</Button>
                        </Link>
                        <Link href="/trang-trai-vit">
                            <Button variant="secondary" className="w-full sm:w-auto">Khám Phá Trang Trại Vịt</Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="text-green-400"
                    >
                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                    </svg>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero; 