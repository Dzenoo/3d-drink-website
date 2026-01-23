"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

type Preset =
  | "fade"
  | "slide"
  | "zoom"
  | "flip"
  | "rotate"
  | "blur"
  | "bounce"
  | "elastic";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  preset?: Preset;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  ease?: string;
  start?: string;
  scrub?: boolean | number;
  pin?: boolean;
  once?: boolean;
  markers?: boolean;
}

export function ScrollReveal({
  children,
  className,
  preset = "fade",
  direction = "up",
  delay = 0,
  duration = 1,
  distance = 60,
  ease,
  start = "top 80%",
  scrub = false,
  pin = false,
  once = true,
  markers = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    // Get direction offset
    const getDirectionOffset = () => {
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

    // Preset configurations
    const getPreset = () => {
      const offset = getDirectionOffset();

      switch (preset) {
        case "fade":
          return {
            from: { opacity: 0 },
            to: { opacity: 1 },
            ease: ease || "power2.out",
          };
        case "slide":
          return {
            from: { opacity: 0, ...offset },
            to: { opacity: 1, x: 0, y: 0 },
            ease: ease || "power3.out",
          };
        case "zoom":
          return {
            from: { opacity: 0, scale: 0.8 },
            to: { opacity: 1, scale: 1 },
            ease: ease || "back.out(1.7)",
          };
        case "flip":
          return {
            from: {
              opacity: 0,
              rotateX: direction === "up" || direction === "down" ? 90 : 0,
              rotateY: direction === "left" || direction === "right" ? 90 : 0,
            },
            to: { opacity: 1, rotateX: 0, rotateY: 0 },
            ease: ease || "power3.out",
          };
        case "rotate":
          return {
            from: {
              opacity: 0,
              rotate: direction === "left" ? -45 : 45,
              ...offset,
            },
            to: { opacity: 1, rotate: 0, x: 0, y: 0 },
            ease: ease || "power3.out",
          };
        case "blur":
          return {
            from: { opacity: 0, filter: "blur(20px)", ...offset },
            to: { opacity: 1, filter: "blur(0px)", x: 0, y: 0 },
            ease: ease || "power2.out",
          };
        case "bounce":
          return {
            from: { opacity: 0, ...offset },
            to: { opacity: 1, x: 0, y: 0 },
            ease: ease || "bounce.out",
          };
        case "elastic":
          return {
            from: { opacity: 0, scale: 0.5, ...offset },
            to: { opacity: 1, scale: 1, x: 0, y: 0 },
            ease: ease || "elastic.out(1, 0.5)",
          };
      }
    };

    const { from, to, ease: presetEase } = getPreset();

    gsap.set(el, from);

    const tween = gsap.to(el, {
      ...to,
      duration,
      delay,
      ease: presetEase,
      scrollTrigger: {
        trigger: el,
        start,
        scrub,
        pin,
        markers,
        toggleActions: once
          ? "play none none none"
          : "play reverse play reverse",
      },
    });

    return () => {
      tween.kill();
    };
  }, [
    preset,
    direction,
    delay,
    duration,
    distance,
    ease,
    start,
    scrub,
    pin,
    once,
    markers,
  ]);

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{ perspective: "1000px" }}
    >
      {children}
    </div>
  );
}
