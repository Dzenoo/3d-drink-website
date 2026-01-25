"use client";

import { AnimationConfig } from "./types";
import { useScrollAnimations } from "./useScrollAnimations";

export * from "./types";
export * from "./useScrollAnimations";

export function ScrollAnimations(config: AnimationConfig) {
  useScrollAnimations(config);
  return null;
}
