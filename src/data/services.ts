import { FiSend, FiSettings, FiHash } from "react-icons/fi";
import { FaPalette } from "react-icons/fa";

export interface Service {
    id: number;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

export const services: Service[] = [
    {
        id: 1,
        icon: FiSend,
        title: "UI/UX DESIGN",
        description: "User-centric interfaces that are visually appealing and functionally seamless."
    },
    {
        id: 2,
        icon: FiSettings,
        title: "WEB DESIGN",
        description: "Conversion-focused websites designed for performance, aesthetics, and ease of use."
    },
    {
        id: 3,
        icon: FaPalette,
        title: "GRAPHIC DESIGN",
        description: "From social media graphics to business presentations, every design serves a purpose."
    },
    {
        id: 4,
        icon: FiHash,
        title: "BRAND IDENTITY",
        description: "A cohesive brand system that builds recognition and trust. Logos, typography, color schemes, and brand guidelines."
    }
];

