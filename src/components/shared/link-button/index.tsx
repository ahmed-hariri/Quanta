import { useState } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

interface LinkButtonProps {
    marginTop?: boolean;
    text? : string
}

export default function LinkButton({ marginTop = false , text = "Get started" }: LinkButtonProps) {
    const [showArrow, setShowArrow] = useState<boolean>(false);
    return <>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className={`${marginTop && "mt-4 lg:mt-8"}`}
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
                className="bg-[#ff6200] text-white rounded-full px-4 lg:px-5 py-[12px] flex items-center gap-3 duration-300 font-semibold text-sm lg:text-base"
                onMouseEnter={() => setShowArrow(true)}
                onMouseLeave={() => setShowArrow(false)}
            >
                <span>{text}</span>
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
    </>
}