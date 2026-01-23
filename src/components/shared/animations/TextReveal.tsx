"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "chars" | "words" | "lines";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  type?: AnimationType;
  direction?: "up" | "down" | "left" | "right";
  stagger?: number;
  delay?: number;
  duration?: number;
  distance?: number;
  ease?: string;
  scrollTrigger?: boolean;
  triggerStart?: string;
  once?: boolean;
}

export function TextReveal({
  children,
  className,
  type = "words",
  direction = "up",
  stagger = 0.05,
  delay = 0,
  duration = 0.8,
  distance = 30,
  ease = "power3.out",
  scrollTrigger = false,
  triggerStart = "top 85%",
  once = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const container = containerRef.current;
    const text = textRef.current.textContent || "";

    // Split text based on type
    let elements: HTMLSpanElement[] = [];

    if (type === "chars") {
      textRef.current.innerHTML = text
        .split("")
        .map((char) =>
          char === " "
            ? "<span class='inline-block'>&nbsp;</span>"
            : `<span class="inline-block">${char}</span>`,
        )
        .join("");
      elements = Array.from(textRef.current.querySelectorAll("span"));
    } else if (type === "words") {
      textRef.current.innerHTML = text
        .split(" ")
        .map((word) => `<span class="inline-block">${word}&nbsp;</span>`)
        .join("");
      elements = Array.from(textRef.current.querySelectorAll("span"));
    } else if (type === "lines") {
      // For lines, wrap each line in a span with overflow hidden
      textRef.current.innerHTML = `<span class="inline-block">${text}</span>`;
      elements = Array.from(textRef.current.querySelectorAll("span"));
    }

    // Get initial position
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

    // Set initial state
    gsap.set(elements, { opacity: 0, x, y });

    // Animation config
    const animationConfig: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease,
      stagger,
    };

    if (scrollTrigger) {
      animationConfig.scrollTrigger = {
        trigger: container,
        start: triggerStart,
        toggleActions: once
          ? "play none none none"
          : "play reverse play reverse",
      };
    }

    const tween = gsap.to(elements, animationConfig);

    return () => {
      tween.kill();
    };
  }, [
    type,
    direction,
    stagger,
    delay,
    duration,
    distance,
    ease,
    scrollTrigger,
    triggerStart,
    once,
  ]);

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <span ref={textRef} className="inline-block">
        {children}
      </span>
    </div>
  );
}
