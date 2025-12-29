import { FaStar } from "react-icons/fa";
import { FaBolt, FaGem } from "react-icons/fa6";

export interface PricingPlan {
    name: string;
    iconComponent: React.ComponentType<{ className?: string }>;
    monthlyPrice: number;
    annualPrice: number;
    description: string;
    features: string[];
}

export const plans: PricingPlan[] = [
    {
        name: "Standard",
        iconComponent: FaStar,
        monthlyPrice: 1799,
        annualPrice: 12959, // 1799 * 12 * 0.6 (40% discount for annual)
        description: "For growing businesses needing more features and flexibility.",
        features: [
            "Custom-Designed Website.",
            "Performance-Optimized Design",
            "SEO-optimized foundation",
            "Performance-tuned design",
            "Essential social media integration"
        ]
    },
    {
        name: "Growth",
        iconComponent: FaBolt,
        monthlyPrice: 2699,
        annualPrice: 19433, // 2699 * 12 * 0.6
        description: "For growing businesses needing more features and flexibility.",
        features: [
            "Up to 10 fully customized pages",
            "Advanced SEO optimization.",
            "Conversion-driven design approach",
            "Integrated blog setup",
            "Custom forms & automation"
        ]
    },
    {
        name: "Enterprise",
        iconComponent: FaGem,
        monthlyPrice: 3699,
        annualPrice: 26633, // 3699 * 12 * 0.6
        description: "For growing businesses needing more features and flexibility.",
        features: [
            "Everything in the Growth Plan",
            "Unlimited pages with customization.",
            "E-commerce site integration",
            "Custom animations, Interactions.",
            "API & CRM integrations"
        ]
    }
];

