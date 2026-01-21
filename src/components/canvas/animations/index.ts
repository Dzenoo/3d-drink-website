"use client";

import gsap from "gsap";
import { AnimationConfig } from "./types";
import { useScrollAnimations } from "./useScrollAnimations";

export const scrollTimeline = gsap.timeline({
  paused: true,
  defaults: { duration: 0.01, ease: "power1.inOut" },
});

export * from "./types";
export * from "./useScrollAnimations";

export function ScrollAnimations(config: AnimationConfig) {
  useScrollAnimations(config);
  return null;
}
