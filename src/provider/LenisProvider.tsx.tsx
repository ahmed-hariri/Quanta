"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface LenisProviderProps {
    children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}