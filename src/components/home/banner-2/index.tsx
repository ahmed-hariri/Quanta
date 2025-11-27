import BlurText from "@/components/shared/blur-text";

export default function Banner2() {
    return (
        <section
            className="min-h-[500px] lg:h-[1010px] xl:max-h-[1100px] px-8 xl:px-0 mt-32 flex justify-center relative bg-gradient-to-b from-[#05050555] to-[#000000]/50 lg:to-[#000000]">
            <div className="w-full h-full lg:flex absolute -z-10 bg-cover bg-center bg-fixed hidden">
                {Array.from({ length: 3 }).map((_, i) => {
                    return (
                        <div
                            key={i}
                            className="w-1/3 h-full overflow-hidden">
                            <div
                                key={i}
                                style={{ backgroundImage: `url(/banner-2/pic-${i + 1}.avif)` }}
                                className={`w-full h-full bg-cover bg-center ${(i === 0 || i === 2) ? "scale-125 bg-top" : ""}`}
                            >

                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="w-full h-full flex justify-center lg:hidden absolute -z-10 bg-black">
                <div className="w-[490px] sm:w-[450px] h-[450px] overflow-hidden py-24 px-[100px]">
                    <div
                        style={{ backgroundImage: "url(/banner-2/pic-3.avif)" }}
                        className="w-full h-full bg-cover bg-center scale-125 rounded-md">
                    </div>
                </div>
            </div>

            <div className="w-full sm:w-[500px] lg:max-w-[1220px] flex flex-col justify-center items-center gap-4 mt-[400px] lg:mt-0 lg:pt-36 text-center text-white">
                <div className="flex items-start gap-3">
                    <p className=" text-[#ff6200] text-3xl">
                        &#47;&#47;
                    </p>
                    <BlurText
                        text="Quanta isn't just a design agency; it's a powerhouse of innovation where strategy meets creativity, crafting visually stunning and highly effective digital experiences that captivate audiences, elevate brands, and drive real results."
                        delay={70}
                        animateBy="words"
                        direction="top"
                        className="text-[24px] lg:text-3xl mb-8 lg:w-[320px] xl:w-[300px] leading-7 lg:leading-9 text-gray-300"
                    />
                </div>
            </div>
        </section>
    );
}
