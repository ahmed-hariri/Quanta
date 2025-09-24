import { motion } from "framer-motion";

export default function SlideSection() {
    const techStack = ["jkejfkefjke", "ejfkejfkjke", "jkejfkefjke", "ejfkejfkjke", "jkejfkefjke", "ejfkejfkjke", "jkejfkefjke", "ejfkejfkjke", "jkejfkefjke", "ejfkejfkjke", "jkejfkefjke", "ejfkejfkjke", "jkejfkefjke", "ejfkejfkjke", "jkejfkefjke", "ejfkejfkjke", "jkejfkefjke", "ejfkejfkjke", "jkejfkefjke", "ejfkejfkjke", "jkejfkefjke", "ejfkejfkjke", "jkejfkefjke", "ejfkejfkjke"]

    return <>
        <section className="w-full flex justify-center items-center mt-10">
            <motion.div
                style={{
                    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 2.5%, rgb(0, 0, 0) 97.5%, rgba(0, 0, 0, 0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 2.5%, rgb(0, 0, 0) 97.5%, rgba(0, 0, 0, 0) 100%)'
                }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
                className="w-[92%] h-full flex items-center">
                <motion.ul
                    className="flex w-max gap-[60px] items-center text-[30px]"
                    animate={{ x: ["0%", "-70%"] }}
                    transition={{ repeat: Infinity, duration: 60, ease: "linear" }}>
                    {[...techStack, ...techStack].map((tech, index) => (
                        <li key={index} className="text-gray-500 whitespace-nowrap">
                            {tech}
                        </li>
                    ))}
                </motion.ul>
            </motion.div>
        </section>
    </>
}