"use client";

import SectionTitle from "@/components/shared/top-bar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { FaGem } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFire } from "react-icons/fa6";

interface PricingPlan {
    name: string;
    icon: React.ReactNode;
    monthlyPrice: number;
    annualPrice: number;
    description: string;
    features: string[];
}

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans: PricingPlan[] = [
        {
            name: "Standard",
            icon: <FaStar className="w-3 h-3" />,
            monthlyPrice: 1799,
            annualPrice: 12959, // 1799 * 12 * 0.6 (40% discount for annual)
            description: "For growing businesses needing more features and flexibility.",
            features: [
                "Custom-Designed Website.",
                "Performance-Optimized Design",
                "SEO-optimized foundation",
                "Performance-tuned design",
                "Essential social media integration"
            ]
        },
        {
            name: "Growth",
            icon: <FaBolt className="w-3 h-3" />,
            monthlyPrice: 2699,
            annualPrice: 19433, // 2699 * 12 * 0.6
            description: "For growing businesses needing more features and flexibility.",
            features: [
                "Up to 10 fully customized pages",
                "Advanced SEO optimization.",
                "Conversion-driven design approach",
                "Integrated blog setup",
                "Custom forms & automation"
            ]
        },
        {
            name: "Enterprise",
            icon: <FaGem className="w-3 h-3" />,
            monthlyPrice: 3699,
            annualPrice: 26633, // 3699 * 12 * 0.6
            description: "For growing businesses needing more features and flexibility.",
            features: [
                "Everything in the Growth Plan",
                "Unlimited pages with customization.",
                "E-commerce site integration",
                "Custom animations, Interactions.",
                "API & CRM integrations"
            ]
        }
    ];

    return (
        <section className="px-4 xl:px-0 flex justify-center my-20">
            <div className="w-full lg:max-w-[1300px] flex flex-col items-center gap-7">
                <SectionTitle title="Pricing" showYear={false} />

                <div className="flex flex-col items-center text-center gap-[50px] lg:gap-[120px] font-semibold">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="w-full flex flex-col items-center gap-5 lg:gap-0">
                        <h1 className="text-[52px] lg:text-[70px] xl:text-[85px] leading-14 lg:leading-normal uppercase">
                            Scalable Plans
                        </h1>
                        <p className="sm:w-4/6 lg:w-[53%] text-center text-[#4f4f4f] text-[18px] xl:text-[20px] left-6 lg:leading-7">
                            Flexible and scalable plans designed to grow with your business,
                            providing the right features and support at every stage of your journey.
                        </p>
                    </motion.div>
                </div>

                {/* Billing Toggle */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="flex items-center flex-col lg:flex-row gap-5 lg:gap-3 my-8"
                >
                    <div
                        style={{
                            boxShadow:
                                "rgba(255, 98, 0, 0.73) 0px 0.557px 0.557px -0.9375px,\
                       rgba(255, 98, 0, 0.69) 0px 1.69px 1.69px -1.875px,\
                       rgba(255, 98, 0, 0.59) 0px 4.46px 4.46px -2.81px,\
                       rgba(255, 98, 0, 0.25) 0px 14px 14px -3.75px",
                        }}
                        className="flex items-center relative rounded-full duration-300 bg-[#ff6200]"
                    >
                        <div className="flex items-center gap-[20px] px-[16px] py-[13px] z-20 text-[15px] relative">
                            <button
                                onClick={() => setIsAnnual(false)}
                                className={`cursor-pointer relative z-30 ${!isAnnual ? "text-black" : "text-white"}`}>
                                Monthly
                            </button>
                            <button
                                onClick={() => setIsAnnual(true)}
                                className={`cursor-pointer relative z-30 ${isAnnual ? "text-black" : "text-white"}`}>
                                Annually
                            </button>
                        </div>
                        <motion.div
                            className="px-[38px] py-[19px] rounded-full bg-white absolute z-10 left-[6px]"
                            animate={{
                                x: isAnnual ? 74.8 : 0
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    <span className="flex items-center lg:-mr-28 gap-2 bg-orange-50 border border-orange-200 rounded-full px-3 py-1.5 text-[#ff6200] font-bold text-xs">
                        <FaFire className="w-4 h-4" />
                        <span>Save 28%</span>
                    </span>
                </motion.div>

                {/* Pricing Cards */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {plans.map((plan, index) => {
                        const displayPrice = isAnnual ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice;

                        return (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.8 }}
                            >
                                <Card className={`px-8 py-2 lg:py-4 h-full flex flex-col gap-6 lg:gap-7 ${index === 1 ? "border-[#ff6200]" : "border-gray-200"} transition-colors duration-500 shadow-lg hover:shadow-xl bg-white`}>
                                    <CardHeader className="flex flex-col items-center text-center">
                                        <div className={`w-fit flex justify-center items-center gap-[7px] mb-3 text-[13px] px-[14px] py-[11px] ${index === 1 ? "text-white rounded-full bg-[#ff6200]" : "text-[#ff6200]"}`}>
                                            <span className="text-sm">{plan.icon}</span>
                                            <CardTitle className="font-bold uppercase">
                                                {plan.name}
                                            </CardTitle>
                                        </div>
                                        <CardDescription className="text-gray-600 mb-4 text-sm leading-5 w-[200px]">
                                            {plan.description}
                                        </CardDescription>
                                        <div className="flex justify-center items-baseline gap-1">
                                            <motion.span
                                                key={displayPrice}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-5xl lg:text-5xl font-bold text-black"
                                            >
                                                ${displayPrice.toLocaleString()}/
                                            </motion.span>
                                            <span className="text-gray-500 text-sm">month</span>
                                        </div>
                                    </CardHeader>
                                    <button
                                        className="w-full bg-gray-100 text-[#666] rounded-full px-6 py-4 flex items-center justify-center gap-2 font-semibold text-lg transition-colors duration-300 group"
                                    >
                                        <span>Select this plan</span>
                                        <FaArrowRightLong className="text-[#ff6200] group-hover:translate-x-2 transition-transform duration-300" />
                                    </button>

                                    <div className="border-b border-gray-200" />

                                    <CardContent className="flex pb-6 flex-col gap-5 px-0">
                                        <h1>Features included :</h1>
                                        <ul className="space-y-3">
                                            {plan.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-2 text-lg text-[#666] leading-5">
                                                    <span className="text-[#ff6200] mt-1.5 font-bold">•</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}

