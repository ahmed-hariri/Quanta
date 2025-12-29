"use client";

import { easeOut, motion } from "framer-motion";
import { FaRegCopyright } from "react-icons/fa6";

interface SectionTitleProps {
    title: string;
    showYear?: boolean;
    border?: boolean;
    className?: string;
    centerTitle?: boolean;
}

const CURRENT_YEAR = 2025;

/**
 * SectionTitle Component
 * Reusable section title component with optional year display and border
 * 
 * @param title - The title text to display
 * @param showYear - Whether to show the copyright year (default: false)
 * @param border - Whether to show bottom border on desktop (default: true)
 * @param className - Additional CSS classes for the title
 * @param centerTitle - Whether to center the title (default: false)
 */
export default function SectionTitle({
    title,
    showYear = false,
    border = true,
    className = "",
    centerTitle = false,
}: SectionTitleProps) {
    /**
     * Determines the flexbox justify class based on props
     * - centerTitle: centers the title
     * - showYear: spaces title and year apart
     * - default: aligns to start (left)
     */
    const getJustifyClass = () => {
        if (centerTitle) return "justify-center";
        if (showYear) return "justify-between";
        return "justify-start";
    };

    return (
        <div className={`w-full py-7 ${border && "lg:border-b border-gray-300"}`}>
            <div className={`flex ${getJustifyClass()} items-center uppercase`}>
                {/* Title with animated brackets */}
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

                {/* Copyright year (optional) */}
                {showYear && (
                    <motion.h1
                        className="flex items-center gap-[1px] text-lg font-bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        <FaRegCopyright />
                        <span>{CURRENT_YEAR}</span>
                    </motion.h1>
                )}
            </div>
        </div>
    );
}
