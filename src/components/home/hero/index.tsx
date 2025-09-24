import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import { FiAnchor } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

export default function Hero() {
    const [showArrow, setShowArrow] = useState<boolean>(false);

    return <>
        <section className="lg:h-[792px] relative">
            <div className="w-full h-full flex justify-between absolute -z-20 gap-[15px] xl:gap-0">
                <div className="w-[29.6%] h-full border border-[#d2d2d283] lg:border-[#d2d2d2]"></div>
                <div className="w-[39.2%] h-full border border-[#d2d2d283] lg:border-[#d2d2d2]"></div>
                <div className="w-[29.6%] h-full border border-[#d2d2d283] lg:border-[#d2d2d2]"></div>
            </div>

            <div className="h-full flex flex-col lg:flex-row justify-start lg:justify-between gap-20 sm:gap-0">
                {/* <!-- Time and sub title --> */}
                <div className="order-2 lg:order-1 w-full lg:w-[29.6%] flex flex-col justify-end lg:items-end pl-5 lg:pl-0 pr-5 lg:pr-2 xl:pr-10 pb-10 lg:pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-4">
                        <h1 className="flex items-center text-lg">
                            <FaRegCopyright />
                            <span>2024-01</span>
                        </h1>
                        <p className="w-[255px] text-[#737373] font-medium flex flex-col text-[15.5px] leading-5">
                            <span className="flex items-center gap-1">
                                <FiAnchor className=" text-[#ff6200] text-xs" />
                                A digital design agency built
                            </span>
                            <span>by passionate design enthusiasts</span>
                        </p>
                    </motion.div>
                </div>

                {/* <!-- Title --> */}
                <div className="order-1 lg:order-2 w-full lg:w-[39.2%] flex flex-col items-center pt-52 lg:pt-48 gap-10 lg:mt-0">
                    {/* Animation des titres */}
                    <motion.div
                        className="flex flex-col items-center gap-2"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.6 } },
                        }}
                    >
                        <motion.h1
                            className="text-[26px] xl:text-[32px] leading-none font-semibold uppercase tracking-tighter"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 1 } },
                            }}
                        >
                            More than just design
                        </motion.h1>

                        <motion.h1
                            className="uppercase text-[52px] lg:text-[78px] xl:text-[110px] leading-none flex flex-col items-center font-bold tracking-tighter"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 }
                            }}
                            transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
                        >
                            <span className="text-[#595959]">We create</span>
                            <span>Experiences</span>
                        </motion.h1>
                    </motion.div>

                    {/* Bouton avec apparition en dernier */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    >
                        <Link
                            href="#"
                            style={{
                                boxShadow:
                                    "rgba(255, 98, 0, 0.73) 0px 0.557px 0.557px -0.9375px,\
               rgba(255, 98, 0, 0.69) 0px 1.69px 1.69px -1.875px,\
               rgba(255, 98, 0, 0.59) 0px 4.46px 4.46px -2.81px,\
               rgba(255, 98, 0, 0.25) 0px 14px 14px -3.75px",
                            }}
                            className="bg-[#ff6200] text-white rounded-full px-4 lg:px-5 py-[12px] lg:py-[13px] flex items-center gap-3 duration-300 font-semibold text-sm lg:text-base"
                            onMouseEnter={() => setShowArrow(true)}
                            onMouseLeave={() => setShowArrow(false)}
                        >
                            <span>Get started</span>
                            <AnimatePresence>
                                {showArrow && (
                                    <motion.span
                                        key="arrow"
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -12 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <FaArrowRightLong />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Link>
                    </motion.div>
                </div>

                {/* <!-- Clients --> */}
                <div className="order-3 lg:order-3 w-full lg:w-[29.6%] flex flex-col justify-end items-end lg:items-start pr-5 lg:pr-0 lg:pl-2 xl:pl-10 pb-10 lg:pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col gap-2 text-[14px]">
                        <h2 className="flex items-center text-[#737373] font-semibold ml-7">
                            Loved by 4000+ creatives worldwide
                        </h2>
                        <div className="flex items-center justify-end lg:justify-start gap-2">
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col items-end gap-1">
                                    <div className="flex items-center gap-1 text-lg text-[#ff6200]">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <h2 className="text-[#737373] font-semibold">
                                        Trusted by the best
                                    </h2>
                                </div>
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
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    </>
}