"use client";

import React, { useEffect, ReactNode } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // 1. Initialize Lenis with optimal momentum easing
    const lenis = new Lenis({
      duration: 1.1, // Smooth duration (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 2. Expose Lenis instance globally to window for component coordination (e.g. Navbar)
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    // 3. Catch all internal anchor links (#hash) for Lenis smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (
        target &&
        target.hash &&
        target.hash.startsWith("#") &&
        target.origin === window.location.origin
      ) {
        if (target.hash === "#" || target.hash === "#home" || target.hash === "#hero") {
          e.preventDefault();
          lenis.scrollTo(0, { duration: 1.1 });
          return;
        }
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          // offset: 0 respects the element's CSS scroll-margin-top
          lenis.scrollTo(element as HTMLElement, { offset: 0, duration: 1.1 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
