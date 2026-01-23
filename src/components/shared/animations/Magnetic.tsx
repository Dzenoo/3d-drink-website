// src/components/shared/animations/Magnetic.tsx

"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { cn } from "@/utils";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  ease?: string;
  duration?: number;
}

export function Magnetic({
  children,
  className,
  strength = 0.3,
  ease = "power2.out",
  duration = 0.5,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = (e.clientX - centerX) * strength;
      const distanceY = (e.clientY - centerY) * strength;

      gsap.to(el, {
        x: distanceX,
        y: distanceY,
        duration,
        ease,
      });
    };

    const handleLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration,
        ease,
      });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength, ease, duration]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
