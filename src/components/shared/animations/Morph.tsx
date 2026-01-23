"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { cn } from "@/utils";

interface MorphProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  rotate?: number;
  skew?: number;
  borderRadius?: string;
  backgroundColor?: string;
  duration?: number;
  ease?: string;
}

export function Morph({
  children,
  className,
  scale = 1.05,
  rotate = 0,
  skew = 0,
  borderRadius,
  backgroundColor,
  duration = 0.4,
  ease = "power2.out",
}: MorphProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const hoverState: gsap.TweenVars = {
      scale,
      rotate,
      skewX: skew,
      duration,
      ease,
    };

    if (borderRadius) hoverState.borderRadius = borderRadius;
    if (backgroundColor) hoverState.backgroundColor = backgroundColor;

    const defaultState: gsap.TweenVars = {
      scale: 1,
      rotate: 0,
      skewX: 0,
      duration,
      ease,
    };

    if (borderRadius)
      defaultState.borderRadius = getComputedStyle(el).borderRadius;
    if (backgroundColor)
      defaultState.backgroundColor = getComputedStyle(el).backgroundColor;

    const handleEnter = () => gsap.to(el, hoverState);
    const handleLeave = () => gsap.to(el, defaultState);

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [scale, rotate, skew, borderRadius, backgroundColor, duration, ease]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
