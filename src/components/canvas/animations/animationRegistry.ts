"use client";

import gsap from "gsap";

export const scrollTimeline = gsap.timeline({
  paused: true,
  // small default duration so scrub interpolation behaves smoothly; tweak if needed
  defaults: { duration: 0.01, ease: "power1.inOut" },
});

/**
 * Add a named label to the timeline (safe/no-dupe).
 */
export function addLabel(name: string, position: number) {
  // If label exists, overwrite its position
  const labels = scrollTimeline.labels || {};
  if (labels[name] !== undefined) {
    scrollTimeline.addLabel(name, position);
  } else {
    scrollTimeline.addLabel(name, position);
  }
}

/**
 * Add a tween to the timeline at a position. Returns the tween (so you can kill it later).
 * Usage: const t = addTweenAt(gsap.to(target, vars), "hero")
 */
export function addTweenAt(
  tween: gsap.core.Tween,
  position: gsap.Position | undefined = undefined,
) {
  scrollTimeline.add(tween, position);
  return tween;
}
