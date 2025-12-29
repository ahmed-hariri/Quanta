"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface LenisProviderProps {
    children: ReactNode;
}

/**
 * LenisProvider Component
 * Provides smooth scrolling functionality using Lenis library
 * 
 * Configuration:
 * - lerp: 0.12 provides moderate smoothness (range: 0.1-0.15)
 *   Lower values = smoother but slower response
 *   Higher values = more responsive but less smooth
 */
export default function LenisProvider({ children }: LenisProviderProps) {
    useEffect(() => {
        // Initialize Lenis smooth scroll
        const lenis = new Lenis({
            lerp: 0.12, // Moderate smoothness for balanced UX
        });

        // Request Animation Frame loop for smooth scrolling
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup: destroy Lenis instance on unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}