"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaThreads } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { easeOut } from "framer-motion";

export default function Header() {
    const [menuStatus, setMenuStatus] = useState(false);
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const [isDesktop, setIsDesktop] = useState(false)
    const time: number = 0.2

    // Number simple animation
    const numberVariant = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: time, ease: easeOut } },
    };

    // Links: left → right stagger
    const linksContainer = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };
    const linkItem = {
        hidden: { opacity: 0, x: -40 },
        show: { opacity: 1, x: 0, transition: { duration: time, ease: easeOut } },
    };

    // Socials: bottom → top stagger
    const socialContainer = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };
    const socialItem = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: time, ease: easeOut } },
    };

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024)
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <header
            className={`w-full px-6 sm:px-11 pt-1 sm:pt-4 flex flex-col duration-300 z-50
      ${menuStatus ? "bg-[#ff6200] text-white" : "text-[#ff6200]"} font-bold fixed`}
        >
            {/* Top */}
            <ul className="flex justify-between items-center text-[17.5px] py-5 uppercase">
                <li><h1>Quanta®</h1></li>
                <li className="flex items-center gap-3 sm:gap-5">
                    <h1>Menu</h1>
                    <div
                        className="w-full h-5 flex flex-col justify-center gap-[10px] cursor-pointer"
                        onClick={() => setMenuStatus(!menuStatus)}
                    >
                        <div className={`w-9 sm:w-13 h-[2px] duration-300 ease-linear
               ${menuStatus ? "rotate-[20deg] bg-white" : "bg-[#ff6200]"}`}></div>
                        <div className={`w-9 sm:w-13 h-[2px] duration-300 ease-linear
               ${menuStatus ? "-rotate-[20deg] -mt-[11.9px] bg-white" : "bg-[#ff6200]"}`}></div>
                    </div>
                </li>
            </ul>

            <AnimatePresence>
                {menuStatus && (
                    <motion.div
                        initial={{ height: 80, opacity: 0 }}
                        animate={{
                            height: isDesktop ? 380 : "auto",
                            opacity: 1,
                        }}
                        exit={{ height: 80, opacity: 0 }}
                        transition={{ duration: time, ease: "easeInOut" }}
                        className="w-full flex flex-col lg:flex-row gap-8 rounded-xl py-6 overflow-hidden"
                    >
                        {/* Links */}
                        <motion.ul
                            variants={linksContainer}
                            initial="hidden"
                            animate="show"
                            className="w-full h-full flex lg:hidden flex-col justify-end items-end gap-4 text-[25px] uppercase"
                        >
                            {[
                                { name: "About", url: "#" },
                                { name: "Blogs", url: "#" },
                                { name: "Works", url: "#" },
                                { name: "Contact", url: "#" },
                                { name: "Pricing", url: "#" },
                            ].map((link, index) => (
                                <motion.li
                                    key={index}
                                    variants={linkItem}
                                    onMouseEnter={() => setIsHovered(index)}
                                    onMouseLeave={() => setIsHovered(null)}
                                >
                                    <Link href={link.url}>
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Number */}
                        <motion.div
                            variants={numberVariant}
                            initial="hidden"
                            animate="show"
                            className="lg:w-1/3 h-full flex flex-col justify-end gap-2"
                        >
                            <h1>Based In New York, NY 10022</h1>
                            <motion.h1
                                className="text-3xl"
                                initial={{ opacity: 0, x: -130 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: ["easeOut"],
                                }}
                            >
                                +1 718-555-6789
                            </motion.h1>
                        </motion.div>

                        {/* Social media */}
                        <motion.div
                            variants={socialContainer}
                            initial="hidden"
                            animate="show"
                            className="w-full lg:w-1/3 h-full flex lg:justify-center items-end gap-[5.5px] pb-3"
                        >
                            {[
                                { icon: IoLogoInstagram, link: "#" },
                                { icon: BsTwitterX, link: "#" },
                                { icon: FaThreads, link: "#" },
                            ].map((link, index) => (
                                <motion.div
                                    key={index}
                                    variants={socialItem}
                                    className="p-[7px] text-[#ff6200] bg-white rounded-full text-[17px]"
                                >
                                    <Link href={link.link}><link.icon /></Link>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Links */}
                        <motion.ul
                            variants={linksContainer}
                            initial="hidden"
                            animate="show"
                            className="w-1/3 h-full lg:flex flex-col justify-end items-end gap-6 text-3xl uppercase pb-3 hidden"
                        >
                            {[
                                { name: "Works", url: "#" },
                                { name: "Blogs", url: "#" },
                                { name: "About", url: "#" },
                                { name: "Contact", url: "#" },
                                { name: "Pricing", url: "#" },
                            ].map((link, index) => (
                                <motion.li
                                    key={index}
                                    variants={linkItem}
                                    onMouseEnter={() => setIsHovered(index)}
                                    onMouseLeave={() => setIsHovered(null)}
                                >
                                    <Link href={link.url} className="flex items-center gap-[8px]">
                                        <span>{link.name}</span>
                                        <div className="w-[25px] h-[25px] relative overflow-hidden">
                                            {/* Arrows */}
                                            <motion.div
                                                className="absolute top-0 left-0"
                                                animate={{
                                                    x: isHovered === index ? "100%" : "0%",
                                                    y: isHovered === index ? "-100%" : "0%",
                                                }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <FaArrowRightLong className="text-[28px] rotate-[-45deg]" />
                                            </motion.div>
                                            <motion.div
                                                className="absolute top-[100%] left-[-100%]"
                                                animate={{
                                                    x: isHovered === index ? "100%" : "0%",
                                                    y: isHovered === index ? "-100%" : "0%",
                                                }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <FaArrowRightLong className="text-[28px] rotate-[-45deg]" />
                                            </motion.div>
                                        </div>
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
