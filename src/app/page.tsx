"use client";

import Hero from "@/components/home/hero";
import SlideSection from "@/components/home/picture-slide";

export default function Home() {
  return <>
    <div className="overflow-hidden">
      <Hero />
      <SlideSection />
    </div>
  </>
}