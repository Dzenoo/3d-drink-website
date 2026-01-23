"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  children: string;
  className?: string;
  charClassName?: string;
  animation?: "fade" | "slide" | "scale" | "rotate" | "wave" | "glitch";
  stagger?: number;
  delay?: number;
  duration?: number;
  ease?: string;
  scrollTrigger?: boolean;
  triggerStart?: string;
  once?: boolean;
  hover?: boolean;
}

export function SplitText({
  children,
  className,
  charClassName,
  animation = "slide",
  stagger = 0.03,
  delay = 0,
  duration = 0.6,
  ease = "power3.out",
  scrollTrigger = false,
  triggerStart = "top 85%",
  once = true,
  hover = false,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = charsRef.current;

    // Animation presets
    const getAnimation = () => {
      switch (animation) {
        case "fade":
          return {
            from: { opacity: 0 },
            to: { opacity: 1 },
          };
        case "slide":
          return {
            from: { opacity: 0, y: 50 },
            to: { opacity: 1, y: 0 },
          };
        case "scale":
          return {
            from: { opacity: 0, scale: 0 },
            to: { opacity: 1, scale: 1 },
          };
        case "rotate":
          return {
            from: { opacity: 0, rotateX: -90, y: 20 },
            to: { opacity: 1, rotateX: 0, y: 0 },
          };
        case "wave":
          return {
            from: { opacity: 0, y: 30, rotateZ: 5 },
            to: { opacity: 1, y: 0, rotateZ: 0 },
          };
        case "glitch":
          return {
            from: {
              opacity: 0,
              x: () => gsap.utils.random(-20, 20),
              skewX: 20,
            },
            to: { opacity: 1, x: 0, skewX: 0 },
          };
      }
    };

    const { from, to } = getAnimation();

    gsap.set(chars, from);

    const animationConfig: gsap.TweenVars = {
      ...to,
      duration,
      delay,
      ease,
      stagger: {
        each: stagger,
        from: "start",
      },
    };

    if (scrollTrigger && !hover) {
      animationConfig.scrollTrigger = {
        trigger: containerRef.current,
        start: triggerStart,
        toggleActions: once
          ? "play none none none"
          : "play reverse play reverse",
      };
    }

    const tween = gsap.to(chars, animationConfig);

    // Hover animation
    if (hover) {
      const handleEnter = () => {
        gsap.to(chars, {
          ...to,
          duration: duration * 0.5,
          stagger: { each: stagger * 0.5, from: "start" },
        });
      };

      const handleLeave = () => {
        gsap.to(chars, {
          ...from,
          duration: duration * 0.5,
          stagger: { each: stagger * 0.5, from: "end" },
        });
      };

      containerRef.current.addEventListener("mouseenter", handleEnter);
      containerRef.current.addEventListener("mouseleave", handleLeave);

      return () => {
        tween.kill();
        containerRef.current?.removeEventListener("mouseenter", handleEnter);
        containerRef.current?.removeEventListener("mouseleave", handleLeave);
      };
    }

    return () => {
      tween.kill();
    };
  }, [
    animation,
    stagger,
    delay,
    duration,
    ease,
    scrollTrigger,
    triggerStart,
    once,
    hover,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn("inline-block", className)}
      style={{ perspective: "1000px" }}
    >
      {children.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) charsRef.current[i] = el;
          }}
          className={cn(
            "inline-block will-change-transform",
            char === " " && "w-[0.3em]",
            charClassName,
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
