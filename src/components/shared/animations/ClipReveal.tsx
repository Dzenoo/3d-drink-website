"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

import { cn } from "@/utils";
import { useInView } from "@/hooks/useInView";

type Direction = "up" | "down" | "left" | "right";

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  ease?: string;
  inView?: boolean;
  rootMargin?: string;
  once?: boolean;
}

export function ClipReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 1,
  ease = "power4.out",
  inView = false,
  rootMargin = "-15% 0px",
  once = true,
}: ClipRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { rootMargin, once });
  const hasAnimated = useRef(false);

  const shouldAnimate = inView ? isInView : true;

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

  useEffect(() => {
    if (!containerRef.current || !innerRef.current) return;

    const { from, translate } = getClipPaths();
    gsap.set(containerRef.current, { clipPath: from });
    gsap.set(innerRef.current, { ...translate, opacity: 0 });
  }, [direction]);

  useEffect(() => {
    if (!containerRef.current || !innerRef.current) return;
    if (!shouldAnimate) return;
    if (once && hasAnimated.current) return;

    hasAnimated.current = true;
    const { to } = getClipPaths();

    const tl = gsap.timeline({ delay });

    tl.to(containerRef.current, {
      clipPath: to,
      duration,
      ease,
    }).to(
      innerRef.current,
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
  }, [shouldAnimate, delay, duration, ease, once, direction]);

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
