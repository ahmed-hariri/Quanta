import { motion } from "framer-motion";
import { FaRegCopyright } from "react-icons/fa6";
import { FiAnchor } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import LinkButton from "@/components/shared/link-button";

export default function Hero() {
    return <>
        <section className="lg:h-[800px] relative">
            <div className="w-full h-full flex justify-between absolute -z-20 gap-[15px] xl:gap-0">
                <div className="w-[29.6%] h-full border border-[#d2d2d283] lg:border-[#d2d2d2]"></div>
                <div className="w-[39.2%] h-full border border-[#d2d2d283] lg:border-[#d2d2d2]"></div>
                <div className="w-[29.6%] h-full border border-[#d2d2d283] lg:border-[#d2d2d2]"></div>
            </div>

            <div className="h-full flex flex-col lg:flex-row justify-start lg:justify-between gap-20 sm:gap-0">
                {/* <!-- Time and sub title --> */}
                <div className="order-2 lg:order-1 w-full lg:w-[29.6%] flex flex-col justify-end lg:items-end pl-5 lg:pl-0 pr-5 lg:pr-2 pb-10 lg:pb-[70px]">
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
                <div className="order-1 lg:order-2 w-full lg:w-[39.2%] flex flex-col items-center pt-52 gap-10">
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
                    <LinkButton />
                </div>

                {/* <!-- Clients --> */}
                <div className="order-3 lg:order-3 w-full lg:w-[29.6%] flex flex-col justify-end items-end lg:items-start pr-5 lg:pr-0 lg:pl-2 xl:pl-8 pb-10 lg:pb-[75px]">
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