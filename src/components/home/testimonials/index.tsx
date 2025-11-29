import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import SectionTitle from "@/components/shared/top-bar";
import "swiper/css";
import "swiper/css/navigation";

interface Testimonial {
    id: number;
    name: string;
    title: string;
    text: string;
    image: string;
    isMain?: boolean;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sophia Reynolds",
        title: "Founder of Studio Apex",
        text: "The attention to detail in Quanta is unmatched. Every section feels well thought out, making our agency’s portfolio shine effortlessly",
        image: "/testimonials/sophia.avif",
        isMain: true
    },
    {
        id: 2,
        name: "Daniel Hayes",
        title: "Media Executive",
        text: "We switched to Quanta and immediately noticed how intuitive and conversion-focused the design is. It's an absolute must-have!",
        image: "/testimonials/daniel.avif"
    },
    {
        id: 3,
        name: "Emily Torres",
        title: "Marketing Strategist",
        text: "Quanta helped us create a high-impact presence online with minimal effort. The balance between aesthetics and functionality is perfect",
        image: "/testimonials/emily.avif"
    },
    {
        id: 4,
        name: "Michael Chen",
        title: "Creative Director",
        text: "Quanta transformed our digital presence completely. The design quality and user experience exceeded all our expectations.",
        image: "/testimonials/michael.avif"
    },
    {
        id: 5,
        name: "Sarah Johnson",
        title: "Brand Manager",
        text: "Working with Quanta was a game-changer. Our website now perfectly represents our brand and drives real business results.",
        image: "/testimonials/sarah.avif"
    }
];

export default function Testimonials() {
    return (
        <section className="w-full flex flex-col items-center px-4 xl:px-0 p-20 lg:py-32 sticky top-0 bg-white">
            <div className="w-full lg:max-w-[1220px] flex flex-col items-center gap-7">
                <SectionTitle title="TESTIMONIALS" showYear={false} />

                <div className="flex flex-col items-center text-center gap-[50px] lg:gap-[120px] font-semibold">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="w-full flex flex-col items-center gap-5 lg:gap-0">
                        <h1 className="text-[52px] lg:text-[70px] xl:text-[85px] leading-14 lg:leading-normal uppercase">
                            Trusted by THE Best
                        </h1>
                        <p className="sm:w-4/6 lg:w-[52%] text-center text-[#4f4f4f] text-[18px] xl:text-[20px] leading-7">
                            Authentic feedback from our clients, sharing how our designs
                            have transformed their businesses and driven real results.
                        </p>
                    </motion.div>
                </div>

                {/* Main Large Testimonial Card - Fixed, doesn't scroll */}
                <div className="px-2 lg:px-0 w-full lg:w-[82%] mt-5 lg:mt-24">
                    {(() => {
                        const mainTestimonial = testimonials.find(t => t.isMain) || testimonials[0];
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.6 }}
                                className="w-full flex flex-col lg:flex-row gap-5 mb-8"
                            >
                                {/* Image on Left */}
                                <div className="w-full lg:w-[40%] aspect-square lg:aspect-auto">
                                    <div
                                        className="w-full h-full rounded-lg bg-cover bg-center bg-gray-200"
                                        style={{ backgroundImage: `url(${mainTestimonial.image})` }}
                                    />
                                </div>

                                {/* Testimonial Text on Right */}
                                <div className="w-full lg:w-[60%] bg-[#f7f7f7] rounded-lg p-8 flex flex-col">
                                    {/* Large Quote Icon */}
                                    <h1 className="text-[#ff6200] text-[80px] lg:text-8xl font-bold leading-none m-0 -mb-5">
                                        &quot;
                                    </h1>

                                    {/* Testimonial Content */}
                                    <div className="flex flex-col gap-6">
                                        <p className="lg:w-[85%] text-[20px] lg:text-[28px] text-[#333] lg:leading-10">
                                            {mainTestimonial.text}
                                        </p>

                                        <div className="flex flex-col">
                                            <h3 className="text-lg font-semibold text-[#333]">
                                                {mainTestimonial.name}
                                            </h3>
                                            <p className="text-xs text-[#4f4f4f]">
                                                {mainTestimonial.title}
                                            </p>
                                        </div>

                                        {/* Stars */}
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className="text-[#ff6200] text-[16px]" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })()}

                    {/* Swiper Container - Only for smaller cards */}
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".swiper-button-next-testimonials",
                            prevEl: ".swiper-button-prev-testimonials",
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        breakpoints={{
                            768: { 
                                slidesPerView: 2,
                                slidesPerGroup: 2
                            },
                            1024: { 
                                slidesPerView: 2,
                                slidesPerGroup: 2
                            }
                        }}
                        className="testimonials-swiper"
                    >
                        {/* Each testimonial is a separate slide */}
                        {testimonials.filter(t => !t.isMain).map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="w-full bg-[#f7f7f7] rounded-2xl p-4 flex flex-col gap-4">
                                    <div className="flex flex-col gap-4 bg-white p-5 rounded-md">
                                        {/* Stars at Top */}
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className="text-[#ff6200] text-[18px]" />
                                            ))}
                                        </div>
                                        {/* Testimonial Text */}
                                        <p className="text-[16px] lg:text-[18px] text-[#333] leading-7">
                                            {testimonial.text}
                                        </p>
                                    </div>
                                    {/* Author Info */}
                                    <div className="flex items-center gap-4 mt-2">
                                        <div
                                            className="w-12 h-12 rounded-full bg-cover bg-center bg-gray-300"
                                            style={{ backgroundImage: `url(${testimonial.image})` }}
                                        />
                                        <div className="flex flex-col">
                                            <h3 className="text-[18px] font-semibold text-[#333]">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-[14px] text-[#4f4f4f]">
                                                {testimonial.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center gap-4 mt-5">
                        <button className="swiper-button-prev-testimonials w-12 h-12 rounded-full cursor-pointer bg-[#f7f7f7] hover:bg-[#e5e5e5] flex items-center justify-center transition-colors">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="swiper-button-next-testimonials w-12 h-12 rounded-full cursor-pointer bg-[#f7f7f7] hover:bg-[#e5e5e5] flex items-center justify-center transition-colors">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

