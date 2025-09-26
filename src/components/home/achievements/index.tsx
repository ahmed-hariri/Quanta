import CountUp from "@/components/shared/count-up";
import SectionTitle from "@/components/shared/top-bar";
import { motion } from "framer-motion";

export default function Achievements() {
    const data: { info: number; title: string; subTitle: string }[] = [
        { info: 8.9, title: "User reach rate", subTitle: "Empowering brands with, high-performing designs" },
        { info: 65, title: "Projects completed", subTitle: "Empowering brands with, high-performing designs" },
        { info: 78, title: "Client retention rate", subTitle: "Empowering brands with, high-performing designs" }
    ];

    return (
        <>
            <section className="px-4 xl:px-0 my-16 lg:my-24 flex justify-center">
                <div className="w-full lg:max-w-[1220px] flex flex-col gap-7">
                    <SectionTitle title="Achievements" showYear={true} />

                    <div className="flex flex-col gap-[100px] lg:gap-[140px]">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="flex flex-col gap-2">
                            <h1 className="text-[52px] lg:text-[70px] xl:text-[85px] leading-14 lg:leading-normal">
                                NUMBERS WON&apos;T LIE
                            </h1>
                            <p className="w-[75%] lg:w-[550px] xl:w-[630px] text-[#4f4f4f] font-[500] text-[18px] xl:text-[20px] leading-6 lg:leading-normal">
                                Delivering record-breaking results backed by powerful metrics
                                and real impact—because great design drives real growth.
                            </p>
                        </motion.div>

                        <div className="flex lg:items-center flex-col lg:flex-row gap-16 lg:gap-6">
                            {data.map((item, index) => (
                                <div key={index} className="pl-4 border-l border-gray-100 lg:w-[1020px] overflow-hidden">
                                    <div className="flex flex-col gap-[30px]">
                                        <motion.h1
                                            initial={{ opacity: 0, x: -80 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            viewport={{ once: true, amount: 0.1 }}
                                            className="text-7xl"
                                        >
                                            <CountUp
                                                from={5}
                                                to={item.info}
                                                separator=","
                                                direction="up"
                                                duration={1}
                                                className="count-up-text"
                                            />
                                            {item.title.startsWith("User")
                                                ? "M+"
                                                : item.title.startsWith("Projects")
                                                    ? "+"
                                                    : "%"}
                                        </motion.h1>
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                                            viewport={{ once: true, amount: 0.1 }}
                                        >
                                            <h2 className="text-[30px] xl:text-[34px]">{item.title}</h2>
                                            <p className="text-[18px] text-[#8c8c8c] w-[220px]">
                                                {item.subTitle}
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
