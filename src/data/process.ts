export interface ProcessStep {
    number: number;
    title: string;
    description: string;
    content: string;
}

export const processSteps: ProcessStep[] = [
    {
        number: 1,
        title: "PROJECT KICKOFF",
        description: "We begin by understanding your vision, goals, and audience, setting a strong foundation for a successful collaboration.",
        content: "Setting the Foundation for Success"
    },
    {
        number: 2,
        title: "DESIGN PHASE",
        description: "We bring your ideas to life with a design that's visually stunning, user-friendly, and aligned with your brand identity.",
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
];

