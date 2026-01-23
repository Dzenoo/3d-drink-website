"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { cn } from "@/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  repeat?: number;
  gap?: number;
}

export function Marquee({
  children,
  className,
  speed = 50,
  direction = "left",
  pauseOnHover = true,
  repeat = 4,
  gap = 40,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const track = trackRef.current;
    const trackWidth = track.offsetWidth / repeat;

    const tween = gsap.to(track, {
      x: direction === "left" ? -trackWidth : trackWidth,
      duration: trackWidth / speed,
      ease: "none",
      repeat: -1,
    });

    if (pauseOnHover) {
      const handleEnter = () => tween.pause();
      const handleLeave = () => tween.resume();

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
  }, [speed, direction, pauseOnHover, repeat]);

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <div ref={trackRef} className="flex" style={{ gap }}>
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex-shrink-0" style={{ paddingRight: gap }}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
