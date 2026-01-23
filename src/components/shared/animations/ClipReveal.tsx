// src/components/shared/animations/ClipReveal.tsx

"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right";

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  ease?: string;
  scrollTrigger?: boolean;
  triggerStart?: string;
  once?: boolean;
}

export function ClipReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 1,
  ease = "power4.out",
  scrollTrigger = false,
  triggerStart = "top 85%",
  once = true,
}: ClipRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !innerRef.current) return;

    const container = containerRef.current;
    const inner = innerRef.current;

    // Clip paths for different directions
    const getClipPaths = () => {
      switch (direction) {
        case "up":
          return {
            from: "inset(100% 0% 0% 0%)",
            to: "inset(0% 0% 0% 0%)",
            translate: { y: 50 },
          };
        case "down":
          return {
            from: "inset(0% 0% 100% 0%)",
            to: "inset(0% 0% 0% 0%)",
            translate: { y: -50 },
          };
        case "left":
          return {
            from: "inset(0% 0% 0% 100%)",
            to: "inset(0% 0% 0% 0%)",
            translate: { x: 50 },
          };
        case "right":
          return {
            from: "inset(0% 100% 0% 0%)",
            to: "inset(0% 0% 0% 0%)",
            translate: { x: -50 },
          };
      }
    };

    const { from, to, translate } = getClipPaths();

    // Set initial state
    gsap.set(container, { clipPath: from });
    gsap.set(inner, { ...translate, opacity: 0 });

    // Animation config
    const tl = gsap.timeline({
      delay,
      scrollTrigger: scrollTrigger
        ? {
            trigger: container,
            start: triggerStart,
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
          }
        : undefined,
    });

    tl.to(container, {
      clipPath: to,
      duration,
      ease,
    }).to(
      inner,
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: duration * 0.8,
        ease,
      },
      0,
    );

    return () => {
      tl.kill();
    };
  }, [direction, delay, duration, ease, scrollTrigger, triggerStart, once]);

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
