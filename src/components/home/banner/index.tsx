import { motion } from "framer-motion";

export default function Banner() {
    return (
        <section
            style={{ background: 'linear-gradient(180deg, #fff0, #fff3 39.01%, #ffffff80 60.87%, #ffffffd4 80%, #fff)' }}
            className="min-h-[500px] lg:min-h-[800px] px-8 xl:px-0 my-4 lg:mt-32 flex justify-center relative">
            <div
                style={{ backgroundImage: `url(background-of-banner.avif)` }}
                className="w-full h-full absolute -z-10 bg-cover bg-center bg-fixed"></div>
            <div className="w-full lg:max-w-[1220px] flex flex-col items-center gap-4 pt-16 lg:pt-36 text-center text-white">
                {/* <!-- Title --> */}
                <motion.h1
                    initial={{ opacity: 0, marginTop: -80 }}
                    whileInView={{ opacity: 1, marginTop: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-[35px] lg:text-[64px]">
                    SHAPIN&apos; SIMPLE
                </motion.h1>

                {/* <!-- Sub title --> */}
                <h1 className="sm:w-1/2 lg:w-5/6 text-[50px] lg:text-[100px] xl:text-[130px] text-center lg:leading-40">INTO SPECTACULAR</h1>
            </div>
        </section>

    );
}
