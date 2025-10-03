"use client";

import Achievements from "@/components/home/achievements";
import AnimatedCards from "@/components/home/animated-cards";
import Banner from "@/components/home/banner";
import Benefits from "@/components/home/benefits";
import Hero from "@/components/home/hero";
import SlideSection from "@/components/home/picture-slide";
import Projects from "@/components/home/projects";

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
  </>
}