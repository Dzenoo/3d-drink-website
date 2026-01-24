"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

import { cn } from "@/utils";
import { useInView } from "@/hooks/useInView";

type AnimationType = "chars" | "words" | "lines";

interface TextRevealProps {
  children: string;
  className?: string;
  type?: AnimationType;
  direction?: "up" | "down" | "left" | "right";
  stagger?: number;
  delay?: number;
  duration?: number;
  distance?: number;
  ease?: string;
  inView?: boolean;
  rootMargin?: string;
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
  inView = false,
  rootMargin = "-15% 0px",
  once = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const elementsRef = useRef<HTMLSpanElement[]>([]);
  const isInView = useInView(containerRef, { rootMargin, once });
  const hasAnimated = useRef(false);

  const shouldAnimate = inView ? isInView : true;

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    if (type === "chars") {
      textRef.current.innerHTML = children
        .split("")
        .map((char) =>
          char === " "
            ? "<span class='inline-block'>&nbsp;</span>"
            : `<span class="inline-block">${char}</span>`
        )
        .join("");
    } else if (type === "words") {
      textRef.current.innerHTML = children
        .split(" ")
        .map((word) => `<span class="inline-block">${word}&nbsp;</span>`)
        .join("");
    } else if (type === "lines") {
      textRef.current.innerHTML = `<span class="inline-block">${children}</span>`;
    }

    elementsRef.current = Array.from(textRef.current.querySelectorAll("span"));

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
    gsap.set(elementsRef.current, { opacity: 0, x, y });
  }, [children, type, direction, distance]);

  useEffect(() => {
    if (!elementsRef.current.length) return;
    if (!shouldAnimate) return;
    if (once && hasAnimated.current) return;

    hasAnimated.current = true;

    const tween = gsap.to(elementsRef.current, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease,
      stagger,
    });

    return () => {
      tween.kill();
    };
  }, [shouldAnimate, duration, delay, ease, stagger, once]);

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <span ref={textRef} className="inline-block">
        {children}
      </span>
    </div>
  );
}
