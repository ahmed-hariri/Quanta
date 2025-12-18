"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function ComingSoon() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050505] via-[#1a1a1a] to-[#050505] text-white relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6200]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6200]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
                >
                    Coming
                    <span className="text-[#ff6200] ml-2">Soon</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg sm:text-xl text-gray-200 mb-4 max-w-2xl mx-auto leading-relaxed"
                >
                    We&apos;re working hard to bring you something amazing. 
                    <br className="hidden sm:block" />
                    This page will be available soon.
                </motion.p>

                {/* Back to Home Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 bg-[#ff6200] hover:bg-[#ff7a33] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#ff6200]/30"
                    >
                        <FaArrowLeft />
                        <span>Back to Home</span>
                    </Link>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16 flex items-center justify-center gap-2"
                >
                    <div className="w-2 h-2 bg-[#ff6200] rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-[#ff6200] rounded-full animate-pulse delay-200"></div>
                    <div className="w-2 h-2 bg-[#ff6200] rounded-full animate-pulse delay-400"></div>
                </motion.div>
            </div>
        </div>
    );
}

