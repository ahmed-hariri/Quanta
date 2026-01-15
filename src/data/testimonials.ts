export interface Testimonial {
    id: number;
    name: string;
    title: string;
    text: string;
    image: string;
    isMain?: boolean;
}

// Available images from public folder
const availableImages = [
    "/profile-1.png",
    "/profile-2.png",
    "/profile-3.png",
    "/profile-4.png",
    "/projects/project-1.avif",
    "/projects/project-2.avif",
    "/projects/project-3.avif",
    "/projects/project-4.avif",
    "/scroll-cards/card-1.avif",
    "/scroll-cards/card-2.avif",
    "/scroll-cards/card-3.avif",
    "/scroll-cards/card-4.avif",
    "/scroll-cards/card-5.avif",
    "/scroll-cards/card-6.avif",
    "/benefits/pic-1.avif",
    "/benefits/pic-2.avif",
    "/benefits/pic-3.avif",
    "/banner-2/pic-1.avif",
    "/banner-2/pic-2.avif",
    "/banner-2/pic-3.avif",
    "/process/process-1.avif",
    "/process/process-2.avif",
    "/process/process-3.avif",
    "/process/process-4.avif",
];

// Use a deterministic slice to avoid SSR/CSR mismatches.
const testimonialImages = availableImages.slice(0, 5);

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sophia Reynolds",
        title: "Founder of Studio Apex",
        text: "The attention to detail in Quanta is unmatched. Every section feels well thought out, making our agency's portfolio shine effortlessly",
        image: testimonialImages[0],
        isMain: true
    },
    {
        id: 2,
        name: "Daniel Hayes",
        title: "Media Executive",
        text: "We switched to Quanta and immediately noticed how intuitive and conversion-focused the design is. It's an absolute must-have!",
        image: testimonialImages[1]
    },
    {
        id: 3,
        name: "Emily Torres",
        title: "Marketing Strategist",
        text: "Quanta helped us create a high-impact presence online with minimal effort. The balance between aesthetics and functionality is perfect",
        image: testimonialImages[2]
    },
    {
        id: 4,
        name: "Michael Chen",
        title: "Creative Director",
        text: "Quanta transformed our digital presence completely. The design quality and user experience exceeded all our expectations.",
        image: testimonialImages[3]
    },
    {
        id: 5,
        name: "Sarah Johnson",
        title: "Brand Manager",
        text: "Working with Quanta was a game-changer. Our website now perfectly represents our brand and drives real business results.",
        image: testimonialImages[4]
    }
];

