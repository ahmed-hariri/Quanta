"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/home/hero";

// Lazy load components below the fold for better initial page load performance
const SlideSection = dynamic(() => import("@/components/home/picture-slide"), {
    loading: () => <div className="h-20" />,
});
const AnimatedCards = dynamic(() => import("@/components/home/animated-cards"), {
    loading: () => <div className="h-96" />,
});
const Achievements = dynamic(() => import("@/components/home/achievements"));
const Banner = dynamic(() => import("@/components/home/banner"));
const Benefits = dynamic(() => import("@/components/home/benefits"));
const Projects = dynamic(() => import("@/components/home/projects"));
const Banner2 = dynamic(() => import("@/components/home/banner-2"));
const Process = dynamic(() => import("@/components/home/process"));
const Testimonials = dynamic(() => import("@/components/home/testimonials"));
const Services = dynamic(() => import("@/components/home/services"));
const About = dynamic(() => import("@/components/home/about "));
const Pricing = dynamic(() => import("@/components/home/pricing"));
const FAQ = dynamic(() => import("@/components/home/faq"));
const Blogs = dynamic(() => import("@/components/home/blogs"));
const CTA = dynamic(() => import("@/components/home/cta"));

/**
 * Home Page Component
 * Main landing page with all sections displayed in order
 */
export default function Home() {
    return (
        <>
            {/* Above the fold sections - loaded immediately */}
            <div className="overflow-hidden">
                <Hero />
                <SlideSection />
                <AnimatedCards />
                <Achievements />
                <Banner />
                <Benefits />
            </div>

            {/* Below the fold sections - lazy loaded */}
            <Projects />
            <Banner2 />
            <div className="relative">
                <Process />
                <Testimonials />
            </div>
            <Services />
            <About />
            <Pricing />
            <FAQ />
            <Blogs />
            <CTA />
        </>
    );
}