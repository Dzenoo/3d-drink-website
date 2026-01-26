"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

import { AnimationConfig } from "./types";
import { useResponsive, Breakpoint } from "@/hooks/useResponsive";

export function useScrollAnimations(config: AnimationConfig) {
  const { debug = false, camera = {}, objects = [] } = config;
  const { camera: threeCamera } = useThree();
  const scroll = useScroll();
  const introDone = useRef(false);
  const mouse = useRef({ x: 0, y: 0 });
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const currentBreakpoint = useRef<Breakpoint>("desktop");

  const responsive = useResponsive();

  const {
    distance = 8,
    height = 0,
    lookAt = [0, 0, 0],
    mouseFactor = 0.05,
    introFrom = { y: -3 },
    introDuration = 1.5,
    introEase = "power2.out",
  } = camera;

  // Calculate responsive camera distance
  const getResponsiveDistance = useCallback(() => {
    if (responsive.isMobile) {
      return responsive.isPortrait ? distance * 1.5 : distance * 1.25;
    }
    if (responsive.isTablet) {
      return distance * 1.15;
    }
    return distance;
  }, [responsive.isMobile, responsive.isTablet, responsive.isPortrait, distance]);

  // Camera intro
  useEffect(() => {
    if (debug) return;

    const responsiveDistance = getResponsiveDistance();

    threeCamera.position.set(
      introFrom.x ?? 0,
      introFrom.y ?? height,
      introFrom.z ?? responsiveDistance,
    );
    threeCamera.lookAt(...lookAt);

    const tween = gsap.to(threeCamera.position, {
      x: 0,
      y: height,
      z: responsiveDistance,
      duration: introDuration,
      ease: introEase,
      onComplete: () => {
        introDone.current = true;
      },
    });

    return () => {
      tween.kill();
    };
  }, [
    threeCamera,
    debug,
    height,
    lookAt,
    introFrom,
    introDuration,
    introEase,
    getResponsiveDistance,
  ]);

  // Build timeline for object animations
  const buildTimeline = useCallback(() => {
    // Kill previous timeline completely
    if (timeline.current) {
      timeline.current.kill();
      timeline.current = null;
    }

    // Create fresh timeline - paused, we control it manually
    const tl = gsap.timeline({ paused: true });

    objects.forEach(({ ref, poses }) => {
      if (!ref.current) return;

      const object = ref.current;

      // Sort poses by 'at' position
      const sortedPoses = [...poses].sort((a, b) => a.at - b.at);

      // Create tweens between consecutive poses
      for (let i = 0; i < sortedPoses.length - 1; i++) {
        const from = sortedPoses[i];
        const to = sortedPoses[i + 1];
        const ease = to.ease ?? "power1.inOut";

        const startAt = from.at;
        const duration = to.at - from.at;

        if (to.position) {
          tl.to(
            object.position,
            {
              x: to.position.x,
              y: to.position.y,
              z: to.position.z,
              duration,
              ease,
            },
            startAt,
          );
        }

        if (to.rotation) {
          tl.to(
            object.rotation,
            {
              x: to.rotation.x,
              y: to.rotation.y,
              z: to.rotation.z,
              duration,
              ease,
            },
            startAt,
          );
        }

        if (to.scale !== undefined) {
          const scaleValue =
            typeof to.scale === "number"
              ? { x: to.scale, y: to.scale, z: to.scale }
              : to.scale;

          tl.to(
            object.scale,
            {
              x: scaleValue.x,
              y: scaleValue.y,
              z: scaleValue.z,
              duration,
              ease,
            },
            startAt,
          );
        }
      }
    });

    // Set total duration to 1 so progress(0-1) maps directly to scroll(0-1)
    tl.totalDuration(1);

    timeline.current = tl;

    return tl;
  }, [objects]);

  // Build timeline and rebuild when breakpoint changes
  useEffect(() => {
    if (debug) return;

    // Check if breakpoint changed
    if (currentBreakpoint.current !== responsive.breakpoint) {
      currentBreakpoint.current = responsive.breakpoint;
    }

    const tl = buildTimeline();

    return () => {
      tl.kill();
    };
  }, [debug, buildTimeline, responsive.breakpoint]);

  // Mouse tracking (reduced on mobile)
  useEffect(() => {
    // Disable mouse parallax on touch devices
    if (responsive.isMobile) return;

    const adjustedMouseFactor = responsive.isTablet
      ? mouseFactor * 0.7
      : mouseFactor;

    const onMove = (e: MouseEvent) => {
      mouse.current.x =
        (e.clientX / window.innerWidth - 0.5) * adjustedMouseFactor;
      mouse.current.y =
        (e.clientY / window.innerHeight - 0.5) * adjustedMouseFactor;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseFactor, responsive.isMobile, responsive.isTablet]);

  // Block scroll during intro
  useEffect(() => {
    if (debug) return;

    const scrollContainer = scroll.el;

    const blockScroll = (e: Event) => {
      if (!introDone.current) {
        e.preventDefault();
        scroll.el.scrollTop = 0;
      }
    };

    scrollContainer.addEventListener("scroll", blockScroll);
    return () => scrollContainer.removeEventListener("scroll", blockScroll);
  }, [debug, scroll]);

  // Frame loop - drive timeline by scroll
  useFrame(() => {
    if (debug) return;

    if (!introDone.current) {
      timeline.current?.progress(0);
      threeCamera.lookAt(...lookAt);
      return;
    }

    // Directly set timeline progress from scroll offset
    if (timeline.current) {
      timeline.current.progress(scroll.offset);
    }

    // Mouse parallax on camera (already disabled on mobile via the useEffect)
    threeCamera.lookAt(
      lookAt[0] + mouse.current.x * 2,
      lookAt[1] - mouse.current.y * 2,
      lookAt[2],
    );
  });

  return {
    introDone: introDone.current,
    breakpoint: responsive.breakpoint,
    isMobile: responsive.isMobile,
    isTablet: responsive.isTablet,
  };
}
