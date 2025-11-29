import { motion } from "framer-motion";
import { FiSend, FiSettings, FiHash } from "react-icons/fi";
import { FaPalette } from "react-icons/fa";
import SectionTitle from "@/components/shared/top-bar";
import { useState } from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

interface Service {
    id: number;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        id: 1,
        icon: FiSend,
        title: "UI/UX DESIGN",
        description: "User-centric interfaces that are visually appealing and functionally seamless."
    },
    {
        id: 2,
        icon: FiSettings,
        title: "WEB DESIGN",
        description: "Conversion-focused websites designed for performance, aesthetics, and ease of use."
    },
    {
        id: 3,
        icon: FaPalette,
        title: "GRAPHIC DESIGN",
        description: "From social media graphics to business presentations, every design serves a purpose."
    },
    {
        id: 4,
        icon: FiHash,
        title: "BRAND IDENTITY",
        description: "A cohesive brand system that builds recognition and trust. Logos, typography, color schemes, and brand guidelines."
    }
];

export default function Services() {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <section
            className="w-full relative h-full flex items-center py-10 lg:py-[100px] px-2 lg:px-10"
            style={{
                backgroundImage: `url(/services/back-ground.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505e0] via-[#050505e0] to-[#050505e0] opacity-80"></div>

            {/* Content */}
            <div className="z-10 w-full lg:max-w-[1220px] mx-auto px-4 xl:px-0 flex flex-col gap-7 lg:gap-16">
                {/* Section Title */}
                <div className="w-full flex justify-between items-center">
                    <SectionTitle title="Services" border={false} className="text-white" />

                    {/* QUANTA Logo Top Right */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-white text-lg lg:text-xl font-semibold uppercase"
                    >
                        QUANTA*
                    </motion.div>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Section - Main Heading / Description */}
                    <div className="w-full lg:w-[35%] flex flex-col lg:gap-[16px]">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-[48px] lg:text-[72px] xl:text-[90px] font-bold text-white uppercase leading-24"
                        >
                            OUR SERVICES
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="text-[#999] text-xl leading-7 max-w-[400px]"
                        >
                            Everything you need to know about our services, process, and what to expect.
                        </motion.p>
                    </div>

                    {/* Right Section - Services List */}
                    <div className="w-full lg:w-[65%] flex flex-col gap-11 lg:ap-24 mt-8 lg:mt-3 px-2 lg:px-0">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex flex-col gap-4"
                            >
                                <div className="flex items-start gap-7">
                                    {/* Icon Circle */}
                                    <div className="flex-shrink-0 w-14 h-14 -mt-2 rounded-full bg-[#e6e6e6] flex items-center justify-center">
                                        <service.icon className="text-[#ff6200] text-[29px]" />
                                    </div>

                                    {/* Service Content */}
                                    <div className="flex-1 flex flex-col gap-5">
                                        <h3 className="text-white font-bold text-3xl lg:text-4xl uppercase">
                                            {service.title}
                                        </h3>
                                        <p className="text-[#8c8c8c] text-[18px] lg:text-lg leading-6">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Separator Line */}
                                {index < services.length - 1 && (
                                    <div className="w-full h-[1px] bg-[#333] mt-4"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* See pricing link */}
                <Link
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    href="#"
                    className="w-fit flex items-center gap-[12px] text-[#ff6200] text-2xl mt-10 lg:mt-0">
                    <div className="w-[25px] h-[25px] relative overflow-hidden">

                        {/* Outgoing Arrow */}
                        <motion.div
                            className="absolute top-0 left-0"
                            animate={{
                                x: isHovered === true ? "100%" : "0%",
                                y: isHovered === true ? "-100%" : "0%",
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}>
                            <GoArrowRight className="text-[28px] rotate-[-45deg]" />
                        </motion.div>

                        {/* Incoming Arrow */}
                        <motion.div
                            className="absolute top-[100%] left-[-100%]"
                            animate={{
                                x: isHovered === true ? "100%" : "0%",
                                y: isHovered === true ? "-100%" : "0%",
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}>
                            <GoArrowRight className="text-[28px]" />
                        </motion.div>
                    </div>
                    <span className="text-white">See pricing</span>
                </Link>
            </div>
        </section>
    );
}

