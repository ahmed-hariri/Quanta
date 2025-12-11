import Image from "next/image";
import { motion } from "framer-motion";

export default function SlideSection() {
    const logos = ["1.svg", "2.svg", "3.svg", "4.svg", "5.svg"];

    return (
        <section className="w-full flex justify-center items-center mt-10 overflow-hidden">
            <motion.div
                style={{
                    maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, #000 2.5%, #000 97.5%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, #000 2.5%, #000 97.5%, rgba(0,0,0,0) 100%)'
                }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
                className="w-[92%] h-full flex items-center"
            >
                <motion.ul
                    className="flex w-max gap-[60px] items-center"
                    animate={{ x: ["0%", "-33.33%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear", repeatType: "loop" }}
                >
                    {[...logos, ...logos, ...logos].map((logo, index) => {
                        const src = `/logos/${logo}`;
                        return (
                            <Image
                                key={index}
                                src={src}
                                alt={`logo-${index % logos.length}`}
                                width={25}
                                height={25}
                                className="h-auto w-auto scale-75 grayscale"
                                loading="lazy"
                                priority={false}
                            />
                        );
                    })}
                </motion.ul>
            </motion.div>
        </section>
    )
}