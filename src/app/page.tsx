"use client";

import Achievements from "@/components/home/achievements";
import AnimatedCards from "@/components/home/animated-cards";
import Banner from "@/components/home/banner";
import Banner2 from "@/components/home/banner-2";
import Benefits from "@/components/home/benefits";
import Hero from "@/components/home/hero";
import SlideSection from "@/components/home/picture-slide";
import Projects from "@/components/home/projects";
import Process from "@/components/home/process";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import About from "@/components/home/about ";
import Pricing from "@/components/home/pricing";

export default function Home() {
  return <>
    <div className="overflow-hidden">
      <Hero />
      <SlideSection />
      <AnimatedCards />
      <Achievements />
      <Banner />
      <Benefits />
    </div>
    <Projects />
    <Banner2 />
    <div className="relative">
      <Process />
      <Testimonials />
    </div>
    <Services />
    <About />
    <Pricing />
  </>
}