"use client";

import SectionTitle from "@/components/shared/top-bar";
import { motion } from "framer-motion";
import Image from "next/image";
import { blogPosts } from "@/data/blogs";

const BLUR_DATA_URL = "data:image/gif;base64,R0lGODlhAQABAAAAACw=";

export default function Blogs() {

    return (
        <section className="px-4 xl:px-0 flex justify-center my-4 lg:my-10">
            <div className="w-full lg:max-w-[1200px] flex flex-col items-center gap-7">
                <SectionTitle title="Blogs" showYear={false} centerTitle={true} />

                <div className="flex flex-col items-center text-center gap-[50px] lg:gap-[120px] font-semibold">
                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="w-full flex flex-col items-center gap-5 lg:gap-0"
                    >
                        <h1 className="text-[52px] lg:text-[70px] xl:text-[85px] leading-14 lg:leading-normal uppercase">
                            INSIGHTS & ESSENTIALS
                        </h1>
                        <p className="sm:w-4/6 lg:w-[55%] text-center text-[#4f4f4f] text-[18px] left-6 lg:leading-7">
                            Actionable ideas, expert tips, and design know-how to elevate your digital presence. Explore what matters most in building modern, high-performing websites.
                        </p>
                    </motion.div>

                    {/* Blog Cards */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        {/* Large Card - First Post */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="flex flex-col items-start gap-4"
                        >
                            {/* Image */}
                            <div className="w-full h-[312px] bg-gray-100 rounded-lg overflow-hidden relative">
                                <Image
                                    src={blogPosts[0].image}
                                    alt={blogPosts[0].title}
                                    fill
                                    className="object-cover"
                                    placeholder="blur"
                                    blurDataURL={BLUR_DATA_URL}
                                    sizes="(min-width: 1024px) 600px, 90vw"
                                />
                            </div>

                            {/* Date */}
                            <p className="text-sm text-[#4f4f4f] font-medium">{blogPosts[0].date}</p>
                            {/* Title */}
                            <h3 className="text-xl lg:text-2xl text-start text-black leading-tight">{blogPosts[0].title}</h3>

                            {/* Learn More Button */}
                            <button className="w-fit cursor-pointer border border-[#ff6200] text-[#ff6200] bg-white rounded-full px-4 py-2 font-semibold text-sm hover:bg-[#ff6200] hover:text-white transition-colors duration-300">
                                Learn more.
                            </button>
                        </motion.div>

                        {/* Small Cards Container - Second and Third Posts */}
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                            {blogPosts.slice(1).map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: (index + 1) * 0.1 }}
                                    viewport={{ once: true, amount: 0.8 }}
                                    className="flex flex-col items-start gap-4"
                                >
                                    {/* Image */}
                                    <div className="w-full h-[210px] bg-gray-100 lg:h-[240px] rounded-lg overflow-hidden relative">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            placeholder="blur"
                                            blurDataURL={BLUR_DATA_URL}
                                            sizes="(min-width: 1024px) 420px, 90vw"
                                        />
                                    </div>

                                    {/* Date */}
                                    <p className="text-sm text-[#4f4f4f] font-medium">{post.date}</p>
                                    {/* Title */}
                                    <h3 className="text-lg lg:text-xl text-start text-black leading-tight">{post.title}</h3>

                                    {/* Learn More Button */}
                                    <button className="w-fit cursor-pointer border border-[#ff6200] text-[#ff6200] bg-white rounded-full px-4 py-2 font-semibold text-sm hover:bg-[#ff6200] hover:text-white transition-colors duration-300">
                                        Learn more.
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

