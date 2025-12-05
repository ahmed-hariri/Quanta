"use client";

import { motion } from "framer-motion";
import { FaCheck, FaShield } from "react-icons/fa6";
import LinkButton from "@/components/shared/link-button";
import Image from "next/image";

export default function CTA() {
    const features = [
        "Simple subscriptions",
        "Effective results",
        "24/7 support"
    ];

    return (
        <section className="w-full relative overflow-hidden mt-28">
            {/* Background Image */}
            <div className="relative w-full min-h-screen lg:min-h-[1000px]">
                <Image
                    src="/background-image-cta.avif"
                    alt="CTA Background"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Main Content */}
                <div className="relative z-10 px-4 xl:px-0 flex justify-center items-center">
                    <div className="w-full lg:max-w-[1220px] flex flex-col justify-center items-start lg:pt-20 pb-32 lg:pb-40">
                        {/* Main Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-2 mb-8 mt-20 lg:mt-28 text-white"
                        >
                            <h1 className="text-[50px] lg:text-[66px] leading-12 lg:leading-16">
                                LET&apos;S BUILD SOMETHING
                            </h1>
                            <h1 className="text-[90px] lg:text-[130px] leading-24 lg:leading-32">
                                EXTRA ORDINARY
                            </h1>
                        </motion.div>

                        {/* Get Started Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <LinkButton text="Get started" />
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Information Bar */}
                <div className="px-4 xl:px-0 flex justify-center absolute left-0 right-0">
                    <div className="w-full lg:max-w-[1220px] bg-[#0006] rounded-lg flex flex-col lg:flex-row lg:items-center justify-between gap-6 px-5 lg:pr-11 py-4">
                        {/* Left Side - Testimonial/Rating */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="flex flex-col justify-between lg:items-center gap-7"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-[#ff6200] p-2 rounded-full">
                                    <FaShield className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-white font-semibold text-sm lg:text-base">
                                    Trusted by Creatives worldwide
                                </span>
                            </div>

                            <div className="flex items-end gap-3">
                                {/* Avatar Stack */}
                                <div className="flex items-center">
                                    {[
                                        "/profile-1.png",
                                        "/profile-2.png",
                                        "/profile-3.png",
                                        "/profile-4.png"
                                    ].map((pic, index) => (
                                        <div
                                            key={index}
                                            className={`w-[37px] h-[37px] rounded-full border-2 border-white ${index !== 0 && "-ml-4"}`}
                                            style={{ backgroundImage: `url(${pic})`, backgroundSize: "cover", backgroundPosition: "center" }}
                                        ></div>
                                    ))}
                                </div>
                                <span className="text-white text-sm lg:text-base">
                                    5.0 star rated agency
                                </span>
                            </div>
                        </motion.div>

                        {/* Right Side - Features */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="flex flex-col gap-2 mt-5 lg:mt-0"
                        >
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="bg-[#ff6200] rounded-full p-[3px]">
                                        <FaCheck className="w-3 h-3 text-white flex-shrink-0" />
                                    </div>
                                    <span className="text-white text-sm lg:text-base">{feature}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

