"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

import { scrollTimeline } from "./animationRegistry";
import { DEBUG_MODE } from "@/constants";

const ScrollController: React.FC = () => {
  const scroll = useScroll();
  const introDone = useRef(false);

  useEffect(() => {
    // entrance timeline (runs once)
    const intro = gsap.timeline({
      onComplete: () => {
        introDone.current = true;
        // ensure timeline starts at 0 until user scrolls
        scrollTimeline.progress(0);
      },
    });

    // a tiny delay, in case you want the stage to settle
    intro.to({}, { duration: 0.4 });

    return () => {
      intro.kill();
    };
  }, []);

  useFrame(() => {
    if (DEBUG_MODE) return;
    if (!introDone.current) return;

    // Ensure smooth progress updates
    if (scroll.offset !== scrollTimeline.progress()) {
      scrollTimeline.progress(scroll.offset, false); // suppress events during scroll
    }
  });

  return null;
};

export default ScrollController;
