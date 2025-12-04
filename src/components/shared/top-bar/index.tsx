"use client";

import { easeOut, motion } from "framer-motion";
import { FaRegCopyright } from "react-icons/fa6";

interface SectionTitleProps {
    title: string;
    showYear?: boolean;
    border?: boolean;
    className?: string;
}

export default function SectionTitle({ title, showYear = false, border = true, className = "" }: SectionTitleProps) {
    return (
        <div className={`w-full py-7 ${border && "border-b border-gray-300"} flex ${showYear ? "justify-between" : "justify-center"} items-center uppercase`}>
            {/* ----- Bloc Titre ----- */}
            <h1 className="flex items-center gap-2 overflow-hidden">
                <span className="text-[#ff6200]">[</span>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: easeOut }}
                    className={`text-[18px] ${className}`}
                >
                    {title}
                </motion.span>
                <span className="text-[#ff6200]">]</span>
            </h1>

            {/* ----- Année ----- */}
            {showYear && (
                <motion.h1
                    className="flex items-center gap-[1px] text-lg font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    <FaRegCopyright />
                    <span>2025</span>
                </motion.h1>
            )}
        </div>
    );
}
