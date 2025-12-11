import SectionTitle from "@/components/shared/top-bar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const BLUR_DATA_URL =
    "data:image/gif;base64,R0lGODlhAQABAAAAACw=";

export default function Benefits() {
    const [isHover, setIsHover] = useState<null | number>(0);

    const cards: { title: string, description: string }[] = [
        { title: "Holistic expertise", description: "We bring a multidisciplinary approach to design, ensuring every project benefits from our broad expertise" },
        { title: "Selective Partnerships", description: "We collaborate with a limited number of clients to provide dedicated focus and top-tier quality" },
        { title: "Attention to detail", description: "From concept to execution, we meticulously refine every element to create seamless user experiences" }
    ]

    return (
        <>
            <section className="px-4 xl:px-0 flex justify-center mt-20">
                <div className="w-full lg:max-w-[1220px] flex flex-col gap-7">
                    <SectionTitle title="Benefits" showYear={true} />

                    <div className="flex flex-col gap-[90px] lg:gap-[140px] font-semibold">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="flex flex-col gap-2">
                            <h1 className="text-[52px] lg:text-[70px] xl:text-[85px] leading-14 lg:leading-normal uppercase">
                                Why Quanta?
                            </h1>
                            <p className="w-[75%] lg:w-[450px] xl:w-[600px] text-[#4f4f4f] font-[500] text-[18px] xl:text-[20px] leading-6 lg:leading-normal">
                                Working directly with people fuels my creativity and pushes me  to achieve remarkable
                                experiences for the end user. Partners.
                            </p>
                        </motion.div>

                        <div className="flex justify-center lg:items-center flex-col lg:flex-row gap-5 lg:gap-3">
                            {cards.map((item, index) => (
                                <div
                                    onMouseEnter={() => setIsHover(index)}
                                    onMouseLeave={() => setIsHover(0)}
                                    key={index}
                                    className={`${isHover === index ? "w-full lg:w-[400px]" : "w-full lg:w-[275px]"} h-[450px] lg:h-[488px] rounded-lg duration-500 overflow-hidden relative flex items-end`}>
                                    <Image
                                        src={`/benefits/pic-${index + 1}.avif`}
                                        alt="benefits card"
                                        width={500}
                                        height={488}
                                        className={`${isHover !== index && "lg:grayscale"} w-full h-full duration-500 object-cover absolute -z-10 scale-125`}
                                        placeholder="blur"
                                        blurDataURL={BLUR_DATA_URL}
                                        loading="lazy"
                                    />
                                    <div className={`w-full h-full flex flex-col justify-end  ${isHover === index ? "gap-3" : "gap-5"} duration-500 bg-gradient-to-b from-[#0505053b] to-[#050505]/100 z-20 p-9`}>
                                        <h1 className="text-[#d9d9d9] text-[32px] uppercase w-[220px] font-semibold leading-9">
                                            {item?.title}
                                        </h1>
                                        <p className={`text-[#8c8c8c] w-[230px] leading-5 text-sm duration-500 ${isHover === index ? "mb-0" : "mb-0 lg:mb-[-98px]"}`}>
                                            {item?.description}
                                        </p>
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