"use client";

import SectionTitle from "@/components/shared/top-bar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        {
            question: "What kind of design services do you provide?",
            answer: "We specialize in branding, web design, UI/UX, and marketing assets, customized to fit your business goals."
        },
        {
            question: "How long does it take to complete a project?",
            answer: "Project timelines vary based on scope and complexity. Typically, a complete website redesign takes 4-8 weeks, while branding projects can range from 2-6 weeks. We'll provide a detailed timeline during our initial consultation."
        },
        {
            question: "What if I need design support on a regular basis?",
            answer: "We offer ongoing design support through our retainer packages, which provide you with dedicated design resources and priority support for your regular design needs."
        },
        {
            question: "Can you design within my existing brand guidelines?",
            answer: "Absolutely! We work seamlessly with your existing brand guidelines to ensure consistency across all design deliverables while maintaining your brand identity."
        },
        {
            question: "How do I get started with your agency?",
            answer: "Getting started is easy! Simply reach out through our contact form or schedule a consultation. We'll discuss your project needs, goals, and timeline to create a customized proposal for you."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-4 xl:px-0 flex justify-center my-4 lg:my-40">
            <div className="w-full lg:max-w-[1300px] flex flex-col items-center gap-7">
                <SectionTitle title="Faq" showYear={false} />

                <div className="flex flex-col items-center text-center gap-[50px] lg:gap-[120px] font-semibold">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="w-full flex flex-col items-center gap-5 lg:gap-0">
                        <h1 className="text-[52px] lg:text-[70px] xl:text-[85px] leading-14 lg:leading-normal uppercase">
                            Common queries
                        </h1>
                        <p className="sm:w-4/6 lg:w-[53%] text-center text-[#4f4f4f] text-[18px] xl:text-[20px] left-6 lg:leading-7">
                            Everything you need to know about our services, process, and what to expect.
                            Just the essentials to help you move forward with clarity.
                        </p>
                    </motion.div>
                </div>

                {/* FAQ Items */}
                <div className="lg:w-[78%] flex flex-col gap-4 mt-10 lg:mt-24">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.8 }}
                                onClick={() => toggleFAQ(index)}
                                className={`p-[25px] lg:p-[30px] pb-0 rounded-lg transition-colors cursor-pointer duration-300 ${isOpen ? "bg-gray-100" : "bg-transparent"}`}>
                                <div
                                    className="w-full flex items-center justify-between text-left gap-2 mb-3"
                                >
                                    <h3 className="text-lg lg:text-2xl font-semibold text-black flex-1">
                                        {faq.question}
                                    </h3>
                                    <div className="text-[#ff6200] bg-[#ff620025] p-2 rounded-full flex-shrink-0">
                                        {isOpen ? (
                                            <FaChevronUp className="w-4 h-4" />
                                        ) : (
                                            <FaChevronDown className="w-4 h-4" />
                                        )}
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                           <div className="mb-[30px]">
                                           <p className="text-[#666] text-base lg:text-lg leading-6 w-5/6">
                                                {faq.answer}
                                            </p>
                                           </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}

