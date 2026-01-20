"use client";

import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const DEBUG = false;

export const scrollTimeline = gsap.timeline({
  paused: true,
  defaults: { duration: 0.01 }, // Set default very short duration
});

export const ScrollAnimationManager = () => {
  const scroll = useScroll();
  const introDone = useRef(false);

  useEffect(() => {
    // entrance animation
    const intro = gsap.timeline({
      onComplete: () => {
        introDone.current = true;
        // Reset timeline to beginning
        scrollTimeline.progress(0);
      },
    });

    intro.to({}, { duration: 0.4 }); // small pause

    return () => {
      // Clean up intro timeline
      intro.kill();
    };
  }, []);

  useFrame(() => {
    if (!introDone.current) return;
    if (DEBUG) return;

    // Ensure smooth progress updates
    if (scroll.offset !== scrollTimeline.progress()) {
      scrollTimeline.progress(scroll.offset, false); // suppress events during scroll
    }
  });

  return null;
};
