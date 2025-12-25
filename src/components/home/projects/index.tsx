import LinkButton from "@/components/shared/link-button";
import SectionTitle from "@/components/shared/top-bar";
import { motion } from "framer-motion";
import SlideSection from "../picture-slide";
import { useState } from "react";

export default function Projects() {
    const [isHover, setIsHover] = useState<null | number>(null);

    const projects: { title: string, description: string }[] = [
        { title: "APEX STUDIO SITE®", description: "Redesigned Apex Studio’s website with a cleaner layout—resulting in a 45% increase in conversions" },
        { title: "VISIONARY LABS™", description: "How Visionary Labs Built a Premium Brand Identity with Quanta" },
        { title: "PIXEL FORGE™", description: "PixelForge’s Portfolio Makeover Boosted Client Inquiries by 60%" },
        { title: "ELEVATE AGENCY®", description: "Elevate Agency Scaled Faster with a High-Impact Website" }
    ]
    return (
        <>
            <section className="w-full h-full px-4 xl:px-0 flex justify-center my-4 lg:mt-52">
                <div className="w-full lg:max-w-[1220px] flex flex-col gap-7">
                    <SectionTitle title="Projects" showYear={false} />

                    <div className="flex flex-col items-center text-center gap-[50px] lg:gap-[120px] font-semibold">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="w-full flex flex-col items-center gap-5 lg:gap-0">
                            <h1 className="text-[52px] lg:text-[70px] xl:text-[85px] leading-14 lg:leading-normal uppercase">
                                FEATURED works
                            </h1>
                            <p className="sm:w-4/6 lg:w-[52%] text-center text-[#4f4f4f] text-[18px] xl:text-[20px] leading-7">
                                A showcase of our finest projects, crafted with precision and creativity
                                to deliver impactful results.
                            </p>
                            <LinkButton marginTop={true} />
                            <div className="mt-2 w-full lg:w-[850px] overflow-hidden">
                                <SlideSection />
                            </div>
                        </motion.div>
                        <div className="w-full h-full flex flex-col gap-5 lg:gap-[45px]">
                            {projects.map((item, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setIsHover(index)}
                                    onMouseLeave={() => setIsHover(null)}
                                    className="w-full h-[555px] bg-[#f7f7f7] p-2 rounded-[10px] sticky top-0">
                                    <div
                                        style={{ backgroundImage: `url(/projects/project-${index + 1}.avif)`, backgroundSize: "cover", backgroundPosition: "center" }}
                                        className="w-full h-full rounded-[10px] overflow-hidden">
                                        <div className={`w-full h-full flex justify-center items-end pb-12 bg-gradient-to-b from-[#0505050c] to-[#050505]/100 duration-500 ${isHover === index ? "opacity-95" : "opacity-0"}`}>
                                            <div className={`flex flex-col justify-end items-center gap-3 duration-500 ${isHover === index ? "mb-0" : "opacity-0 mb-[-10px]"}`}>
                                                <h1 className="text-white text-[66px] border-b border-gray-300 w-full">{item?.title}</h1>
                                                <p className="w-4/6 text-center text-[16px] text-[#c2c2c2]">{item?.description}</p>
                                            </div>
                                        </div>
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