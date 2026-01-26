"use client";

import { useScrollAnimations } from "./useScrollAnimations";
import { AnimationConfig } from "./types";

export { useScrollAnimations } from "./useScrollAnimations";
export type { Pose, CameraConfig, AnimatedObject, AnimationConfig } from "./types";

export function ScrollAnimations(config: AnimationConfig) {
  useScrollAnimations(config);
  return null;
}
