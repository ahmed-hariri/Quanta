import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCards() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [startY, setStartY] = useState(200); // initial fallback

    // Determine starting Y position based on screen width (client-side only)
    useEffect(() => {
        const w = window.innerWidth;
        if (w < 768) setStartY(120);
        else setStartY(200);
    }, []);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end end"],
    });

    const rawY = useTransform(scrollYProgress, [0, 1], [startY, -80]);
    const smoothY = useSpring(rawY, { stiffness: 400, damping: 70, mass: 1 });
    // White top shadow
    const topShadow = "0 -30px 20px 10px rgba(255,255,255,0.5)";


    return (
        <motion.section
            ref={sectionRef}
            className="perspective"
            style={{ y: smoothY }}
        >
            <div className="flex justify-center p-10 transform -rotate-3 -rotate-y-[4deg] rotate-x-[24deg] gap-[10px]">
                {/* carrousel horizontal infini */}
                <motion.div
                    className="flex gap-[10px]"
                    style={{ boxShadow: topShadow }}
                    animate={{ x: ["0%", "-70%"] }}
                    transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
                >
                    {Array.from({ length: 30 }).map((_, i) => {
                        const index = (i % 6) + 1; // prend l'image 1 à 6 et répète
                        return (
                            <div key={i}>
                                <div
                                    className="w-[390px] h-[551px] rounded-lg bg-cover bg-center"
                                    style={{ backgroundImage: `url(scroll-cards/card-${index}.avif)` }}
                                />
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </motion.section>
    );
}
