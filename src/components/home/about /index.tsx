import LinkButton from "@/components/shared/link-button";
import SectionTitle from "@/components/shared/top-bar";
import { motion } from "framer-motion";
import Image from "next/image";

const BLUR_DATA_URL =
    "data:image/gif;base64,R0lGODlhAQABAAAAACw=";

export default function About() {
    return (
        <>
            <section className="px-4 xl:px-0 flex justify-center my-20">
                <div className="w-full lg:max-w-[1350px] flex flex-col gap-16">
                    <SectionTitle title="About" showYear={true} />

                    <div className="flex flex-col gap-[65px] font-semibold">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="flex flex-col gap-4">
                            <h1 className="lg:w-4/6 text-[52px] lg:text-[85px] xl:text-[94px] leading-14 lg:leading-[100px] uppercase">
                                Redefining the Digital Space
                            </h1>
                            <p className="w-[75%] lg:w-[450px] xl:w-[710px] text-[#4f4f4f] font-[500] text-[18px] xl:text-[22px] leading-6 lg:leading-normal">
                                We blend creativity, strategy, and technology to craft impactful digital
                                experiences that elevate brands, spark engagement, and deliver real results.
                            </p>

                            <div className="flex mt-5 lg:mt-10">
                                <LinkButton text="About us" />
                            </div>
                        </motion.div>

                        <div className="w-full h-[600px] lg:h-[640px] overflow-hidden rounded-xl">
                            <motion.div
                                initial={{ opacity: 0.4, scale: 1.15 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ amount: 0.4 }}
                                className="w-full h-full relative"
                            >
                                <Image
                                    src="/background-image-about-card.avif"
                                    alt="team"
                                    fill
                                    className="object-cover rounded-xl"
                                    placeholder="blur"
                                    blurDataURL={BLUR_DATA_URL}
                                    sizes="100vw"
                                />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}