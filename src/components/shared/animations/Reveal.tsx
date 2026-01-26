"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

import { cn, getDirectionOffset, Direction } from "@/utils";
import { useInView } from "@/hooks/useInView";

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

    const { x, y } = getDirectionOffset(direction, distance);

    gsap.set(ref.current, {
      opacity,
      x,
      y,
      scale,
      rotate,
      filter: blur > 0 ? `blur(${blur}px)` : "none",
    });
  }, [direction, distance, opacity, scale, rotate, blur]);

  useEffect(() => {
    if (!ref.current || !shouldAnimate) return;
    if (once && hasAnimated.current) return;

    hasAnimated.current = true;

    const tween = gsap.to(ref.current, {
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
