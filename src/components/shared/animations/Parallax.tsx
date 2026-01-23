"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "vertical" | "horizontal";
  ease?: string;
  start?: string;
  end?: string;
}

export function Parallax({
  children,
  className,
  speed = 0.5,
  direction = "vertical",
  ease = "none",
  start = "top bottom",
  end = "bottom top",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const distance = 100 * speed;

    const tween = gsap.fromTo(
      el,
      {
        y: direction === "vertical" ? -distance : 0,
        x: direction === "horizontal" ? -distance : 0,
      },
      {
        y: direction === "vertical" ? distance : 0,
        x: direction === "horizontal" ? distance : 0,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub: true,
        },
      },
    );

    return () => {
      tween.kill();
    };
  }, [speed, direction, ease, start, end]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
