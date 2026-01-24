"use client";

import { useRef, useEffect, Children, ReactElement } from "react";
import gsap from "gsap";

import { useInView } from "@/hooks/useInView";

interface StaggerProps {
  children: ReactElement[];
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  stagger?: number;
  delay?: number;
  duration?: number;
  distance?: number;
  ease?: string;
  from?: "start" | "center" | "end" | "edges" | "random";
  inView?: boolean;
  rootMargin?: string;
  once?: boolean;
}

export function Stagger({
  children,
  className,
  direction = "up",
  stagger = 0.1,
  delay = 0,
  duration = 0.8,
  distance = 40,
  ease = "power3.out",
  from = "start",
  inView = false,
  rootMargin = "-15% 0px",
  once = true,
}: StaggerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const isInView = useInView(containerRef, { rootMargin, once });
  const hasAnimated = useRef(false);

  const shouldAnimate = inView ? isInView : true;

  useEffect(() => {
    const items = itemsRef.current.filter(Boolean);
    if (!items.length) return;

    const getInitial = () => {
      switch (direction) {
        case "up":
          return { y: distance, x: 0 };
        case "down":
          return { y: -distance, x: 0 };
        case "left":
          return { x: distance, y: 0 };
        case "right":
          return { x: -distance, y: 0 };
      }
    };

    const { x, y } = getInitial();
    gsap.set(items, { opacity: 0, x, y });
  }, [direction, distance]);

  useEffect(() => {
    const items = itemsRef.current.filter(Boolean);
    if (!items.length) return;
    if (!shouldAnimate) return;
    if (once && hasAnimated.current) return;

    hasAnimated.current = true;

    const tween = gsap.to(items, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease,
      stagger: {
        each: stagger,
        from,
      },
    });

    return () => {
      tween.kill();
    };
  }, [shouldAnimate, duration, delay, ease, stagger, from, once]);

  return (
    <div ref={containerRef} className={className}>
      {Children.map(children, (child, i) => (
        <div
          ref={(el) => {
            if (el) itemsRef.current[i] = el;
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
