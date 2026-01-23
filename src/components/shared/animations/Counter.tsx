"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  ease?: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  className?: string;
  scrollTrigger?: boolean;
  triggerStart?: string;
  once?: boolean;
}

export function Counter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  ease = "power2.out",
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = ",",
  className,
  scrollTrigger = false,
  triggerStart = "top 85%",
  once = true,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!ref.current) return;

    const obj = { value: from };

    const animationConfig: gsap.TweenVars = {
      value: to,
      duration,
      delay,
      ease,
      onUpdate: () => {
        setValue(obj.value);
      },
    };

    if (scrollTrigger) {
      animationConfig.scrollTrigger = {
        trigger: ref.current,
        start: triggerStart,
        toggleActions: once
          ? "play none none none"
          : "play reverse play reverse",
      };
    }

    const tween = gsap.to(obj, animationConfig);

    return () => {
      tween.kill();
    };
  }, [from, to, duration, delay, ease, scrollTrigger, triggerStart, once]);

  // Format number with separator and decimals
  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join(".");
  };

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {formatNumber(value)}
      {suffix}
    </span>
  );
}
