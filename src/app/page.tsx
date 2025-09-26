"use client";

import Achievements from "@/components/home/achievements";
import AnimatedCards from "@/components/home/animated-cards";
import Hero from "@/components/home/hero";
import SlideSection from "@/components/home/picture-slide";

export default function Home() {
  return <>
    <div className="overflow-hidden">
      <Hero />
      <SlideSection />
      <AnimatedCards />
      <Achievements />
    </div>
  </>
}