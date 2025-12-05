"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
    const [email, setEmail] = useState("");

    const navigationLinks = [
        { name: "Works", href: "#works" },
        { name: "Blogs", href: "#blogs" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" }
    ];

    const socialLinks = [
        { name: "Twitter", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "Behance", href: "#" },
        { name: "Dribble", href: "#" }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log("Newsletter subscription:", email);
        setEmail("");
    };

    return (
        <footer className="w-full px-6 lg:px-0 pt-[70px] lg:pt-32 pb-10 flex justify-center items-center bg-black text-white">
            <div className="w-full lg:max-w-[1170px] min-h-[635px] flex flex-col justify-between">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-0 justify-between lg:items-center mb-16 lg:mb-20">
                    {/* Left - Branding and Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex">
                            <div className="w-4 h-4 bg-[#ff6200]"></div>
                            <h2 className="text-[65px] lg:text-[85px] font-bold">QUANTA</h2>
                        </div>
                        <p className="text-[#666] leading-5 lg:leading-6 max-w-[500px] ml-4 lg:ml-0">
                            The ultimate design solution for agencies and creatives. Designed for speed, built for conversions, and crafted to scale effortlessly.
                        </p>
                    </motion.div>

                    {/* Right - Contact Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="flex flex-col items-end gap-3"
                    >
                        <p className="text-[#666] text-sm lg:text-base">Contact us through E-mail</p>
                        <a
                            href="mailto:reachus@quanta.com"
                            className="text-3xl lg:text-4xl font-bold hover:text-[#ff6200] transition-colors duration-300"
                        >
                            reachus@quanta.com
                        </a>
                    </motion.div>
                </div>

                {/* Middle Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-20">
                    {/* Left - Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="flex flex-col gap-4"
                    >
                        <p className="text-[#666] text-sm lg:text-base">Newsletter</p>
                        <h3 className="text-2xl lg:text-3xl font-bold">STAY CONNECTED!</h3>
                        <form onSubmit={handleSubmit} className="flex items-center gap-3 mt-2">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="contact@gmail.com"
                                    className="w-full bg-transparent border-b-2 border-[#ff6200] pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff7a33] transition-colors"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-[#ff6200] text-white rounded-full px-5 py-2 font-semibold text-sm hover:bg-[#ff7a33] cursor-pointer transition-colors duration-300 flex items-center gap-2"
                            >
                                Join
                            </button>
                        </form>
                    </motion.div>

                    {/* Right - Navigation and Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="flex items-center justify-end gap-16 lg:gap-[160px]"
                    >
                        {/* Navigation */}
                        <div className="flex flex-col items-end gap-4">
                            <p className="text-[#737373] lg:text-sm">Navigation</p>
                            <ul className="flex flex-col items-end gap-[6px]">
                                {navigationLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-[#d9d9d9] text-2xl lg:text-[27px] font-medium hover:text-[#ff6200] transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social */}
                        <div className="flex flex-col items-end gap-4">
                            <p className="text-[#737373] lg:text-sm">Social</p>
                            <ul className="flex flex-col items-end gap-[6px]">
                                {socialLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-[#d9d9d9] text-2xl lg:text-[27px] font-medium hover:text-[#ff6200] transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-[#737373]">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            QUANTA® ©2025 All rights reserved
                        </motion.p>
                        <div className="hidden lg:flex items-center gap-6">
                            <Link
                                href="#privacy"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="#terms"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Terms of Service
                            </Link>
                            <p className="hover:text-white transition-colors duration-300">
                                Designed & Built by Vaibhav
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}