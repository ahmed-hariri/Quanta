import SectionTitle from "@/components/shared/top-bar";

export default function Process() {
    const steps: { number: number, title: string, description: string, content: string }[] = [
        {
            number: 1,
            title: "PROJECT KICKOFF",
            description: "We begin by understanding your vision, goals, and audience, setting a strong foundation for a successful collaboration.",
            content: "Setting the Foundation for Success"
        },
        {
            number: 2,
            title: "DESIGN PHASE",
            description: "We bring your ideas to life with a design that’s visually stunning, user-friendly, and aligned with your brand identity.",
            content: "Visualizing Your Digital Identity"
        },
        {
            number: 3,
            title: "ITERATION",
            description: "We polish every detail through feedback and iteration, ensuring your website is intuitive, functional, and perfectly crafted.",
            content: "Fine-Tuning for Excellence"
        },
        {
            number: 4,
            title: "Go live",
            description: "With everything optimized, we launch your website to deliver a powerful and lasting impression on your audience.",
            content: "Delivering Your Vision to the World"
        }
    ]

    return <>
        <section
            className="flex flex-col items-center bg-gradient-to-b from-[#ffffff55]/60 to-[#ffffff]">
            <div className="w-full flex justify-center relative lg:h-[860px]">
                <div className="w-full hidden sm:w-[1500px] lg:w-full xl:max-w-[1220px] h-full lg:ml-16 xl:ml-0 lg:flex gap-2 absolute -z-10">
                    <div className="w-5 h-full bg-[#ff6200]"></div>
                    <div className="w-10 h-full bg-[#ff6200]"></div>
                    <div className="w-[60px] h-full bg-[#ff6200]"></div>
                    <div className="w-20 h-full bg-[#ff6200]"></div>
                </div>
                <div className="w-full sm:w-full xl:w-[600px] flex justify-end px-4 xl:px-0">
                    <div className="flex flex-col items-start sm:gap-4 mt-32 xl:-mr-[190px]">
                        <SectionTitle title="Process" showYear={false} border={false} />
                        <h1 className="text-[52px] lg:text-[65px] xl:text-[85px] leading-14 lg:leading-[80px] xl:leading-24 uppercase lg:w-[300px]">
                            Our streamlined 4 step process
                        </h1>
                        <p className="sm:w-4/6 lg:w-[500px] text-[#4f4f4f] text-[18px] xl:text-[20px]">
                            Working directly with people fuels creativity and pushes us
                            to achieve remarkable experiences for the end user.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full xl:w-[68%] h-full flex flex-col relative mt-24 lg:mt-0 lg:shadow-[-80px_-120px_130px_#ffff]">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`w-full xl:h-[555px] ${index % 2 === 0 ? 'bg-[#f7f7f7]' : 'bg-white'} p-2 rounded-[30px] sticky -mt-[10px] top-0`}>
                        <div className="w-full h-full rounded-[10px] overflow-hidden xl:p-8 xl:pr-16 pb-0 flex flex-col xl:flex-row items-center relative">

                            <div className="xl:w-2/6 flex p-9">
                                <span className="text-[110px] xl:text-[130px] mt-10 xl:mt-0 font-bold text-[#ff6200] leading-none">{step.number}</span>
                            </div>

                            <div className="flex-1 flex flex-col items-end gap-8 px-4 xl:px-0">
                                <div className="flex flex-col items-center xl:items-end p-8 xl:p-0 pt-4 gap-4">
                                    <h2 className="text-[60px] xl:text-[74px] font-semibold text-[#333] uppercase tracking-wide leading-16 xl:leading-normal text-center xl:text-start">{step.title}</h2>
                                    <p className="text-[16px] xl:text-[18px] text-[#4f4f4f] text-center xl:text-end sm:max-w-[500px] leading-5 xl:leading-6">{step.description}</p>
                                </div>
                                <div className="w-full xl:w-[645px] h-[300px] opacity-80 rounded-xl mb-5 xl:mb-0 flex flex-col justify-between items-end gap-2 shadow-xl p-3 bg-white">
                                    <p className="text-[#4f4f4f]">{step.content}</p>
                                    <div style={{ backgroundImage: `url(/process/process-${index + 1}.avif)` }}
                                        className="w-full h-full rounded-xl bg-cover bg-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
}