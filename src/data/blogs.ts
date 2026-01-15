export interface BlogPost {
    id: number;
    image: string;
    date: string;
    title: string;
}

// Available images from public folder
const availableBlogImages = [
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
const blogImages = availableBlogImages.slice(0, 3);

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        image: blogImages[0],
        date: "Feb 28, 2024",
        title: "The Importance of Mobile-First Design in 2025"
    },
    {
        id: 2,
        image: blogImages[1],
        date: "Jun 13, 2025",
        title: "Maximizing Conversions with Simple Web Design"
    },
    {
        id: 3,
        image: blogImages[2],
        date: "Feb 13, 2023",
        title: "How to Choose the Color Scheme for Your Website"
    }
];

