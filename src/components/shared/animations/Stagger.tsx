"use client";

import { useRef, useEffect, Children, cloneElement, ReactElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

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
  scrollTrigger?: boolean;
  triggerStart?: string;
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
  scrollTrigger = false,
  triggerStart = "top 85%",
  once = true,
}: StaggerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = itemsRef.current.filter(Boolean);

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

    const animationConfig: gsap.TweenVars = {
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
    };

    if (scrollTrigger) {
      animationConfig.scrollTrigger = {
        trigger: containerRef.current,
        start: triggerStart,
        toggleActions: once
          ? "play none none none"
          : "play reverse play reverse",
      };
    }

    const tween = gsap.to(items, animationConfig);

    return () => {
      tween.kill();
    };
  }, [
    direction,
    stagger,
    delay,
    duration,
    distance,
    ease,
    from,
    scrollTrigger,
    triggerStart,
    once,
  ]);

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
