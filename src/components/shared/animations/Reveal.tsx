"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

import { cn } from "@/utils";
import { useInView } from "@/hooks/useInView";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  ease?: string;
  scale?: number;
  rotate?: number;
  opacity?: number;
  blur?: number;
  inView?: boolean;
  rootMargin?: string;
  once?: boolean;
  onComplete?: () => void;
}

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 1,
  distance = 50,
  ease = "power3.out",
  scale = 1,
  rotate = 0,
  opacity = 0,
  blur = 0,
  inView = false,
  rootMargin = "-15% 0px",
  once = true,
  onComplete,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { rootMargin, once });
  const hasAnimated = useRef(false);

  const shouldAnimate = inView ? isInView : true;

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const getInitialPosition = () => {
      switch (direction) {
        case "up":
          return { y: distance, x: 0 };
        case "down":
          return { y: -distance, x: 0 };
        case "left":
          return { x: distance, y: 0 };
        case "right":
          return { x: -distance, y: 0 };
        case "none":
          return { x: 0, y: 0 };
      }
    };

    const { x, y } = getInitialPosition();

    // Set initial state
    gsap.set(el, {
      opacity,
      x,
      y,
      scale,
      rotate,
      filter: blur > 0 ? `blur(${blur}px)` : "none",
    });
  }, [direction, distance, opacity, scale, rotate, blur]);

  useEffect(() => {
    if (!ref.current) return;
    if (!shouldAnimate) return;
    if (once && hasAnimated.current) return;

    hasAnimated.current = true;
    const el = ref.current;

    const tween = gsap.to(el, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      duration,
      delay,
      ease,
      onComplete,
    });

    return () => {
      tween.kill();
    };
  }, [shouldAnimate, duration, delay, ease, once, onComplete]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
